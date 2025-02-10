"use client";
import React, { Suspense, useState } from "react";
import ShopItem from "./ShopItem";
import { group } from "console";
import Link from "next/link";
type tag = {
	id: number;
	slika: string;
	ime: string;
	dimenzija: string;
	boja: string;
};
function ShopClientGrid({
	GrupedBy,
	drugiProizvodi,
	type,
}: {
	GrupedBy: tag[][];
	drugiProizvodi: Record<string, tag[]>;
	type: string;
}) {
	const [search, setSearch] = useState("");
	const list = ["Standard", "Citati", "Zastave"];
	return (
		<>
			<div className="flex flex-col justify-center items-center gap-4">
				<h1 className="md:text-5xl md:text-left text-center text-2xl text-gray-200 font-black ">
					World&apos;s Best Car Tag Supplier{" "}
				</h1>
				<div className="flex flex-center items-center gap-1 justify-center flex-col">
					<p className="text-gray-300 md:text-lg font-medium">
						See for yourself{" "}
					</p>
				</div>
				<input
					onChange={(e) => setSearch(e.target.value)}
					type="text"
					id="search"
					className="bg-gray-950 border-2 rounded-lg font-medium text-gray-300 border-gray-600 p-2 w-4/5 relative focus:outline-none "
				/>
			</div>
			<div className="border-b flex  justify-start items-start  border-gray-800 w-full pb-2">
				{list.map((item) => {
					return (
						<Link
							prefetch={false}
							key={item}
							href={`/shop?type=${item}`}
							className=" border-r  border-gray-700 px-4  text-gray-300"
						>
							{item}
						</Link>
					);
				})}{" "}
				<Link
					prefetch={false}
					href={"/shop?type=All"}
					className=" border-r  border-gray-700 px-4  text-gray-300"
				>
					Celokupna Ponuda
				</Link>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full px-4 md:px-8 ">
				{GrupedBy.map((grup, i) => {
					if (type === "Standard" || type === "Citati" || type === "Zastave") {
						if (
							grup[0].ime.toLowerCase().includes(search.toLowerCase()) &&
							grup[0].slika
								.toLowerCase()
								.split("/")[0]
								.includes(type.toLowerCase())
						) {
							return (
								<ShopItem
									drugiProizvodi={drugiProizvodi[grup[0].ime]}
									tag={grup}
									key={i}
								/>
							);
						}
					} else {
						if (grup[0].ime.toLowerCase().includes(search.toLowerCase())) {
							return (
								<ShopItem
									drugiProizvodi={drugiProizvodi[grup[0].ime]}
									tag={grup}
									key={i}
								/>
							);
						}
					}
				})}
				{/* <ShopItem  /> */}
			</div>
		</>
	);
}

export default ShopClientGrid;
