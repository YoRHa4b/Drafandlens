import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send } from 'lucide-react';

const serviceOptions = [
  'Sesion fotografica al aire libre',
  'Videografia',
  'Marketing digital',
  'Desarrollo web',
  'Fotografia de estudio - Coming Soon',
  'DRAFT tecnico - Coming Soon',
];

export default function ContactForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Reemplaza con tu Service ID de EmailJS
        'YOUR_TEMPLATE_ID', // Reemplaza con tu Template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Reemplaza con tu Public Key
      )
      .then(() => {
        setSent(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setLoading(false);
      });
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className="rounded-[2rem] border border-brand-border bg-brand-white p-5 shadow-soft sm:p-7">
      <div className="flex items-center gap-3">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand-primary text-brand-accent">
          <Mail size={22} />
        </span>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-accent">EmailJS Ready</p>
          <h2 className="font-serif text-3xl font-bold text-brand-primary">Hablemos de tu proyecto</h2>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        <label className="text-sm font-bold text-brand-primary">
          Nombre
          <input
            required
            name="name"
            className="focus-ring mt-2 w-full rounded-2xl border border-brand-border bg-brand-cream px-4 py-3 text-brand-text"
            placeholder="Tu nombre"
          />
        </label>
        <label className="text-sm font-bold text-brand-primary">
          Email
          <input
            required
            type="email"
            name="email"
            className="focus-ring mt-2 w-full rounded-2xl border border-brand-border bg-brand-cream px-4 py-3 text-brand-text"
            placeholder="tu@email.com"
          />
        </label>
        <label className="text-sm font-bold text-brand-primary">
          Servicio de interes
          <select
            required
            name="service"
            className="focus-ring mt-2 w-full rounded-2xl border border-brand-border bg-brand-cream px-4 py-3 text-brand-text"
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona un servicio
            </option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-bold text-brand-primary">
          Mensaje
          <textarea
            required
            name="message"
            rows="5"
            className="focus-ring mt-2 w-full resize-none rounded-2xl border border-brand-border bg-brand-cream px-4 py-3 text-brand-text"
            placeholder="Cuentanos fecha, tipo de servicio y ubicacion aproximada."
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-4 text-sm font-bold text-brand-white transition hover:bg-brand-dark disabled:opacity-50"
      >
        {loading ? 'Enviando...' : 'Enviar solicitud'} <Send size={18} />
      </button>
      {sent && (
        <p className="mt-4 rounded-2xl bg-brand-surface p-3 text-sm font-semibold text-brand-primary">
          ¡Mensaje enviado! Te contactaremos pronto.
        </p>
      )}
    </form>
  );
}
