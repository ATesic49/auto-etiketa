"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/public/imgs/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Navbar() {
	const pathname = usePathname();
	return (
		<div className="flex md:px-32 px-4 py-4   border-b gap-8 md:gap-16 justify-start items-center sticky top-0 z-[9] bg-neutral-950 border-gray-800">
			<Link href={"/"}>
				<Image
					alt="AutoEtiketa"
					className="w-8 md:w-16"
					src={Logo}
				></Image>
			</Link>
			<nav className="flex justify-center text-gray-400 font-semibold text-xs md:text-base md:gap-8 gap-4 items-center  underline-offset-4 md:underline-offset-8 duration-200">
				<Link
					href={"/"}
					className={`md:text-base text-xs ${pathname === "/" && "text-gray-300 underline "}`}
				>
					Home
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
					Shop
				</Link>
				<Link
					href={"/kontakt"}
					className={` md:text-base text-xs ${pathname === "/kontakt" && "text-gray-300 underline "}`}
				>
					Kontakt
				</Link>
			</nav>
			<div className="ml-auto flex items-center justify-center gap-2 md:gap-4">
				<Link href={"/shop#search"}>
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
