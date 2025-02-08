import Image from "next/image";
import lego from "@/public/imgs/Lego.png";
import Link from "next/link";
import PageItem from "./components/PageItem";
import ShopGrid from "./components/ShopGrid";
import { motion } from "framer-motion";
import NasaPrica from "./components/NasaPrica";
import AutoetiketaJe from "./components/AutoetiketaJe";
import KakoToIzgleda from "./components/KakoToIzgleda";
import Materijali from "./components/Materijali";
import { prisma } from "./PrismaClient/prismaClient";
import Hero from "./components/Hero";
// export const dynamic = 'force-dynamic'
export default async function Home() {
	const tags = await prisma.tag.findMany();
	const tagsIn = [
		tags[0],
		tags[2],
		tags[4],
		tags[20],
		tags[16],
		tags[10],
		tags[22],
		tags[14],
	];

	return (
		<main className="flex w-full pb-32  flex-col items-center justify-between gap-16 md:gap-32 ">
			<Hero />

			<NasaPrica />
			<AutoetiketaJe />
			<KakoToIzgleda />
			<Materijali />
		</main>
	);
}
