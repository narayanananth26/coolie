import mongoose from "mongoose";

const koolieSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	orders: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Order",
		},
	],
	vehicle: {
		type: String,
		enum: ["two-wheeler", "mini-van", "truck"],
		default: "two-wheeler",
	},
	aadharImage: { type: String },
	licenseImage: { type: String },
});

const Koolie = mongoose.models.koolie || mongoose.model("koolie", koolieSchema);

export default Koolie;
