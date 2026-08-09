import Image from "next/image";

const projects = [
  {
    name: "Keto Companion",
    category: "Nutrition App",
    description:
      "Keto-first Ernährungs- und Lifestyle-App für Lebensmittel, Makros und alltagstaugliche Entscheidungen.",
    status: "In Entwicklung",
    features: ["Makro-Tracking", "Keto-Check", "AI Food Photo"],
    icon: "K",
  },
  {
    name: "Fuel & Route",
    category: "Route Cost App",
    description:
      "Europäische Kraftstoff- und Routenkostenplanung für klare Vergleiche vor der Fahrt.",
    status: "In Entwicklung",
    features: ["Routenkosten", "Preisvergleich", "Tankstopps"],
    icon: "F",
  },
  {
    name: "NDP",
    category: "Norb Diagnostic Platform",
    description:
      "Entwicklerplattform für App-Diagnostik, Monitoring, Deploy-Status und technische Ereignisse.",
    status: "In Entwicklung",
    features: ["App-Diagnostik", "API-Fehler", "Deploy-Monitoring"],
    icon: "D",
  },
];

const statuses = ["Konzept", "In Entwicklung", "Beta", "Early Access", "Veroffentlicht"];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <nav className="nav shell" aria-label="Hauptnavigation">
          <a className="brand" href="#top" aria-label="NorbApp Startseite">
            <Image className="brandLogo" src="/norbapp-logo.png" alt="" width={44} height={44} priority />
            <span>NorbApp</span>
          </a>
          <div className="navLinks">
            <a href="#projects">Projekte</a>
            <a href="#about">NorbApp</a>
            <a href="#contact">Kontakt</a>
          </div>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="heroGrid">
          <div>
            <p className="eyebrow">Software / Apps / AI</p>
            <h1>
              NorbApp
              <span>Digitale Lösungen für echte Probleme.</span>
            </h1>
            <p className="heroCopy">
              NorbApp entwickelt eigene Web- und Mobile-Apps: praktische Werkzeuge für Alltag,
              Mobilität, Automatisierung und moderne AI-gestützte Workflows.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#projects">Projekte ansehen</a>
              <a className="button secondary" href="#contact">Kontakt</a>
            </div>
          </div>
          <div className="heroCard" aria-label="NorbApp visuelle Vorschau">
            <div className="heroLogoFrame">
              <Image src="/norbapp-logo.png" alt="NorbApp Logo" width={220} height={220} priority />
            </div>
            <div>
              <span className="panelBadge">NORBAPP STUDIO</span>
              <strong>Praktisch bauen. Klar bleiben.</strong>
              <small>Web · Mobile · Automation · AI</small>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section shell">
        <div className="sectionHead">
          <div>
            <span className="kicker">Projekte / In Entwicklung</span>
            <h2>Eigene Apps mit konkretem Nutzen.</h2>
          </div>
          <p>
            Die Projektstruktur ist bewusst datenbasiert angelegt, damit später URLs,
            Screenshots, Stores, Status und Detailseiten sauber ergänzt werden können.
          </p>
        </div>
        <div className="cards">
          {projects.map((project, index) => (
            <article className="card" key={project.name}>
              <div className="cardTop">
                <span className="appIcon">{project.icon}</span>
                <span className="status"><span />{project.status}</span>
              </div>
              <p className="cardIndex">0{index + 1} / {project.category}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="featureList">
                {project.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="statusBar" aria-label="Mögliche Projektstatus">
          {statuses.map((status) => (
            <span className={status === "In Entwicklung" ? "activeStatus" : ""} key={status}>{status}</span>
          ))}
        </div>
      </section>

      <section id="about" className="section shell about">
        <div>
          <span className="kicker">Über NorbApp</span>
          <h2>Ein wachsendes App-Studio mit praktischem Fokus.</h2>
        </div>
        <div className="aboutCopy">
          <p>
            NorbApp entwickelt eigene Anwendungen und digitale Lösungen, die reale Abläufe
            einfacher machen sollen. Der Schwerpunkt liegt auf Web, Mobile, Automatisierung
            und sinnvoll eingesetzter AI.
          </p>
          <p>
            Statt großer Versprechen zählt ein klarer Produktgedanke: schlanke Oberflächen,
            verständliche Funktionen und kontinuierliche Weiterentwicklung.
          </p>
        </div>
      </section>

      <section id="contact" className="section shell contact">
        <div>
          <span className="kicker">Kontakt</span>
          <h2>Direkt erreichbar.</h2>
          <p>
            Fur Fragen zu NorbApp und den aktuellen Projekten erreichst du NorbApp per
            E-Mail oder Telegram.
          </p>
          <div className="contactActions">
            <a className="button primary" href="mailto:norbert@norbapp.com">norbert@norbapp.com</a>
            <a className="button secondary" href="https://t.me/norbapp" target="_blank" rel="noopener noreferrer">@norbapp</a>
          </div>
        </div>
        <div className="qrCard">
          <Image
            src="/telegram-qr.svg"
            alt="Telegram QR-Code für https://t.me/norbapp"
            width={220}
            height={220}
            loading="eager"
          />
          <strong>Auf Telegram kontaktieren</strong>
          <a href="https://t.me/norbapp" target="_blank" rel="noopener noreferrer">https://t.me/norbapp</a>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footerGrid">
          <div className="brand">
            <Image className="brandLogo" src="/norbapp-logo.png" alt="" width={44} height={44} />
            <span>NorbApp</span>
          </div>
          <p>© {new Date().getFullYear()} NorbApp</p>
          <a href="mailto:norbert@norbapp.com">norbert@norbapp.com</a>
          <a href="https://t.me/norbapp" target="_blank" rel="noopener noreferrer">Telegram @norbapp</a>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </footer>
    </main>
  );
}
