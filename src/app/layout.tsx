"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import "./globals.css";
import AnimatedBackground from "../components/AnimatedBackground";


function ThemedLayout({ children }: { children: React.ReactNode }) {
  const { theme, mounted } = useTheme();
  const pathname = usePathname();

  if (!mounted) return null;

  const getNebulaPosition = () => {
    switch (pathname) {
      case "/":
        return { x: 0.7, y: 0.3, size: 1.2 };
      case "/about":
        return { x: 0.2, y: 0.5, size: 1 };
      case "/skills":
        return { x: 0.8, y: 0.6, size: 1.1 };
      case "/work":
        return { x: 0.5, y: 0.2, size: 1.3 };
      case "/blog":
        return { x: 0.3, y: 0.7, size: 0.9 };
      case "/contact":
        return { x: 0.75, y: 0.4, size: 1.15 };
      default:
        return { x: 0.7, y: 0.3, size: 1.2 };
    }
  };

  const nebulaPos = getNebulaPosition();

  return (
    <div
      className="relative"
      style={{
        color: "var(--text-primary)",
        fontFamily: theme.font,
        minHeight: "100vh",
      }}
    >
      <AnimatedBackground
        theme={theme}
        nebulaX={nebulaPos.x}
        nebulaY={nebulaPos.y}
        nebulaSize={nebulaPos.size}
      />

      <div className="relative z-10">
        {pathname !== "/" && <Navbar />}
        {children}
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ThemedLayout>{children}</ThemedLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}