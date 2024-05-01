import React from "react";
import { Disclosure } from "@headlessui/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import "slick-carousel/slick/slick-theme.css";
const Fullpage = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000, // Change the slide every 4 seconds
	};
	const info = [
		{
			title: "What is Koolie?",
			des: "Koolie offers services that allows users to send packages, documents, or items to anyone within a city .",
		},
		{
			title: "How does Koolie work?",
			des: "Users can request a delivery partner through the Koolie Web app. They input the pickup and drop-off locations, along with details of the item to be delivered. A  delivery partner then picks up the item and delivers it to the specified location.",
		},
		{
			title: "What can I send using Koolie ?",
			des: "Koolie  can be used to send a wide range of items, including parcels, documents, gifts, groceries, and more. However, there are certain restrictions on items that can be delivered, such as perishable goods, illegal items, and hazardous materials.",
		},
		{
			title: "What all services are provided by the Koolie?",
			des: "Koolie delivers the package in one of the three ways as selected by the user - In bikes, In Minivans And In Trucks.",
		},
		{
			title: "How much does Koolie cost??",
			des: "The cost of a Koolie  delivery depends on factors such as the distance traveled, the size and weight of the item, and any additional services requested (such as priority delivery). The exact pricing is displayed in the app before confirming the delivery",
		},
		{
			title: "What should I do if there's an issue with my Koolie delivery?",
			des: "If you encounter any problems with your Koolie  delivery, such as a delay or damaged item, you can contact Koolie customer support through the app for assistance. They will help resolve the issue promptly.",
		},
	];
	return (
		<div>
			<div className="container mx-auto my-10 ">
				<div className="bg-[#f84f66] px-6 lg:px-16 py-10 rounded-3xl">
					<div className="p-5">
						<div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
							<img
								src="/assets/cooliebg.png"
								alt="logo"
								height={400}
								width={100}
							/>
							<div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
								<a href="#about">
									<button className="text-white hover:bg-red-700 p-2 rounded-lg">
										About Us
									</button>
								</a>
								<a href="#review">
									<button className="text-white hover:bg-red-700 p-2 rounded-lg">
										Reviews
									</button>
								</a>
								<a href="#faq">
									<button className="text-white hover:bg-red-700 p-2 rounded-lg">
										FAQ's
									</button>
								</a>
							</div>
							<button className="btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full">
								Sign In
							</button>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
						<div className="flex flex-col gap-5 lg:gap-10">
							<p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
								Your
								<br className="lg:flex hidden" /> Reliable Link{" "}
								<br className="lg:flex hidden" />
								Between Destinations
							</p>
							<p className="text-sm sm:text-base lg:text-lg text-black">
								Bringing convenience to your doorstep.
								<br className="lg:flex hidden" /> whatever you
								need
							</p>
							<button className="btn btn-sm lg:btn-lg bg-[#524fd5] text-white rounded-full border-none w-36 lg:w-44 capitalize">
								Sign In
							</button>
						</div>
						<img
							src="/assets/coolie.jpg"
							alt=""
							height={1000}
							width={800}
							className="rounded-2xl"
						/>
					</div>
				</div>
			</div>
			<div className="container mx-auto py-20">
				<p className="text-base lg:text-xl font-medium text-gray-500 text-center">
					WHY CHOOSE US
				</p>
				<p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
					Our Values
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
					<div className="flex flex-col gap-5 items-center">
						<img src="/assets/v1.svg" alt="v1" />
						<p className="text-2xl font-semibold">Convenience</p>
						<p className="text-gray-500 text-center">
							Koolie offers a hassle-free solution for <br /> item
							exchanges within a 50 km radius, <br /> allowing
							users to send and receive goods with ease.
						</p>
					</div>
					<div className="flex flex-col gap-5 items-center">
						<img src="/assets/v2.svg" alt="v1" />
						<p className="text-2xl font-semibold">
							Peer-to-Peer Logistics
						</p>
						<p className="text-gray-500 text-center">
							Koolie enables peer-to-peer exchanges, <br />{" "}
							allowing users to leverage nearby couriers or
							individuals <br /> for seamless and reliable item
							exchanges right at their doorstep
						</p>
					</div>{" "}
					<div className="flex flex-col gap-5 items-center">
						<img src="/assets/v3.svg" alt="v1" />
						<p className="text-2xl font-semibold">
							Secure And Fast Deliveries
						</p>
						<p className="text-gray-500 text-center">
							Ensures the safety and security of your items
							throughout the entire exchange process. <br /> with
							robust transaction mechanisms and real-time tracking
							features,
							<br />
						</p>
					</div>
				</div>
			</div>
			<div className="container mx-auto py-20" id="about">
				<p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
					Key Person
				</p>
				<p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
					Meet Our Team
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-16 py-10 lg:py-20 flex justify-between">
					<div className="flex flex-col gap-3 items-center">
						<img
							src="/assets/sailesh.jpeg"
							alt="v1"
							height={200}
							width={200}
							className="rounded-lg"
						/>
						<p className="text-2xl font-semibold">
							Adithya Sailesh
						</p>
						<div className="flex items-center gap-2"></div>
					</div>
					<div className="flex flex-col gap-3 items-center">
						<img
							src="/assets/alias1.jpg"
							alt="v1"
							height={200}
							width={200}
							className="rounded-lg"
						/>
						<p className="text-2xl font-semibold">Alias Benny</p>
						<div className="flex items-center gap-2"></div>
					</div>
					<div className="flex flex-col gap-3 items-center">
						<img
							src="/assets/ananth1.jpg"
							alt="v1"
							height={200}
							width={200}
							className="rounded-lg"
						/>
						<p className="text-2xl font-semibold">Ananth Narayan</p>
						<div className="flex items-center gap-2"></div>
					</div>
					<div className="flex flex-col gap-3 items-center">
						<img
							src="/assets/hari1.jpg"
							alt="v1"
							height={200}
							width={200}
							className="rounded-lg"
						/>
						<p className="text-2xl font-semibold ">Hari P</p>
						<div className="flex items-center gap-2"></div>
					</div>
				</div>
			</div>
			<Slider {...settings}>
				<div className="container mx-auto" id="review">
					<p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
						Thanks to you
					</p>
					<p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
						We are growing day-by-day
					</p>
					<div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
						<img
							src="/assets/lady2.jpeg"
							alt=""
							height={400}
							width={300}
							className="rounded-xl"
						/>
						<div className="flex flex-col gap-5 items-start">
							<p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
								Clara Eldho
							</p>
							<div className="flex items-center gap-2 ">
								<img
									src="/assets/india.jpg"
									alt="itersfgjds"
									height={50}
									width={50}
								/>
								<p className="text-gray-500">Entrepreneur</p>
							</div>
							<p className=" text-base sm:text-lg md:text-2xl lg:text-3xl w-xl">
								“Way better than Porter. Have shifted all my
								logistics needs to Koolie and I can now safely
								focus on my business growth. Amazing service!”
							</p>
						</div>
					</div>
				</div>
				{/* <div className="container mx-auto ">
        <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
          Thanks to you
        </p>
        <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
          We are growing day-by-day
        </p>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
          <img src="/assets/student.svg" alt="" />
          <div className="flex flex-col gap-5 items-start">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Dinesh</p>
            <div className="flex items-center gap-2">
              <img src="/assets/uk.svg" alt="itersfgjds" />
              <p className="text-gray-500">Entrepreneur</p>
            </div>
            <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
              “Excellent service by multiple drivers. <br />  I own a business and do multiple shiftings.  <br /> Rather than ask local drivers and bargain <br></br>every time, I use porter which fulfils all my need.<br/> Thanks a lot!”
            </p>
          </div>
        </div>
      </div> */}
				{/* Add more slides here if needed */}
				<div className="container mx-auto">
					<p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
						Thanks to you
					</p>
					<p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
						We are growing day-by-day
					</p>
					<div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
						<img
							src="/assets/man1.jpeg"
							alt=""
							height={250}
							width={250}
						/>
						<div className="flex flex-col gap-5 items-start">
							<p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
								Aarav Anilkumar
							</p>
							<div className="flex items-center gap-2 ">
								<img
									src="/assets/india.jpg"
									alt="itersfgjds"
									height={50}
									width={50}
								/>
								<p className="text-gray-500">Influencer</p>
							</div>
							<p className=" text-base sm:text-lg md:text-2xl lg:text-3xl w-xl">
								“Excellent service by multiple drivers. I own a
								business and do multiple shiftings. Rather than
								ask local drivers and bargain every time, I use
								Koolie which fulfils all my need. Thanks a lot!”
							</p>
						</div>
					</div>
				</div>
				<div className="container mx-auto">
					<p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
						Thanks to you
					</p>
					<p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
						We are growing day-by-day
					</p>
					<div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
						<img
							src="/assets/man2.jpeg"
							alt=""
							height={250}
							width={250}
						/>
						<div className="flex flex-col gap-5 items-start">
							<p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
								Vikram Iyer
							</p>
							<div className="flex items-center gap-2 ">
								<img
									src="/assets/india.jpg"
									alt="itersfgjds"
									height={50}
									width={50}
								/>
								<p className="text-gray-500">Entrepreneur</p>
							</div>
							<p className=" text-base sm:text-lg md:text-2xl lg:text-3xl w-xl">
								“Have had an amazing experience. Had three
								successful deliveries where it’s a struggle to
								arrange a tempo service for your desired pickup
								and drop off. Must try this app!”
							</p>
						</div>
					</div>
				</div>
				<div className="container mx-auto">
					<p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
						Thanks to you
					</p>
					<p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
						We are growing day-by-day
					</p>
					<div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
						<img
							src="/assets/lady3.jpeg"
							alt=""
							height={250}
							width={250}
						/>
						<div className="flex flex-col gap-5 items-start">
							<p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
								Smriti Mandhana
							</p>
							<div className="flex items-center gap-2 ">
								<img
									src="/assets/india.jpg"
									alt="itersfgjds"
									height={50}
									width={50}
								/>
								<p className="text-gray-500">Business Tycoon</p>
							</div>
							<p className=" text-base sm:text-lg md:text-2xl lg:text-3xl w-xl">
								“Smooth experience with Koolie's packers and
								movers! The team was fantastic, handling every
								detail. Highly recommend their services!“
							</p>
						</div>
					</div>
				</div>
			</Slider>
			<div className="container mx-auto py-20" id="faq">
				<p className="text-gray-500 text-2xl font-medium uppercase my-3">
					MORE INFO
				</p>
				<p className="text-gray-800 text-4xl font-medium capitalize mb-10">
					Common questions
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
					{info.map((inf, i) => {
						return (
							<Disclosure key={i}>
								{({ open }) => (
									<div className="group">
										<Disclosure.Button className="flex flex-col group-hover:bg-[#524fd5] group-focus:bg-[#524fd5] w-full justify-between rounded-lg lg:rounded-full border border-gray-200 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">
											<div className="flex justify-between items-center w-full">
												<span className="group-hover:text-white  group-focus:text-white">
													{inf.title}
												</span>
												<BsFillPlusCircleFill
													className={`${
														open
															? "rotate-180 transform"
															: ""
													}  text-[#524fd5] text-2xl group-hover:text-white  group-focus:text-white `}
												/>
											</div>

											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 group-focus:text-white group-hover:text-white">
												{inf.des}
											</Disclosure.Panel>
										</Disclosure.Button>
									</div>
								)}
							</Disclosure>
						);
					})}
				</div>
			</div>
			<div className="container mx-auto my-10">
				<div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
					<div className="flex flex-col items-center lg:items-start gap-5">
						<img
							src="/assets/cooliebg.png"
							alt="footer lgo"
							height={400}
							width={100}
						/>
						<p className="text-center lg:text-start">
							Model Engineering College ,<br />
							Thrikkakara ,<br />
							Ernakulam ,<br />
							Kerala ,<br />
							India <br />
							+91 1234567890
						</p>
					</div>
					<div className="flex flex-col items-center lg:items-start gap-5">
						<p className="text-xl font-medium">Company</p>
						<a href="#about">
							<p className="text-base">About Us</p>
						</a>
						<p className="text-base">Blog</p>
						<p className="text-base">Support</p>
					</div>
					<div className="flex flex-col items-center lg:items-start gap-5">
						<p className="text-xl font-medium">Quick Links</p>
						<p className="text-base">Services</p>
						<p className="text-base">Pricing</p>
					</div>
					<div className="flex flex-col items-center lg:items-start gap-5">
						<p className="text-xl font-medium">Legal</p>
						<p className="text-base">Terms & Conditions</p>
						<p className="text-base">Privacy policy</p>
					</div>
					<div className="flex items-center gap-5">
						<a
							href="https://www.instagram.com/alias_benny?igsh=MTFoaWZ4b3p3enplMQ=="
							target="_blank"
						>
							<BsFacebook className="text-3xl text-gray-500" />
						</a>
						<a
							href="https://www.instagram.com/alias_benny?igsh=MTFoaWZ4b3p3enplMQ=="
							target="_blank"
						>
							<BsTwitter className="text-3xl text-gray-500" />
						</a>
						<a
							href="https://www.instagram.com/alias_benny?igsh=MTFoaWZ4b3p3enplMQ=="
							target="_blank"
						>
							<BsInstagram className="text-3xl text-gray-500" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fullpage;
