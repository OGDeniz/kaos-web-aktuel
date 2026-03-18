'use client';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@/components/ui/Button';
import styles from './ContactForm.module.css';

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div>
          <label htmlFor="cf-name" className={styles.label}>
            Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="cf-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Dein Name"
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={styles.label}>
            E-Mail <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            id="cf-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="deine@email.de"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label htmlFor="cf-phone" className={styles.label}>
            Telefon (optional)
          </label>
          <input
            type="tel"
            id="cf-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+49 ..."
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="cf-subject" className={styles.label}>
            Betreff <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="cf-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Worum geht's?"
            className={styles.input}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={styles.label}>
          Nachricht <span className={styles.required}>*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Erzähl uns von deinem Projekt..."
          className={`${styles.input} ${styles.textarea}`}
        />
      </div>

      <div className={styles.checkboxRow}>
        <input
          type="checkbox"
          id="cf-consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className={styles.checkbox}
        />
        <label htmlFor="cf-consent" className={styles.checkboxLabel}>
          Ich akzeptiere die{' '}
          <a href="/datenschutz" target="_blank" className={styles.privacyLink}>
            Datenschutzbestimmungen
          </a>
          .
        </label>
      </div>

      {status === 'success' && (
        <p role="alert" className={styles.success}>
          Nachricht erfolgreich gesendet! Wir melden uns innerhalb von 24h.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className={styles.error}>
          Fehler beim Senden. Bitte versuche es erneut.
        </p>
      )}

      <div className={styles.submit}>
        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Wird gesendet…' : 'Nachricht senden'}
        </Button>
      </div>
    </form>
  );
}
