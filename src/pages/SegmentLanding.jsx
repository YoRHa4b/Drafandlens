import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Camera, Code2, Megaphone } from 'lucide-react';
import Gallery from '../components/Gallery.jsx';
import IncentiveBanner from '../components/IncentiveBanner.jsx';
import MarketingCarousel from '../components/MarketingCarousel.jsx';
import { lensCategories, marketingPlans } from '../data/siteData.js';

const segmentContent = {
  quinceaneras: {
    eyebrow: 'Ruta para quinceaneras',
    title: 'Fotografia y video para una celebracion memorable.',
    description:
      'Esta vista filtra el sitio hacia servicios Lens: sesiones al aire libre, video social, entrega editada e incentivo con retratera fisica.',
    icon: Camera,
    mode: 'lens',
  },
  negocios: {
    eyebrow: 'Ruta para negocios',
    title: 'Contenido, redes y web para marcas locales.',
    description:
      'Aqui se priorizan servicios de marketing digital, fotografia profesional para negocios y desarrollo web.',
    icon: Megaphone,
    mode: 'marketing',
  },
  profesionales: {
    eyebrow: 'Ruta para profesionales',
    title: 'Marca personal, portafolio y presencia digital.',
    description:
      'Ideal para perfiles profesionales, consultores, fundaciones, ONGs y emprendimientos con necesidad de confianza visual.',
    icon: Code2,
    mode: 'marketing',
  },
};

export default function SegmentLanding() {
  const { segment = 'quinceaneras' } = useParams();
  const content = segmentContent[segment] ?? segmentContent.quinceaneras;
  const Icon = content.icon;
  const availableLens = lensCategories.filter((category) => category.id !== 'estudio');

  return (
    <>
      <section className="bg-brand-dark py-16 text-brand-white">
        <div className="section-shell">
          <span className="grid size-14 place-items-center rounded-2xl bg-brand-accent text-brand-dark">
            <Icon size={26} />
          </span>
          <p className="eyebrow mt-6">{content.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl font-bold sm:text-6xl">{content.title}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-white/75">{content.description}</p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-4 text-sm font-bold text-brand-dark shadow-glow"
          >
            Cotizar ahora <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {content.mode === 'lens' ? (
        <>
          <IncentiveBanner />
          {availableLens.map((category) => (
            <Gallery key={category.id} category={category} />
          ))}
        </>
      ) : (
        <section className="section-shell py-14">
          <MarketingCarousel plans={marketingPlans} />
        </section>
      )}
    </>
  );
}
