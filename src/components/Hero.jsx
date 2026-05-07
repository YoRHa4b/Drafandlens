import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Camera, MousePointer2 } from 'lucide-react';
import { heroSlides } from '../data/siteData.js';

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-hero-gradient text-brand-white">
      <AnimatePresence mode="wait">
        <motion.img
          key={heroSlides[active].image}
          src={heroSlides[active].image}
          alt={heroSlides[active].title}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.34, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/55 to-brand-dark" />

      <div className="section-shell relative grid min-h-[calc(100vh-5rem)] content-center gap-10 py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="eyebrow">Santa Barbara / Audiovisual / Tech</span>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-bold leading-[0.96] text-brand-white sm:text-6xl lg:text-7xl">
            Draft & Lens: Audiovisual y Digital Profesional
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-brand-white/82 sm:text-lg">
            Capturamos momentos, potenciamos marcas
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/servicios/lens"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent-gradient px-6 py-4 text-sm font-bold text-brand-dark shadow-glow"
            >
              Ver servicios Lens <ArrowRight size={18} />
            </Link>
            <Link
              to="/servicios/marketing"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-brand-white/25 bg-brand-white/10 px-6 py-4 text-sm font-bold text-brand-white backdrop-blur"
            >
              Marketing y web <MousePointer2 size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-soft backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="grid size-11 place-items-center rounded-full bg-brand-accent text-brand-dark">
              <Camera size={20} />
            </span>
            <div>
              <p className="text-sm font-bold">Oferta destacada</p>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-white/60">Sesion profesional</p>
            </div>
          </div>
          <p className="mt-5 font-serif text-3xl font-bold text-brand-white">L. 2,000 (~$81)</p>
          <p className="mt-3 text-sm leading-7 text-brand-white/78">
            Incluye 15-20 fotos editadas, direccion durante la sesion y una retratera fisica de
            10x15cm con tu fotografia favorita.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
