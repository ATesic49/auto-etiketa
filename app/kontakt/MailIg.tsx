import { Card } from "@chakra-ui/react";
import React from "react";
import Cart from "../cart/components/Cart";
import { LuInstagram } from "react-icons/lu";

const MailIg = () => {
	return (
		<div className="flex justify-center items-center w-full border-t border-gray-600">
			<h2>Pišite nam putem:</h2>
			<div className="gap-8 w-full grid grid-cols-2"></div>
		</div>
	);
};

export default MailIg;
