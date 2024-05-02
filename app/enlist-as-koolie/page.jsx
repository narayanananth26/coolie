"use client";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const EnlistAsKoolie = () => {
	const { data: session } = useSession();
	const [formData, setFormData] = useState({
		userId: "",
		vehicle: "two-wheeler",
		aadharImage: null,
		licenseImage: null,
	});

	const name = session?.user?.name;
	const email = session?.user?.email;
	const id = session?.user?.id;
	const router = useRouter();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFileChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.files[0] });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formDataToSend = new FormData();
		formDataToSend.append("userId", id);
		formDataToSend.append("vehicle", formData.vehicle);
		formDataToSend.append("aadharImage", formData.aadharImage);
		formDataToSend.append("licenseImage", formData.licenseImage);

		try {
			const response = await axios.post(
				"/api/enlist-koolie",
				formDataToSend,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			console.log("data", response.data);

			if (response.status === 201) {
				router.push("/dashboard");
			} else {
				console.log("responseMessage", response.data.error);
			}
		} catch (error) {
			console.error("Error while enlisting Koolie:", error);
		}
	};

	return (
		<div className="flex-center w-full h-full p-20">
			<div className="flex-col flex-center w-fit h-fit rounded-xl p-5">
				<h1 className="w-full flex-center font-bold text-2xl text-red-500 mb-12">
					Register as a Koolie!
				</h1>
				<form
					onSubmit={handleSubmit}
					className="flex-col flex-center gap-4"
				>
					<div className="grid grid-cols-2 w-full">
						<label className="flex-start font-semibold text-red-700">
							Name:
						</label>
						<p className="outline-none rounded-md text-gray-500 p-1 w-full border border-gray-300 cursor-no-drop">
							{name}
						</p>
					</div>
					<div className="grid grid-cols-2 w-full">
						<label className="flex-start font-semibold text-red-700">
							Email:
						</label>
						<p className="outline-none rounded-md text-gray-500 p-1 w-full border border-gray-300 cursor-no-drop">
							{email}
						</p>
					</div>
					<div className="grid grid-cols-2 w-full">
						<label className="flex-start font-semibold text-red-700">
							Vehicle:
						</label>
						<select
							name="vehicle"
							value={formData.vehicle}
							onChange={handleChange}
							className="outline-none rounded-md p-1 w-full border border-gray-300"
						>
							<option
								value="two-wheeler"
								className="outline-none rounded-md p-1 w-full"
							>
								Two Wheeler
							</option>
							<option
								value="mini-van"
								className="outline-none rounded-md p-1 w-full"
							>
								Mini Van
							</option>
							<option
								value="truck"
								className="outline-none rounded-md p-1 w-full"
							>
								Truck
							</option>
						</select>
					</div>
					<div className="grid grid-cols-2 w-full">
						<label className="flex-start font-semibold text-red-700">
							Aadhar Image:
						</label>
						<input
							type="file"
							accept="image/*"
							name="aadharImage"
							onChange={handleChange}
						/>
					</div>
					<div className="grid grid-cols-2 w-full">
						<label className="flex-start font-semibold text-red-700">
							License Image:
						</label>
						<input
							type="file"
							accept="image/*"
							name="licenseImage"
							onChange={handleChange}
						/>
					</div>
					<button
						type="submit"
						className="text-white py-3 px-40 font-bold text-xl bg-red-500 rounded-lg"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default EnlistAsKoolie;
