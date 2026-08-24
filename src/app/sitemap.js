export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://jt.iq";
  const locales = ["en", "ar"];

  const paths = [
    { url: "", priority: 1.0, changeFrequency: "weekly" },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.7, changeFrequency: "yearly" },
  ];

  const entries = [];

  locales.forEach((locale) => {
    paths.forEach(({ url, priority, changeFrequency }) => {
      entries.push({
        url: `${baseUrl}/${locale}${url}`,
        lastModified: new Date().toISOString(),
        changeFrequency,
        priority,
      });
    });
  });

  return entries;
}
