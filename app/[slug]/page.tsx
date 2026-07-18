import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DynamicPageContent } from "./DynamicPageContent";

const BASE_URL = "https://deeproot.one";

type PageParams = { slug: string };

const allSlugs: PageParams[] = [
  { slug: "software-development" },
  { slug: "system-integration" },
  { slug: "cloud-solutions" },
  { slug: "ai-data-engineering" },
  { slug: "cybersecurity-protection" },
  { slug: "case-studies" },
  { slug: "about" },
  { slug: "contact" },
  { slug: "impressum" },
  { slug: "datenschutz" }
];

const pageMetadata: Record<string, { de: { title: string; description: string }; en: { title: string; description: string } }> = {
  "software-development": {
    de: { title: "Websites & Systeme | Webentwicklung Hamburg", description: "Moderne Websites und Websysteme von Deeproot in Hamburg. Professionelle Webentwicklung für Unternehmen, die digital wachsen wollen." },
    en: { title: "Websites & Systems | Web Development Hamburg", description: "Modern websites and web systems by Deeproot in Hamburg. Professional web development for growing businesses." }
  },
  "system-integration": {
    de: { title: "CRM / ERP Systeme | Geschäftsprozesse optimieren", description: "Individuelle CRM und ERP Lösungen von Deeproot Hamburg. Kunden, Aufgaben und Abläufe in einem klaren System verwalten." },
    en: { title: "CRM / ERP Systems | Streamline Business Processes", description: "Custom CRM and ERP solutions by Deeproot Hamburg. Manage clients, tasks and workflows in one clear system." }
  },
  "cloud-solutions": {
    de: { title: "Business Automatisierung | Handarbeit reduzieren", description: "Automatisierungslösungen von Deeproot Hamburg. Reports, Erinnerungen und Workflows automatisieren." },
    en: { title: "Business Automation | Reduce Manual Work", description: "Automation solutions by Deeproot Hamburg. Automate reports, reminders and workflows." }
  },
  "ai-data-engineering": {
    de: { title: "KI Tools für Unternehmen | Praktische KI Lösungen", description: "KI-gestützte Tools von Deeproot Hamburg. Dokumente, Support, Suche und Planung mit KI optimieren." },
    en: { title: "AI Tools for Business | Practical AI Solutions", description: "AI-powered tools by Deeproot Hamburg. Optimize documents, support, search and planning with AI." }
  },
  "cybersecurity-protection": {
    de: { title: "Support & Sicherheit | Systeme schützen", description: "Wartung, Monitoring und Schutz für Ihre IT-Systeme von Deeproot Hamburg." },
    en: { title: "Support & Security | Protect Your Systems", description: "Maintenance, monitoring and protection for your IT systems by Deeproot Hamburg." }
  },
  "case-studies": {
    de: { title: "Projekte & Referenzen | Deeproot Erfolgsgeschichten", description: "Erfahren Sie wie Deeproot Hamburg Unternehmen mit digitalen Lösungen unterstützt hat. Projekte, Lösungen und Ergebnisse." },
    en: { title: "Projects & Case Studies | Deeproot Success Stories", description: "Learn how Deeproot Hamburg supports businesses with digital solutions. Projects, solutions and results." }
  },
  "about": {
    de: { title: "Über Deeproot | Ihr Digitalpartner in Hamburg", description: "Lernen Sie Deeproot kennen. Ihr technischer Partner in Hamburg für Websites, Systeme und Automatisierung." },
    en: { title: "About Deeproot | Your Digital Partner in Hamburg", description: "Get to know Deeproot. Your technical partner in Hamburg for websites, systems and automation." }
  },
  "contact": {
    de: { title: "Kontakt | Deeproot Hamburg kontaktieren", description: "Kontaktieren Sie Deeproot Hamburg. Teilen Sie Ihr Projekt und erhalten Sie eine kostenlose Erstberatung." },
    en: { title: "Contact | Get in Touch with Deeproot Hamburg", description: "Contact Deeproot Hamburg. Share your project and get a free initial consultation." }
  },
  "impressum": {
    de: { title: "Impressum | Rechtliche Angaben", description: "Impressum und rechtliche Angaben der Deeproot GmbH, Hamburg." },
    en: { title: "Legal Notice | Imprint", description: "Legal notice and information about Deeproot GmbH, Hamburg." }
  },
  "datenschutz": {
    de: { title: "Datenschutzerklärung | Datenschutz bei Deeproot", description: "Datenschutzerklärung von Deeproot Hamburg gemäß DSGVO." },
    en: { title: "Privacy Policy | Data Protection at Deeproot", description: "Privacy policy of Deeproot Hamburg in accordance with GDPR." }
  }
};

export async function generateStaticParams() {
  return allSlugs;
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const slug = params.slug;
  const meta = pageMetadata[slug];

  if (!meta) {
    return {
      title: "Seite nicht gefunden | Deeproot",
      description: "Die angeforderte Seite existiert nicht.",
      robots: { index: false, follow: true }
    };
  }

  return {
    title: meta.de.title,
    description: meta.de.description,
    openGraph: {
      title: meta.de.title,
      description: meta.de.description,
      url: `${BASE_URL}/${slug}`,
      siteName: "Deeproot",
      type: "website",
      locale: "de_DE",
      alternateLocale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: meta.de.title,
      description: meta.de.description
    },
    alternates: {
      canonical: `${BASE_URL}/${slug}`,
      languages: {
        "de": `${BASE_URL}/${slug}`,
        "en": `${BASE_URL}/${slug}`
      }
    }
  };
}

export default function DynamicPage({ params }: { params: PageParams }) {
  if (!allSlugs.some((s) => s.slug === params.slug)) {
    notFound();
  }
  return <DynamicPageContent slug={params.slug} />;
}
