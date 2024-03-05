import { User } from "@/models/user-schema";
import { connectToDB } from "../connectToDB";

export const getUserByEmail = async (email: string) => {
	try {
		await connectToDB();

		const user = await User.findOne({
			email,
		});
		return user;
	} catch {
		return null;
	}
};

export const getUserById = async (id: string) => {
	try {
		await connectToDB();

		const user = await User.findById(id);
		return user;
	} catch {
		return null;
	}
};
