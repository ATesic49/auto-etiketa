"use client";
import {
	PayPalButtons,
	PayPalScriptProvider,
	usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import BasPayPa from "./BasPayPa";
import CircularProgress from "@mui/material/CircularProgress";
import { formatNumber } from "./LeftCartItem";
export default function Paypal({
	cena,
	data,
	setData,
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
	setData: React.Dispatch<
		React.SetStateAction<{
			name: string;
			zipCode: string;
			country: string;
			email: string;
			adress: string;
			tel: string;
		}>
	>;
}) {
	const validateData = () => {
		if (data.name.length < 3) return false;
		if (data.country.length < 3) return false;
		if (data.tel.length < 6) return false;
		if (data.adress.length < 4) return false;
		if (data.zipCode.length < 5) return false;
		if (!data.email.includes("@") || data.email.length < 9) return false;
		return true;
	};

	const createOrder = async (): Promise<string> => {
		try {
			console.log("ovo je dataasdaasdsads");
			const { data: orderData } = await axios.post("/api/createOrder", {
				cena: Number(cena) + 10,
				data,
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
			const da = await axios.post(`/api/${datqa.orderID}/capturePayment`, data);
			console.log("au brate pa ovo je taj", da);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			{" "}
			<>
				{validateData() ? (
					<div className=" md:px-8 px-2 left-0 bottom-2 flex flex-col gap-2 w-full mt-auto -mb-6">
						<div className="flex flex-col-reverse w-full item-center gap-1 justify-center text-gray-500 ">
							<div className="w-full border-t-2 border-gray-300 flex justify-between items-center pt-2">
								<p>Ukupno</p>
								<p>{formatNumber(cena + (cena <= 2000 ? 550 : 0))} RSD</p>
							</div>
							<div className="w-full  border-gray-200 pb-2 flex justify-between items-center peer cursor-pointer group">
								<p className=" ">
									<span className="group-hover:underline underline-offset-2">
										Dostava
									</span>
									*
								</p>
								<p>{cena <= 2000 ? "550" : "0"}RSD</p>
							</div>
							<div className="text-[10px] text-xs  text-gray-500 peer-hover:opacity-100 opacity-0  duration-200">
								Dostava Besplatna za porudzbine preko 2000din
							</div>
						</div>

						<BasPayPa
							cena={cena}
							data={data}
						/>
						<div className="fixed top-1/2"></div>
					</div>
				) : (
					<>
						<div className="my-auto text-lg font-bold text-gray-600">
							{" "}
							Molimo vas popunite sva polja
						</div>
					</>
				)}
			</>
		</>
	);
}
