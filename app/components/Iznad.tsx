import Link from "next/link";
import React from "react";

const Iznad = () => {
	return (
		<div className=" font-semibold w-full relative md:text-base text-xs  text-red-50 bg-red-700 py-2 text-center">
			Trenutno vršimo dostavu samo na teritoriji Srbije
			<span className="text-[10px] absolute md:text-xs hidden md:block md:top-1/2 md:-translate-y-1/2 text-red-200 right-32 font-normal">
				Više informacija na nasoj{" "}
				<Link
					className="underline"
					href="https://www.instagram.com/autoetiketa/"
				>
					instagram
				</Link>{" "}
				stranici{" "}
			</span>
		</div>
	);
};

export default Iznad;
