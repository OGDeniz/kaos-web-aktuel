'use client';
import React, { useState } from 'react';
import ClaimBar from './ClaimBar';
import GrayLayout from '../../layouts/GrayLayout';
import Footer from '../ui/Footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? (target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Danke für deine Nachricht! Wir melden uns innerhalb von 24h.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      consent: false,
    });
  };

  return (
    <GrayLayout >
    <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 px-4 pt-32 pb-20 text-metal min-h-screen overflow-x-hidden">
      {/* Dekorative Blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-softred opacity-20 rounded-full blur-3xl z-0" />
      <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-2xl z-0" />

      <div className="relative max-w-3xl mx-auto text-center z-10 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 py-4 bg-gradient-to-r from-softred via-white to-blue-400 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
          Kontakt aufnehmen
        </h1>

        <p className="text-base md:text-lg text-gray-400 max-w-xl mb-10">
          Du hast Fragen oder möchtest mit uns zusammenarbeiten? Schreib uns
          gerne – wir freuen uns auf deine Nachricht!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 w-full text-left">
          <div>
            <label className="block mb-1 font-medium text-gray-300">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 bg-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-300">E-Mail-Adresse *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 bg-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-300">Telefonnummer (optional)</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-600 bg-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-300">Betreff *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 bg-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-300">Deine Nachricht *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-gray-600 bg-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-1"
            />
            <label className="text-sm text-gray-300">
              Ich akzeptiere die{' '}
              <a
                href="/datenschutz"
                target="_blank"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Datenschutzbestimmungen
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-softred to-blue-500 text-white py-3 px-6 rounded-md font-semibold shadow-md hover:opacity-90 transition"
          >
            Nachricht senden
          </button>
        </form>

        <div className="mt-12 text-center text-sm text-gray-400 italic">
          📧 hello@kaos-media.de | 📞 +49 123 4567890
        </div>

        <ClaimBar text="KAOS Media – Kreativität trifft Struktur – PERFEKTION ENTSTEHT NUR IM KAOS" />
      </div>
    </section>
    <Footer />
    </GrayLayout>
  );
};

export default ContactPage;