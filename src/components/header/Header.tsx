import { useState } from "react";
import 'boxicons/css/boxicons.min.css';

import {LogoIcon} from '../../common/icons';


const Header: React.FC = () => {
	const [activeItem, setActiveItem] = useState<string>("Tapos");
	const [mainNet, setMainNet] = useState<boolean>(true);

	const handleClick = (item: string) => {
		setActiveItem(item);
	};

	const menuItems: Array<string> = ["Tapos", "Wallet", "Leaderboard", "Shop"];
	return (
		<header className="flex h-[6.125rem] px-[110px] justify-between items-center">
			<LogoIcon/>

			<div className="flex justify-center gap-9 ">
				{menuItems.map((item, index) => (
					<div
						key={index}
						onClick={() => handleClick(item)}
						className={`cursor-pointer font-normal hover:text-gray  ${
							activeItem === item
								? " text-gray"
								: "text-lightGray"
						}`}
					>
						{item}
					</div>
				))}
				<div className="cursor-pointer text-mainColor font-bold">
					<span>More <i className='bx bx-chevron-down translate-y-[1px] scale-[1.8] '></i></span>
				</div>
			</div>

			<div className="flex rounded-[3rem] p-[2px] bg-frameColor items-center relative">
				<div
					className={`px-[12px] py-[4px] cursor-pointer z-10 transitionMainNet ${
						mainNet ? "text-white " : "text-black"
					}`}
					onClick={() => setMainNet(!mainNet)}
				>
					<span>Mainnet</span>
				</div>
				<div
					className={`px-[12px] py-[4px] cursor-pointer z-10 transitionMainNet ${
						!mainNet ? "text-white   " : "text-black"
					}`}
					onClick={() => setMainNet(!mainNet)}
				>
					<span>Testnet</span>
				</div>
				<div
					className={`h-[90%] box-border bg-mainColor w-[50%] rounded-[3rem] z-0 absolute transitionMainNet ${
						mainNet ? "left-[2px]" : "left-[49%] "
					}`}
				></div>
			</div>
		</header>
	);
};

export default Header;
