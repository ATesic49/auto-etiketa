import Image from "next/image";
import React from "react";
import Lego from "@/public/imgs/proizvodi/standard/Boost/1.jpg";
import Lego2 from "@/public/imgs/proizvodi/zastave/Serbia/1.jpg";
import Lego3 from "@/public/imgs/proizvodi/citati/NeplaniranoAliSjajno/1.jpg";
import Lego4 from "@/public/imgs/proizvodi/personalizovano/1.jpg";
import Link from "next/link";

const Tipovi = () => {
	const list = [
		{
			ime: "Standard",
			slika: Lego,
			link: "/shop?type=Standard",
		},
		{
			ime: "Zastave",
			slika: Lego2,
			link: "/shop?type=Zastave",
		},
		{
			ime: "Citati",
			slika: Lego3,
			link: "/shop?type=Citati",
		},
		{
			ime: "Personalizovano",
			slika: Lego4,
			link: "https://www.instagram.com/autoetiketa/",
		},
	];
	return (
		<div className="w-full grid font-medium  md:text-xl  gap-8 md:grid-cols-4 	 md:gap-4 px-16 text-gray-50">
			{list.map((item) => (
				<div
					className="aspect-[1] overflow-hidden relative"
					key={item.ime}
				>
					<Image
						alt=""
						src={item.slika}
						className="object-cover"
					></Image>
					<div className="absolute inset-0 z-[1] bg-black opacity-40"></div>
					<Link
						href={item.link}
						className="flex flex-col  gap-2 absolute left-1/2 z-[2] -translate-x-1/2 top-1/2 -translate-y-1/2 underline underline-offset-8"
					>
						{item.ime}
					</Link>
				</div>
			))}
			{/* <div className="flex justify-center items-center">
				<Link
					href={"/personalizovano"}
					className="border py-2 px-4 bg-gradient-to-t  text-orange-50 "
				>
					{" "}
					Personalizovano
				</Link>
			</div> */}
		</div>
	);
};

export default Tipovi;
