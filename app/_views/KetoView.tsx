import type { Metadata } from "next";
import Image from "next/image";
import { ketoMentorConfig, localizedPath, translations, type Language } from "../i18n";
import { alternatesFor, LanguageSwitch, ogLocaleFor, StatusPill } from "./site";

const KETO_EMAIL = "ketomentor@norbapp.com";

// Own title, description, canonical and share preview per language, so the
// page is not read as a copy of the NorbApp home page.
const SEO = {
  de: { title: "Keto Mentor by NorbApp – Keto- und Low-Carb-Ernährungstagebuch (Beta)", description: "Mahlzeiten eintippen oder einsprechen – die KI rechnet Netto-Kohlenhydrate und Makros aus. Abendessen-Vorschläge und Wochenplan. Web-App fürs Handy, native App in Arbeit. Kostenlose Basisversion, Premium während der Beta gratis testen." },
  hu: { title: "Keto Mentor by NorbApp – keto és low carb étkezési napló (béta)", description: "Írd be vagy mondd el, mit ettél – a mesterséges intelligencia kiszámolja a nettó szénhidrátot és a makrókat. Vacsoraajánló, heti étrendterv. Telefonra telepíthető webapp, a teljes app készül. Ingyenes alapverzió, a prémium a béta alatt ingyen kipróbálható." },
  en: { title: "Keto Mentor by NorbApp – keto and low-carb food diary (beta)", description: "Type or say what you ate – AI works out net carbs and macros. Dinner ideas and a weekly meal plan. Installable web app, full mobile app on the way. Free basic version; premium free to try during the beta." },
} as const;

export function ketoMetadata(lang: Language): Metadata {
  const seo = SEO[lang];
  const url = localizedPath(ketoMentorConfig.canonicalPath, lang);
  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: alternatesFor(ketoMentorConfig.canonicalPath, lang),
    openGraph: {
      title: seo.title, description: seo.description, url, siteName: "NorbApp", locale: ogLocaleFor(lang), type: "website",
      images: [{ url: "/keto-mentor-og.png", width: 1200, height: 630, alt: "Keto Mentor by NorbApp – Keto · Low Carb, Beta" }],
    },
    twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: ["/keto-mentor-og.png"] },
  };
}

export default function KetoView({ lang }: { lang: Language }) {
  const t = translations[lang];
  const targetUrl = ketoMentorConfig.publicAppUrl;

  const jsonLd = {
    "@context": "https://schema.org", "@type": "WebApplication", name: "Keto Mentor by NorbApp", url: "https://ketomentor.norbapp.com/",
    applicationCategory: "HealthApplication", operatingSystem: "Web, Android, iOS (PWA)", inLanguage: ["hu", "de", "en"],
    description: SEO[lang].description, image: "https://norbapp.com/keto-mentor-og.png",
    offers: { "@type": "Offer", name: "Basic", price: "0", priceCurrency: "EUR" }, author: { "@type": "Organization", name: "NorbApp", url: "https://norbapp.com" },
  };

  return (
    <main className="shell legalPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="legalTop">
        <a className="brand" href={localizedPath("/", lang)}>
          <Image className="brandLogo" src="/norbapp-logo.png" alt="" width={44} height={44} priority />
          <span>NorbApp</span>
        </a>
        <LanguageSwitch lang={lang} path={ketoMentorConfig.canonicalPath} />
      </div>
      <h1>{t.ketoPage.title}</h1>
      <div className="legalCard legalCard--beta">
        <div className="statusRow"><StatusPill kind="beta" label={t.ketoPage.status} /></div>
        <p>{t.ketoPage.body}</p>
        <p>{t.ketoPage.next}</p>
        {targetUrl ? (
          <a className="button primary" href={`${targetUrl}/?ref=norbapp`} target="_blank" rel="noopener noreferrer">{t.projects.openApp}</a>
        ) : (
          <span className="button disabledButton" aria-disabled="true">{t.ketoPage.buttonUnavailable}</span>
        )}
        <div className="contactActions">
          <a className="button secondary" href={localizedPath("/", lang)}>{t.ketoPage.back}</a>
          <a className="button secondary" href={`mailto:${KETO_EMAIL}`}>{KETO_EMAIL}</a>
        </div>
      </div>
    </main>
  );
}
