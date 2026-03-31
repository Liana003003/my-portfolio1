"use client";

import ThemeToggle from "../components/ThemeToggle";
import Circle from "../components/Circle";
import './globals.css';
import { User, Wrench, Briefcase, PenLine, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden p-10">

      {/* TOP LEFT THEME TOGGLE */}
      <div className="absolute top-6 left-6" style={{ zIndex: 1000 }}>
        <ThemeToggle />
      </div>

      {/* HERO CONTENT */}
      <div className="flex h-full items-center">

        {/* LEFT TEXT */}
        <div className="pl-16 pt-75 max-w-lg space-y-8">
        
  <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold tracking-tight ">
    HELLO THERE!
  </h1>

  <h2 className="text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed whitespace-nowrap">
  I’M LIANA, A FORMER LANGUAGE STUDENT <br />
  TURNED WEB DEVELOPER
</h2>

<h3 className="text-lg md:text-xl lg:text-2xl font-medium whitespace-nowrap">
  I combine communication and code to build clean, user-focused web experiences.
</h3>


</div>

      </div>

      {/* RIGHT SIDE ICONS */}
      
      <div className="absolute inset-0 ">

  <div className="absolute top-[5%] left-[45%]">
    <Circle label="About" href="/about" Icon={User} delay={0.2} />
  </div>

  <div className="absolute top-[6%] left-[58%]">
    <Circle label="Skills" href="/skills" Icon={Wrench} delay={0.4} />
  </div>

  <div className="absolute top-[11%] left-[71.5%]">
    <Circle label="Work" href="/work" Icon={Briefcase} delay={0.6} />
  </div>

  <div className="absolute top-[24%] left-[83%]">
    <Circle label="Blog" href="/blog" Icon={PenLine} delay={0.8} />
  </div>

  <div className="absolute top-[45%] left-[91%]">
    <Circle label="Contact" href="/contact" Icon={Mail} delay={1} />
  </div>

</div>

    </main>
  );
}