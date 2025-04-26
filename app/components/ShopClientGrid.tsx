"use client";
import React, { Suspense, useState } from "react";
import ShopItem from "./ShopItem";
import { group } from "console";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
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
	const params = useSearchParams();
	const typeq = params.get("type");

	return (
		<>
			<div className="flex flex-col justify-center items-center gap-4">
				<h1 className="md:text-5xl  text-center text-2xl w-4/5 text-gray-200 font-black ">
					Najveći Izbor Tagova U Svetu
				</h1>
				<div className="flex flex-center items-center gap-1 justify-center flex-col">
					<p className="text-gray-400 md:text-lg font-medium">Uverite se </p>
				</div>
				<input
					onChange={(e) => setSearch(e.target.value)}
					type="text"
					id="search"
					className="bg-gray-950 md:text-base text-xs border-2 rounded-lg font-medium text-gray-300 border-gray-600 px-2 py-2	 c md:p-2 md:w-4/5 w-[20em] relative focus:outline-none "
				/>
			</div>
			<div className="border-b flex md:text-base text-xs justify-start items-start  border-gray-800 w-full pb-2 ">
				{list.map((item) => {
					return (
						<Link
							prefetch={false}
							key={item}
							href={`/shop?type=${item}`}
							className={` border-r text-xs md:text-sm  border-gray-700 px-2 md:px-4   ${typeq === item ? "text-orange-400" : "text-gray-300"}`}
						>
							{item}
						</Link>
					);
				})}{" "}
				<Link
					prefetch={false}
					href={"/shop?type=All"}
					className={` border-r text-xs md:text-sm   border-gray-700  px-2 md:px-4 ${typeq !== "Standard" && typeq !== "Zastave" && typeq !== "Citati" ? "text-orange-400" : "text-gray-300"}`}
				>
					Celokupna Ponuda
				</Link>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 w-full px-2 sm:px-4 md:px-8 ">
				{GrupedBy.map((grup, i) => {
					if (type === "Standard" || type === "Citati" || type === "Zastave") {
						if (
							grup[0].ime.toLowerCase().includes(search.toLowerCase()) &&
							grup[0].slika
								.toLowerCase()
								.split("/")[0]
								.includes(type.toLowerCase())
						) {
							const sortedGrup = grup.sort((a, b) =>
								a.dimenzija > b.dimenzija ? -1 : 1
							);
							console.log(sortedGrup[0].dimenzija, "hehe");
							return (
								<ShopItem
									drugiProizvodi={drugiProizvodi[grup[0].ime]}
									tag={sortedGrup}
									key={i}
								/>
							);
						}
					} else {
						if (grup[0].ime.toLowerCase().includes(search.toLowerCase())) {
							const sortedGrup = grup.sort((a, b) =>
								a.dimenzija > b.dimenzija ? -1 : 1
							);
							console.log(sortedGrup[0].dimenzija, "hehe");
							return (
								<ShopItem
									drugiProizvodi={drugiProizvodi[grup[0].ime]}
									tag={sortedGrup}
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
