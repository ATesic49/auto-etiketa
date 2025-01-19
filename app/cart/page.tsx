import React from "react";
import Image from "next/image";
import lego from "@/public/imgs/Lego.png";
import LeftCartItem from "./components/LeftCartItem";
import Cart from "./components/Cart";
async function page() {
	return <Cart />;
}

export default page;
