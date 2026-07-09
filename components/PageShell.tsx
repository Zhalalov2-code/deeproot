"use client";

import { motion } from "framer-motion";
import { NeonButton } from "@/components/NeonButton";
import { useSiteContent } from "@/components/LanguageProvider";

type PageShellProps = {
  crumb: string;
  title: string;
  eyebrow: string;
  text: string;
  children: React.ReactNode;
  icons?: ReadonlyArray<{ label: string; icon: React.ComponentType<{ className?: string }> }>;
  buttonHref?: string;
};

export function PageShell({ crumb, title, eyebrow, text, children, icons = [], buttonHref = "/contact" }: PageShellProps) {
  const siteContent = useSiteContent();

  return (
    <section className="relative min-h-screen overflow-hidden px-5 py-8 lg:px-10 xl:px-14">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-[1640px] grid-cols-1 items-center gap-8 lg:min-h-screen lg:grid-cols-[0.82fr_1.38fr] lg:gap-10">
        <div className="relative z-10 max-w-[520px]">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 text-xs text-slate-400 xl:mb-10">
            {siteContent.labels.home} <span className="mx-4 text-neon/60">/</span> {crumb}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="neon-text text-[2.9rem] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[3.8rem] xl:text-[4rem] 2xl:text-[4.6rem]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.65 }}
            className="mt-6 text-[13px] font-semibold uppercase tracking-[0.3em] text-cyan"
          >
            {eyebrow}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.65 }}
            className="mt-5 max-w-[440px] text-[15px] leading-7 text-slate-200"
          >
            {text}
          </motion.p>
          {icons.length ? (
            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {icons.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="text-center text-xs text-slate-300">
                    <Icon className="mx-auto mb-3 h-8 w-8 text-cyan drop-shadow-[0_0_14px_rgba(0,213,255,.8)]" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          ) : null}
          <div className="mt-8">
            <NeonButton href={buttonHref}>{siteContent.cta.primary}</NeonButton>
          </div>
        </div>
        <div className="relative min-h-[560px] lg:min-h-[680px] xl:min-h-[720px]">{children}</div>
      </div>
    </section>
  );
}
