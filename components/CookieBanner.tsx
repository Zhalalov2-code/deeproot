"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/src/data/siteContent";

const CONSENT_KEY = "deeproot-cookie-consent";

const texts: Record<Language, {
  ariaLabel: string;
  message: string;
  more: string;
  necessary: string;
  acceptAll: string;
  details: string;
  privacyLink: string;
}> = {
  de: {
    ariaLabel: "Cookie-Einstellungen",
    message: "Wir nutzen Cookies für Statistiken und Marketing.",
    more: "Mehr erfahren",
    necessary: "Nur notwendige",
    acceptAll: "Alle akzeptieren",
    details:
      "Notwendige Cookies sorgen dafür, dass die Website zuverlässig funktioniert. Statistik- und Marketing-Cookies helfen uns zu verstehen, wie unsere Inhalte genutzt werden, und unsere Angebote zu verbessern. Ihre Auswahl können Sie jederzeit ändern, indem Sie die Cookies Ihres Browsers löschen. Details finden Sie in unserer",
    privacyLink: "Datenschutzerklärung"
  },
  en: {
    ariaLabel: "Cookie settings",
    message: "We use cookies for statistics and marketing.",
    more: "Learn more",
    necessary: "Only necessary",
    acceptAll: "Accept all",
    details:
      "Necessary cookies ensure that the website works reliably. Statistics and marketing cookies help us understand how our content is used and improve our services. You can change your choice at any time by deleting your browser cookies. For details, see our",
    privacyLink: "Privacy Policy"
  }
};

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { language } = useLanguage();
  const t = texts[language];

  useEffect(() => {
    if (!window.localStorage.getItem(CONSENT_KEY)) setVisible(true);
  }, []);

  const decide = (value: "necessary" | "all") => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label={t.ariaLabel}
          className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-6 sm:bottom-5 lg:left-[284px] lg:right-6"
        >
          <div className="glass-panel mx-auto max-w-5xl rounded-lg p-5 shadow-[0_20px_70px_rgba(0,0,0,.6)] sm:px-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-sm leading-6 text-slate-200">
                {t.message}{" "}
                <button
                  type="button"
                  onClick={() => setExpanded((value) => !value)}
                  className="font-semibold text-cyan underline underline-offset-4 transition hover:text-white"
                >
                  {t.more}
                </button>
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => decide("necessary")}
                  className="h-11 rounded-md border border-neon/45 px-6 text-sm font-semibold text-slate-200 transition hover:border-cyan hover:text-white hover:shadow-neon"
                >
                  {t.necessary}
                </button>
                <button
                  type="button"
                  onClick={() => decide("all")}
                  className="h-11 rounded-md bg-[linear-gradient(120deg,#008CFF,#00D5FF)] px-6 text-sm font-semibold text-[#01131f] shadow-[0_0_28px_rgba(0,213,255,.45)] transition hover:brightness-110"
                >
                  {t.acceptAll}
                </button>
              </div>
            </div>
            {expanded ? (
              <p className="mt-4 max-w-3xl border-t border-cyan/15 pt-4 text-xs leading-5 text-slate-400">
                {t.details}{" "}
                <Link href="/datenschutz" className="text-cyan underline underline-offset-2 transition hover:text-white">
                  {t.privacyLink}
                </Link>
                .
              </p>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
