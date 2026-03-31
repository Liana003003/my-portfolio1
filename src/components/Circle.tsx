"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type CircleProps = {
  label: string;
  href: string;
  Icon: LucideIcon;
  delay: number;
};

export default function Circle({ label, href, Icon, delay }: CircleProps) {
  return (
    <Link href={href} aria-label={label}>
      <motion.div
  whileHover={{ scale: 1.15 }}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay }}
  className="group relative cursor-pointer flex items-center justify-center"
>
        
        {/* Circle */}
        <motion.div
  whileHover={{ scale: 1.15 }}
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="w-24 h-24 rounded-full bg-gray-200 border border-black shadow-md flex items-center justify-center transition duration-300 group-hover:scale-110 group-hover:shadow-xl active:scale-95"
>
  <Icon className="w-10 h-10 transition group-hover:scale-110" />
</motion.div>

        {/* Tooltip */}
        <span className="absolute right-30 opacity-0 group-hover:opacity-100 transition text-sm">
          {label}
        </span>
      </motion.div>
    </Link>
  );
}