import Image from "next/image";
import React from "react";
import hero from "@/public/Naslovna.jpg";
import Link from "next/link";
const Hero = () => {
	return (
		<div className="w-full h-[120vh]  overflow-hidden relative ">
			<div className="inset-0 absolute bg-gray-950 opacity-35 z-[1]"></div>
			<Image
				className="object-cover"
				priority={true}
				alt="slika"
				src={hero}
			></Image>
			{/* top-1/2 -translate-y-[calc(50%_-_16*4px)] */}
			<div className="flex flex-col justify-center items-center absolute bottom-32   z-[2] gap-8 left-1/2 -translate-x-1/2 ">
				<h1 className="text-xl md:text-3xl text-gray-50  font-bold ">
					Stil u pokretu
				</h1>
				<Link
					className="font-medium border-2 text-gray-50 border-gray-50 px-4 py-2
					
					active:scale-90 duration-100 transition-all
					hover:scale-95
					"
					href={"/shop"}
				>
					{" "}
					Svi Proizvodi
				</Link>
			</div>
		</div>
	);
};

export default Hero;
