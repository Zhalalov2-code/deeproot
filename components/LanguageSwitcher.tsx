"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/src/data/siteContent";

const languages: Language[] = ["de", "en"];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex rounded-md border border-neon/35 bg-[#031024]/70 p-1 shadow-[0_0_22px_rgba(0,140,255,.18)] backdrop-blur-xl">
      {languages.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={`rounded px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${
            language === item ? "bg-neon/25 text-cyan shadow-[0_0_18px_rgba(0,213,255,.25)]" : "text-slate-300 hover:text-cyan"
          }`}
          aria-pressed={language === item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
