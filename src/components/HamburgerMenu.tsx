"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, User, Wrench, Briefcase, PenLine, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "About", href: "/about", Icon: User },
    { label: "Skills", href: "/skills", Icon: Wrench },
    { label: "Work", href: "/work", Icon: Briefcase },
    { label: "Blog", href: "/blog", Icon: PenLine },
    { label: "Contact", href: "/contact", Icon: Mail },
  ];

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Toggle menu"
        style={{
          borderColor: theme.colors.primary,
          borderWidth: '2px'
        }}
      >
        {isOpen ? (
          <X className="w-6 h-6" style={{ color: theme.colors.primary }} />
        ) : (
          <Menu className="w-6 h-6" style={{ color: theme.colors.primary }} />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-40 overflow-y-auto"
              style={{
                backgroundColor: theme.colors.background,
                borderLeft: `2px solid ${theme.colors.primary}`
              }}
            >
              <nav className="flex flex-col p-8 pt-24 space-y-6">
                {menuItems.map((item, index) => {
                  const { Icon } = item;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:shadow-md"
                        style={{
                          color: theme.colors.text,
                          backgroundColor: 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = theme.colors.backgroundAlt;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: theme.colors.primary }} />
                        <span className="text-lg font-medium">{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
