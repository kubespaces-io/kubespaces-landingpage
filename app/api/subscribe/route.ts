// pages/api/subscribe.js

// export async function GET(request: Request) {
//   return new Response('Hello, Next.js!')
// }
import type { NextRequest, NextResponse } from 'next/server'

type ResponseData = {
  message: string
};

export async function POST( req: NextRequest, res: NextResponse<ResponseData>) {
  const { email } = await req.json();
  console.log("fregraccia",email);
  
    try {
        const API_KEY = process.env.MAILCHIMP_API_KEY
        const API_SERVER = process.env.MAILCHIMP_API_SERVER
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

      const response = await fetch(`https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      });

      return response;


  } catch (error) {
    console.log(error);
    }  
  }