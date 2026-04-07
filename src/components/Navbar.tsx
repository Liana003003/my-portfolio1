"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import AnimatedLogo from "../components/AnimatedLogo";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b">
      <div className="flex justify-between items-center p-4 sm:p-5">

        {/* ✅ LOGO (NO LINK) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="
            w-20
            sm:w-10
            md:w-20
            lg:w-30
            xl:w-40
          "
        >
          <AnimatedLogo />
        </motion.div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-4 xl:gap-6 items-center">
          <Link href="/" className="hover:opacity-70 transition">Home</Link>
          <Link href="/about" className="hover:opacity-70 transition">About</Link>
          <Link href="/skills" className="hover:opacity-70 transition">Skills</Link>
          <Link href="/work" className="hover:opacity-70 transition">Work</Link>
          <Link href="/contact" className="hover:opacity-70 transition">Contact</Link>
          <Link href="/blog" className="hover:opacity-70 transition">Blog</Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* HAMBURGER */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden border-t">
          <div className="flex flex-col p-4 space-y-3">
            <Link href="/" onClick={toggleMenu} className="py-2 hover:opacity-70 transition">
              Home
            </Link>
            <Link href="/about" onClick={toggleMenu} className="py-2 hover:opacity-70 transition">
              About
            </Link>
            <Link href="/skills" onClick={toggleMenu} className="py-2 hover:opacity-70 transition">
              Skills
            </Link>
            <Link href="/work" onClick={toggleMenu} className="py-2 hover:opacity-70 transition">
              Work
            </Link>
            <Link href="/blog" onClick={toggleMenu} className="py-2 hover:opacity-70 transition">
              Blog
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="py-2 hover:opacity-70 transition">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}