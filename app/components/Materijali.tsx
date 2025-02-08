import Image from "next/image";
import React from "react";
import materijal from "@/public/imgs/Materijal.jpg";
function Materijali() {
	return (
		<div className="flex flex-col w-full px-8 md:px-16 items-center justify-center md:gap-0 gap-4 mt-16">
			<h2 className="text-2xl md:text-4xl text-gray-300 font-black">
				Materijali
			</h2>
			<div className="flex w-full justify-between items-center md:flex-row-reverse flex-col-reverse  gap-8">
				<div className="flex flex-col gap-2 font-medium text-lg justify-center text-gray-400">
					<p>PVC materijal otporan na spoljašnje uticaje.</p>
					<p>
						Laka montaža uz pomoć obostrano lepljive 3M VHB za spoljnu upotrebu.
						Snažan akrilni lepak sa viskoelastičnim svojstvima i otporosti na
						visoke i niske temerature omogućava sigurno postavljanje Vaše
						AutoEtikete.
					</p>
				</div>
				<Image
					alt=""
					src={materijal}
					className="md:w-2/5 w-full"
				></Image>
			</div>
		</div>
	);
}

export default Materijali;
