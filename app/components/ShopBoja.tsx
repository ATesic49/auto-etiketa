import Image from "next/image";
import React from "react";
import lego from "@/public/imgs/Lego.png";
export type tag = {
	id: number;
	slika: string;
	ime: string;
	dimenzija: string;
	boja: string;
};
function ShopBoja({
	t,
	setT,
	i,
	konacno,
	setImageString,
}: {
	setImageString: React.Dispatch<React.SetStateAction<string>>;
	konacno: tag;
	t?: boolean;
	setT: React.Dispatch<React.SetStateAction<number>>;
	i: number;
}) {
	return (
		<div
			onClick={() => {
				setImageString(`/imgs/proizvodi/${konacno.slika}`);
				setT(i);
			}}
			className={` py-1  cursor-pointer min-w-12  ${
				t ? "border-b-2 border-b-orange-400" : ""
			} `}
		>
			<Image
				alt=""
				className=" w-full aspect-square object-cover max-w-16 "
				src={`/imgs/proizvodi/${konacno.slika}`}
				width={100}
				height={100}
			></Image>
		</div>
	);
}

export default ShopBoja;
