import sendgrid from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest, res: NextResponse<ResponseData>) {
  const body = await req.json();
  try {
    await sendgrid.send({
      to: "hello@kubespaces.io", // Ensure this is your email
      from: "hello@kubespaces.io", // Ensure this is a verified sender in SendGrid
      replyTo: body.email,
      subject: `[Contact Form] : ${body.subject}`,
      html: `
      Good news! ${body.fullname} has sent you a message with the following content: <br> 
      ${body.message} <br> 
      You can reply to this email: ${body.email}
    `,
    });
    // Return a success response
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    // Return a more descriptive error message
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred.";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
