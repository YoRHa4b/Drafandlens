import ContactForm from '../components/ContactForm.jsx';

export default function Contact() {
  return (
    <section className="section-shell grid gap-8 py-16 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
      <div>
        <span className="eyebrow">Contacto</span>
        <h1 className="mt-3 font-serif text-5xl font-bold text-brand-primary sm:text-6xl">
          Agenda, cotiza o solicita una propuesta.
        </h1>
        <p className="mt-5 text-sm leading-7 text-brand-muted">
          Completa el formulario con el servicio que te interesa. Para respuestas rapidas, usa el
          boton flotante de WhatsApp desde cualquier pantalla.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
