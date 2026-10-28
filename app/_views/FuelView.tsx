import type { Metadata } from "next";
import Image from "next/image";
import { contact, fuelConfig, localizedPath, translations, type Language } from "../i18n";
import { alternatesFor, LanguageSwitch, ogLocaleFor, StatusPill } from "./site";

const SEO = {
  de: { title: "Fuel by NorbApp – Reisekostenrechner für Europa: Sprit, Tankstopps, Maut", description: "Route eingeben und vor der Fahrt sehen, was sie kostet: Kraftstoff, Tankstopps mit Tankstellenpreisen, Vignetten und Maut in 36 europäischen Ländern – EU, Schweiz, Westbalkan und Türkei. Kostenlos, ohne Registrierung." },
  hu: { title: "Fuel by NorbApp – útiköltség-kalkulátor Európához: üzemanyag, tankolás, útdíj", description: "Add meg az útvonalat, és indulás előtt látod, mennyibe kerül: üzemanyag, tankolások kútárakkal, matricák és útdíjak 36 európai országban – EU, Svájc, Nyugat-Balkán és Törökország. Ingyenes, regisztráció nélkül." },
  en: { title: "Fuel by NorbApp – European trip cost calculator: fuel, stops, tolls", description: "Enter a route and see what it costs before you leave: fuel, refuelling stops with station prices, vignettes and tolls in 36 European countries – the EU, Switzerland, the Western Balkans and Turkey. Free, no sign-up." },
} as const;

export function fuelMetadata(lang: Language): Metadata {
  const seo = SEO[lang];
  const url = localizedPath(fuelConfig.canonicalPath, lang);
  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: alternatesFor(fuelConfig.canonicalPath, lang),
    openGraph: { title: seo.title, description: seo.description, url, siteName: "NorbApp", locale: ogLocaleFor(lang), type: "website" },
    twitter: { card: "summary", title: seo.title, description: seo.description },
  };
}

export default function FuelView({ lang }: { lang: Language }) {
  const t = translations[lang];
  const page = t.fuelPage;

  const jsonLd = {
    "@context": "https://schema.org", "@type": "WebApplication", name: "Fuel by NorbApp", url: `${fuelConfig.publicAppUrl}/`,
    applicationCategory: "TravelApplication", operatingSystem: "Web, Android, iOS (PWA)",
    inLanguage: ["bg", "cs", "da", "de", "el", "en", "es", "et", "fi", "fr", "ga", "hr", "hu", "it", "lt", "lv", "mt", "nl", "pl", "pt", "ro", "sk", "sl", "sv"],
    description: SEO[lang].description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, author: { "@type": "Organization", name: "NorbApp", url: "https://norbapp.com" },
  };

  return (
    <main className="shell legalPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="legalTop">
        <a className="brand" href={localizedPath("/", lang)}>
          <Image className="brandLogo" src="/norbapp-logo.png" alt="" width={44} height={44} priority />
          <span>NorbApp</span>
        </a>
        <LanguageSwitch lang={lang} path={fuelConfig.canonicalPath} />
      </div>
      <h1>{page.title}</h1>
      <div className="legalCard legalCard--live">
        <div className="statusRow"><StatusPill kind="live" label={page.status} /></div>
        <p>{page.intro}</p>
        <h2>{page.featuresTitle}</h2>
        <ul>
          {page.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
        <p>{page.how}</p>
        <a className="button primary" href={`${fuelConfig.publicAppUrl}/?ref=norbapp`} target="_blank" rel="noopener noreferrer">{page.open}</a>
        <p className="fuelFeedback">{page.feedback} <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <div className="contactActions">
          <a className="button secondary" href={localizedPath("/", lang)}>{page.back}</a>
        </div>
      </div>
    </main>
  );
}
