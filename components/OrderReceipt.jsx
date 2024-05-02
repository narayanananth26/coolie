import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const OrderReceipt = ({ order }) => {
	return (
		<div>
			<h1>Order Receipt</h1>
			<p>Order ID: {order._id}</p>
			<p>User ID: {order.userId}</p>
			<p>Price: {order.price}</p>
			<p>Source: {order.source}</p>
			<p>Destination: {order.destination}</p>
			<p>Status: {order.status}</p>
			<p>Timestamp: {new Date(order.timestamp).toLocaleString()}</p>
		</div>
	);
};

export default OrderReceipt;
