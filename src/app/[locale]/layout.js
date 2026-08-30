import { Alexandria, Geist_Mono, Noto_Kufi_Arabic } from "next/font/google";
import "../globals.css";
import { locales } from "@/i18n";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoKufi = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    metadataBase: new URL("https://jt.iq"),
    title: {
      default: "Al Jazeera Telecom | الجزيرة للاتصالات",
    },
    description: isAr
      ? "الجزيرة للاتصالات تقدم إنترنت ألياف FTTx فائق السرعة، حلول لاسلكية، VoIP، أمن سيبراني، استضافة سحابية وخدمات تقنية مؤسسية في جميع أنحاء العراق. اتصل 6055."
      : "Al Jazeera Telecom delivers ultra-fast FTTx fiber internet, wireless solutions, VoIP, cybersecurity, cloud hosting, and enterprise IT services across Iraq. Call 6055.",
    keywords: isAr
      ? [
          "الجزيرة للاتصالات",
          "إنترنت العراق",
          "ألياف بغداد",
          "FTTx العراق",
          "إنترنت عالي السرعة",
        ]
      : [
          "Al Jazeera Telecom",
          "fiber internet Iraq",
          "FTTx Iraq",
          "broadband Baghdad",
        ],
    icons: {
      icon: "/logo.svg",
      shortcut: "/logo.svg",
      apple: "/logo.svg",
    },
    alternates: {
      canonical: `https://jt.iq/${locale}`,
      languages: {
        "en-IQ": "https://jt.iq/en",
        "ar-IQ": "https://jt.iq/ar",
      },
    },
    openGraph: {
      type: "website",
      locale: isAr ? "ar_IQ" : "en_IQ",
      alternateLocale: isAr ? "en_IQ" : "ar_IQ",
      url: `https://jt.iq/${locale}`,
      siteName: "Al Jazeera Telecom",
      title: "Al Jazeera Telecom | الجزيرة للاتصالات",
      description: isAr
        ? "إنترنت FTTx فائق السرعة، حلول لاسلكية، VoIP، أمن سيبراني في جميع أنحاء العراق."
        : "Ultra-fast FTTx fiber internet, wireless solutions, VoIP, cybersecurity across Iraq.",
      images: [
        {
          url: "/notfound.webp",
          width: 1200,
          height: 630,
          alt: "Al Jazeera Telecom",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Al Jazeera Telecom",
      description: isAr
        ? "إنترنت فائق السرعة في العراق"
        : "Ultra-fast fiber internet across Iraq",
      images: ["/notfound.webp"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const dir = isAr ? "rtl" : "ltr";
  const fontVars = isAr
    ? `${notoKufi.variable} ${geistMono.variable}`
    : `${alexandria.variable} ${geistMono.variable}`;

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${fontVars} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
