import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/src/data/siteContent";
import { LanguageProvider } from "@/components/LanguageProvider";

const BASE_URL = "https://deeproot.one";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: siteContent.meta.title,
    template: `%s | Deeproot`
  },
  description: siteContent.meta.description,
  keywords: [
    "Webentwicklung Hamburg",
    "Website erstellen lassen",
    "CRM System",
    "ERP Lösung",
    "Business Automatisierung",
    "KI Tools Unternehmen",
    "Webdesign Agentur",
    "Digitale Lösungen",
    "Software Entwicklung",
    "Hamburg Digitalagentur"
  ],
  authors: [{ name: "Deeproot" }],
  creator: "Deeproot",
  publisher: "Deeproot",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_US",
    url: BASE_URL,
    siteName: "Deeproot",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "Deeproot - Websites, Systeme und Automatisierung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: ["/logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "de": BASE_URL,
      "en": BASE_URL
    }
  },
  verification: {},
  manifest: "/site.webmanifest"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Deeproot",
    description: siteContent.meta.description,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/logo.png`,
    email: "info@deeproot.one",
    telephone: "+49-170-1102651",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Luhering 4e",
      addressLocality: "Hamburg",
      postalCode: "21147",
      addressCountry: "DE"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.5511,
      longitude: 9.9937
    },
    areaServed: [
      {
        "@type": "City",
        name: "Hamburg"
      },
      {
        "@type": "Country",
        name: "Germany"
      }
    ],
    serviceType: [
      "Webentwicklung",
      "CRM Systementwicklung",
      "ERP Implementierung",
      "Business Automatisierung",
      "KI Integration",
      "Webdesign"
    ],
    priceRange: "$$",
    foundingDate: "2024",
    sameAs: [],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    }
  };

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="noise font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
