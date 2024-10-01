import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

const createResponse = (
  message: string,
  status: number
): NextResponse<ResponseData> => {
  return NextResponse.json({ message }, { status });
};

export async function POST(
  req: NextRequest
): Promise<NextResponse<ResponseData>> {
  const { email } = await req.json();
  console.log("Email received", email);

  try {
    const { MAILCHIMP_API_KEY, MAILCHIMP_API_SERVER, MAILCHIMP_AUDIENCE_ID } =
      process.env;

    const response = await fetch(
      `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      }
    );
    if (response.ok) {
      return createResponse("Subscription successful", 200);
    }
    const errorData = await response.json();
    console.error("Mailchimp error:", errorData);
    switch (errorData.title) {
      case "Member Exists":
        return createResponse("You are already subscribed!", 400);
      case "Invalid Resource":
        return createResponse("Invalid email address", 400);
      default:
        return createResponse("Error occurred", response.status);
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return createResponse("Error occurred", 500);
  }
}
