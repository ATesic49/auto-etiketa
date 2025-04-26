"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import Paypal from "./Paypal";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
function PayForm({
	open,
	setOpen,
	cena,
}: {
	cena: number;
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const handleTelChange = (newValue: string) => {
		setData({
			...data,
			tel: newValue,
		});
	};

	const [data, setData] = useState({
		name: "",
		zipCode: "",
		country: "",
		email: "",
		adress: "",
		tel: "",
	});
	const initialOptions = {
		clientId:
			"AePqJ_ZJMB5nYGrD9ix2Ky8PD5TG_zWFB84gxxt0Df76JIF1W2BwospnQXxSEcQwNTS2hC3imABD5qUP",
		currency: "USD",
		components: "buttons",
	};

	return (
		<>
			{open && (
				<div
					className="fixed inset-0 bg-black z-[49]  bg-opacity-50"
					onClick={() => setOpen(false)}
				></div>
			)}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ x: "100%" }}
						exit={{ x: "100%" }}
						animate={{ x: "0" }}
						className="p-4 flex flex-col items-center gap-4  bottom-0 left-0 text-gray-300 md:left-auto  md:top-0 fixed right-0  bg-neutral-950 z-[60] rounded-l-lg"
					>
						<h2 className="text-lg font-bold">Plaćanje</h2>
						<div className="w-full grid grid-cols-2 z-[10] gap-4 md:gap-y-8 text-gray-600 iji">
							<input
								value={data.name}
								onChange={(e) => {
									setData({
										...data,
										name: e.target.value,
									});
								}}
								placeholder="Name "
								type="text"
								className="w-full rounded-lg col  text-base p-4 focus-within:outline-none border  focus-within:border-blue-300 focus-within:shadow-blue-200 border-gray-300 shadow-sm "
							/>
							<input
								value={data.country}
								onChange={(e) => {
									setData({
										...data,
										country: e.target.value,
									});
								}}
								type="text"
								className="w-full border-gray-300 rounded-lg text-base p-4 focus-within:outline-none border  focus-within:border-blue-300 focus-within:shadow-blue-200 shadow-sm "
								placeholder="City/Country"
							></input>

							<input
								value={data.email}
								onChange={(e) => {
									setData({
										...data,
										email: e.target.value,
									});
								}}
								type="email"
								className="w-full rounded-lg text-base p-4 focus-within:outline-none border col-span-2  md:col-span-1   focus-within:border-blue-300 focus-within:shadow-blue-200 border-gray-300 shadow-sm "
								placeholder="Email"
							></input>
							<MuiTelInput
								className="telUi ijia  bg-white w-full rounded-lg  col-span-2  md:col-span-1 focus:outline-none border border-white focus:border-blue-300 focus-within:shadow-blue-200 shadow-sm  text-xs"
								defaultCountry="RS"
								value={data.tel}
								onChange={handleTelChange}
							/>

							<input
								value={data.adress}
								type="text"
								className="w-full rounded-lg text-base p-4 focus-within:outline-none border border-gray-300 focus-within:border-blue-300 focus-within:shadow-blue-200 shadow-sm "
								onChange={(e) => {
									console.log(data);

									setData({
										...data,
										adress: e.target.value,
									});
								}}
								placeholder="Address"
							></input>
							<input
								type="text"
								value={data.zipCode}
								onChange={(e) => {
									setData({
										...data,
										zipCode: e.target.value,
									});
								}}
								placeholder="Zip-code"
								className="w-full rounded-lg text-base p-4 focus-within:outline-none border  focus-within:border-blue-300 focus-within:shadow-blue-200 border-gray-300 shadow-sm "
							/>
						</div>
						<PayPalScriptProvider options={initialOptions}>
							<Paypal
								cena={cena}
								data={data}
								setData={setData}
							/>
						</PayPalScriptProvider>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default PayForm;
