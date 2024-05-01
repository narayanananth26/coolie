import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	price: { type: Number, required: true },
	koolie: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	pickupLocation: { type: String, required: true },
	dropLocation: { type: String, required: true },
	timestamp: { type: Date, default: Date.now },
	status: {
		type: String,
		enum: ["pending", "confirmed", "completed"],
		default: "pending",
	},
});

const Order = mongoose.models.order || mongoose.model("order", orderSchema);

export default Order;
