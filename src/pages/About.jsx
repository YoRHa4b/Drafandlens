import { motion } from 'framer-motion';
import { BadgeCheck, BrainCircuit, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    title: 'Origen santabarbarense',
    icon: HeartHandshake,
    text: 'Una marca creada por ciudadanos 100% santabarbarenses, con interes real en servir a negocios y familias de la zona.',
  },
  {
    title: 'Etica de trabajo',
    icon: BadgeCheck,
    text: 'Cada entrega debe sentirse segura, profesional y clara: desde una sesion personal hasta el crecimiento de una marca.',
  },
  {
    title: 'Mentalidad de datos',
    icon: BrainCircuit,
    text: 'La marca esta respaldada por un Ingeniero en Analisis de Datos en sistemas, uniendo criterio tecnico con sensibilidad visual.',
  },
];

export default function About() {
  return (
    <section className="section-shell py-16">
      <div className="max-w-4xl">
        <span className="eyebrow">Quienes somos</span>
        <h1 className="mt-3 font-serif text-5xl font-bold text-brand-primary sm:text-6xl">
          Una empresa joven, local y orientada a resultados.
        </h1>
        <p className="mt-6 text-base leading-8 text-brand-muted">
          Draft & Lens nace en Santa Barbara como una empresa en crecimiento dedicada a servicios
          audiovisuales, gestion digital y desarrollo web. Su objetivo es ofrecer un espacio seguro
          para inmortalizar memorias y ayudar a negocios, marcas y profesionales a comunicar mejor.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-brand-border bg-brand-white p-6 shadow-soft"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-primary text-brand-accent">
                <Icon size={22} />
              </span>
              <h2 className="mt-5 font-serif text-3xl font-bold text-brand-primary">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-7 text-brand-muted">{pillar.text}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
