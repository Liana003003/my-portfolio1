"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b">
      <div className="flex justify-between items-center p-4 sm:p-5">
        <Link href="/" className="font-bold text-lg sm:text-xl">
          MyPortfolio
        </Link>

        <div className="hidden lg:flex gap-4 xl:gap-6 items-center">
          <Link href="/" className="hover:opacity-70 transition">Home</Link>
          <Link href="/about" className="hover:opacity-70 transition">About</Link>
          <Link href="/skills" className="hover:opacity-70 transition">Skills</Link>
          <Link href="/work" className="hover:opacity-70 transition">Work</Link>
          <Link href="/blog" className="hover:opacity-70 transition">Blog</Link>
          <Link href="/contact" className="hover:opacity-70 transition">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

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