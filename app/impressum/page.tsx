import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Kontaktinformationen von NorbApp.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <main className="shell legalPage">
      <Link className="brand" href="/">
        <span className="brandMark">N</span>
        <span>NorbApp</span>
      </Link>
      <h1>Impressum</h1>
      <div className="legalCard">
        <h2>Angaben gemäß aktueller Freigabe</h2>
        <p><strong>NorbApp</strong></p>
        <p>
          E-Mail: <a href="mailto:norbert@norbapp.com">norbert@norbapp.com</a><br />
          Telegram: <a href="https://t.me/norbapp" target="_blank" rel="noopener noreferrer">@norbapp</a>
        </p>
        <h2>Hinweis</h2>
        <p>
          Diese Seite enthält aktuell nur die vom Betreiber freigegebenen Kontaktinformationen.
          Weitere Pflichtangaben müssen vor einem kommerziellen Launch geprüft und ergänzt werden.
        </p>
      </div>
    </main>
  );
}
