import sendgrid from "@sendgrid/mail";

// Assuming SENDGRID_API_KEY is set in your environment variables
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// Correctly export the API route handler
export async function POST(req, res) {
    try {
      await sendgrid.send({
        to: "alessandro@kubespaces.io", // Ensure this is your email
        from: "alessandro@kubespaces.io", // Ensure this is a verified sender in SendGrid
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
