"use client";

import { Layout } from "@/components/Layout";
import { PageShell } from "@/components/PageShell";
import { SoftwareVisual } from "@/components/ServiceVisuals/SoftwareVisual";
import { CloudVisual } from "@/components/ServiceVisuals/CloudVisual";
import { AiVisual } from "@/components/ServiceVisuals/AiVisual";
import { CyberVisual } from "@/components/ServiceVisuals/CyberVisual";
import { IntegrationVisual } from "@/components/ServiceVisuals/IntegrationVisual";
import { HudCard } from "@/components/HudCard";
import { NeonButton } from "@/components/NeonButton";
import { ContactForm } from "@/components/ContactForm";
import { services, type ServiceSlug } from "@/data/services";
import { legalContent, type LegalSlug } from "@/data/legal";
import { useLanguage, useSiteContent } from "@/components/LanguageProvider";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { BrainCircuit, CheckCircle2, Leaf, Rocket, ShieldCheck, UsersRound } from "lucide-react";

const visualMap: Record<ServiceSlug, React.ComponentType> = {
  "software-development": SoftwareVisual,
  "cloud-solutions": CloudVisual,
  "ai-data-engineering": AiVisual,
  "cybersecurity-protection": CyberVisual,
  "system-integration": IntegrationVisual
};

const serviceSlugs = Object.keys(services) as ServiceSlug[];

