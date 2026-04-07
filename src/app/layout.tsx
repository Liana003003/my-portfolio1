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

  return (
    <div
      className="relative"
      style={{
        color: "var(--text-primary)",
        fontFamily: theme.font,
        minHeight: "100vh",
      }}
    >
      <AnimatedBackground theme={theme} />

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