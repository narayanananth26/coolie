import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	role: {
		type: String,
		enum: ["user", "driver", "admin"],
		default: "user",
	},
	address: {
		type: String,
	},
	password: {
		type: String,
	},
	image: {
		type: String,
	},
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
