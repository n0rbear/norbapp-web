import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: "https://norbapp.com", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://norbapp.com/fuel", lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: "https://norbapp.com/keto-mentor", lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: "https://norbapp.com/impressum", lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: "https://norbapp.com/datenschutz", lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
