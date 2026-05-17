import { useRef, useState } from 'react';
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
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xojbakjv', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(formRef.current),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setSent(true);
        formRef.current.reset();
      } else {
        setError(data.error || 'Ocurrió un problema al enviar el formulario.');
      }
    } catch (err) {
      setLoading(false);
      setError('No se pudo conectar con Formspree. Intenta de nuevo.');
      console.error(err);
    }
  }

  return (
    <form
      id="contact-form"
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-brand-border bg-brand-white p-5 shadow-soft sm:p-7"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand-primary text-brand-accent">
          <Mail size={22} />
        </span>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-accent">Formulario activo</p>
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
      {error && (
        <p className="mt-4 rounded-2xl bg-red-100 p-3 text-sm font-semibold text-brand-dark">
          {error}
        </p>
      )}
    </form>
  );
}
