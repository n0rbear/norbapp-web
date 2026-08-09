import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://norbapp.com"),
  title: {
    default: "NorbApp - Digitale Lösungen für echte Probleme",
    template: "%s | NorbApp",
  },
  description:
    "NorbApp entwickelt eigene Web- und Mobile-Apps für Alltag, Mobilität, Automatisierung und AI-gestützte Workflows.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "NorbApp",
    description: "Praktische digitale Lösungen für echte Probleme.",
    url: "https://norbapp.com",
    siteName: "NorbApp",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "NorbApp",
    description: "Praktische digitale Lösungen für echte Probleme.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#04AEB0",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
