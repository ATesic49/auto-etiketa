import React from "react";
import Forma from "./Forma";
import MailIg from "./MailIg";
import Link from "next/link";

const page = () => {
	return (
		<main className="flex w-full pb-16 md:pb-32 mt-16 md:mt-32 flex-col items-center justify-center px-8 md:px-32 gap-8 md:gap-16 ">
			<h1 className="md:text-5xl md:text-left w-full text-center text-4xl text-gray-200 mx-auto max-w-screen-md font-black">
				Kontakt
			</h1>
			<Forma />
			<div className="w-full text-center md:text-base md:mt-0 mt-8 ">
				<p className="text-gray-400">Ili nam pišite na mail:</p>
				<Link
					className="text-gray-200 underline underline-offset-2"
					href={"mailto:autoetiketa@gmail.com"}
				>
					autoetiketa@gmail.com
				</Link>
			</div>
		</main>
	);
};

export default page;
