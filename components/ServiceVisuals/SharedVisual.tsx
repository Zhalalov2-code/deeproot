"use client";

import { motion } from "framer-motion";

export function HologramStage({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(0,213,255,.2),rgba(0,140,255,.08)_32%,transparent_62%)] blur-2xl" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[16%] h-64 w-64 rounded-full border border-cyan/35 shadow-[0_0_70px_rgba(0,213,255,.36),inset_0_0_40px_rgba(0,140,255,.16)]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[13%] h-80 w-80 rounded-full border border-dashed border-neon/25"
      />
      <motion.div
        animate={{ scale: [1, 1.09, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[19%] h-36 w-[min(31rem,94%)] rounded-[50%] border border-neon/40 bg-neon/8 shadow-[0_0_70px_rgba(0,140,255,.32)] blur-[1px]"
      />
      <div className="absolute inset-x-[12%] bottom-[17%] h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent opacity-75" />
      <svg className="absolute inset-0 h-full w-full opacity-45" aria-hidden="true">
        <g stroke="#00D5FF" strokeWidth="1">
          {Array.from({ length: 12 }).map((_, index) => (
            <motion.line
              key={index}
              x1={`${12 + index * 7}%`}
              y1="12%"
              x2={`${24 + index * 6}%`}
              y2="82%"
              strokeDasharray="6 16"
              animate={{ strokeDashoffset: [0, -120], opacity: [0.18, 0.6, 0.18] }}
              transition={{ duration: 8 + index * 0.25, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </g>
      </svg>
      {children}
    </div>
  );
}

export function MiniPanel({
  title,
  children,
  className = "",
  delay = 0
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -10 }}
      animate={{ opacity: 1, y: [0, -8, 0], rotateX: 0 }}
      transition={{ opacity: { delay, duration: 0.5 }, y: { delay, duration: 5, repeat: Infinity, ease: "easeInOut" } }}
      className={`glass-panel holo-sheen premium-border absolute rounded-lg p-4 text-xs text-slate-300 shadow-[0_0_34px_rgba(0,140,255,.18)] ${className}`}
    >
      <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan/80 to-transparent" />
      <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-slate-200">{title}</p>
      {children}
    </motion.div>
  );
}

export function RingGauge({ percent, label }: { percent: number; label?: string }) {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  return (
    <span className="inline-flex items-center gap-3">
      <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90" aria-hidden="true">
        <circle cx="32" cy="32" r={radius} fill="none" stroke="rgba(0,140,255,.2)" strokeWidth="5" />
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="#00D5FF"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - percent / 100)}
          style={{ filter: "drop-shadow(0 0 8px rgba(0,213,255,.8))" }}
        />
      </svg>
      <span className="text-xl font-semibold text-cyan drop-shadow-[0_0_14px_rgba(0,213,255,.7)]">
        {percent}%{label ? <span className="block text-[11px] font-normal tracking-normal text-slate-300">{label}</span> : null}
      </span>
    </span>
  );
}

export function ChartLines() {
  return (
    <svg viewBox="0 0 180 70" className="h-20 w-full" aria-hidden="true">
      <path d="M4 52L22 33L37 45L54 19L73 42L91 24L110 30L128 13L147 36L176 17" fill="none" stroke="#00D5FF" strokeWidth="3" />
      <path d="M4 52L22 33L37 45L54 19L73 42L91 24L110 30L128 13L147 36L176 17V70H4Z" fill="url(#fillChart)" opacity=".38" />
      <defs>
        <linearGradient id="fillChart" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="#00D5FF" />
          <stop offset="1" stopColor="#008CFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
