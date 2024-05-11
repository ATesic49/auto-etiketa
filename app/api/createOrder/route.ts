import generateAccessToken, { base } from "../generateAccessToken";
import { handleResponse } from "../handleResponse";
const { CLIENT_ID, CLIENT_SECRET } = process.env;

const createOrder = async (data: any) => {
  try {
    if (!CLIENT_ID || !CLIENT_SECRET)
      throw new Error("Missing Api Credientials");

    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;
    const payload = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: data.cena,
          },
        },
      ],
    };

    //to su sve konstante
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        // Uncomment one of these to force an error for negative testing (in sandbox mode only).
        // Documentation: https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
        // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
        // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
        // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
      },
      method: "POST",
      body: JSON.stringify(payload),
    });
    return response;
  } catch (e) {
    console.error(e);
  }
};
export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log(data, "dada");
    const order = await createOrder(data);
    if (!order) throw new Error("generisanje Ordera nije radilo");

    const handledResponse = await handleResponse(order);
    return Response.json(handledResponse, data);
  } catch (e) {
    console.error("ERROR", e);
    return Response.json({ success: "nije" });
  }
}
