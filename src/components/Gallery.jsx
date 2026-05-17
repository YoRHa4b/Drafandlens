import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export default function Gallery({ category }) {
  const Icon = category.icon;

  return (
    <section className="section-shell py-12">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="eyebrow">{category.status}</span>
          <h2 className="mt-2 font-serif text-4xl font-bold text-brand-primary">{category.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-brand-muted">{category.intro}</p>
        </div>
        <span className="grid size-12 place-items-center rounded-2xl bg-brand-primary text-brand-accent">
          <Icon size={22} />
        </span>
      </div>

      <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4">
        {category.images.map((image, index) => (
          <motion.figure
            key={image}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={`relative overflow-hidden rounded-3xl bg-brand-surface shadow-soft ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            } ${index === 3 ? 'md:col-span-2' : ''}`}
          >
            <img src={image} alt={`${category.title} muestra ${index + 1}`} loading="lazy" className="h-full w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/75 to-transparent p-5 text-sm font-bold text-brand-white">
              Draft & Lens / {category.title}
            </figcaption>
            {category.comingSoon && (
              <div className="absolute inset-0 grid place-items-center bg-brand-dark/72 p-6 text-center backdrop-blur-sm">
                <div>
                  <Lock className="mx-auto text-brand-accent" size={26} />
                  <p className="mt-4 font-serif text-3xl font-bold text-brand-white">Coming Soon</p>
                  <p className="mt-3 max-w-md text-sm leading-7 text-brand-white/80">{category.comingSoon}</p>
                </div>
              </div>
            )}
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
