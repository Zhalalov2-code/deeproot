"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { legalLinkLabels } from "@/data/legal";
import { useLanguage, useSiteContent } from "@/components/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

function Logo() {
  return (
    <Link href="/" className="relative inline-flex items-center gap-2 text-3xl font-bold tracking-[-0.06em] text-white">
      <span className="absolute -inset-4 rounded-full bg-neon/20 blur-2xl" />
      <span className="relative">
      Deep<span className="text-neon drop-shadow-[0_0_14px_rgba(0,140,255,.9)]">Root</span>
      </span>
      <Image
        src="/logo.png"
        alt="DeepRoot Logo"
        width={36}
        height={36}
        priority
        className="relative h-9 w-9 drop-shadow-[0_0_14px_rgba(0,213,255,.8)]"
      />
    </Link>
  );
}

function LegalLinks({ onNavigate }: { onNavigate?: () => void }) {
  const { language } = useLanguage();
  const labels = legalLinkLabels[language];

  return (
    <div className="flex items-center gap-4 px-1 text-[11px] text-slate-500">
      <Link href="/impressum" onClick={onNavigate} className="transition hover:text-cyan">
        {labels.impressum}
      </Link>
      <span className="text-slate-700">·</span>
      <Link href="/datenschutz" onClick={onNavigate} className="transition hover:text-cyan">
        {labels.datenschutz}
      </Link>
    </div>
  );
}

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const content = useSiteContent();

  return (
    <nav className="mt-8 space-y-2">
      {navigation.map((item, index) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`premium-border group relative flex items-center gap-4 overflow-hidden rounded-md border px-4 py-2.5 text-sm transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 ${
              active
                ? "border-cyan/55 bg-[linear-gradient(90deg,rgba(0,140,255,.2),rgba(0,213,255,.05))] text-white shadow-[0_0_30px_rgba(0,140,255,.32),inset_0_0_24px_rgba(0,213,255,.08)]"
                : "border-transparent text-slate-300 hover:border-neon/35 hover:bg-neon/10 hover:text-white hover:shadow-[0_0_22px_rgba(0,140,255,.18)]"
            }`}
          >
            {active ? <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-cyan shadow-[0_0_18px_rgba(0,213,255,1)]" /> : null}
            <Icon className={`h-5 w-5 ${active ? "text-cyan" : "text-neon"} drop-shadow-[0_0_12px_rgba(0,140,255,.75)]`} />
            <span>{content.navigation[index]}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const content = useSiteContent();

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[260px] border-r border-cyan/20 bg-[linear-gradient(180deg,rgba(2,8,20,.96),rgba(1,5,13,.9))] px-6 py-7 shadow-[16px_0_70px_rgba(0,0,0,.48),inset_-1px_0_0_rgba(0,213,255,.08)] backdrop-blur-2xl lg:block">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(0,140,255,.26),transparent_70%)]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-32 bg-cyan/5 blur-3xl" />
        <Logo />
        <NavigationLinks />
        <Link
          href="/contact"
          className="premium-border group mt-6 flex h-11 items-center justify-between rounded-md border border-neon/45 bg-neon/5 px-5 text-sm font-semibold text-cyan shadow-[inset_0_0_20px_rgba(0,140,255,.08)] transition hover:bg-neon/14 hover:shadow-neon"
        >
          {content.cta.primary}
          <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
        <div className="absolute bottom-2.5 left-6 right-6 z-10">
          <LegalLinks />
        </div>
        <div className="glass-panel holo-sheen sidebar-partner absolute bottom-9 left-6 right-6 overflow-hidden rounded-lg p-5">
          <div className="mb-4 h-20 rounded-full border border-cyan/35 bg-[radial-gradient(circle,rgba(0,213,255,.34),transparent_58%)] shadow-[0_0_34px_rgba(0,213,255,.18),inset_0_0_46px_rgba(0,140,255,.3)]">
            <div className="mx-auto h-full w-20 rounded-full border border-neon/25 bg-[conic-gradient(from_90deg,transparent,rgba(0,213,255,.28),transparent,rgba(0,140,255,.26),transparent)] blur-[.2px]" />
          </div>
          <p className="text-[11px] uppercase leading-4 tracking-[0.16em] text-slate-300">
            {content.brand.sidebarLabel} <span className="block text-sm font-semibold text-cyan">{content.brand.sidebarHighlight}</span>
          </p>
          <p className="mt-2 text-[13px] leading-5 text-slate-300">{content.brand.sidebarText}</p>
          <ChevronRight className="mt-3 h-5 w-5 text-neon" />
        </div>
      </aside>

      <header className="fixed left-0 right-0 top-0 z-40 flex h-20 items-center justify-between border-b border-cyan/20 bg-[#020712]/86 px-5 shadow-[0_18px_50px_rgba(0,0,0,.34)] backdrop-blur-xl lg:hidden">
        <Logo />
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label="Menü öffnen"
            onClick={() => setOpen(true)}
            className="rounded-md border border-neon/35 bg-neon/10 p-2 text-cyan shadow-[0_0_20px_rgba(0,140,255,.22)]"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md lg:hidden"
          >
            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 24, stiffness: 190 }}
              className="h-full w-[310px] border-r border-cyan/25 bg-[linear-gradient(180deg,#030814,#01050d)] px-6 py-7 shadow-[20px_0_70px_rgba(0,0,0,.5)]"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button type="button" aria-label="Menü schließen" onClick={() => setOpen(false)} className="text-cyan">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <NavigationLinks onNavigate={() => setOpen(false)} />
              <div className="mt-6">
                <LegalLinks onNavigate={() => setOpen(false)} />
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
