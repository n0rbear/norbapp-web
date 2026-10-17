import type { Metadata, Viewport } from "next";
import { languages, localizedPath, type Language, type StatusKind } from "../i18n";

export const siteUrl = "https://norbapp.com";

const ogLocale: Record<Language, string> = { de: "de_DE", hu: "hu_HU", en: "en_GB" };

const siteCopy: Record<Language, { title: string; description: string; og: string }> = {
  de: {
    title: "NorbApp - Digitale Lösungen für echte Probleme",
    description: "NorbApp entwickelt eigene Web- und Mobile-Apps für Alltag, Mobilität, Automatisierung und AI-gestützte Workflows.",
    og: "Praktische digitale Lösungen für echte Probleme.",
  },
  hu: {
    title: "NorbApp - Digitális megoldások valódi problémákra",
    description: "A NorbApp saját webes és mobilalkalmazásokat fejleszt mindennapokra, mobilitásra, automatizálásra és AI-alapú munkafolyamatokra.",
    og: "Praktikus digitális megoldások valódi problémákra.",
  },
  en: {
    title: "NorbApp - Digital solutions for real problems",
    description: "NorbApp builds its own web and mobile apps for everyday life, mobility, automation and AI-assisted workflows.",
    og: "Practical digital solutions for real problems.",
  },
};

/** Canonical and hreflang links for one page across the three languages. */
export function alternatesFor(path: string, lang: Language): Metadata["alternates"] {
  return {
    canonical: localizedPath(path, lang),
    languages: {
      de: localizedPath(path, "de"),
      hu: localizedPath(path, "hu"),
      en: localizedPath(path, "en"),
      "x-default": localizedPath(path, "de"),
    },
  };
}

export function siteMetadata(lang: Language): Metadata {
  const copy = siteCopy[lang];
  return {
    metadataBase: new URL(siteUrl),
    title: { default: copy.title, template: "%s | NorbApp" },
    description: copy.description,
    alternates: alternatesFor("/", lang),
    openGraph: {
      title: "NorbApp",
      description: copy.og,
      url: localizedPath("/", lang),
      siteName: "NorbApp",
      locale: ogLocale[lang],
      type: "website",
    },
    twitter: { card: "summary", title: "NorbApp", description: copy.og },
    icons: { icon: "/favicon.svg" },
    robots: { index: true, follow: true },
  };
}

export const siteViewport: Viewport = {
  themeColor: "#04AEB0",
  colorScheme: "light",
};

export function ogLocaleFor(lang: Language) {
  return ogLocale[lang];
}

export function LanguageSwitch({ lang, path }: { lang: Language; path: string }) {
  return (
    <div className="languageSwitch" aria-label="Language switcher">
      {languages.map((item) => (
        <a className={item === lang ? "activeLanguage" : ""} href={localizedPath(path, item)} key={item} hrefLang={item}>
          {item.toUpperCase()}
        </a>
      ))}
    </div>
  );
}

export function StatusPill({ kind, label }: { kind: StatusKind; label: string }) {
  return <span className={`status status--${kind}`}><span />{label}</span>;
}
