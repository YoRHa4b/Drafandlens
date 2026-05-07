import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';

export default function ServiceCard({ service, compact = false }) {
  const Icon = service.icon;

  return (
    <article
      className={`group rounded-3xl border border-brand-border bg-brand-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-accent/60 ${
        service.featured ? 'ring-2 ring-brand-accent/40' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand-primary text-brand-accent">
          <Icon size={22} />
        </span>
        {service.price && (
          <span className="rounded-full bg-brand-surface px-3 py-1 text-sm font-bold text-brand-primary">
            {service.price}
          </span>
        )}
      </div>
      <h3 className="mt-5 font-serif text-3xl font-bold text-brand-primary">{service.title}</h3>
      {service.subtitle && <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-brand-accent">{service.subtitle}</p>}
      {service.description && <p className="mt-4 text-sm leading-7 text-brand-muted">{service.description}</p>}
      {service.benefits && (
        <ul className="mt-5 space-y-3">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex gap-3 text-sm leading-6 text-brand-muted">
              <Check className="mt-1 shrink-0 text-brand-accent" size={16} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      )}
      {service.href && !compact && (
        <Link
          to={service.href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-primary transition group-hover:text-brand-accent"
        >
          Explorar <ArrowUpRight size={17} />
        </Link>
      )}
    </article>
  );
}
