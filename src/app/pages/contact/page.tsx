"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/layouts/Layout";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Danke für deine Nachricht! Wir melden uns innerhalb von 24h.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "", consent: false });
  };

  const inputClasses = "w-full bg-background border border-border rounded-xl px-4 py-3.5 text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors";

  return (
    <Layout>
      <section className="px-6 md:px-12 pt-10 pb-24 md:pt-14 md:pb-32">
        <div className="mx-auto max-w-2xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.75 bg-accent rounded-full" />
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Kontakt</span>
              <div className="w-12 h-0.75 bg-accent rounded-full" />
            </div>
            <h1 className="text-white">Kontakt aufnehmen</h1>
            <p className="mt-6 text-text-secondary text-lg leading-relaxed">
              Du hast Fragen oder möchtest mit uns zusammenarbeiten?<br />
              Schreib uns – wir freuen uns auf deine Nachricht!
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 rounded-2xl bg-surface border border-border p-8 md:p-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-text-muted mb-2">Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClasses} placeholder="Dein Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-text-muted mb-2">E-Mail *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} placeholder="deine@email.de" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm text-text-muted mb-2">Telefon (optional)</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+49 ..." />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-text-muted mb-2">Betreff *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClasses} placeholder="Worum geht's?" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-text-muted mb-2">Nachricht *</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className={`${inputClasses} resize-none`} placeholder="Erzähl uns von deinem Projekt..." />
            </div>

            <div className="flex items-start gap-3 justify-center">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 accent-accent"
              />
              <label className="text-sm text-text-secondary">
                Ich akzeptiere die{" "}
                <a href="/datenschutz" className="text-accent hover:text-accent-hover underline">Datenschutzbestimmungen</a>.
              </label>
            </div>

            <div className="text-center pt-2">
              <Button type="submit" className="w-full sm:w-auto">Nachricht senden</Button>
            </div>
          </motion.form>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-text-muted text-sm">
            <a href="mailto:info@kaos.media" className="hover:text-white transition-colors">info@kaos.media</a>
            <span className="hidden sm:block w-1 h-1 bg-text-muted rounded-full" />
            <span>Heidelberg, Deutschland</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
