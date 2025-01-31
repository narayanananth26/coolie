import { connect } from "../../../utils/config/dbConfig";
import User from "../../../utils/models/user";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bycrptjs from "bcryptjs";

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {},
			async authorize(credentials) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};
				try {
					await connect();
					const user = await User.findOne({ email });
					if (!user) {
						return null;
					}
					const passwordsMatch = await bycrptjs.compare(
						password,
						user.password
					);
					if (!passwordsMatch) {
						return null;
					}
					return user;
				} catch (error) {
					console.log("Error:", error);
				}
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],

	session: {
		strategy: "jwt",
	},

	callbacks: {
		async signIn({ user, account }: { user: any; account: any }) {
			if (account.provider === "google") {
				try {
					const { name, email, image } = user;
					await connect();
					const ifUserExists = await User.findOne({ email });
					if (ifUserExists) {
						return user;
					}
					const newUser = new User({
						name: name,
						email: email,
						image: image,
						role: "user",
					});
					const res = await newUser.save();
					if (res.status === 200 || res.status === 201) {
						console.log(res);
						return user;
					}
				} catch (err) {
					console.log(err);
				}
			}
			return user;
		},
		async jwt({ token }) {
			const existingUser = await User.findOne({ email: token.email });
			console.log("existingUser", existingUser);
			if (existingUser) {
				token.email = existingUser.email;
				token.name = existingUser.name;
				token.role = existingUser.role;
				token.id = existingUser._id;
			}
			return token;
		},

		async session({ session, token }: { session: any; token: any }) {
			console.log("token", token);
			if (token.id && session.user) {
				session.user.id = token.id;
			}

			if (token.role && session.user) {
				session.user.role = token.role;
			}

			if (session.user) {
				session.user.email = token.email;
				session.user.name = token.name;
				session.user.image = token.picture;
				session.user.role = token.role;
			}
			console.log("session", session);
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET!,
	pages: {
		signIn: "/",
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
