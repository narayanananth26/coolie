import { NextResponse } from "next/server";
import { connect } from "../../../utils/config/dbConfig";
import Order from "../../../utils/models/order";
export const GET = async (request, { params }) => {
	try {
		await connect();
		const { name } = params;
		console.log("params", params);
		console.log("name", name);
		const orders = await Order.find({ name });
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
