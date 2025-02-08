import React from "react";

const Iznad = () => {
	return (
		<div className=" font-semibold w-full relative  text-red-50 bg-red-700 py-2 text-center">
			Trenutno vršimo dostavu samo na teritoriji Srbije
			<span className="text-xs absolute md:text-xs top-1/2 -translate-y-1/2 text-red-200 right-32 font-normal">
				Više informacija na instagram i mail{" "}
			</span>
		</div>
	);
};

export default Iznad;
