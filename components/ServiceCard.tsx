"use client";

import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  text: string;
  href: string;
  icon: LucideIcon;
  delay?: number;
};

export function ServiceCard({ title, text, href, icon: Icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.65, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <Link
        href={href}
        className="premium-border holo-sheen group relative block min-h-44 overflow-hidden rounded-lg border border-neon/30 bg-[linear-gradient(145deg,rgba(5,17,40,.78),rgba(2,8,20,.58))] p-4 pb-11 shadow-[inset_0_0_30px_rgba(0,140,255,.08)] backdrop-blur-2xl transition duration-300 hover:border-cyan/90 hover:bg-neon/10 hover:shadow-[0_0_34px_rgba(0,213,255,.34),inset_0_0_42px_rgba(0,140,255,.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50"
      >
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neon/20 blur-3xl transition group-hover:bg-cyan/35" />
        <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent opacity-70" />
        <Icon className="h-8 w-8 text-cyan drop-shadow-[0_0_22px_rgba(0,213,255,.9)] transition group-hover:scale-110" />
        <h3 className="mt-5 text-[13px] font-semibold uppercase leading-snug tracking-[0.03em] text-white">{title}</h3>
        <p className="mt-2 text-xs leading-5 text-slate-300">{text}</p>
        <ArrowRight className="absolute bottom-4 right-4 h-5 w-5 text-cyan drop-shadow-[0_0_12px_rgba(0,213,255,.8)] transition group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
