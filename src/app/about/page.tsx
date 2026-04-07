"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen p-6 md:p-10">
      
      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold">
            About Me
          </h1>

          {/* STORY */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Story</h2>
            <p className="text-gray-600 leading-relaxed">
              I hold a Bachelor’s degree in Applied Foreign Languages and spent 8 years working abroad 
              across 4 different countries, gaining valuable cultural and professional experience.  
              After working mainly in seasonal roles, I decided to settle down and transition into 
              web development — combining my communication skills with technology to build 
              meaningful digital experiences.
            </p>
          </div>

          {/* VALUE STATEMENT (🔥 important) */}
          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="text-sm md:text-base">
              I combine strong communication skills with technical expertise to create 
              clean, user-focused web applications.
            </p>
          </div>

          <div>
  <h2 className="text-xl font-semibold mb-4">What I Bring</h2>

  <div className="grid sm:grid-cols-2 gap-4">
    {[
      "Adaptability from international experience",
      "Strong communication skills",
      "Problem-solving mindset",
      "Passion for clean UI",
    ].map((item, i) => (
      <div
        key={i}
        className="flex items-center gap-3 p-3 rounded-lg bg-gray-100"
      >
        <span className="text-green-500 text-lg">✔</span>
        <span className="text-sm sm:text-base">{item}</span>
      </div>
    ))}
  </div>
</div>

          {/* TIMELINE */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Timeline</h2>

            <div className="relative border-l-2 border-gray-300 pl-6 space-y-6">

              {[
                { year: "2016", text: "Graduated in Applied Foreign Languages" },
                { year: "2016–2023", text: "Worked abroad in 4 countries" },
                { year: "2024", text: "Started Web Development journey" },
                { year: "Now", text: "Building projects & portfolio" },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-3 top-1 w-3 h-3 bg-black rounded-full" />
                  <p className="text-sm text-gray-500">{item.year}</p>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* INTERESTS */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Interests</h2>

            <div className="flex flex-wrap gap-3">
              {["Travel", "Languages", "Technology", "Design", "Problem Solving"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - PROFILE IMAGE */}
        <div className="flex justify-center">

          <motion.img
            src="/profile-comic.png" // put your image in /public
            alt="Profile"
            className="w-62.5 md:w-87.5 rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          />

        </div>

      </div>
    </div>
  );
}