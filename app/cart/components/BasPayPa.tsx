"use client";
import { useAppSelector } from "@/app/redux/store";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function BasPayPa({
	cena,
	data,
}: {
	cena: number;
	data: {
		name: string;
		zipCode: string;
		country: string;
		email: string;
		adress: string;
		tel: string;
	};
}) {
	const router = useRouter();
	const constKorpa = useAppSelector((state) => state.korpaSlice);
	console.log(constKorpa, "korpa");
	// State to force re-render
	const [refreshKey, setRefreshKey] = useState(0);

	// useEffect to set up an interval
	useEffect(() => {
		const interval = setInterval(() => {
			// Update state to a new value, which will force a re-render
			setRefreshKey((prevKey) => prevKey + 1);
		}, 2000); // 2000 milliseconds = 2 seconds

		// Clean up the interval on component unmount
		return () => clearInterval(interval);
	}, []);

	const createOrder = async (): Promise<string> => {
		console.log("HOR PEVA");
		try {
			const { data: orderData } = await axios.post("/api/createOrder", {
				cena: Number(cena) + 8,
				data,
				constKorpa,
			});

			if (orderData.id) {
				return orderData.id;
			} else {
				const errorDetail = orderData.details?.[0];
				const errorMessage = errorDetail
					? //@ts-ignore
					  `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
					: JSON.stringify(orderData);

				throw new Error(errorMessage);
			}
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const onApprove = async (datqa: any, actions: any) => {
		try {
			const da = await axios.post(`/api/${datqa.orderID}/capturePayment`, {
				data,
				constKorpa,
			});
			router.push("/");
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<PayPalButtons
			onClick={() => setRefreshKey(refreshKey + 1)}
			forceReRender={[cena, data]}
			className="w-full sticky "
			style={{
				shape: "rect",
			}}
			createOrder={createOrder}
			onApprove={onApprove}
		/>
	);
}

export default BasPayPa;
