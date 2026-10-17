import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 – NorbApp",
};

// Served by GitHub Pages as 404.html for every unknown URL, in all languages.
export default function GlobalNotFound() {
  return (
    <html lang="de">
      <body>
        <main className="shell legalPage notFound">
          <a className="brand" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brandLogo" src="/norbapp-logo.png" alt="" width={44} height={44} />
            <span>NorbApp</span>
          </a>
          <h1>404</h1>
          <div className="legalCard">
            <p>Diese Seite gibt es nicht. · Ez az oldal nem létezik. · This page does not exist.</p>
            <div className="contactActions">
              <a className="button primary" href="/">NorbApp</a>
              <a className="button secondary" href="/hu/">Magyar</a>
              <a className="button secondary" href="/en/">English</a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
