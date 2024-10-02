"use client";
import React, { useState } from "react";

type FormErrors = {
  fullname?: string;
  email?: string;
  subject?: string;
  message?: string;
  privacy?: string;
};

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [privacy, setPrivacy] = useState("false");
  const [errors, setErrors] = useState<FormErrors>({});
  const [buttonText, setButtonText] = useState("Send");
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleValidation = () => {
    let tempErrors: FormErrors = {};
    let isValid = true;

    if (fullname.trim() === "") {
      tempErrors["fullname"] = "Fullname cannot be empty.";
      isValid = false;
    }
    if (email.trim() === "") {
      tempErrors["email"] = "Email cannot be empty.";
      isValid = false;
    }
    if (subject.trim() === "") {
      tempErrors["subject"] = "Subject cannot be empty.";
      isValid = false;
    }
    if (message.trim() === "") {
      tempErrors["message"] = "Message cannot be empty.";
      isValid = false;
    }
    if (privacy === "false") {
      tempErrors["privacy"] = "You must accept the privacy policy.";
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending...");
      try {
        const res = await fetch("/api/sendgrid", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullname, email, subject, message }),
        });

        const data = await res.json();
        if (!res.ok) {
          console.error("Submission error", data.error);
          setResponseMessage("Failed to send the message. Please try again.");
        } else {
          console.log("Submission successful", data.message);
          setResponseMessage(data.message);
          setFullname("");
          setEmail("");
          setSubject("");
          setMessage("");
        }

        setTimeout(() => {
          setResponseMessage(null);
        }, 5000);
      } catch (error) {
        console.error("Submission error", error);
      } finally {
        setButtonText("Send");
      }
    }
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          {/* Input fields and labels */}
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3 mb-4 md:mb-0">
              <label
                className="block text-gray-600 text-sm font-medium mb-1"
                htmlFor="first-name"
              >
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                id="fullname"
                type="text"
                name="fullname"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                className="form-input w-full text-gray-700 focus:border-red-500"
                placeholder="Enter your Name"
                required
              />
              {errors?.fullname && (
                <p className="text-red-500">Fullname cannot be empty.</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-600 text-sm font-medium mb-1"
                htmlFor="email"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-input w-full text-gray-700 focus:border-red-500"
                placeholder="Enter your email"
                required
              />
              {errors?.email && (
                <p className="text-red-500">Email cannot be empty.</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-600 text-sm font-medium mb-1"
                htmlFor="subject"
              >
                Subject <span className="text-red-600">*</span>
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                className="form-input w-full text-gray-700 focus:border-red-500"
                placeholder="Enter your subject"
                required
              />
              {errors?.subject && (
                <p className="text-red-500">Subject cannot be empty.</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-600 text-sm font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="form-textarea w-full text-gray-700"
                placeholder="Write your message"
              ></textarea>
              {errors?.message && (
                <p className="text-red-500">Message body cannot be empty.</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={privacy === "true"}
                  onChange={(e) => {
                    setPrivacy(e.target.checked ? "true" : "false");
                  }}
                  className="form-checkbox"
                />
                <span className="text-purple-600 ml-2">
                  I agree to the privacy policy
                </span>
              </label>
              {errors?.privacy && (
                <p className="text-red-500">
                  You must accept the privacy policy.
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
          >
            {buttonText}
          </button>
          {responseMessage && <p>{responseMessage}</p>}
        </form>
      </div>
    </section>
  );
}
