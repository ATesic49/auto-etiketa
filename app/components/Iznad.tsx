import Link from "next/link";
import React from "react";

const Iznad = () => {
	return (
		<>
			<div
				id="iznad"
				className=" font-semibold w-full relative md:text-base text-xs  text-red-50 bg-red-700 py-2 text-center"
			>
				Trenutno vršimo dostavu samo na teritoriji Srbije
				<span className="text-[10px] absolute md:text-[10px]  max-w-[20em] leading-3 hidden md:block md:top-1/2 md:-translate-y-1/2 text-red-200 right-8 font-normal">
					Za dostave u stranim drzavama posetite našu{" "}
					<Link
						className="underline"
						href="https://www.instagram.com/autoetiketa/"
					>
						instagram
					</Link>{" "}
					stranicu{" "}
				</span>
			</div>
			<div
				id="iznad"
				className=" w-full relative md:text-base text-[8px]  text-red-50 bg-red-700 pb-2 md:hidden text-center"
			>
				Za dostave u stranim drzavama posetite našu{" "}
				<Link
					className="underline"
					href="https://www.instagram.com/autoetiketa/"
				>
					instagram
				</Link>{" "}
				stranicu{" "}
			</div>
		</>
	);
};

export default Iznad;
