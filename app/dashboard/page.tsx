"use client";

import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const fetchAllOrders = async (name) => {
	const res = await fetch(`/api/getAllOrders/${name}`, {
		next: { revalidate: 3600 },
	});

	if (!res) throw new Error("Failed to fetch events");
	return await res.json();
};
const Dashboard = () => {
	const { data: session } = useSession();
	const name = session?.user?.name;
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const getAllOrders = async () => {
			try {
				const allOrders = await fetchAllOrders(name);
				setOrders(allOrders);
				console.log("allOrders", orders);
			} catch (error) {
				console.log(error);
			}
		};
		getAllOrders();
	}, [name]);

	console.log("events", orders);
	return (
		<div
			className="min-h-screen py-20"
			style={{
				backgroundImage: `url("/background.png")`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div className="w-full max-w-2xl grid place-items-center mx-auto py-40 gap-6 bg-slate-50">
				<span className="text-4xl tracking-wide font-semibold capitalize text-[#f84f66]">
					welcome to the Dashboard
				</span>
				{session && (
					<span className="text-2xl tracking-normal py-10 font-semibold">
						{session.user?.name}
					</span>
				)}

				<button
					onClick={() => signOut()}
					className="bg-slate-950 text-white rounded text-lg w-auto px-6 py-3 uppercase"
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
