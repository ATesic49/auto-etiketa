import Image from "next/image";
import React, { useState } from "react";
const ImageItemShop2 = ({
	src,
	className,
}: {
	src: string;
	className?: string;
}) => {
	const [loading, setLoading] = useState(true);

	return (
		<div className={`${className} absolute inset-0 overflow-hidden rounded-lg`}>
			{/* Shimmer Effect */}
			{loading && (
				<div className="absolute  inset-0 bg-gray-700 animate-pulse"></div>
			)}

			{/* Image with smooth fade-in */}
			<Image
				src={src}
				width={500}
				height={500}
				alt={src}
				onLoad={() => setLoading(false)}
				className={`w-full aspect-square object-cover rounded-lg duration-200 transition-all ${
					loading ? "opacity-0" : "opacity-100"
				}`}
			></Image>
		</div>
	);
};

export default ImageItemShop2;
