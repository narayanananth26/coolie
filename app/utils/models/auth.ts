import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: { type: String, required: [true, "Name is required"] },
	email: {
		type: String,
		unique: true,
		required: [true, "Email is required"],
	},
	role: { type: String, enum: ["user", "koolie", "admin"], default: "user" },
	address: { type: String },
	password: { type: String },
	image: { type: String },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
