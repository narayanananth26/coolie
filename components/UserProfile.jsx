"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

const UserProfile = () => {
	const { data: session } = useSession();
	console.log(session);
	return (
		<div>
			<Image
				src={session?.user?.image}
				width={40}
				height={40}
				className="rounded-full"
			/>
		</div>
	);
};

export default UserProfile;
