"use client";

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const subscribe = async (e:any) => {
    e.preventDefault();
    setMessage('Subscribing...');
    console.log(JSON.stringify({ email }));
    // Replace this URL with your own API route or serverless function that proxies the request to Mailchimp
    const subscribeUrl = '/api/subscribe'; 

    try {
      const response = await fetch(subscribeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      console.log("response:", response);
      if (response.ok) {
        setMessage('Subscribed!');
        setEmail('')
      }
    } catch (error) {
      setMessage('An error occurred.');
    }
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">
          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Stay in the loop</h3>
              <p className="text-purple-200 text-lg">Join our newsletter to get top news before anyone else.</p>
            </div>
            <form className="w-full lg:w-1/2" onSubmit={subscribe}>
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input
                  type="email"
                  className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400"
                  placeholder="Your best email…"
                  aria-label="Your best email…"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="btn text-purple-600 bg-purple-100 hover:bg-white shadow"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {message && <p className="text-center lg:text-left lg:absolute mt-2 text-sm">{message}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
