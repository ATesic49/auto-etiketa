import { korpaState } from "@/app/redux/slices/korpaSlice";
import generateAccessToken, { base } from "../../generateAccessToken";
import { handleResponse } from "../../handleResponse";
import { nodemailToME } from "../../nodemailer";

const captureOrder = async (orderID: string, ok: any) => {
	try {
		const accessToken = await generateAccessToken();
		const url = `${base}/v2/checkout/orders/${orderID}/capture`;

		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
				// Uncomment one of these to force an error for negative testing (in sandbox mode only).
				// Documentation:
				// https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
				// "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
				// "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
				// "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
			},
		});

		return handleResponse(response);
	} catch (e) {
		return Response.json("Doslo je do greske");
	}
};
interface ok {
	data: {
		name: string;
		zipCode: string;
		country: string;
		email: string;
		tel: string;
		adress: string;
	};
	constKorpa: korpaState[];
}
export async function POST(
	req: Request,
	{ params }: { params: { orderId: string } }
) {
	try {
		const ok: ok = await req.json();
		const orderId = params.orderId;
		console.log("ok", ok);

		const data = await captureOrder(orderId, ok);
		await nodemailToME(ok);

		return Response.json(data);
	} catch (e) {
		console.error(e);
		return Response.json({ status: "doslo je do greske na kraju" });
	}
}
