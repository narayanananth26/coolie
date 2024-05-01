import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const token = await getToken({
		req: req,
		secret: process.env.NEXTAUTH_SECRET,
	});
	console.log("token", token);
	if (path === "/dashboard" && !token) {
		return NextResponse.redirect(new URL("/login", req.nextUrl));
	}
	if ((path === "/login" || path === "/signup") && token) {
		return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
	}
}

export const config = {
	matcher: ["/", "/signup", "/dashboard"],
};
