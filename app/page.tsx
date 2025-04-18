import Hero from "./components/Hero";
import Tipovi from "./components/Tipovi";
export default async function Home() {
	return (
		<main className="flex w-full pb-32  flex-col items-center justify-between gap-16 md:gap-32">
			<Hero />
			<Tipovi />
		</main>
	);
}
