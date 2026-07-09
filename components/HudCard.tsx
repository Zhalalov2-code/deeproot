"use client";

import { motion } from "framer-motion";

type HudCardProps = {
  title: string;
  value?: string;
  children?: React.ReactNode;
  className?: string;
  delay?: number;
};

export function HudCard({ title, value, children, className = "", delay = 0 }: HudCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className={`glass-panel holo-sheen scanline rounded-lg p-5 ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">{title}</p>
      {value ? <p className="mt-3 text-3xl font-semibold text-cyan drop-shadow-[0_0_18px_rgba(0,213,255,.65)]">{value}</p> : null}
      {children}
    </motion.div>
  );
}
