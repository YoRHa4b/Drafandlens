import { Navigate, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { lazy, Suspense } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Lens = lazy(() => import('./pages/Lens.jsx'));
const Marketing = lazy(() => import('./pages/Marketing.jsx'));
const Draft = lazy(() => import('./pages/Draft.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const SegmentLanding = lazy(() => import('./pages/SegmentLanding.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return (
    <>
      <Helmet>
        <title>Draft & Lens | Servicios audiovisuales, web y marketing</title>
        <meta name="description" content="Draft & Lens: fotografia, video, marketing digital, desarrollo web y soluciones tecnicas desde Santa Barbara, Honduras." />
      </Helmet>
      <div className="min-h-screen bg-brand-cream text-brand-text">
        <Header />
        <main>
          <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/servicios/lens" element={<Lens />} />
              <Route path="/servicios/marketing" element={<Marketing />} />
              <Route path="/servicios/draft" element={<Draft />} />
              <Route path="/quienes-somos" element={<About />} />
              <Route path="/galeria" element={<Portfolio />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/segmentos/:segment" element={<SegmentLanding />} />
              <Route path="/quinceaneras" element={<Navigate to="/segmentos/quinceaneras" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </>
  );
}
