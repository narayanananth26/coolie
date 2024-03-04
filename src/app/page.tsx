import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";
const font = Poppins({ subsets: ["latin"], weight: ["600"] });
const Home = () => {
	return (
		<main className="flex-center flex-col h-full orange-gradient">
			<div className="space-y-6 text-center">
				<h1
					className={cn(
						"text-6xl font-semibold text-white drop-shadow-md",
						font.className
					)}
				>
					Auth
				</h1>
				<div>
					<LoginButton>
						<Button variant="secondary" size="lg">
							Sign In
						</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	);
};

export default Home;
