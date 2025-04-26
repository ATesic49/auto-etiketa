import React from "react";
import NasaPrica from "../components/NasaPrica";
import KakoToIzgleda from "../components/KakoToIzgleda";
import AutoetiketaJe from "../components/AutoetiketaJe";
import Materijali from "../components/Materijali";

const page = () => {
	return (
		<main className="flex w-full pb-16 md:pb-32 mt-16 md:mt-32 flex-col items-center justify-between gap-16 md:gap-32 ">
			<NasaPrica />
			<AutoetiketaJe />
			<KakoToIzgleda />
			<Materijali />
		</main>
	);
};
export default page;
