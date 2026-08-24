import ServicesPageContent from "./ServicesPageContent";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    description: isAr
      ? "استكشف خدمات الجزيرة للاتصالات: ألياف FTTx فائقة السرعة، شبكات لاسلكية، هاتف VoIP، أمن سيبراني، استضافة مؤسسية، تطوير برمجيات، استشارات شبكات وحلول أعمال في جميع أنحاء العراق."
      : "Explore Al Jazeera Telecom's full range of services: ultra-fast FTTx fiber, wireless networks, VoIP telephony, cybersecurity, enterprise hosting, software development, network consulting & business solutions across Iraq.",
  };
}

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  return <ServicesPageContent locale={locale} />;
}
