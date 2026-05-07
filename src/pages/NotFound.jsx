import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section-shell grid min-h-[60vh] place-items-center py-16 text-center">
      <div>
        <span className="eyebrow">404</span>
        <h1 className="mt-3 font-serif text-5xl font-bold text-brand-primary">Pagina no encontrada</h1>
        <p className="mt-4 text-sm text-brand-muted">La ruta no existe o fue movida.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-4 text-sm font-bold text-brand-white"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
