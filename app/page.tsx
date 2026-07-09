"use client";

import { Layout } from "@/components/Layout";
import { HeroVisual } from "@/components/HeroVisual";
import { NeonButton } from "@/components/NeonButton";
import { ServiceCard } from "@/components/ServiceCard";
import { useSiteContent } from "@/components/LanguageProvider";
import { BrainCircuit, CheckCircle2, CloudCog, Cpu, Layers3, LockKeyhole, Workflow, Code2 } from "lucide-react";

const heroCardMeta = [
  { href: "/software-development", icon: Code2 },
  { href: "/system-integration", icon: CloudCog },
  { href: "/cloud-solutions", icon: LockKeyhole },
  { href: "/ai-data-engineering", icon: BrainCircuit }
] as const;

export default function Home() {
  const siteContent = useSiteContent();
  const homeServices = siteContent.heroCards.map((card, index) => ({
    ...card,
    ...heroCardMeta[index]
  }));

  return (
    <Layout>
      <section className="relative min-h-screen overflow-hidden px-5 py-8 lg:px-10 xl:px-14">
        <HeroVisual />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-[1640px] grid-cols-1 gap-8 pt-6 lg:min-h-screen lg:grid-cols-[0.9fr_1.1fr] lg:pt-8 xl:grid-cols-[0.85fr_1.15fr] 2xl:grid-cols-[0.78fr_1.22fr]">
          <div className="max-w-[560px] pt-2 lg:pt-4">
            <p className="mb-6 text-xs text-slate-400 lg:mb-8">Home <span className="mx-4 text-neon/60">/</span> {siteContent.hero.crumb}</p>
            <h1 className="neon-text text-[2.4rem] font-semibold uppercase leading-[1.08] tracking-[-0.04em] sm:text-[3.1rem] xl:text-[3rem] 2xl:text-[3.7rem]">
              {siteContent.hero.headline}
            </h1>
            <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-cyan">{siteContent.hero.eyebrow}</p>
            <p className="mt-5 max-w-[470px] text-[15px] leading-7 text-slate-200">
              {siteContent.hero.text}
            </p>
            <p className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-cyan">
              <CheckCircle2 className="h-5 w-5" /> {siteContent.hero.benefit}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <NeonButton href="/contact">{siteContent.hero.primaryCta}</NeonButton>
              <NeonButton href="/case-studies">{siteContent.hero.secondaryCta}</NeonButton>
            </div>
          </div>
          <div className="grid content-start gap-4 pt-2 sm:grid-cols-2 xl:gap-5 xl:pt-6 min-[1440px]:grid-cols-4">
            {homeServices.map((service, index) => (
              <ServiceCard key={service.href} {...service} delay={0.08 * index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeader eyebrow={siteContent.servicesIntro.eyebrow} title={siteContent.servicesIntro.title} text={siteContent.servicesIntro.text} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.services.map((service, index) => (
              <div key={service.title} className="glass-panel premium-border holo-sheen rounded-lg p-6 transition hover:-translate-y-1 hover:border-cyan/70 hover:shadow-neon">
                <p className="text-sm font-semibold text-cyan">0{index + 1}</p>
                <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.text}</p>
                <p className="mt-5 border-t border-neon/20 pt-4 text-sm font-semibold leading-6 text-cyan">{service.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-10 xl:px-14">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-lg p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">{siteContent.about.crumb}</p>
            <h2 className="neon-text mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">{siteContent.about.title}</h2>
            <p className="mt-7 text-base leading-8 text-slate-200">{siteContent.about.text}</p>
            <p className="mt-5 text-base leading-8 text-slate-300">{siteContent.about.secondText}</p>
          </div>
          <div>
            <SectionHeader eyebrow={siteContent.process.eyebrow} title={siteContent.process.title} />
            <div className="mt-8 space-y-4">
              {siteContent.process.steps.map((step, index) => (
                <div key={step.title} className="glass-panel flex gap-5 rounded-lg p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan/50 text-sm font-semibold text-cyan shadow-[0_0_18px_rgba(0,213,255,.25)]">{index + 1}</span>
                  <div>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-10 xl:px-14">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader eyebrow={siteContent.technologies.eyebrow} title={siteContent.technologies.title} text={siteContent.technologies.text} />
          <div className="grid gap-4 sm:grid-cols-2">
            {siteContent.technologies.items.map((item, index) => {
              const icons = [Cpu, Layers3, Workflow];
              const Icon = icons[index % icons.length];
              return (
                <div key={item} className="glass-panel flex items-center gap-4 rounded-lg p-5">
                  <Icon className="h-6 w-6 text-cyan drop-shadow-[0_0_14px_rgba(0,213,255,.8)]" />
                  <span className="font-semibold text-slate-100">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeader eyebrow={siteContent.casesIntro.crumb} title={siteContent.casesIntro.title} text={siteContent.casesIntro.text} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.cases.map((item) => (
              <div key={item.title} className="glass-panel rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <CaseLine label={siteContent.labels.problem} text={item.problem} />
                <CaseLine label={siteContent.labels.solution} text={item.solution} />
                <CaseLine label={siteContent.labels.result} text={item.result} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-10 xl:px-14">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader eyebrow={siteContent.why.eyebrow} title={siteContent.why.title} />
          <div className="grid gap-4 sm:grid-cols-2">
            {siteContent.why.items.map((item) => (
              <div key={item} className="glass-panel flex items-start gap-4 rounded-lg p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan" />
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-10 xl:px-14">
        <div className="glass-panel mx-auto max-w-[1100px] rounded-lg p-8 text-center md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">{siteContent.labels.editHint}</p>
          <h2 className="neon-text mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">{siteContent.cta.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">{siteContent.cta.text}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <NeonButton href="/contact">{siteContent.cta.primary}</NeonButton>
            <NeonButton href="/about">{siteContent.cta.secondary}</NeonButton>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-neon/20 px-5 py-10 lg:px-10 xl:px-14">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl">{siteContent.footer.text}</p>
          <div className="flex flex-wrap gap-4 text-cyan">
            {siteContent.footer.links.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </div>
        </div>
      </footer>
    </Layout>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">{eyebrow}</p>
      <h2 className="neon-text mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">{title}</h2>
      {text ? <p className="mt-6 text-base leading-8 text-slate-300">{text}</p> : null}
    </div>
  );
}

function CaseLine({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-5 border-t border-neon/20 pt-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{label}</p>
      <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}
