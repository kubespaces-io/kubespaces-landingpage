"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Subscribing...");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (response.ok) {
        setMessage("Subscribed!");
        setEmail("");
        setTimeout(() => {
          setMessage("");
        }, 5000);
      } else {
        setMessage(result.message || "An error occurred.");
      }
    } catch (error) {
      setMessage("An error occurred.");
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-4">
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
              Ready to simplify your Kubernetes workflow?
            </h2>
            <p className="text-gray-100 text-lg mb-4">
              Join our newsletter to get the latest news, updates, and best practices for building and scaling your applications with Kubespaces.
            </p>
            <form
              className="w-full lg:w-1/2 mx-auto"
              onSubmit={handleSubscribe}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input
                  type="email"
                  className="w-full appearance-none bg-purple-500 border border-purple-500 focus:border-purple-300 rounded-lg px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-100"
                  placeholder="Your best email…"
                  aria-label="Your best email…"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="btn text-purple-100 bg-white hover:bg-purple-500 hover:text-gray-100 shadow"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {message && (
              <div className="text-white mt-4 text-sm">{message}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
