"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subscribe = async (e: any) => {
    e.preventDefault();
    setMessage("Subscribing...");
    console.log(JSON.stringify({ email }));
    // Replace this URL with your own API route or serverless function that proxies the request to Mailchimp
    const subscribeUrl = "/api/subscribe";

    try {
      const response = await fetch(subscribeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      console.log("response:", response);
      if (response.ok) {
        setMessage("Subscribed!");
        setEmail("");
      }
    } catch (error) {
      setMessage("An error occurred.");
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="fade-up"
        >
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
              Stay in the loop
            </h2>
            <p className="text-purple-200 text-lg">
              Join our newsletter to get top news before anyone else.
            </p>
            <form className="w-full lg:w-1/2 mx-auto" onSubmit={subscribe}>
              <div className="flex flex-col sm:flex-row items-center justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input
                  type="email"
                  className="w-full appearance-none bg-purple-500 border border-purple-500 focus:border-purple-300 rounded-lg px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-900"
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
            {message && (
              <p className="text-center lg:text-left lg:absolute mt-2 text-sm">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
