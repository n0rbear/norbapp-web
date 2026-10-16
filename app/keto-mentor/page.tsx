import Image from "next/image";
import { contact, ketoMentorConfig, languages, localizedPath, resolveLanguage, translations } from "../i18n";

type KetoMentorProps = {
  searchParams?: Promise<{ lang?: string | string[] }>;
};

export default async function KetoMentorPage({ searchParams }: KetoMentorProps) {
  const params = await searchParams;
  const lang = resolveLanguage(params?.lang);
  const t = translations[lang];
  const targetUrl = ketoMentorConfig.publicAppUrl;

  return (
    <main className="shell legalPage">
      <div className="legalTop">
        <a className="brand" href={localizedPath("/", lang)}>
          <Image className="brandLogo" src="/norbapp-logo.png" alt="" width={44} height={44} priority />
          <span>NorbApp</span>
        </a>
        <div className="languageSwitch" aria-label="Language switcher">
          {languages.map((item) => (
            <a className={item === lang ? "activeLanguage" : ""} href={localizedPath(ketoMentorConfig.canonicalPath, item)} key={item} hrefLang={item}>
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
      <h1>{t.ketoPage.title}</h1>
      <div className="legalCard">
        <p className="status"><span />{t.ketoPage.status}</p>
        <p>{t.ketoPage.body}</p>
        <p>{t.ketoPage.next}</p>
        {targetUrl ? (
          <a className="button primary" href={targetUrl} target="_blank" rel="noopener noreferrer">{t.projects.openApp}</a>
        ) : (
          <span className="button disabledButton" aria-disabled="true">{t.ketoPage.buttonUnavailable}</span>
        )}
        <div className="contactActions">
          <a className="button secondary" href={localizedPath("/", lang)}>{t.ketoPage.back}</a>
          <a className="button secondary" href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
    </main>
  );
}
