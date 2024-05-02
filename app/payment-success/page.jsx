import Image from "next/image";

const PaymentSuccess = () => {
	return (
		<div className="flex-center gap-5 w-full h-screen rounded-lg shadow-md">
			<Image
				src="/coolie.jpg"
				width={200}
				height={200}
				alt="amitabh bacchan"
				className="rounded-full"
			/>
			<p className="text-3xl text-[#f84f66] font-extrabold uppercase">
				Payment successful!
			</p>
		</div>
	);
};

export default PaymentSuccess;
