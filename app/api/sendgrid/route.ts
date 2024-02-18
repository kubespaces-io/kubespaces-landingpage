import sendgrid from "@sendgrid/mail";
import { log } from "console";
import type { NextRequest, NextResponse } from 'next/server'

type ResponseData = {
  message: string
};

export async function POST( req: NextRequest<ResponseData>, res: NextResponse<ResponseData>) {
    try {
      sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
      await sendgrid.send({
        to: "alessandro@kubespaces.io", // Ensure this is your email
        from: "alessandro@kubespaces.io", // Ensure this is a verified sender in SendGrid
        replyTo: req.body.email,
        subject: `[Lead from website] : ${req.body.subject}`,
        html: `Your HTML email content here...`,
      });
      // If email is sent successfully, send a 200 OK response
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      // Send a 500 Server Error response if there's an issue
      res.status(500).json({ error: error.message });
    }
  }
