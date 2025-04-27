"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Iznad = () => {
	const [dostava, setDostava] = useState(true);
	useEffect(() => {
		const interval = setInterval(() => {
			setDostava((prev) => !prev);
		}, 3000);
		return () => clearInterval(interval);
	}, []);
	return (
		<>
			<div
				id="iznad"
				className=" font-semibold w-full relative md:text-base text-xs  text-red-50 bg-red-700 py-2 text-center"
			>
				<p className="relative block">
					<motion.span
						initial={{ opacity: "100%" }}
						animate={!dostava ? { opacity: 0 } : { opacity: "100%" }}
						transition={{ duration: 0.5 }}
					>
						Trenutno vršimo dostavu samo na teritoriji Srbije
					</motion.span>
					<motion.span
						className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
						initial={{ opacity: 0 }}
						animate={dostava ? { opacity: 0 } : { opacity: "100%" }}
						transition={{ duration: 0.55 }}
					>
						Akcija: Velika + Mala Etiketa 1300din
					</motion.span>
				</p>
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
