import { motion } from 'framer-motion';
import { portfolioItems } from '../data/siteData.js';

export default function Portfolio() {
  return (
    <section className="section-shell py-16">
      <span className="eyebrow">Libreria / Ejemplos</span>
      <h1 className="mt-3 max-w-4xl font-serif text-5xl font-bold text-brand-primary sm:text-6xl">
        Showcase visual para fotografia, marketing, web y video.
      </h1>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-muted">
        Sustituye estas imagenes por trabajos reales, logos, piezas de redes, sitios entregados y
        muestras de video cuando tengas el material final.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            className="overflow-hidden rounded-3xl border border-brand-border bg-brand-white shadow-soft"
          >
            <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">{item.category}</p>
              <h2 className="mt-2 font-serif text-2xl font-bold text-brand-primary">{item.title}</h2>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
