/** @format */
"use client";
import PageHeader from "@/components/pageHeader";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef(null);
  const leftRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const name = formData.get("userName");
    const email = formData.get("userEmail");
    const message = formData.get("userMessage");

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:tareqmonower21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setSuccess(true);
    setError(false);
    form.reset();
  };

  const typewriterText = [
    "Email: <a href=\"mailto:tareqmonower21@gmail.com\" style=\"color: #000; font-weight: bold; text-decoration: underline;\">tareqmonower21@gmail.com</a>",
    "Phone/WhatsApp: <a href=\"https://wa.me/8801714270830?text=Hello%20there,%20Can%20we%20discuss%20about%20a%20project%20or%20a%20potential%20opportunity?\" style=\"color: #000; font-weight: bold; text-decoration: underline;\">01714270830</a>",
    "Location: Dhaka, Bangladesh",
    "Availability: Open to freelance & full-time roles",
    "Good work starts with a good conversation."
  ];

  return (
    <div className="h-full flex flex-col">
      {/* HEADER */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pt-8 sm:pt-10 lg:pt-16">
        <PageHeader
          eyebrow="Contact"
          title={
            <>
              Let&apos;s Work{" "}
              <span className="text-transparent [-webkit-text-stroke:1.5px_black]">
                Together
              </span>
            </>
          }
          description="Have a project in mind, or just want to say hi? I'd love to hear from you — I usually reply within 24 hours."
        />
      </div>

      <div className="flex-1 flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pb-24 sm:pb-35 lg:pb-40">
        {/* Left side - Typewriter animation */}
        <motion.div
          ref={leftRef}
          className="lg:h-full lg:w-1/2 flex items-center justify-start pt-6 pb-10 sm:pt-8 sm:pb-14 md:pt-12 md:pb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="w-full max-w-xl text-left h-[30vh] sm:h-[34vh] overflow-hidden lg:h-auto">
            <Typewriter
              lines={typewriterText}
              className="text-base sm:text-lg lg:text-xl font-mono leading-relaxed"
              speed={10}
              startDelay={100}
            />
          </div>
        </motion.div>

        {/* Right side - Form with revealing animation */}
        <motion.form
          ref={formRef}
          className="lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-6 justify-center p-8 sm:p-12 md:p-16 lg:p-24"
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}>
            Dear Tareq
          </motion.span>
          <motion.textarea
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            rows={6}
            className="bg-transparent py-2 border-b-2 border-b-black outline-none resize-none text-black placeholder-gray-500"
            placeholder="Write your message here"
            name="userMessage"
            required
          />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}>
            My mail address is:
          </motion.span>
          <motion.input
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none text-black placeholder-gray-500"
            placeholder="Write your email here"
            name="userEmail"
            required
          />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}>
            Regards
          </motion.span>
          <motion.input
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none text-black placeholder-gray-500"
            placeholder="Write your name here"
            name="userName"
            required
          />
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="bg-purple-200 hover:bg-purple-300 rounded font-semibold text-gray-600 p-4 transition-colors"
            type="submit">
            Send
          </motion.button>
          {success && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-black font-semibold">
              Message sent successfully
            </motion.span>
          )}
          {error && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-red-500 font-semibold">
              Something went wrong
            </motion.span>
          )}
        </motion.form>
      </div>
    </div>
  );
};

const Typewriter = ({ lines, className = "", speed = 50, startDelay = 0 }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let cancelled = false;

    const play = async () => {
      await delay(startDelay);
      let t = "";
      setText(t);

      const write = async (str) => {
        for (const ch of str) {
          if (cancelled) return;
          t += ch;
          setText(t);
          await delay(speed);
        }
      };

      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        await write(lines[i]);
        if (i < lines.length - 1) {
          t += "\n";
          setText(t);
        }
        await delay(200);
      }
    };

    play();
    return () => {
      cancelled = true;
    };
  }, [lines, speed, startDelay]);

  return (
    <div className={className} style={{ fontFamily: "var(--font-mono, monospace)", whiteSpace: "pre-wrap" }}>
      <div dangerouslySetInnerHTML={{ __html: text }} style={{ lineHeight: 1.6 }} />
      <span className="inline-block ml-1 h-8 w-[0.55em] bg-current animate-pulse" aria-hidden />
    </div>
  );
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default ContactPage;
