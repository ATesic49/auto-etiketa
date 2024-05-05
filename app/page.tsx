import Image from "next/image";
import lego from '@/public/imgs/Lego.png'
import Link from "next/link";
import PageItem from "./components/PageItem";
import ShopGrid from "./components/ShopGrid";
import { motion } from 'framer-motion'
import NasaPrica from "./components/NasaPrica";
import AutoetiketaJe from "./components/AutoetiketaJe";
import KakoToIzgleda from "./components/KakoToIzgleda";
import Materijali from "./components/Materijali";
import { prisma } from "./PrismaClient/prismaClient";
export default async function Home() {
  const tags = await prisma.tag.findMany({})
  const tagsIn = [tags[0], tags[2], tags[4], tags[20], tags[16], tags[10], tags[22], tags[14]]

  return (
    <main className="flex w-full pb-16  flex-col items-center justify-between gap-8 md:gap-16 ">
      <div className="w-full md:p-8 p-4  flex justify-center items-center flex-col gap-8 relative">
        {/* <motion.div className="absolute z-10 text-gray-50 py-4 flex justify-center items-center w-3/5  font-bold bg-orange-400">
          <h1 className="text-4xl">dasd</h1>
          <div className="absolute bg-orange-400 [clip-path:polygon(0_0,100%_0,_100%_50%,_100%_100%,_0_100%,_50%_50%)]  right-full aspect-square h-full "></div>
        </motion.div> */}

        <div className=" grid grid-cols-2 md:grid-cols-4 w-full gap-4 ">
          {tagsIn.map((tag, i) => {

            return <PageItem key={i} tag={tag} />

          })}
        </div>
        <Link tabIndex={1} className="font-medium border-orange-500 text-orange-50 focus:scale-95 duration-200 px-4 py-2 text-base bg-gradient-to-t from-orange-500 to-orange-400 rounded-md shadow-lg shadow-orange-200" href={'/shop'}> Shop Now</Link>
      </div>
      <NasaPrica />
      <AutoetiketaJe />
      <KakoToIzgleda />
      <Materijali />
    </main>
  );
}
