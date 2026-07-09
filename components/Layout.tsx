"use client";

import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { CookieBanner } from "@/components/CookieBanner";

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-void">
      <ParticleBackground />
      <div className="pointer-events-none fixed inset-0 z-0 grid-mask opacity-70" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_72%_18%,rgba(0,213,255,.12),transparent_30rem),linear-gradient(90deg,rgba(0,0,0,.22),transparent_34%,rgba(0,0,0,.34))]" />
      <Sidebar />
      <main className="relative z-10 min-h-screen pt-20 lg:ml-[260px] lg:pt-0">
        <div className="absolute right-8 top-7 z-20 hidden items-center gap-8 text-sm text-white lg:flex">
          <LanguageSwitcher />
          <button className="text-slate-300 transition hover:text-cyan" type="button" aria-label="Menü">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-screen"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <CookieBanner />
    </div>
  );
}
