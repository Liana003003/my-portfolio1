"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 border-b">
      <div className="font-bold">MyPortfolio</div>

      <div className="flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/work">Work</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>

        
      </div>
      <ThemeToggle />
    </nav>
  );
}