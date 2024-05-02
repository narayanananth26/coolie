"use client";
import React, { useState } from "react";
import CarListItem from "./CarListItem";
import { CarListData } from "../../app/utils/CarListData";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function CarListOptions({ distance, source, destination }) {
	const [activeIndex, setActiveIndex] = useState();
	const [selectedCar, setSelectedCar] = useState([]);
	const router = useRouter();
	const { data: session } = useSession();
	let userId;
	console.log("source", source);
	console.log("destination", destination);

	const handleSubmit = async (price, source, destination) => {
		console.log(source, destination);
		if (!session) {
			router.push("/login");
		}
		userId = session?.user?.id;

		try {
			const response = await fetch(`/api/create-order`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userId,
					price,
					source: source.name,
					destination: destination.name,
					timestamp: new Date().toISOString(),
				}),
			});

			const responseMessage = await response.text();

			if (response.status === 201) {
				console.log("Order added to DB");
			} else {
				setError(responseMessage);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="mt-5 p-5 overflow-auto h-[250px]">
			<h2 className="text-[22px] font-bold">Recommended</h2>
			{CarListData.map((item, index) => (
				<div
					className={`cursor-pointer p-3 rounded-md border-[#fb95a3]  ${
						activeIndex == index ? "border-[2px]" : null
					}`}
					onClick={() => {
						setActiveIndex(index);
						setSelectedCar(item);
					}}
				>
					<CarListItem car={item} distance={distance} />
				</div>
			))}
			{selectedCar?.name ? (
				<div className="flex justify-between fixed bottom-5 bg-white p-3 shadow-xl w-full md:w-[30%] border-[1px] items-center rounded-lg">
					<h2>Make Payment For</h2>
					<button
						className="p-3 bg-[#f84f66] text-white rounded-md text-center"
						onClick={() => {
							handleSubmit(
								Math.round(selectedCar.amount * distance),
								source,
								destination
							);
							router.push(
								"/payment?amount=" +
									Math.round(selectedCar.amount * distance)
							);
						}}
					>
						Request {selectedCar.name}
					</button>
				</div>
			) : null}
		</div>
	);
}

export default CarListOptions;
