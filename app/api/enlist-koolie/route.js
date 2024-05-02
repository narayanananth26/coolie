import formidable from "formidable";
import { connect } from "../../utils/config/dbConfig";
import Koolie from "../../utils/models/koolie";

export const config = {
	api: {
		bodyParser: false, // Disable bodyParser to handle multipart/form-data manually
	},
};

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			await connect(); // Connect to MongoDB

			const form = new formidable.IncomingForm();
			console.log("form", form);

			// Parse the form data
			form.parse(req, async (err, fields, files) => {
				if (err) {
					return res.status(400).json({
						success: false,
						error: "Error parsing form data",
					});
				}

				const { userId, vehicle } = fields;
				const { aadharImage, licenseImage } = files;

				// Create a new Koolie instance
				const newKoolie = new Koolie({
					userId,
					vehicle,
					aadharImage: aadharImage.name, // Save file name or path
					licenseImage: licenseImage.name, // Save file name or path
				});

				// Save the new Koolie to the database
				const savedKoolie = await newKoolie.save();
				console.log("savedKoolie", savedKoolie);

				return res
					.status(201)
					.json({ success: true, data: savedKoolie });
			});
		} catch (error) {
			console.error(error);
			return res
				.status(500)
				.json({ success: false, error: "Server Error" });
		}
	} else {
		return res.status(405).json({
			success: false,
			error: `Method ${req.method} Not Allowed`,
		});
	}
}
