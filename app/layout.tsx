import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/src/data/siteContent";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className="noise font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
