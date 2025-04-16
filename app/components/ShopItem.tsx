"use client";
import React, { Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ShopBoja from "./ShopBoja";
import { Swiper, SwiperSlide } from "swiper/react";
import lego from "@/public/imgs/Lego.png";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import { useDispatch } from "react-redux";
import { dodajUKorpu } from "../redux/slices/korpaSlice";
import ShopItemImage from "./ShopItemImage";
import ImageItemShop2 from "./ImageItemShop2";
import { formatNumber } from "../cart/components/LeftCartItem";
import { HiArrowNarrowDown } from "react-icons/hi";
type tag = {
	id: number;
	slika: string;
	ime: string;
	dimenzija: string;
	boja: string;
};
type MapObject = { [key: string]: tag };

function ShopItem({
	tag,
	drugiProizvodi,
}: {
	tag: tag[];
	drugiProizvodi: tag[];
}) {
	const konacnoBoja = reduceProizvod(drugiProizvodi);

	const [t, setT] = useState(
		konacnoBoja.findIndex((element) => element.boja === tag[0].boja)
	);
	const [isOpen, setIsOpen] = useState(false);
	const [imageStrting, setImageString] = useState(
		`/imgs/proizvodi/${tag[0].slika}`
	);
	function appendNumberToFilename(filename: string) {
		// Check if the string ends with '.png'
		if (filename.endsWith("1.png")) {
			// Find the position where '.png' starts
			const index = filename.lastIndexOf("1.png");
			// Insert '2' before '.png'
			return filename.substring(0, index) + "2.png";
		} else if (filename.endsWith("1.jpg")) {
			const index = filename.lastIndexOf("1.jpg");
			return filename.substring(0, index) + "2.jpg";
		} else if (filename.endsWith("3.png")) {
			const index = filename.lastIndexOf("3.png");
			return filename.substring(0, index) + "4.png";
		} else if (filename.endsWith("3.jpg")) {
			const index = filename.lastIndexOf("3.jpg");
			return filename.substring(0, index) + "4.jpg";
		}
		return filename;
	}
	const [cena, setCena] = useState(1000);
	const [quant, setQuant] = useState(1);
	const [status, setStatus] = useState(false);
	function reduceProizvod(drugiProizvodi: tag[]): tag[] {
		const array: MapObject = {};
		drugiProizvodi.map((drugiProizvod) => {
			if (!array[drugiProizvod.boja]) {
				array[drugiProizvod.boja] = drugiProizvod;
			}
		});
		return Object.values(array);
	}
	const dispatch = useDispatch();
	return (
		<div className="flex flex-col gap-4 rounded-lg select-none">
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsOpen(false)}
						className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-[999]"
					></motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{status && (
					<motion.div
						className="bg-gradient-to-t from-green-500 to-green-400 font-semibold rounded-lg fixed top-16 left-1/2 text-green-50  px-4 py-2 flex justify-center items-center gap-2  z-[99999]"
						initial={{ x: "-50%", y: "-50%", opacity: 0, scale: "50%" }}
						animate={{ x: "-50%", y: "-50%", opacity: 1, scale: "100%" }}
						exit={{ x: "-50%", y: "-50%", opacity: 0, scale: "50%" }}
					>
						<p>Uspešno dodato u korpu</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-8 aspect-square stroke-green-100"
							viewBox="0 0 24 24"
							strokeWidth="1.8"
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
							<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
							<path d="M9 12l2 2l4 -4" />
						</svg>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="w-full select-none aspect-square rounded-lg group overflow-hidden cursor-pointer">
				<ShopItemImage
					setIsOpen={setIsOpen}
					src={tag[0].slika}
				/>
				{/* <Image
					src={`/imgs/proizvodi/${tag[0].slika}`}
					width={500}
					height={500}
					alt={`${tag[0].slika}`}
					className="w-full aspect-square object-cover rounded-lg group-hover:scale-105 duration-200"
					onClick={() => setIsOpen(true)}
				></Image> */}
			</div>
			<div className="flex flex-col  ">
				<div className="flex items-center  justify-between px-2">
					<h2 className="font-medium text-gray-300 text-sm md:text-lg">
						{tag[0].ime.length > 19
							? tag[0].ime.substring(0, 16) + "..."
							: tag[0].ime}
					</h2>
					<p className="text-gray-500 text-xs md:text-base font-medium ml-auto">
						{formatNumber(cena)} RSD
					</p>
				</div>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="fixed top-1/2 border-2 z-[50000] left-1/2 bg-white rounded-lg2
             
             flex flex-col gap-4 items-center justify-start p-4 md:w-auto w-10/12
             "
						initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 0.5 }}
						animate={{ x: "-50%", y: "-50%", opacity: 1, scale: 1 }}
						exit={{ x: "-50%", y: "-50%", opacity: 0, scale: 0.5 }}
					>
						<div
							className="cursor-pointer  absolute z-50 top-0 right-0 bg-white"
							onClick={() => {
								setIsOpen(false);
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-8 h-8 -translate-y-2 bg-white  rounded-full translate-x-2 "
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
								<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
								<path d="M10 10l4 4m0 -4l-4 4" />
							</svg>
						</div>
						<h2 className="text-2xl font-bold text-gray-800">{tag[0].ime}</h2>
						<div className="grid md:grid-cols-2 grid-cols-1 px-2 w-full gap-8">
							<div className="flex flex-col  gap-4 items-center  justify-start text-gray-600  font-medium text-sm">
								<div className="grid grid-cols-2 justify-start items-center w-full gap-4">
									<label htmlFor="dimenzije">Dimenzije:</label>
									<select
										onChange={(e) => {
											setCena(Number(e.target.value));
										}}
										name="dimenzije"
										id="dimenzije"
										className="p-2 border rounded-lg"
									>
										<option
											value="1000"
											onClick={() => setCena(1000)}
										>
											{tag[1].dimenzija}cm
										</option>
										<option
											value="500"
											onClick={() => setCena(500)}
										>
											{tag[0].dimenzija}cm
										</option>
									</select>
								</div>
								<div className="grid grid-cols-2   justify-start items-center w-full gap-4">
									<label htmlFor="boja">Boja:</label>
									<select
										value={konacnoBoja[t].boja}
										onChange={(e) => {
											setImageString(
												`/imgs/proizvodi/${
													konacnoBoja[
														konacnoBoja.findIndex(
															(element) => element.boja === e.target.value
														)
													].slika
												}`
											);
											setT(
												konacnoBoja.findIndex(
													(element) => element.boja === e.target.value
												)
											);
										}}
										name="boja"
										id="boja"
										className="p-2 border rounded-lg"
									>
										{konacnoBoja.map((boja, i) => {
											return (
												<option
													key={i}
													value={boja.boja}
												>
													{boja.boja}
												</option>
											);
										})}
									</select>
								</div>
								<div className="grid grid-cols-2   justify-start items-center w-full gap-4">
									<label htmlFor="kvantitet">Quantity:</label>
									<input
										name="kvantitet"
										onChange={(e) => setQuant(Number(e.target.value))}
										type="number"
										id="kvantitet"
										className="p-2 border rounded-lg"
										defaultValue={1}
										min={1}
									/>
								</div>
								<div className="mt-auto flex flex-col gap-4 w-full">
									<div className="grid items-center justify-center grid-cols-2 border-b-2 py-2">
										<p className=" text-gray-600 font-medium">Total:</p>
										<span className="text-gray-600 text-base font-medium ml-auto">
											{formatNumber(cena * quant)} RSD
										</span>
									</div>
									<button
										onClick={async () => {
											try {
												await dispatch(
													dodajUKorpu({
														quantity: quant,
														tag: {
															slika: imageStrting,
															dimenzija: cena === 1000 ? "15x20cm" : "7.5x10cm",
															ime: tag[0].ime,
															boja: konacnoBoja[t].boja,
														},
													})
												);
												setIsOpen(false);
												setStatus(true);
												setTimeout(() => setStatus(false), 1500);
											} catch (e) {
												console.log(e);
											}
										}}
										className="bg-gradient-to-t from-orange-500 shadow-sm shadow-orange-200 to-orange-400 py-2  px-4 flex items-center justify-center text-gray-100  rounded-lg w-full gap-4 text-base focus:scale-95  duration-200      "
									>
										<p>Add to cart</p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-5 stroke-gray-100 aspect-square"
											viewBox="0 0 24 24"
											strokeWidth="1.75"
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
											<path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
											<path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
											<path d="M17 17h-11v-14h-2" />
											<path d="M6 5l14 1l-1 7h-13" />
										</svg>
									</button>
								</div>
							</div>
							<div className="  flex flex-col gap-2 row-start-1">
								<div
									className={` min-w-40  aspect-square cursor-pointer w-full overflow-hidden relative group`}
								>
									<ImageItemShop2
										className="group-hover:opacity-0 w-full duration-200 opacity-100 	"
										src={imageStrting}
									/>
									<div
										className="absolute bottom-0 right-0 w-[20%] aspect-square opacity-90 bg-gray-400 shadow-lg  rounded-bl-lg
                      transition-transform duration-200
                      clipPath"
									>
										<HiArrowNarrowDown className="size-10 text-gray-800 absolute bottom-0 left-0 stroke-[0.01] rotate-45" />
									</div>
									<ImageItemShop2
										className="	group-hover:opacity-100  opacity-0 duration-200"
										src={appendNumberToFilename(imageStrting)}
									/>
									{/* <Image
										className="rounded-lg object-cover object-center  duration-200 "
										fill
										src={imageStrting}
										alt="ludilo"
									></Image> */}
								</div>
								<Swiper
									spaceBetween={32}
									slidesPerView={4.5}
									className=" mx-auto max-w-full px-16 w-fit  "
								>
									{konacnoBoja.length > 1 && (
										<>
											{konacnoBoja.map((konacno, i) => (
												<SwiperSlide
													className="py-2 min-w-8"
													key={i}
												>
													{t === i ? (
														<ShopBoja
															setImageString={setImageString}
															key={i}
															konacno={konacno}
															t
															i={i}
															setT={setT}
														/>
													) : (
														<ShopBoja
															setImageString={setImageString}
															konacno={konacno}
															key={i}
															i={i}
															setT={setT}
														/>
													)}
												</SwiperSlide>
											))}
										</>
									)}
								</Swiper>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default ShopItem;
