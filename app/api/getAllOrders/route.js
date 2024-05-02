import { NextResponse } from "next/server";
import Order from "../../utils/models/order";
import { connect } from "../../utils/config/dbConfig";
export const GET = async (request, { params }) => {
	try {
		await connect();
		const orders = await Order.find();

		return new NextResponse(JSON.stringify(orders), {
			status: 200,
		});
	} catch (error) {
		console.log(error);
		return new NextResponse(error.message, {
			status: 500,
		});
	}
};
