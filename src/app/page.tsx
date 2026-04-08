"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import HamburgerMenu from "../components/HamburgerMenu";
import Circle from "../components/Circle";
import './globals.css';
import { User, Wrench, Briefcase, PenLine, Mail } from "lucide-react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden px-4 sm:px-6 md:px-10 py-10">

      <div className="absolute top-6 left-4 sm:left-6 z-50">
        <ThemeToggle />
      </div>

      {isMobile && <HamburgerMenu />}

      <div className="flex h-full items-center justify-center lg:justify-start lg:items-end min-h-[calc(100vh-8.5rem)]">

        <div className="text-center lg:text-left lg:pl-16 max-w-full lg:max-w-lg space-y-4 sm:space-y-6 md:space-y-8 px-4">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            HELLO THERE!
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed">
            I&apos;M LIANA, A FORMER LANGUAGE STUDENT<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>TURNED WEB DEVELOPER
          </h2>

          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
            I combine communication and code to build clean, user-focused web experiences.
          </h3>

        </div>

      </div>

      {!isMobile && (
        <div className="absolute inset-0 hidden lg:block">

          <div className="absolute top-[5%] left-[45%]">
            <Circle label="About" href="/about" Icon={User} delay={0.2} />
          </div>

          <div className="absolute top-[6%] left-[59%]">
            <Circle label="Skills" href="/skills" Icon={Wrench} delay={0.4} />
          </div>

          <div className="absolute top-[11%] left-[71.5%]">
            <Circle label="Work" href="/work" Icon={Briefcase} delay={0.6} />
          </div>

          <div className="absolute top-[24%] left-[83%]">
            <Circle label="Blog" href="/blog" Icon={PenLine} delay={0.8} />
          </div>

          <div className="absolute top-[45%] left-[90%]">
            <Circle label="Contact" href="/contact" Icon={Mail} delay={1} />
          </div>

        </div>
      )}

    </main>
  );
}