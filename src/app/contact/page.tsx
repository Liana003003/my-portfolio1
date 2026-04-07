"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);

    // later: connect to email service
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-10">
      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Contact Page</h1>
      <div className="p-5"></div>

      {/* INTRO TEXT */}
      <p className="max-w-xl mb-10 text-(--text)/80">
        If you&apos;re interested in my profile, have a question, or would like to collaborate,
        feel free to reach out. I’ll get back to you as soon as possible.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-20">
        
        {/* FORM */}
        <motion.form
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}

       
          onSubmit={handleSubmit}
          className="
            bg-(--card)
            backdrop-blur-lg
            border border-white/80
            rounded-2xl
            p-6
            flex flex-col gap-4
            shadow-lg
          "
        >
          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="
              bg-transparent
              border border-white/20
              rounded-lg
              px-4 py-2
              outline-none
              focus:ring-2 focus:ring-(--glow)
              transition
            "
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="
              bg-transparent
              border border-white/20
              rounded-lg
              px-4 py-2
              outline-none
              focus:ring-2 focus:ring-(--glow)
              transition
            "
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="
              bg-transparent
              border border-white/20
              rounded-lg
              px-4 py-2
              outline-none
              focus:ring-2 focus:ring-(--glow)
              transition
              resize-none
            "
          />

          {/* BUTTON */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="
                px-5 py-2
                rounded-lg
                bg-white/20
                backdrop-blur
                border border-white/30
                hover:bg-white/30
                transition
                hover:shadow-[0_0_20px_var(--glow)]
              "
            >
              Send Message
            </button>
          </div>
        
        </motion.form>

        {/* RIGHT SIDE */}
        <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
        <div className="flex flex-col justify-start gap-6">
          <h2 className="text-xl font-semibold">
            OR you can find me here:
          </h2>

          {/* EMAIL */}
          <p className="text-(--text)/80">
            📧 evangelia.alevrakis@gmail.com
          </p>

          {/* LINKS */}
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/Liana003003"
              target="_blank"
              className="
                hover:underline
                hover:text-(--glow)
                transition
              "
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="
                hover:underline
                hover:text-(--glow)
                transition
              "
            >
              LinkedIn
            </a>
          </div>
        </div>
        </motion.div>

      </div>
    </div>
  );
}