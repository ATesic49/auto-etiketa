import React from "react";
import ShopClientGrid from "./ShopClientGrid";
import Link from "next/link";

const ShopSkeleton = () => {
	const list = ["Standard", "Citati", "Zastave"];

	return (
		<div className=" px-8 flex flex-col gap-8 text-gary-800 justify-center w-full items-center  py-8 md:py-16 ">
			<>
				<div className="flex flex-col justify-center items-center gap-4">
					<h1 className="md:text-5xl md:text-left text-center text-2xl text-gray-200 font-black ">
						World&apos;s Best Car Tag Supplier{" "}
					</h1>
					<div className="flex flex-center items-center gap-1 justify-center flex-col">
						<p className="text-gray-300 md:text-lg font-medium">
							See for yourself{" "}
						</p>
					</div>
					<input
						disabled
						type="text"
						id="search"
						className="bg-gray-950 border-2 rounded-lg font-medium text-gray-300 border-gray-600 p-2 w-4/5 relative focus:outline-none "
					/>
				</div>
				<div className="border-b flex  justify-start items-start  border-gray-800 w-full pb-2">
					{list.map((item) => {
						return (
							<Link
								key={item}
								href={`/shop?type=${item}`}
								className=" border-r  border-gray-700 px-4  text-gray-300"
							>
								{item}
							</Link>
						);
					})}{" "}
					<Link
						href={"/shop?type=All"}
						className=" border-r  border-gray-700 px-4  text-gray-300"
					>
						Celokupna Ponuda
					</Link>
				</div>
			</>
		</div>
	);
};

export default ShopSkeleton;