export function DynamicPageContent({ slug }: { slug: string }) {
  const siteContent = useSiteContent();

  if (serviceSlugs.includes(slug as ServiceSlug)) {
    const serviceSlug = slug as ServiceSlug;
    const service = services[serviceSlug];
    const localizedService = siteContent.servicePages[serviceSlug];
    const localizedIcons = service.icons.map((item, index) => ({
      ...item,
      label: localizedService.icons[index]
    }));
    const Visual = visualMap[serviceSlug];
    return (
      <Layout>
        <BreadcrumbJsonLd
          items={[
            { name: siteContent.labels.home, href: "https://deeproot.one" },
            { name: localizedService.crumb, href: `https://deeproot.one/${slug}` }
          ]}
        />
        <ServiceJsonLd
          service={{
            slug: slug,
            title: localizedService.title,
            text: localizedService.text,
            url: `https://deeproot.one/${slug}`
          }}
        />
        <PageShell crumb={localizedService.crumb} title={localizedService.title} eyebrow={localizedService.eyebrow} text={localizedService.text} icons={localizedIcons}>
          <Visual />
          {"compliance" in service ? (
            <div className="absolute bottom-6 left-1/2 z-20 grid w-full max-w-xl -translate-x-1/2 grid-cols-2 gap-2 px-4 text-center text-xs uppercase tracking-[0.12em] text-slate-300 sm:grid-cols-4 sm:gap-3">
              {service.compliance.map((item) => (
                <div key={item} className="glass-panel rounded-md p-4">{item}</div>
              ))}
            </div>
          ) : null}
        </PageShell>
      </Layout>
    );
  }

  if (slug === "case-studies") return <CaseStudies />;
  if (slug === "about") return <About />;
  if (slug === "contact") return <Contact />;
  if (slug === "impressum" || slug === "datenschutz") return <Legal slug={slug} />;

  return (
    <Layout>
      <section className="flex min-h-screen items-center justify-center px-5">
        <div className="glass-panel max-w-xl rounded-lg p-8 text-center">
          <h1 className="neon-text text-5xl font-semibold">{siteContent.labels.notFoundTitle}</h1>
          <p className="mt-5 text-slate-300">{siteContent.labels.notFoundText}</p>
          <div className="mt-7">
            <NeonButton href="/">{siteContent.labels.backHome}</NeonButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function CaseStudies() {
  const siteContent = useSiteContent();

  return (
    <Layout>
      <BreadcrumbJsonLd
        items={[
          { name: siteContent.labels.home, href: "https://deeproot.one" },
          { name: siteContent.casesIntro.crumb, href: "https://deeproot.one/case-studies" }
        ]}
      />
      <section className="min-h-screen px-5 py-28 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-xs text-slate-400">Home <span className="mx-4 text-neon/60">/</span> {siteContent.casesIntro.crumb}</p>
          <div className="mt-14 max-w-3xl">
            <h1 className="neon-text text-5xl font-semibold leading-none tracking-[-0.05em] sm:text-7xl">{siteContent.casesIntro.title}</h1>
            <p className="mt-7 text-lg leading-8 text-slate-200">
              {siteContent.casesIntro.text}
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.cases.map((item, index) => (
              <div key={item.title} className="glass-panel group relative min-h-80 overflow-hidden rounded-lg p-7 transition hover:-translate-y-1 hover:border-cyan/70 hover:shadow-neon">
                <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-neon/20 blur-3xl transition group-hover:bg-cyan/30" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">0{index + 1}</p>
                <h2 className="mt-8 text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{siteContent.labels.problem}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.problem}</p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{siteContent.labels.solution}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.solution}</p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{siteContent.labels.result}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.result}</p>
                <div className="mt-7">
                  <NeonButton href="/contact">{siteContent.cta.primary}</NeonButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function About() {
  const icons = [UsersRound, BrainCircuit, ShieldCheck, Leaf, Rocket];
  const siteContent = useSiteContent();
  const values = siteContent.why.items.slice(0, 5);

  return (
    <Layout>
      <BreadcrumbJsonLd
        items={[
          { name: siteContent.labels.home, href: "https://deeproot.one" },
          { name: siteContent.about.crumb, href: "https://deeproot.one/about" }
        ]}
      />
      <section className="min-h-screen px-5 py-28 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-xs text-slate-400">Home <span className="mx-4 text-neon/60">/</span> {siteContent.about.crumb}</p>
          <h1 className="neon-text mt-14 text-5xl font-semibold leading-tight tracking-[-0.05em] sm:text-7xl">{siteContent.about.title}</h1>
          <div className="mt-8 max-w-3xl">
            <p className="text-lg leading-8 text-slate-200">
              {siteContent.about.text}
            </p>
            <p className="mt-6 text-base leading-8 text-slate-300">
              {siteContent.about.secondText}
            </p>
          </div>

          <div className="mt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">{siteContent.why.eyebrow}</p>
            <h2 className="neon-text mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">{siteContent.why.title}</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {values.map((value, index) => {
                const Icon = icons[index];
                return (
                  <HudCard key={value} title={value} delay={index * 0.08}>
                    <Icon className="mt-6 h-12 w-12 text-cyan drop-shadow-[0_0_16px_rgba(0,213,255,.8)]" />
                    <p className="mt-6 text-sm leading-7 text-slate-300">
                      {value}
                    </p>
                  </HudCard>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Contact() {
  const siteContent = useSiteContent();

  return (
    <Layout>
      <BreadcrumbJsonLd
        items={[
          { name: siteContent.labels.home, href: "https://deeproot.one" },
          { name: siteContent.contact.crumb, href: "https://deeproot.one/contact" }
        ]}
      />
      <section className="min-h-screen px-5 py-28 lg:px-12 xl:px-16">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs text-slate-400">Home <span className="mx-4 text-neon/60">/</span> {siteContent.contact.crumb}</p>
            <h1 className="neon-text mt-14 text-5xl font-semibold leading-tight tracking-[-0.05em] sm:text-7xl">{siteContent.contact.title}</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200">
              {siteContent.contact.text}
            </p>
            <h2 className="mt-10 text-xl font-semibold text-white">{siteContent.contact.crumb}</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {siteContent.contact.cards.map(([title, text]) => (
                <HudCard key={title} title={title}>
                  <p className="mt-4 text-base text-slate-200">{text}</p>
                </HudCard>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}

function Legal({ slug }: { slug: LegalSlug }) {
  const { language } = useLanguage();
  const page = legalContent[language][slug];

  return (
    <Layout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "https://deeproot.one" },
          { name: page.crumb, href: `https://deeproot.one/${slug}` }
        ]}
      />
      <section className="min-h-screen px-5 py-28 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs text-slate-400">Home <span className="mx-4 text-neon/60">/</span> {page.crumb}</p>
          <h1 className="neon-text mt-10 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">{page.title}</h1>
          <p className="mt-6 text-base leading-8 text-slate-200">{page.intro}</p>
          <div className="mt-10 space-y-6">
            {page.sections.map((section) => (
              <div key={section.heading} className="glass-panel rounded-lg p-6 sm:p-7">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-300">{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
