import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import IncentiveBanner from '../components/IncentiveBanner.jsx';
import MarketingCarousel from '../components/MarketingCarousel.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { marketingPlans, quickSegments, serviceGroups } from '../data/siteData.js';

export default function Home() {
  return (
    <>
      <Hero />
      <IncentiveBanner />

      <section className="section-shell py-14">
        <div className="max-w-3xl">
          <span className="eyebrow">Servicios</span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-brand-primary sm:text-5xl">
            Un portafolio diversificado, organizado para cada tipo de cliente.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceGroups.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-brand-white py-14">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Rutas inteligentes</span>
              <h2 className="mt-3 font-serif text-4xl font-bold text-brand-primary">
                Entra por lo que necesitas.
              </h2>
            </div>
            <Link to="/servicios" className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-accent">
              Ver todos los servicios <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {quickSegments.map((segment, index) => {
              const Icon = segment.icon;
              return (
                <motion.div
                  key={segment.href}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link to={segment.href} className="block h-full rounded-3xl border border-brand-border bg-brand-cream p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-accent">
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand-primary text-brand-accent">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 font-serif text-3xl font-bold text-brand-primary">{segment.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-brand-muted">{segment.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <span className="eyebrow">Marketing & Digital</span>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl font-bold text-brand-primary">
          Planes para que tu marca se vea, se entienda y convierta.
        </h2>
        <div className="mt-8">
          <MarketingCarousel plans={marketingPlans} />
        </div>
      </section>

      <section id="contacto" className="section-shell grid gap-8 py-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <span className="eyebrow">Contacto</span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-brand-primary">
            Cotiza una sesion, una web o un plan digital.
          </h2>
          <p className="mt-4 text-sm leading-7 text-brand-muted">
            El formulario queda listo para EmailJS. Tambien tienes un boton fijo de WhatsApp para
            conversaciones rapidas desde movil.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
