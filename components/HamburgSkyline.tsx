"use client";

import { motion } from "framer-motion";

export function HamburgSkyline() {
  return (
    <motion.svg
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewBox="0 0 1200 560"
      className="absolute inset-x-0 bottom-0 h-[62vh] min-h-[470px] w-full overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyline" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#00D5FF" />
          <stop offset="60%" stopColor="#008CFF" />
          <stop offset="100%" stopColor="#0047FF" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="5.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="reflection" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#00D5FF" stopOpacity=".42" />
          <stop offset="100%" stopColor="#008CFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.g
        stroke="#00D5FF"
        strokeWidth="1"
        opacity=".22"
        animate={{ y: [0, 18, 0], opacity: [0.16, 0.34, 0.16] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {Array.from({ length: 34 }).map((_, index) => (
          <line key={index} x1={index * 38} y1="42" x2={index * 38 + 18} y2="406" />
        ))}
      </motion.g>
      <g stroke="url(#skyline)" strokeWidth="2" fill="rgba(0,140,255,.035)" filter="url(#glow)">
        <path d="M5 392H80L120 300L165 392H225L245 258L265 392H330L342 230L354 392H414V255H492V392H552V182L595 118L640 182V392H706V258Q736 224 766 250Q796 276 826 242Q856 208 886 240Q916 272 946 230Q966 208 986 226V392H1050V155L1072 110L1094 155V392H1195" />
        <path d="M48 392V304M80 392V304M120 392V300M165 392V300M226 392H300M414 255L492 392M492 255L414 392" opacity=".55" />
        <path d="M565 385V190H626V385M582 170h28M588 145h16" opacity=".75" />
        <path d="M706 302H986M706 332H986M706 362H986M736 302V392M766 302V392M796 302V392M826 302V392M856 302V392M886 302V392M916 302V392M946 302V392" opacity=".4" />
        <path d="M1060 184H1084M1052 225H1092M1044 268H1102" opacity=".65" />
        <path d="M0 409C120 398 220 418 335 406C445 394 540 415 650 404C785 391 900 418 1015 406C1088 398 1148 404 1200 398" fill="none" opacity=".9" />
        <path d="M325 442H510L560 415L615 442H705L734 426L765 442H930" fill="none" opacity=".8" />
      </g>
      <g fill="#00D5FF" opacity=".76" filter="url(#glow)">
        {Array.from({ length: 96 }).map((_, index) => (
          <rect
            key={index}
            x={415 + ((index * 19) % 640)}
            y={238 + ((index * 31) % 142)}
            width={index % 3 === 0 ? 4 : 3}
            height={index % 4 === 0 ? 9 : 5}
            rx="1"
            opacity={0.28 + ((index * 13) % 60) / 100}
          />
        ))}
      </g>
      <g stroke="#00D5FF" strokeWidth="1" opacity=".36">
        {Array.from({ length: 22 }).map((_, index) => (
          <line key={index} x1={index * 58 + 12} y1="0" x2={index * 58 - 8} y2="430" />
        ))}
      </g>
      <g fill="#00D5FF" opacity=".9">
        {Array.from({ length: 80 }).map((_, index) => (
          <circle key={index} cx={(index * 97) % 1200} cy={40 + ((index * 53) % 380)} r={index % 5 === 0 ? 2.5 : 1.25} />
        ))}
      </g>
      <g stroke="#008CFF" opacity=".3">
        {Array.from({ length: 12 }).map((_, index) => (
          <path key={index} d={`M${index * 105} 442 C ${250 + index * 22} ${498 + index * 2}, ${760 - index * 12} ${498 - index * 4}, 1200 ${455 + index * 6}`} fill="none" />
        ))}
      </g>
      <g stroke="url(#reflection)" opacity=".5" filter="url(#glow)">
        {Array.from({ length: 38 }).map((_, index) => (
          <line key={index} x1={index * 33 + 12} y1="420" x2={index * 33 + 4} y2={500 + ((index * 19) % 58)} />
        ))}
      </g>
      <motion.g
        animate={{ x: [0, 26, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        filter="url(#glow)"
      >
        <g stroke="#00D5FF" strokeWidth="1.5" fill="rgba(0,140,255,.1)">
          <path d="M568 486L582 508H696L712 486Z" />
          <path d="M676 486V468H690V486" />
          <rect x="594" y="478" width="17" height="8" />
          <rect x="613" y="478" width="17" height="8" />
          <rect x="632" y="478" width="17" height="8" />
          <rect x="602" y="469" width="17" height="8" />
          <rect x="621" y="469" width="17" height="8" />
        </g>
        <g stroke="#00D5FF" fill="none">
          <ellipse cx="640" cy="509" rx="55" ry="9" opacity=".5" />
          <ellipse cx="640" cy="509" rx="95" ry="16" opacity=".3" />
          <ellipse cx="640" cy="509" rx="140" ry="24" opacity=".16" />
        </g>
      </motion.g>
      <motion.g
        fill="#00D5FF"
        animate={{ opacity: [0.25, 1, 0.25] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="595" cy="118" r="4" />
        <circle cx="1072" cy="110" r="4" />
        <circle cx="245" cy="258" r="3" />
      </motion.g>
    </motion.svg>
  );
}
