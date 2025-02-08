import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReduxProvider from "./redux/ReduxProvider";
import Iznad from "./components/Iznad";

const inter = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "AutoEtiketa",
	description:
		"AutoEtiketa je nastala kao ideja pravih ljubitelja automobila i komunikacija koji su želeli da na jedan sofisticirani način povežu ove dve branše bez narušavanja integriteta svake od njih ponaosob. Sinergija i kompaktnost ovog rešenja za nas predstavlja doprinos autentičnoj komunikaciji uz poštovanje individualne estetike svakog vozila.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-neutral-950`}>
				<ReduxProvider tags={[]}>
					<Iznad />
					<Navbar />
					{children}
					<Footer />
				</ReduxProvider>
			</body>
		</html>
	);
}
