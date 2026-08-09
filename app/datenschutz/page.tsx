import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise zur NorbApp Website.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <main className="shell legalPage">
      <Link className="brand" href="/">
        <span className="brandMark">N</span>
        <span>NorbApp</span>
      </Link>
      <h1>Datenschutz</h1>
      <div className="legalCard">
        <h2>Kurzüberblick</h2>
        <p>
          Diese Website ist als statische Informationsseite umgesetzt. Sie enthält keine
          Kontaktformulare, kein Analytics, kein Tracking, keine Marketing-Cookies und keine
          eingebetteten Inhalte von Drittanbietern.
        </p>

        <h2>Hosting und Serverlogs</h2>
        <p>
          Die Website wird über Render bereitgestellt. Beim Aufruf einer Website können technisch
          notwendige Zugriffsdaten entstehen, zum Beispiel IP-Adresse, Datum und Uhrzeit des Abrufs,
          angefragte URL, Browserinformationen und technische Statusdaten. Diese Daten können für
          Betrieb, Sicherheit und Fehleranalyse verarbeitet werden.
        </p>

        <h2>Cookies, Local Storage und Tracking</h2>
        <p>
          Die Website setzt nach aktuellem Stand keine Cookies, nutzt keinen localStorage oder
          sessionStorage und lädt keine Analyse- oder Marketing-Skripte. Deshalb wird kein
          Cookie-Consent-Banner angezeigt.
        </p>

        <h2>Schriftarten und Assets</h2>
        <p>
          Es werden Systemschriftarten und lokale Assets verwendet. Externe Google Fonts oder
          externe CDN-Dateien werden nicht eingebunden.
        </p>

        <h2>Kontakt per E-Mail oder Telegram</h2>
        <p>
          Wenn du per E-Mail oder Telegram Kontakt aufnimmst, werden die von dir übermittelten
          Daten beim jeweiligen Anbieter und beim Empfänger verarbeitet. Der Telegram-Link und der
          QR-Code führen zu <a href="https://t.me/norbapp" target="_blank" rel="noopener noreferrer">https://t.me/norbapp</a>.
          Der QR-Code ist als lokale Grafik eingebunden und ruft beim Anzeigen keinen externen
          QR-Dienst auf.
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:norbert@norbapp.com">norbert@norbapp.com</a><br />
          Telegram: <a href="https://t.me/norbapp" target="_blank" rel="noopener noreferrer">@norbapp</a>
        </p>
      </div>
    </main>
  );
}
