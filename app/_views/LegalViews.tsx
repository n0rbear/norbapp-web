import type { Metadata } from "next";
import Image from "next/image";
import { contact, localizedPath, translations, type Language } from "../i18n";
import { alternatesFor, LanguageSwitch } from "./site";

export function impressumMetadata(lang: Language): Metadata {
  return {
    title: translations[lang].legal.impressumTitle,
    description: "Impressum und Kontaktinformationen von NorbApp.",
    alternates: alternatesFor("/impressum", lang),
  };
}

export function datenschutzMetadata(lang: Language): Metadata {
  return {
    title: translations[lang].legal.privacyTitle,
    description: "Datenschutzhinweise zur NorbApp Website.",
    alternates: alternatesFor("/datenschutz", lang),
  };
}

function LegalTop({ lang, path }: { lang: Language; path: string }) {
  return (
    <div className="legalTop">
      <a className="brand" href={localizedPath("/", lang)}>
        <Image className="brandLogo" src="/norbapp-logo.png" alt="" width={44} height={44} priority />
        <span>{translations[lang].legal.back}</span>
      </a>
      <LanguageSwitch lang={lang} path={path} />
    </div>
  );
}

export function ImpressumView({ lang }: { lang: Language }) {
  const t = translations[lang];
  return (
    <main className="shell legalPage">
      <LegalTop lang={lang} path="/impressum" />
      <h1>{t.legal.impressumTitle}</h1>
      <div className="legalCard">
        <h2>{t.legal.approvedData}</h2>
        <p><strong>NorbApp</strong></p>
        <p>
          E-mail: <a href={`mailto:${contact.email}`}>{contact.email}</a><br />
          Telegram: <a href={contact.telegramUrl} target="_blank" rel="noopener noreferrer">{contact.telegramLabel}</a>
        </p>
        <h2>{t.legal.noteTitle}</h2>
        <p>{t.legal.impressumNote}</p>
      </div>
    </main>
  );
}

export function DatenschutzView({ lang }: { lang: Language }) {
  const t = translations[lang];
  return (
    <main className="shell legalPage">
      <LegalTop lang={lang} path="/datenschutz" />
      <h1>{t.legal.privacyTitle}</h1>
      <div className="legalCard">
        <h2>{t.legal.privacyIntroTitle}</h2>
        <p>{t.legal.privacyIntro}</p>

        <h2>{t.legal.hostingTitle}</h2>
        <p>{t.legal.hosting}</p>

        <h2>{t.legal.cookiesTitle}</h2>
        <p>{t.legal.cookies}</p>

        <h2>{t.legal.assetsTitle}</h2>
        <p>{t.legal.assets}</p>

        <h2>{t.legal.externalContactTitle}</h2>
        <p>
          {t.legal.externalContact}{" "}
          <a href={contact.telegramUrl} target="_blank" rel="noopener noreferrer">{contact.telegramUrl}</a>
        </p>

        <h2>{t.legal.contactTitle}</h2>
        <p>
          E-mail: <a href={`mailto:${contact.email}`}>{contact.email}</a><br />
          Telegram: <a href={contact.telegramUrl} target="_blank" rel="noopener noreferrer">{contact.telegramLabel}</a>
        </p>
      </div>
    </main>
  );
}
