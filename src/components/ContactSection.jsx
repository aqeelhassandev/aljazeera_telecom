"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { getTranslations } from "@/i18n";

export default function ContactSection({ locale = "en" }) {
  const t = getTranslations(locale);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(
      `Contact Form - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone || "N/A"}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:info@jt.iq?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setIsSubmitting(false);

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative  py-28 overflow-hidden">
      {/* High-End Background Decors */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[140px] z-0" />
      <div className="pointer-events-none absolute -bottom-40 left-[-10%] w-[500px] h-[500px] bg-brand-secondary2/10 rounded-full blur-[120px] z-0" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 z-0" />

      <div className="relative max-w-[1700px] mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* ── Left Column: Contact Info ── */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Badge + Heading */}
            <motion.div
              initial={{ opacity: 0, x: locale === "ar" ? 350 : -350 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-100 mb-6">
                <span className="text-sm">✶</span> {t.contact.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl  font-bold tracking-tight text-zinc-900 leading-[1.1] mb-6">
                {t.contact.heading1}{" "}
                <span className="text-brand-secondary1">{t.contact.headingHighlight}</span>{" "}
                {t.contact.heading2}
              </h2>
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed lg:max-w-sm">
                {t.contact.subtext}
              </p>
            </motion.div>

            {/* Info Cards List */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: <Phone loading="lazy" className="w-5 h-5" />,
                  label: t.contact.infoCards.phone.label,
                  val: t.contact.infoCards.phone.val,
                  href: "tel:6055",
                  color: "bg-brand-secondary1/10 text-brand-secondary1",
                },
                {
                  icon: <Mail loading="lazy" className="w-5 h-5" />,
                  label: t.contact.infoCards.email.label,
                  val: t.contact.infoCards.email.val,
                  href: "mailto:info@jt.iq",
                  color: "bg-brand-primary/10 text-brand-primary",
                },
                {
                  icon: <MapPin loading="lazy" className="w-5 h-5" />,
                  label: t.contact.infoCards.address.label,
                  val: t.contact.infoCards.address.val,
                  href: "#",
                  color: "bg-zinc-200/50 text-zinc-700",
                },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  className="group flex gap-5 items-center bg-white/70 backdrop-blur-md p-6 rounded-[24px] border border-white/60 shadow-xs hover:shadow-lg hover:bg-white hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, x: locale === "ar" ? 220 : -220 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: idx * 0.2,
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-lg font-bold text-zinc-800 leading-snug truncate group-hover:text-brand-secondary1 transition-colors">
                      {item.val}
                    </p>
                  </div>
                  {item.href !== "#" && (
                    <ArrowRight className={`w-5 h-5 text-zinc-300 group-hover:text-brand-secondary1 group-hover:translate-x-1 transition-all duration-300 shrink-0 ${locale === "ar" ? "rotate-180" : ""}`} />
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Right Column: Interactive Form ── */}
          <motion.div
            className="lg:col-span-7 bg-white/80 backdrop-blur-md rounded-[40px] p-8 md:p-12 border border-white shadow-2xl relative"
            initial={{ opacity: 0, x: locale === "ar" ? -350 : 350, y: 150 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            {/* Form Title */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-7 h-7 text-brand-secondary1" />
                {t.contact.form.title}
              </h3>
              <p className="text-sm text-zinc-500">
                {t.contact.form.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2 relative group">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    {t.contact.form.fullName}
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full bg-[#f9f9f9]/80 border border-zinc-200 rounded-[20px] px-5 py-4 text-zinc-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-secondary1/30 focus:border-brand-secondary1 focus:bg-white transition-all shadow-inner"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    {t.contact.form.emailAddress}
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full bg-[#f9f9f9]/80 border border-zinc-200 rounded-[20px] px-5 py-4 text-zinc-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-secondary1/30 focus:border-brand-secondary1 focus:bg-white transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  {t.contact.form.phone}
                </span>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.contact.form.phonePlaceholder}
                  className="w-full bg-[#f9f9f9]/80 border border-zinc-200 rounded-[20px] px-5 py-4 text-zinc-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-secondary1/30 focus:border-brand-secondary1 focus:bg-white transition-all shadow-inner"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  {t.contact.form.message}
                </span>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full bg-[#f9f9f9]/80 border border-zinc-200 rounded-[20px] px-5 py-4 text-zinc-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-secondary1/30 focus:border-brand-secondary1 focus:bg-white transition-all shadow-inner resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-secondary1 to-brand-primary hover:from-brand-primary hover:to-brand-secondary1 text-white rounded-full py-4 px-6 text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-500 disabled:opacity-55 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    {t.contact.form.submit}
                    <Send className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`} />
                  </>
                )}
              </button>             
            </form>
          </motion.div>
        </div>

        {/* ── Map Row ── */}
        <motion.div
          className="mt-20 w-full h-[480px] rounded-[36px] overflow-hidden border border-white/60 shadow-2xl relative z-10"
          initial={{ opacity: 0, y: 220 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.8728448834925!2d44.43615467634629!3d33.308738373446056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155781a7b45f44ab%3A0xe21ba57fc1c5cf1!2sKarrada%2C%20Baghdad!5e0!3m2!1sen!2siq!4v1700000000000!5m2!1sen!2siq"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
