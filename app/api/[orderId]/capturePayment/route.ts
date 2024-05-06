import generateAccessToken, { base } from "../../generateAccessToken";
import { handleResponse } from "../../handleResponse";

const captureOrder = async (orderID: string) => {
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
};

export async function POST(
  req: Request,
  { params }: { params: { orderId: string } }
) {
  const orderId = params.orderId;
  try {
    const data = await captureOrder(orderId);

    return Response.json(data);
  } catch (e) {
    console.error(e);
    return Response.json({ status: "doslo je do greske na kraju" });
  }
}
