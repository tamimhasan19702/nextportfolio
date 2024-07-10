/** @format */
"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        "process.env.NEXT_PUBLIC_SERVICE_ID",
        "process.env.NEXT_PUBLIC_TEMPLATE_ID",
        form.current,
        "process.env.NEXT_PUBLIC_KEY "
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}>
                {letter}
              </motion.span>
            ))}{" "}
            😄
          </div>
        </div>

        {/* form container */}
        <form
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-6 justify-center p-24"
          ref={form}
          onSubmit={sendEmail}>
          <span>Dear Tareq</span>
          <input
            type="textarea"
            row={6}
            className="bg-transparent py-2 border-b-2 border-b-black outline-none resize-none"
            placeholder="Write your message here"
            name="userMessage"
          />
          <span>My mail address is:</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none "
            placeholder="Write your email here"
            name="userEmail"
          />
          <span>Regards</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
            placeholder="Write your name here"
            name="userName"
          />
          <button
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4"
            type="submit">
            Send
          </button>
          {success && (
            <span className="text-green-500 font-semibold">Message sent</span>
          )}
          {error && (
            <span className="text-red-500 font-semibold">
              Something went wrong
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
