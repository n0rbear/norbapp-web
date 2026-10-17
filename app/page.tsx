import Image from "next/image";
import { contact, fuelConfig, ketoMentorConfig, languages, localizedPath, resolveLanguage, translations } from "./i18n";

type HomeProps = {
  searchParams?: Promise<{ lang?: string | string[] }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const lang = resolveLanguage(params?.lang);
  const t = translations[lang];

  return (
    <main>
      <header className="siteHeader">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href={`/?lang=${lang}#top`} aria-label="NorbApp">
            <Image className="brandLogo" src="/norbapp-logo.png" alt="" width={44} height={44} priority />
            <span>NorbApp</span>
          </a>
          <div className="navLinks">
            <a href={`/?lang=${lang}#projects`}>{t.nav.projects}</a>
            <a href={`/?lang=${lang}#about`}>{t.nav.about}</a>
            <a href={`/?lang=${lang}#contact`}>{t.nav.contact}</a>
          </div>
          <div className="languageSwitch" aria-label="Language switcher">
            {languages.map((item) => (
              <a className={item === lang ? "activeLanguage" : ""} href={localizedPath("/", item)} key={item} hrefLang={item}>
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="heroGrid">
          <div>
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>
              {t.hero.title}
              <span>{t.hero.subtitle}</span>
            </h1>
            <p className="heroCopy">{t.hero.copy}</p>
            <a className="heroNews" href={localizedPath(fuelConfig.canonicalPath, lang)}>{t.hero.news} →</a>
            <div className="heroActions">
              <a className="button primary" href={`/?lang=${lang}#projects`}>{t.hero.projectsCta}</a>
              <a className="button secondary" href={`/?lang=${lang}#contact`}>{t.hero.contactCta}</a>
            </div>
          </div>
          <div className="heroCard" aria-label="NorbApp visual preview">
            <div className="heroLogoFrame">
              <Image src="/norbapp-logo.png" alt="NorbApp Logo" width={220} height={220} priority />
            </div>
            <div>
              <span className="panelBadge">{t.hero.panelBadge}</span>
              <strong>{t.hero.panelTitle}</strong>
              <small>{t.hero.panelMeta}</small>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section shell">
        <div className="sectionHead">
          <div>
            <span className="kicker">{t.projects.kicker}</span>
            <h2>{t.projects.title}</h2>
          </div>
          <p>{t.projects.copy}</p>
        </div>
        <div className="cards">
          {t.projects.items.map((project, index) => {
            const isKetoMentor = project.name === "Keto Mentor";
            const isFuel = project.name === "Fuel by NorbApp";
            const projectHref = isKetoMentor
              ? localizedPath(ketoMentorConfig.canonicalPath, lang)
              : isFuel
                ? localizedPath(fuelConfig.canonicalPath, lang)
                : null;
            const linkLabel = isFuel
              ? t.projects.openFuel
              : ketoMentorConfig.publicAppUrl ? t.projects.openProject : t.projects.unavailable;

            return (
              <article className="card" key={project.name}>
                <div className="cardTop">
                  <span className="appIcon">{project.name[0]}</span>
                  <span className="status"><span />{project.status}</span>
                </div>
                <p className="cardIndex">0{index + 1} / {project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="featureList">
                  {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                {projectHref ? (
                  <a className="projectLink" href={projectHref}>
                    {linkLabel}
                  </a>
                ) : null}
              </article>
            );
          })}
        </div>
        <div className="statusBar" aria-label={t.projects.statusLabel}>
          {t.projects.statuses.map((status) => (
            <span className={(["Beta", "Béta"] as string[]).includes(status) ? "activeStatus" : ""} key={status}>{status}</span>
          ))}
        </div>
      </section>

      <section id="about" className="section shell about">
        <div>
          <span className="kicker">{t.about.kicker}</span>
          <h2>{t.about.title}</h2>
        </div>
        <div className="aboutCopy">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
      </section>

      <section id="contact" className="section shell contact">
        <div>
          <span className="kicker">{t.contactSection.kicker}</span>
          <h2>{t.contactSection.title}</h2>
          <p>{t.contactSection.copy}</p>
          <div className="contactActions">
            <a className="button primary" href={`mailto:${contact.email}`}>{contact.email}</a>
            <a className="button secondary" href={contact.telegramUrl} target="_blank" rel="noopener noreferrer">{contact.telegramLabel}</a>
          </div>
        </div>
        <div className="qrCard">
          <Image
            src="/telegram-qr.svg"
            alt="Telegram QR-Code for https://t.me/norbapp"
            width={220}
            height={220}
            loading="eager"
          />
          <strong>{t.contactSection.telegramCaption}</strong>
          <a href={contact.telegramUrl} target="_blank" rel="noopener noreferrer">{contact.telegramUrl}</a>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footerGrid">
          <div className="brand">
            <Image className="brandLogo" src="/norbapp-logo.png" alt="" width={44} height={44} />
            <span>NorbApp</span>
          </div>
          <p>© {new Date().getFullYear()} NorbApp</p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.telegramUrl} target="_blank" rel="noopener noreferrer">Telegram {contact.telegramLabel}</a>
          <a href={localizedPath("/impressum", lang)}>{t.footer.impressum}</a>
          <a href={localizedPath("/datenschutz", lang)}>{t.footer.privacy}</a>
        </div>
      </footer>
    </main>
  );
}
