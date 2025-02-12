import React from "react";
import Forma from "./Forma";
import MailIg from "./MailIg";

const page = () => {
	return (
		<main className="flex w-full pb-32 mt-32 flex-col items-center justify-center px-8 md:px-32 gap-8 md:gap-16 ">
			<h1 className="md:text-5xl md:text-left w-full text-center text-2xl text-gray-200 mx-auto max-w-screen-md font-black">
				Kontakt
			</h1>
			<Forma />
		</main>
	);
};

export default page;
