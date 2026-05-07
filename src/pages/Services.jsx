import ServiceCard from '../components/ServiceCard.jsx';
import MarketingCarousel from '../components/MarketingCarousel.jsx';
import { marketingPlans, serviceGroups } from '../data/siteData.js';

export default function Services() {
  return (
    <>
      <section className="bg-brand-primary py-16 text-brand-white">
        <div className="section-shell">
          <span className="eyebrow">Servicios</span>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl font-bold sm:text-6xl">
            Fotografia, video, marketing, web y soluciones tecnicas en un solo lugar.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-white/75">
            La navegacion esta separada por unidad para que cada cliente encuentre solo lo que
            necesita sin perder el contexto completo de la marca.
          </p>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {serviceGroups.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="section-shell pb-16">
        <span className="eyebrow">Carrusel digital</span>
        <h2 className="mt-3 font-serif text-4xl font-bold text-brand-primary">Planes de marketing y web</h2>
        <div className="mt-8">
          <MarketingCarousel plans={marketingPlans} />
        </div>
      </section>
    </>
  );
}
