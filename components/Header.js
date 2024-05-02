"use client";
import React from "react";
import Image from "next/image";
import UserProfile from "./UserProfile";
import Link from "next/link";
import { useSession } from "next-auth/react";

function Header() {
	const { data: session } = useSession();
	const headerMenu = [
		{
			id: 1,
			name: "Profile",
			icon: "/download (1).jpg",
		},
		{
			id: 2,
			name: "Package",
			icon: "/download (1).jpg",
		},
	];

	return (
		<div className="p-2 px-4 flex-center bg-[#f84f66]">
			<div className="w-full">
				<div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
					<Link href="/" className="cursor-pointer">
						<Image
							src="/logo.svg"
							alt="logo"
							height={400}
							width={100}
							className="flex-start"
						/>
					</Link>
					<div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 text-xl">
						<a href="#about">
							<button className="text-white hover:bg-red-700 p-2 rounded-lg">
								About Us
							</button>
						</a>
						<a href="#review">
							<button className="text-white hover:bg-red-700 p-2 rounded-lg">
								Reviews
							</button>
						</a>
						<a href="#faq">
							<button className="text-white hover:bg-red-700 p-2 rounded-lg">
								FAQ's
							</button>
						</a>
					</div>
					{session?.user ? (
						<UserProfile />
					) : (
						<Link href="/login">
							<button className="px-5 py-2 bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-md">
								Sign In
							</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}

export default Header;
