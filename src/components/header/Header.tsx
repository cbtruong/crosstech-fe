import { useState } from "react";
import 'boxicons/css/boxicons.min.css';


const Header: React.FC = () => {
	const [activeItem, setActiveItem] = useState<string>("Tapos");
	const [mainNet, setMainNet] = useState<boolean>(true);

	const handleClick = (item: string) => {
		setActiveItem(item);
	};

	const menuItems: Array<string> = ["Tapos", "Wallet", "Leaderboard", "Shop"];
	return (
		<header className="flex h-[6.125rem] px-[110px] justify-between items-center">
			<svg
				width="53"
				height="40"
				viewBox="0 0 53 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M43.2 0H16C14.2327 0 12.8 1.43269 12.8 3.2C12.8 4.96731 14.2327 6.4 16 6.4H43.2C44.9673 6.4 46.4 7.83269 46.4 9.6C46.4 11.3673 44.9673 12.8 43.2 12.8H35.2C31.6654 12.8 28.8 15.6654 28.8 19.2V36.8C28.8 38.5673 30.2327 40 32 40C33.7673 40 35.2 38.5673 35.2 36.8V22.4C35.2 20.6327 36.6327 19.2 38.4 19.2H43.2C48.5019 19.2 52.8 14.9019 52.8 9.6C52.8 4.29807 48.5019 0 43.2 0Z"
					fill="black"
				/>
				<path
					d="M16 12.8H3.2C1.43269 12.8 0 14.2327 0 16C0 17.7673 1.43269 19.2 3.2 19.2H12.8C14.5673 19.2 16 20.6327 16 22.4V32C16 33.7673 17.4327 35.2 19.2 35.2C20.9673 35.2 22.4 33.7673 22.4 32V19.2C22.4 15.6654 19.5346 12.8 16 12.8Z"
					fill="black"
				/>
			</svg>

			<div className="flex justify-center gap-9 ">
				{menuItems.map((item, index) => (
					<div
						key={index}
						onClick={() => handleClick(item)}
						className={`cursor-pointer hover:text-customGray  ${
							activeItem === item
								? "font-normal text-customGray"
								: "text-customLightGray"
						}`}
					>
						{item}
					</div>
				))}
				<div className="cursor-pointer text-mainColor font-bold">
					<span>More <i className='bx bx-chevron-down'></i></span>
                    
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
