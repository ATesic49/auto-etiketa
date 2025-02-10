import React, { Suspense } from "react";
import ShopGrid from "../components/ShopGrid";
import ShopSkeleton from "../components/ShopSkeleton";
export const dynamic = "force-dynamic";

function page({ searchParams }: { searchParams: { type: string } }) {
	console.log(searchParams.type);
	return (
		<Suspense fallback={<ShopSkeleton />}>
			<ShopGrid type={searchParams.type} />
		</Suspense>
	);
}

export default page;
