import { Link } from 'react-router-dom';
import { Camera, Facebook, Instagram, Mail } from 'lucide-react';
import { company, navItems } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-12 text-brand-white">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-brand-accent text-brand-dark">
              <Camera size={22} />
            </span>
            <div>
              <p className="font-serif text-3xl font-bold">Draft & Lens</p>
              <p className="text-sm text-brand-white/65">{company.location}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-brand-white/70">
            Servicios audiovisuales, marketing digital, desarrollo web y soluciones tecnicas con enfoque
            santabarbarense, calidad y resultados.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-accent">Mapa</p>
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link key={item.href} to={item.href} className="text-sm text-brand-white/70 hover:text-brand-accent">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-accent">Contacto</p>
            <div className="flex gap-3">
              <a href={`mailto:${company.email}`} className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-brand-accent hover:text-brand-dark">
                <Mail size={18} />
              </a>
              <a href={company.instagram} className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-brand-accent hover:text-brand-dark">
                <Instagram size={18} />
              </a>
              <a href={company.facebook} className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-brand-accent hover:text-brand-dark">
                <Facebook size={18} />
              </a>
            </div>
            <a href="/paquetes.pdf" className="mt-3 inline-block text-sm text-brand-white/70 hover:text-brand-accent">
              Descargar paquetes y precios
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
