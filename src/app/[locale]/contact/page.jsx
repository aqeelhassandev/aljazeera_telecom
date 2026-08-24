import ContactPageContent from "./ContactPageContent";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    description: isAr
      ? "تواصل مع الجزيرة للاتصالات للحصول على أسرع خطط إنترنت الألياف في العراق. اتصل 6055، أو راسلنا عبر info@jt.iq، أو قم بزيارتنا في الكرادة، بغداد. فريقنا متواجد 24/7."
      : "Contact Al Jazeera Telecom for the fastest fiber internet plans in Iraq. Call 6055, email info@jt.iq, or visit us in Karrada, Baghdad. Our team is available 24/7.",
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  return <ContactPageContent locale={locale} />;
}
