import { MdNavigateNext } from "react-icons/md";
import AppButton from "../button/AppButton";

const Content = () => {
	return (
		<div className="w-[70%] mt-[3.75rem] displayFlexColumn mx-auto">
			<h1 className="text-h1 font-semibold mb-4">Social Tasks</h1>
			<p className="mb-4 font-normal text-gray">
				Complete the Social Tasks to earn extra $Heart token
			</p>
			<div className="w-[100%] border-2 border-frameColor rounded-2xl p-6 box-border">
				<h2 className="text-h2 font-normal mb-6">
					Connect Your X account
				</h2>
				<p className="text-small font-normal mb-1">
					You need connect your X account to join Social Task
				</p>
				<div className="flex items-center mb-4">
					<a href="#" className=" font-small text-small text-blue ">
						Learn more
					</a>
                    <MdNavigateNext className="text-blue text-normal" />
				</div>
                <AppButton>Connect your X account</AppButton>
			</div>
		</div>
	);
};

export default Content;
