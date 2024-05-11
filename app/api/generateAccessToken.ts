const { CLIENT_ID, CLIENT_SECRET } = process.env;
export const base = "https://api-m.paypal.com";
export default async function generateAccessToken() {
  try {
    if (!CLIENT_ID || !CLIENT_SECRET)
      throw new Error("MISSING_API_CREDENTIALS");

    const auth = Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString(
      "base64"
    );

    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    const data = await response.json();
    return data.access_token;
  } catch (e) {
    console.error(e, "GENERATE ACCESS TOKEN GRESKA JE U PITANJU");
  }
}
