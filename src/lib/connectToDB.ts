import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false;

const connectToDB = async (): Promise<void> => {
	try {
		if (isConnected) {
			console.log("MongoDB connection already established");
			return;
		}

		const MONGODB_URL = process.env.MONGODB_URL;
		if (!MONGODB_URL) {
			throw new Error("Missing MongoDB URL");
		}

		const options: ConnectOptions = {
			tls: true,
		};

		await mongoose.connect(MONGODB_URL, options);
		isConnected = true;
		console.log("MongoDB connected");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
	}
};

export { connectToDB };
