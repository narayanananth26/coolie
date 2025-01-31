"use client";
import React, { useContext, useEffect, useState } from "react";
import InputItem from "./InputItem";
import { SourceContext } from "../../context/SourceContext";
import { DestinationContext } from "../../context/DestinationContext";
import CarListOptions from "./CarListOptions";

function SearchSection() {
	const { source, setSource } = useContext(SourceContext);
	const { destination, setDestination } = useContext(DestinationContext);
	const [distance, setDistance] = useState();

	const calculateDistance = () => {
		const dist = google.maps.geometry.spherical.computeDistanceBetween(
			{
				lat: source.lat,
				lng: source.lng,
			},
			{ lat: destination.lat, lng: destination.lng }
		);
		//console.log(dist*0.000621374);
		setDistance(dist * 0.000621374);
		// setDestination(dist * 0.000621374);
	};

	useEffect(() => {
		if (source) {
			console.log(source);
		}
		if (destination) {
			console.log(destination);
		}
	}, [source, destination]);
	return (
		<div>
			<div className="p-2 md:pd-6 border-[2px] rounded-xl">
				<p className="text-3xl font-bold">Call a Koolie!</p>
				<InputItem type="source" />
				<InputItem type="destination" />

				<button
					className="p-3 bg-[#f84f66] w-full mt-5 rounded-md text-white font-bold text-xl"
					onClick={() => calculateDistance()}
				>
					Calculate
				</button>
			</div>
			{console.log("testttee", distance)}
			{distance ? (
				<CarListOptions
					distance={distance * 13}
					source={source}
					destination={destination}
				></CarListOptions>
			) : null}
		</div>
	);
}

export default SearchSection;
