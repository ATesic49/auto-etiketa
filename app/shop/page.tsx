import React from "react";
import ShopGrid from "../components/ShopGrid";
export const dynamic = "force-dynamic";

function page({ searchParams }: { searchParams: { type: string } }) {
	console.log(searchParams.type);
	return <ShopGrid type={searchParams.type} />;
}

export default page;
