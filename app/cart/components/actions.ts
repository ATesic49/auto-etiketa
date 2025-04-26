import { korpaState } from "@/app/redux/slices/korpaSlice";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const handleClick = async ({
	data,
	constKorpa,
}: {
	data: {
		name: string;
		zipCode: string;
		country: string;
		email: string;
		adress: string;
		tel: string;
	};
	constKorpa: korpaState[];
}) => {
	try {
		console.log("ovde smo");
		const da = await axios.post("/api/sendMail", {
			data,
			constKorpa,
		});
		if (da.data.status === "ok") {
		}
	} catch (e) {
		console.log("error", e);
	}
};
