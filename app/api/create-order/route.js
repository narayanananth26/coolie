import { NextResponse } from "next/server";
import { connect } from "../../utils/config/dbConfig";
import Order from "../../utils/models/order";

export const POST = async (request) => {
	try {
		const { userId, source, destination, price, timestamp } =
			await request.json();
		await connect();

		const newOrder = {
			userId,
			source,
			destination,
			price,
			timestamp,
			status: "completed",
		};

		await Order.create(newOrder);

		return new NextResponse("Order has been created", {
			status: 201,
		});
	} catch (error) {
		console.log(error);
		return new NextResponse(error.message, {
			status: 500,
		});
	}
};
