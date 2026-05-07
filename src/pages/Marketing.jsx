import MarketingCarousel from '../components/MarketingCarousel.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { marketingPlans } from '../data/siteData.js';

export default function Marketing() {
  return (
    <>
      <section className="bg-brand-white py-16">
        <div className="section-shell">
          <span className="eyebrow">Marketing & Digital</span>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl font-bold text-brand-primary sm:text-6xl">
            Contenido, estrategia y sitios web para negocios que quieren crecer.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-muted">
            Pensado para empresas, profesionales, fundaciones y marcas locales que necesitan verse
            confiables, activas y faciles de contactar.
          </p>
        </div>
      </section>
      <section className="section-shell py-14">
        <MarketingCarousel plans={marketingPlans} />
      </section>
      <section className="section-shell grid gap-6 pb-14 md:grid-cols-2">
        {marketingPlans.map((plan) => (
          <ServiceCard key={plan.title} service={plan} compact />
        ))}
      </section>
      <section className="section-shell pb-16">
        <ContactForm />
      </section>
    </>
  );
}
