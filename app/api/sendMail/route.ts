import { revalidatePath } from "next/cache";
import { nodemailToME } from "../nodemailer";
import { redirect } from "next/navigation";

export async function POST(req: Request) {
	console.log("nesto se desilo");
	try {
		console.log("nesto se desilo2");

		const data = await req.json();
		console.log(data, "jedata");
		await nodemailToME(data);
	} catch (e) {}
}
