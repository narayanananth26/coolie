"use client";
import { useSession } from "next-auth/react";
import Fullpage from "../components/Fullpage";

const Home = () => {
	const { data: session } = useSession();

	return <Fullpage />;
};

export default Home;
