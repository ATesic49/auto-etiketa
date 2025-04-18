"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import NasaPrica1 from "@/public/imgs/NasaPrica1.jpg";
import NasaPrica2 from "@/public/imgs/NasaPrica2.jpg";
function NasaPrica() {
	const [isLeft, setIsLeft] = useState(false);
	return (
		<div className="flex flex-col gap-8 md:gap-16 items-center justify-center w-full">
			<h2 className="md:text-4xl text-2xl font-black text-gray-300">
				Naša Priča
			</h2>
			<div className="flex md:gap-0 gap-8 flex-col md:flex-row justify-between items-center w-full md:pl-16 md:pr-0 px-6 md:text-base text-sm  ">
				<div className="flex flex-col text-gray-500 font-medium  items-center md:w-2/5 justify-start gap-8 md:gap-2 max-w-[40em]">
					<p>
						AutoEtiketa je nastala iz ljubavi prema automobilima i komunikaciji.
						Naša ideja je da spojimo ove dve oblasti na sofisticiran i
						nenametljiv način, uz poštovanje estetike i integriteta. Verujemo u
						moć autentične, suptilne poruke kroz spoj stila i funkcionalnosti.
					</p>
					<p>
						Naši proizvodi nisu samo ukrasi – oni su stil u pokretu. Svaka
						etiketa pažljivo je osmišljena da oplemeni izgled vozila i istakne
						individualnost vlasnika. Auto nije samo prevoz – to je lični potpis.
						AutoEtiketa je i inovativan marketinški alat.
					</p>
					<p>
						Kombinovanjem automobilskog dizajna i vizuelnog identiteta brenda,
						pomažemo firmama da istaknu svoju priču. Etiketa na vozilu može
						postati deo prepoznatljivog imidža – bilo da promoviše proizvod,
						uslugu ili ideju.
					</p>
				</div>
				<div className="relative md:w-2/5 w-full  h-full bg-blue-200 aspect-video isolate  overflow-clip ">
					<motion.div
						className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-500 cursor-pointer backdrop-blur-sm bg-opacity-75 p-2   z-30 aspect-square"
						onClick={() => setIsLeft(!isLeft)}
						initial={{ y: "-50%", rotateX: 0 }}
						animate={
							isLeft
								? { y: "-50%", rotateZ: "180deg" }
								: { y: "-50%", rotateZ: 0 }
						}
						transition={{ duration: 0.5, ease: "backInOut", bounce: "spring" }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-8 h-8 stroke-gray-50"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="#000000"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path
								stroke="none"
								d="M0 0h24v24H0z"
								fill="none"
							/>
							<path d="M5 12l14 0" />
							<path d="M5 12l6 6" />
							<path d="M5 12l6 -6" />
						</svg>
					</motion.div>
					<Image
						className="absolute object-cover top-0 left-0 w-full h-full z-10"
						src={NasaPrica1}
						alt=""
					></Image>
					<motion.div
						className="absolute object-cover top-0 left-full w-full h-full z-20"
						initial={{ y: 0, x: 0 }}
						animate={isLeft ? { y: 0, x: "-100%" } : { y: 0, x: 0 }}
						transition={{ duration: 0.5, ease: "backInOut" }}
					>
						<Image
							src={NasaPrica2}
							alt=""
						></Image>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default NasaPrica;
