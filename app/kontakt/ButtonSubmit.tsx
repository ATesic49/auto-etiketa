"use client";
import { Icon, Progress, ProgressCircle, Spinner } from "@chakra-ui/react";
import { HiHeart } from "react-icons/hi";
import React from "react";
import { useFormStatus } from "react-dom";
const ButtonSubmit = () => {
	const { pending, data, method, action } = useFormStatus();

	return (
		<button
			type="submit"
			className=" col-span-2 ml-auto px-8 py-2 bg-orange-600  text-orange-50 w-fit disabled:bg-gray-400 disabled:text-gray-50"
			disabled={pending}
		>
			{pending ? "loading..." : "Pošalji"}
		</button>
	);
};

export default ButtonSubmit;
