// pages/api/subscribe.js

export default async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
  
    try {
        const API_KEY = process.env.MAILCHIMP_API_KEY
        const API_SERVER = process.env.MAILCHIMP_API_SERVER
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
  
      const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
        method: 'POST',
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        return res.status(response.status).json({ error: errorData.title || 'Failed to subscribe' });
      }
  
      return res.status(201).json({ error: '' });
    } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
    }
  };
  