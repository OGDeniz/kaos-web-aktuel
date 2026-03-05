'use client';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@/components/ui/Button';

const inputClass =
  'w-full bg-background border border-border rounded-xl px-4 py-3.5 text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => setStatus('idle'), 8000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', consent: false });
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      className="rounded-2xl bg-surface border border-border p-8 md:p-12 space-y-6"
      onSubmit={handleSubmit}
    >
      {/* Zeile 1: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cf-name" className="block text-sm text-text-muted mb-2">
            Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="cf-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Dein Name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-sm text-text-muted mb-2">
            E-Mail <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="cf-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="deine@email.de"
            className={inputClass}
          />
        </div>
      </div>

      {/* Zeile 2: Telefon + Betreff */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cf-phone" className="block text-sm text-text-muted mb-2">
            Telefon (optional)
          </label>
          <input
            type="tel"
            id="cf-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+49 ..."
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-subject" className="block text-sm text-text-muted mb-2">
            Betreff <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="cf-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Worum geht's?"
            className={inputClass}
          />
        </div>
      </div>

      {/* Nachricht */}
      <div>
        <label htmlFor="cf-message" className="block text-sm text-text-muted mb-2">
          Nachricht <span className="text-accent">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Erzähl uns von deinem Projekt..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Datenschutz */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="cf-consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mt-1 accent-accent cursor-pointer"
        />
        <label htmlFor="cf-consent" className="text-sm text-text-secondary cursor-pointer">
          Ich akzeptiere die{' '}
          <a href="/datenschutz" target="_blank" className="text-accent underline hover:text-accent-hover">
            Datenschutzbestimmungen
          </a>
          .
        </label>
      </div>

      {/* Status */}
      {status === 'success' && (
        <p className="text-green-400 text-sm text-center">
          Nachricht erfolgreich gesendet! Wir melden uns innerhalb von 24h.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">
          Fehler beim Senden. Bitte versuche es erneut.
        </p>
      )}

      {/* Submit */}
      <div className="text-center pt-2">
        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Wird gesendet…' : 'Nachricht senden'}
        </Button>
      </div>
    </form>
  );
}
