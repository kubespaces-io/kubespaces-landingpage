'use client'
import React, { useState } from "react";

type FormErrors = {
  fullname?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

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

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
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

        const { error } = await res.json();
        if (error) {
          console.error(error);
          setShowFailureMessage(true);
        } else {
          setShowSuccessMessage(true);
          setFullname("");
          setEmail("");
          setSubject("");
          setMessage("");
        }
      } catch (error) {
        console.error("Submission error", error);
        setShowFailureMessage(true);
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
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">Full Name <span className="text-red-600">*</span></label>
                  <input id="fullname" type="text" name="fullname" value={fullname} onChange={(e) => {setFullname(e.target.value);}} className="form-input w-full text-gray-300 focus:border-red-500" placeholder="Enter your first name" required />{errors?.fullname && (<p className="text-red-500">Fullname cannot be empty.</p>)}
                  <p className="text-red-500 text-sm mt-2">This field is required</p>
                </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
              <input id="email" type="text" name="email" value={email} onChange={(e) => {setEmail(e.target.value);}} className="form-input w-full text-gray-300 focus:border-red-500" placeholder="Enter your first name" required />{errors?.email && (<p className="text-red-500">Email cannot be empty.</p>)}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="subject">Subject <span className="text-red-600">*</span></label>
                  <input id="subject" type="text" name="subject" value={subject} onChange={(e) => {setSubject(e.target.value);}} className="form-input w-full text-gray-300 focus:border-red-500" placeholder="Enter your first name" required />{errors?.subject && (<p className="text-red-500">Subject cannot be empty.</p>)}
                </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">Message</label>
                  <textarea id="message" rows={4} name="message" value={message} onChange={(e) => {setMessage(e.target.value);}} className="form-textarea w-full text-gray-300" placeholder="Write your message"></textarea>{errors?.message && (<p className="text-red-500">Message body cannot be empty.</p>)}
                </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-gray-400 ml-2">I agree to the privacy policy</span>
              </label>
            </div>
          </div>
          {/* Include error handling and display logic here */}
          <button type="submit" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
            {buttonText}
          </button>
          {showSuccessMessage && <p>Message sent successfully!</p>}
          {showFailureMessage && <p>Failed to send the message. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}
