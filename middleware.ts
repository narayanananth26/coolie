import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const token = await getToken({
		req: req,
		secret: process.env.NEXTAUTH_SECRET,
	});

	const publicPaths = path === "/login" || path === "/signup";

	if (publicPaths && token) {
		// If the user is authenticated and tries to access public paths, redirect them to the dashboard
		return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
	} else if (!publicPaths && !token) {
		// If the user is not authenticated and tries to access private paths, redirect them to the homepage
		return NextResponse.redirect(new URL("/", req.nextUrl));
	}

	// If the user is authenticated and tries to access private paths or if the user is not authenticated and tries to access public paths,
	// let the request pass through
	return null;
}

export const config = {
	matcher: ["/", "/login", "/signup", "/dashboard"],
};
