import type { MetadataRoute } from "next";

const BASE_URL = "https://deeproot.one";

const allSlugs = [
  "",
  "/software-development",
  "/system-integration",
  "/cloud-solutions",
  "/ai-data-engineering",
  "/cybersecurity-protection",
  "/case-studies",
  "/about",
  "/contact",
  "/impressum",
  "/datenschutz"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return allSlugs.map((slug) => ({
    url: `${BASE_URL}${slug}`,
    lastModified: new Date(),
    changeFrequency: slug === "" ? "weekly" : "monthly",
    priority: slug === "" ? 1 : slug === "/contact" ? 0.9 : 0.8,
    alternates: {
      languages: {
        de: `${BASE_URL}${slug}`,
        en: `${BASE_URL}${slug}`
      }
    }
  }));
}
