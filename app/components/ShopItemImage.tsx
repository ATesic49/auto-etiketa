import Image from "next/image";
import React, { useState } from "react";

const ShopItemImage = ({
	src,
	setIsOpen,
}: {
	src: string;
	setIsOpen: (value: React.SetStateAction<boolean>) => void;
}) => {
	const [loading, setLoading] = useState(true);
	return (
		<div className="relative ">
			{/* Shimmer Effect */}
			{loading && (
				<div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
			)}

			{/* Image with smooth fade-in */}
			<Image
				src={`/imgs/proizvodi/${src}`}
				width={500}
				height={500}
				alt={src}
				onLoad={() => setLoading(false)}
				className={`w-full aspect-square object-cover rounded-lg group-hover:scale-105  duration-200 transition-all ${
					loading ? "opacity-0" : "opacity-100"
				}`}
				onClick={() => setIsOpen(true)}
			></Image>
		</div>
	);
};

export default ShopItemImage;
