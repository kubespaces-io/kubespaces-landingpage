import sendgrid from "@sendgrid/mail";
import type { NextRequest, NextResponse } from 'next/server'

type ResponseData = {
    message: string
};

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest, res: NextResponse<ResponseData>) {
    const body = await req.json();
        try {
            await sendgrid.send({
                to: "hello@kubespaces.io", // Ensure this is your email
                from: "hello@kubespaces.io", // Ensure this is a verified sender in SendGrid
                replyTo: `${JSON.stringify(body.email)}`,
                subject: `[Contact Form] : ${JSON.stringify(body.subject)}`,
                html: `Good news! ${JSON.stringify(body.fullname)} has sent you a message with the following content: <br> ${JSON.stringify(body.message)} <br> You can reply to this email: ${JSON.stringify(body.email)}`,
            });
    // If email is sent successfully, send a 200 OK response
    // console.log(req);
    return new Response(`The email was sent from: ${JSON.stringify(body.email)}, the subject is ${JSON.stringify(body.subject)}; the call comes from ${req.headers.get('X-Forwarded-For')}`, {
        status: 200  });
    // res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
    console.error(error);
    // Send a 500 Server Error response if there's an issue
    // res.status(500).json({ error: error.message });
    return new Response(`The email is: ${JSON.stringify(body.email)}, the subject is ${JSON.stringify(body.subject)}; the call comes from ${req.headers.get('X-Forwarded-For')}`, {
        status: 500  });
    }
} 