import AboutPageContent from "./AboutPageContent";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    description: isAr
      ? "تعرف على الجزيرة للاتصالات — أكثر من 20 عاماً في ربط العراق بإنترنت الألياف عالي السرعة، خدمات تقنية المعلومات للمؤسسات، وحلول الاتصالات. مقرنا الرئيسي في الكرادة، بغداد."
      : "Learn about Al Jazeera Telecom — over 20 years connecting Iraq with high-speed fiber internet, enterprise IT services, and telecom solutions. Headquartered in Baghdad, Karrada.",
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  return <AboutPageContent locale={locale} />;
}
