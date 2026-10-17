import type { MetadataRoute } from "next";
import { localizedPath } from "./i18n";

export const dynamic = "force-static";

const pages = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/fuel", changeFrequency: "monthly", priority: 0.6 },
  { path: "/keto-mentor", changeFrequency: "monthly", priority: 0.6 },
  { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.3 },
] as const;

const absolute = (path: string) => `https://norbapp.com${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.flatMap(({ path, changeFrequency, priority }) => {
    const languages = {
      de: absolute(localizedPath(path, "de")),
      hu: absolute(localizedPath(path, "hu")),
      en: absolute(localizedPath(path, "en")),
    };
    return Object.values(languages).map((url) => ({
      url,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    }));
  });
}
