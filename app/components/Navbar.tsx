"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/public/imgs/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { duration } from "@mui/material";
import path from "path";
function Navbar() {
	const [state, setState] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setState(false);
	}, [pathname]);
	return (
		<div className="flex md:px-32 px-4 py-4    border-b gap-4 md:gap-16 justify-start items-center sticky top-0 z-[9] bg-neutral-950 border-gray-800">
			<Link href={"/"}>
				<Image
					alt="AutoEtiketa"
					className="w-8 md:w-16"
					src={Logo}
				></Image>
			</Link>
			<div
				onClick={() => setState(true)}
				className="flex flex-col gap-1  md:hidden ml-auto py-1"
			>
				<div className="bg-gray-400 h-0.5 w-4"></div>
				<div className="bg-gray-400 h-0.5 w-4"></div>
				<div className="bg-gray-400 h-0.5 w-4"></div>
			</div>
			<AnimatePresence>
				{state && (
					<motion.div
						initial={{ opacity: 0.5, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0.5, x: "100%" }}
						transition={{ duration: 0.3 }}
						className="flex justify-start fixed flex-col  rounded-l-3xl bg-neutral-900 z-[99999]  py-16 pb-4 h-full top-0  px-8 font-bold  right-0 text-gray-400"
					>
						<IconX
							stroke={2}
							onClick={() => setState(false)}
							className="absolute text-gray-300 w-8 cursor-pointer top-4 right-4"
						></IconX>
						<Link
							href={"/"}
							className={`md:text-base w-full items-end justify-start border-b py-4 text-sm ${pathname === "/" && "text-gray-300  flex gap-2"}`}
						>
							Početna
						</Link>
						<Link
							href={"/o-nama"}
							className={` md:text-base  w-full border-b py-4 text-sm flex gap-1  ${
								pathname === "/o-nama" && "text-gray-300  "
							}`}
						>
							O nama
						</Link>
						<Link
							href={"/shop"}
							className={` md:text-base  border-b py-4 w-full text-sm  flex gap-1 ${pathname === "/shop" && "text-gray-300  "}`}
						>
							Prodavnica
						</Link>
						<Link
							href={"/kontakt"}
							className={` md:text-base border-b py-4 w-full text-sm  flex gap-1 ${pathname === "/kontakt" && "text-gray-300  "}`}
						>
							Kontakt
						</Link>
						<div className="mt-auto py-2 flex text-sm  flex-col gap-4 ">
							<Link
								href={"/shop#search"}
								className="flex gap-2 font-bold text-sm items-center"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="md:w-8 w-6  aspect-square stroke-gray-400"
									viewBox="0 0 24 24"
									strokeWidth="1.2"
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
									<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
									<path d="M21 21l-6 -6" />
								</svg>
								Pretraga
							</Link>
							<Link
								className="flex gap-1 text-sm items-center"
								href={"/cart"}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="md:w-8 w-6 aspect-square stroke-gray-400"
									viewBox="0 0 24 24"
									strokeWidth="1.2"
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
								Korpa
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{state && (
					<motion.div
						onClick={() => setState(false)}
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						transition={{ duration: 0.3 }}
						className="inset-0 fixed z-[-10] bg-black "
					></motion.div>
				)}
			</AnimatePresence>
			<nav className="md:flex justify-center hidden text-gray-400 font-semibold text-xs md:text-base md:gap-8 gap-2 items-center  underline-offset-4 md:underline-offset-8 duration-200">
				<Link
					href={"/"}
					className={`md:text-base text-xs ${pathname === "/" && "text-gray-300 underline "}`}
				>
					Početna
				</Link>
				<Link
					href={"/o-nama"}
					className={`w-max md:text-base text-xs  ${
						pathname === "/o-nama" && "text-gray-300 underline "
					}`}
				>
					O nama
				</Link>
				<Link
					href={"/shop"}
					className={` md:text-base text-xs ${pathname === "/shop" && "text-gray-300 underline "}`}
				>
					Prodavnica
				</Link>
				<Link
					href={"/kontakt"}
					className={` md:text-base text-xs ${pathname === "/kontakt" && "text-gray-300 underline "}`}
				>
					Kontakt
				</Link>
			</nav>
			<div className="ml-auto hidden md:flex items-center justify-center  md:gap-4">
				<Link
					href={"/shop#search"}
					className=""
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="md:w-8 w-4 aspect-square stroke-gray-400"
						viewBox="0 0 24 24"
						strokeWidth="1.2"
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
						<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
						<path d="M21 21l-6 -6" />
					</svg>
				</Link>
				<Link href={"/cart"}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="md:w-8 w-4 aspect-square stroke-gray-400"
						viewBox="0 0 24 24"
						strokeWidth="1.2"
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
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
