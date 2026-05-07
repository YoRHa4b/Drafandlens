import { Clock3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { draftServices } from '../data/siteData.js';

export default function Draft() {
  return (
    <section className="bg-brand-cream py-16">
      <div className="section-shell">
        <div className="rounded-[2rem] border border-brand-border bg-tech-grid bg-[length:28px_28px] p-6 shadow-soft sm:p-10">
          <span className="eyebrow">DRAFT / Coming Soon</span>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl font-bold text-brand-primary sm:text-6xl">
            Unidad tecnica para CAD, renders y fotogrametria con dron.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-muted">
            Esta unidad se proyecta para planos 2D/3D, mapas tecnicos, renders y levantamientos por
            fotogrametria. La estetica del sitio ya deja lista la presencia comercial sin prometer
            disponibilidad inmediata.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {draftServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-3xl border border-brand-border bg-brand-white/90 p-6"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-primary text-brand-accent">
                    <Icon size={22} />
                  </span>
                  <h2 className="mt-5 font-serif text-3xl font-bold text-brand-primary">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{service.description}</p>
                  <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-surface px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
                    <Clock3 size={15} /> Coming Soon
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
