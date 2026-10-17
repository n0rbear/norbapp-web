import type { Metadata, Viewport } from "next";
import "../globals.css";
import { resolveLanguage } from "../i18n";
import { siteMetadata, siteViewport } from "../_views/site";

type Params = { params: Promise<{ lang: string }> };

// German is served from the root; this tree only builds the other languages.
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ lang: "hu" }, { lang: "en" }];
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return siteMetadata(resolveLanguage((await params).lang));
}

export const viewport: Viewport = siteViewport;

export default async function LanguageRootLayout({ children, params }: Readonly<Params & { children: React.ReactNode }>) {
  const lang = resolveLanguage((await params).lang);
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
