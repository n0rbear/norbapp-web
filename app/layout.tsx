import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://norbapp.com"),
  title: {
    default: "NorbApp — Smart apps for everyday work",
    template: "%s | NorbApp",
  },
  description:
    "NorbApp builds practical, focused software for drivers, logistics, everyday tools and AI-assisted workflows.",
  openGraph: {
    title: "NorbApp",
    description:
      "Practical software. Clear solutions. Built for real everyday problems.",
    url: "https://norbapp.com",
    siteName: "NorbApp",
    type: "website",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
