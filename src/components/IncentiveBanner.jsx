import { Gift } from 'lucide-react';

export default function IncentiveBanner() {
  return (
    <section className="section-shell py-10">
      <div className="grid gap-5 rounded-[2rem] bg-brand-primary p-6 text-brand-white shadow-soft md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
        <span className="grid size-14 place-items-center rounded-2xl bg-brand-accent text-brand-dark">
          <Gift size={26} />
        </span>
        <div>
          <p className="eyebrow">Promocion de lanzamiento</p>
          <h2 className="mt-2 font-serif text-3xl font-bold">Sesion de fotos profesional por L. 2,000 (~$81)</h2>
          <p className="mt-2 text-sm leading-7 text-brand-white/78">
            Incluye 15-20 fotos editadas y una retratera de 10x15cm fisica de regalo.
          </p>
        </div>
        <a
          href="#contacto"
          className="focus-ring inline-flex justify-center rounded-full bg-brand-white px-5 py-3 text-sm font-bold text-brand-primary"
        >
          Reservar
        </a>
      </div>
    </section>
  );
}
