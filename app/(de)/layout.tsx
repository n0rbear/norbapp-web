import type { Metadata, Viewport } from "next";
import "../globals.css";
import { siteMetadata, siteViewport } from "../_views/site";

export const metadata: Metadata = siteMetadata("de");
export const viewport: Viewport = siteViewport;

// Old links used ?lang=hu / ?lang=en on the German URLs. The site is static now,
// so send those visitors to the matching /hu/ or /en/ page in the browser.
const legacyLangRedirect = '(function(){try{var m=/[?&]lang=(hu|en)(?:&|$)/.exec(location.search);if(m){location.replace("/"+m[1]+location.pathname.replace(/\\/?$/,"/")+location.hash)}}catch(e){}})();';

export default function GermanRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <head>
        <script dangerouslySetInnerHTML={{ __html: legacyLangRedirect }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
