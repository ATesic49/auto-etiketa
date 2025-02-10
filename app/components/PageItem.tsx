import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "@prisma/client";
function PageItem({ tag }: { tag: Tag }) {
	return (
		<div className="group relative cursor-pointer duration-200 hover:scale-105 select-none">
			<Image
				width={250}
				height={250}
				alt="Lego"
				className=" duration-200 group-hover:brightness-75 w-full h-full "
				src={`/imgs/proizvodi/${tag.slika}`}
			></Image>
			<div className=" group-hover:opacity-100 opacity-0 duration-500 text-gray-50 font-bold md:text-4xl text-xl  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center flex-col md:gap-8 gap-2 w-4/5 pt-8">
				<p>{tag.ime}</p>
				<Link
					href={"/shop"}
					className="opacity-0 group-hover:opacity-100 delay-500 duration-500 md:text-sm text-xs    border-gray-200  border-dashed px-2 py-1 rounded-lg border-2"
				>
					Shop
				</Link>
			</div>
		</div>
	);
}

export default PageItem;
