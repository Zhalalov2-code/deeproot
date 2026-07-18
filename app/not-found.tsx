import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | Deeproot",
  description: "Die angeforderte Seite existiert nicht.",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <html lang="de">
      <body className="noise font-sans antialiased">
        <div className="flex min-h-screen items-center justify-center bg-[#0a0c10] px-5">
          <div className="max-w-xl rounded-lg border border-cyan/20 bg-[#0a0c10]/90 p-8 text-center backdrop-blur-lg">
            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-cyan drop-shadow-[0_0_20px_rgba(0,213,255,.5)]">
              Seite nicht gefunden
            </h1>
            <p className="mt-5 text-slate-300">
              Diese Deeproot-Seite existiert nicht.
            </p>
            <div className="mt-7">
              <Link
                href="/"
                className="inline-block rounded-md border border-cyan px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan transition hover:bg-cyan/10 hover:shadow-[0_0_20px_rgba(0,213,255,.3)]"
              >
                Zur Übersicht
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
