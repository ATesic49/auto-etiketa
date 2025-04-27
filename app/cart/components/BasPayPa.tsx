"use client";
import { useAppSelector } from "@/app/redux/store";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { IconCreditCard } from "@tabler/icons-react";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { handleClick } from "./actions";
import { CircularProgress } from "@mui/material";

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
	const [state, setState] = useState({
		loading: false,
		success: 0,
	});
	const router = useRouter();
	const constKorpa = useAppSelector((state) => state.korpaSlice);
	// console.log(constKorpa, "korpa");
	// State to force re-render
	// const [refreshKey, setRefreshKey] = useState(0);

	// useEffect to set up an interval
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		// Update state to a new value, which will force a re-render
	// 		setRefreshKey((prevKey) => prevKey + 1);
	// 	}, 2000); // 2000 milliseconds = 2 seconds

	// 	// Clean up the interval on component unmount
	// 	return () => clearInterval(interval);
	// }, []);

	// const createOrder = async (): Promise<string> => {
	// 	console.log("HOR PEVA");
	// 	try {
	// 		const { data: orderData } = await axios.post("/api/createOrder", {
	// 			cena: Number(cena) + 8,
	// 			data,
	// 			constKorpa,
	// 		});

	// 		if (orderData.id) {
	// 			return orderData.id;
	// 		} else {
	// 			const errorDetail = orderData.details?.[0];
	// 			const errorMessage = errorDetail
	// 				? //@ts-ignore
	// 					`${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
	// 				: JSON.stringify(orderData);

	// 			throw new Error(errorMessage);
	// 		}
	// 	} catch (error) {
	// 		console.error(error);
	// 		throw error;
	// 	}
	// };

	// const onApprove = async (datqa: any, actions: any) => {
	// 	try {
	// 		const da = await axios.post(`/api/${datqa.orderID}/capturePayment`, {
	// 			data,
	// 			constKorpa,
	// 		});
	// 		router.push("/");
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	return (
		<button
			className="w-full sticky bg-gradient-to-b from-orange-400 to-orange-600 text-white  mb-4 py-2 px-4 rounded-lg font-semibold md:text-lg flex gap-2 justify-center items-center disabled:bg-gray-700 disabled:from-transparent disabled:to-transparent "
			disabled={state.loading}
			onClick={async () => {
				setState({
					...state,
					loading: true,
				});
				await handleClick({ data, constKorpa });
				setState({
					...state,
					loading: false,
				});
				router.push("/");
			}}
		>
			{/* <IconCreditCard
				className={`w-6 h-6 md:h-8 md:w-8`}
				stroke={1.8}
			/> */}
			{state.loading ? (
				<CircularProgress className="my-auto grayscale brightness-200" />
			) : (
				"Poruči"
			)}
		</button>
	);
}

export default BasPayPa;
