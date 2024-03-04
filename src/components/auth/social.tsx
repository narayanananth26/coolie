import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

type Props = {};

const Social = (props: Props) => {
	return (
		<div className="flex-center w-full gap-x-2">
			<Button
				size="lg"
				className="w-full"
				variant="outline"
				onClick={() => {}}
			>
				<FcGoogle className="h-5 w-5" />
			</Button>
			<Button
				size="lg"
				className="w-full"
				variant="outline"
				onClick={() => {}}
			>
				<FaGithub className="h-5 w-5" />
			</Button>
		</div>
	);
};

export default Social;
