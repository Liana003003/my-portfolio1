"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

interface AnimatedLogoProps {
  text?: string;    // Big letters
  cursive?: string; // Small letters on top
}

export default function AnimatedLogo({
  text = "LIANA",
  cursive = "liana",
}: AnimatedLogoProps) {
  const { theme } = useTheme();

  const letterSpacing = 180; // spacing between big letters
  const padding = 120;       // left/right padding
  const numLetters = text.length;

  // SVG width dynamically based on number of letters
  const svgWidth = padding * 2 + letterSpacing * (numLetters - 1) + 200;

  const cursiveYOffset = 65; // distance of small letters above big letters

  const gradients = ["g1", "g2", "g3", "g4"];

  // -----------------------
  // Generate a "signature-style" path
  // -----------------------
  const generateSignaturePath = () => {
    if (numLetters < 2) return "";

    const startX = padding / 4;
    const startY = 150; // slightly below big letters
    const endX = padding + (numLetters - 1) * letterSpacing + 80;

    let path = `M${startX},${startY} `;

    // curve through letters
    for (let i = 0; i < numLetters; i++) {
      const x = padding + i * letterSpacing;
      const y = 130 + (i % 2 === 0 ? 20 : -20);
      path += `C${x - letterSpacing / 2},${y} ${x - letterSpacing / 4},${y} ${x},135 `;
    }

    // flourish at the end
    path += `C${endX - 40},140 ${endX - 20},120 ${endX},135`;

    return path;
  };

  return (
    <div className="w-full max-w-225 mx-auto">
      <motion.svg
        viewBox={`0 0 ${svgWidth} 270`}
        className="w-full h-auto"
        initial="hidden"
        animate="visible"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#34b7f4" />
            <stop offset="60%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#a3e635" />
          </linearGradient>
          <linearGradient id="g3" x1="0" x2="1">
            <stop offset="0%" stopColor="#a3e635" />
            <stop offset="45%" stopColor="#e0c33d" />
            <stop offset="100%" stopColor="#ff8800" />
          </linearGradient>
          <linearGradient id="g4" x1="0" x2="1">
            <stop offset="0%" stopColor="#f6b366" />
            <stop offset="50%" stopColor="#f46c3f" />
            <stop offset="100%" stopColor="#f40a0a" />
          </linearGradient>

          {/* Long shadow */}
          <filter id="longShadow" x="-200%" y="-200%" width="400%" height="400%">
            <feDropShadow dx="1" dy="5" floodColor="black" floodOpacity="0.9" />
            <feDropShadow dx="2" dy="10" floodColor="black" floodOpacity="0.7" />
            <feDropShadow dx="3" dy="15" floodColor="black" floodOpacity="0.5" />
            <feDropShadow dx="4" dy="20" floodColor="black" floodOpacity="0.3" />
            <feDropShadow dx="5" dy="25" floodColor="black" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* BIG LETTERS */}
        {text.split("").map((letter, i) => (
          <motion.text
            key={i}
            x={padding + i * letterSpacing + (i === 0 ? 20 : 0)}
            y="200"
            textAnchor="middle"
            fontSize="200"
            fontWeight="900"
            fontFamily="Montserrat, Arial Black, sans-serif"
            fill={`url(#${gradients[i % gradients.length]})`}
            filter="url(#longShadow)"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2 }}
            className="sm:text-[120px] md:text-[160px] lg:text-[200px]"
          >
            {letter}
          </motion.text>
        ))}

        {/* ANIMATED SIGNATURE LINE */}
        <motion.path
          d={generateSignaturePath()}
          fill="none"
          stroke={theme.colors.text}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* SMALL CURSIVE LETTERS */}
        {cursive.split("").map((letter, i) => (
          <motion.text
            key={i}
            x={padding + i * letterSpacing}
            y={200 - cursiveYOffset}
            textAnchor="middle"
            fontSize="75"
            fontFamily="Pacifico, cursive"
            fill={theme.colors.background}
            stroke={theme.colors.text}
            strokeWidth="1.8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 + i * 0.2 }}
            className="sm:text-[50px] md:text-[60px] lg:text-[75px]"
          >
            {letter}
          </motion.text>
        ))}
      </motion.svg>
    </div>
  );
}



