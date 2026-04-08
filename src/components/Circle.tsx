"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

type CircleProps = {
  label: string;
  href: string;
  Icon: LucideIcon;
  delay: number;
};

export default function Circle({ label, href, Icon, delay }: CircleProps) {
  const { theme } = useTheme(); // ✅ FIXED

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
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-24 h-24 rounded-full shadow-md flex items-center justify-center transition duration-300 group-hover:scale-110 group-hover:shadow-xl active:scale-95"
          style={{
            backgroundColor: theme.colors.surface,
            border: `1px solid ${theme.colors.textMutedOnSurface}`,
          }}
        >
          <Icon
            className="w-10 h-10 transition group-hover:scale-110"
            style={{ color: theme.colors.accent }}
          />
        </motion.div>

        {/* Tooltip */}
        <span
          className="absolute right-30 opacity-0 group-hover:opacity-100 transition text-sm"
          style={{ color: theme.colors.text }}
        >
          {label}
        </span>
      </motion.div>
    </Link>
  );
}