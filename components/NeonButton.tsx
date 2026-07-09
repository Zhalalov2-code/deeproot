"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type NeonButtonProps = {
  href?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function NeonButton({ href, children, type = "button", disabled = false }: NeonButtonProps) {
  const className =
    "group inline-flex h-12 items-center justify-center gap-4 rounded-md border border-neon/45 bg-cyan/0 px-7 text-sm font-semibold text-white shadow-[0_0_22px_rgba(0,140,255,.16)] outline-none transition hover:border-cyan hover:bg-neon/10 hover:shadow-neon focus-visible:border-cyan focus-visible:ring-2 focus-visible:ring-cyan/50 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-neon/45 disabled:hover:bg-cyan/0 disabled:hover:shadow-[0_0_22px_rgba(0,140,255,.16)]";

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 text-cyan transition group-hover:translate-x-1" />
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={className}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      type={type}
      disabled={disabled}
      className={className}
    >
      {content}
    </motion.button>
  );
}
