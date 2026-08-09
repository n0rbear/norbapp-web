import type { Metadata } from "next";
import Image from "next/image";
import { contact, languages, localizedPath, resolveLanguage, translations } from "../i18n";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Kontaktinformationen von NorbApp.",
  alternates: { canonical: "/impressum" },
};

type LegalProps = {
  searchParams?: Promise<{ lang?: string | string[] }>;
};

export default async function ImpressumPage({ searchParams }: LegalProps) {
  const params = await searchParams;
  const lang = resolveLanguage(params?.lang);
  const t = translations[lang];

  return (
    <main className="shell legalPage">
      <div className="legalTop">
        <a className="brand" href={localizedPath("/", lang)}>
          <Image className="brandLogo" src="/norbapp-logo.png" alt="" width={44} height={44} priority />
          <span>{t.legal.back}</span>
        </a>
        <div className="languageSwitch" aria-label="Language switcher">
          {languages.map((item) => (
            <a className={item === lang ? "activeLanguage" : ""} href={localizedPath("/impressum", item)} key={item} hrefLang={item}>
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
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
