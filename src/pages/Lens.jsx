import Gallery from '../components/Gallery.jsx';
import IncentiveBanner from '../components/IncentiveBanner.jsx';
import { lensCategories } from '../data/siteData.js';

export default function Lens() {
  return (
    <>
      <section className="bg-brand-dark py-16 text-brand-white">
        <div className="section-shell">
          <span className="eyebrow">LENS</span>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl font-bold sm:text-6xl">
            Fotografia y videografia profesional con direccion humana.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-white/75">
            Sesiones al aire libre, cobertura de video y un estudio fotografico preparado como
            siguiente etapa de crecimiento.
          </p>
        </div>
      </section>
      <IncentiveBanner />
      {lensCategories.map((category) => (
        <Gallery key={category.id} category={category} />
      ))}
    </>
  );
}
