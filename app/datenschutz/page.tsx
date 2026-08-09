import type { Metadata } from "next";
import Image from "next/image";
import { contact, languages, localizedPath, resolveLanguage, translations } from "../i18n";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise zur NorbApp Website.",
  alternates: { canonical: "/datenschutz" },
};

type LegalProps = {
  searchParams?: Promise<{ lang?: string | string[] }>;
};

export default async function DatenschutzPage({ searchParams }: LegalProps) {
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
            <a className={item === lang ? "activeLanguage" : ""} href={localizedPath("/datenschutz", item)} key={item} hrefLang={item}>
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
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
