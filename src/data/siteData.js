import {
  BadgeDollarSign,
  Blocks,
  Camera,
  Code2,
  Compass,
  DraftingCompass,
  Film,
  Globe2,
  Instagram,
  Map,
  Megaphone,
  MousePointer2,
  PenTool,
  Ruler,
  Sparkles,
  Video,
} from 'lucide-react';

export const company = {
  name: 'Draft & Lens',
  location: 'Santa Barbara, Honduras',
  email: 'draftandlens@email.com',
  whatsapp: '50499999999',
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
};

export const heroSlides = [
  {
    title: 'Fotografia de retrato',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1800&q=85',
  },
  {
    title: 'Produccion audiovisual',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1800&q=85',
  },
  {
    title: 'Estrategia digital',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=85',
  },
];

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Galeria', href: '/galeria' },
  { label: 'Quienes somos', href: '/quienes-somos' },
  { label: 'Contacto', href: '/contacto' },
];

export const quickSegments = [
  {
    title: 'Quinceaneras',
    description: 'Retratos al aire libre, video social y entrega impresa.',
    href: '/segmentos/quinceaneras',
    icon: Sparkles,
  },
  {
    title: 'Negocios',
    description: 'Contenido mensual, fotografia de marca y sitios web.',
    href: '/segmentos/negocios',
    icon: Megaphone,
  },
  {
    title: 'Profesionales',
    description: 'Portafolio, marca personal, perfiles y landing pages.',
    href: '/segmentos/profesionales',
    icon: MousePointer2,
  },
];

export const lensCategories = [
  {
    id: 'estudio',
    title: 'Fotografia de estudio',
    status: 'Coming Soon',
    icon: Camera,
    intro:
      'Un espacio privado para retratos editoriales, sesiones personales y contenido de marca.',
    comingSoon:
      'Cambios de ropa, estudio climatizado, maquillaje profesional y privacidad garantizada.',
    images: [
      'https://images.unsplash.com/photo-1508835277982-1c1b0e205603?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'aire-libre',
    title: 'Fotografia al aire libre',
    status: 'Disponible',
    icon: Compass,
    intro:
      'Sesiones naturales en locaciones privadas, urbanas o de paisaje con direccion profesional.',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'videografia',
    title: 'Videografia',
    status: 'Disponible',
    icon: Video,
    intro:
      'Piezas cinematograficas para eventos, reels comerciales, testimonios y cobertura social.',
    images: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
    ],
  },
];

export const marketingPlans = [
  {
    title: 'Starter Social',
    price: 'Desde $150',
    icon: Instagram,
    benefits: [
      'Calendario mensual de contenido',
      'Fotografia profesional para redes',
      '12 publicaciones optimizadas',
      'Reporte basico de rendimiento',
    ],
  },
  {
    title: 'PRO Growth',
    price: '$390/mes',
    icon: Megaphone,
    featured: true,
    benefits: [
      'Estrategia de marca y contenido',
      'Reels y piezas de video corto',
      'Pauta publicitaria guiada',
      'Analisis mensual con mejoras accionables',
    ],
  },
  {
    title: 'Web Profesional',
    price: 'Desde $350',
    icon: Globe2,
    benefits: [
      'Sitio React responsive',
      'SEO tecnico inicial',
      'Formulario de contacto',
      'Estructura lista para escalar',
    ],
  },
  {
    title: 'Brand Commerce',
    price: 'Cotizacion',
    icon: BadgeDollarSign,
    benefits: [
      'Catalogo o tienda basica',
      'Fotografia de producto',
      'Landing pages de campana',
      'Integracion con WhatsApp',
    ],
  },
];

export const draftServices = [
  {
    title: 'CAD 2D/3D',
    icon: DraftingCompass,
    description:
      'Planos, mapas base, documentacion tecnica y visualizaciones para proyectos en etapa inicial.',
  },
  {
    title: 'Fotogrametria con dron',
    icon: Map,
    description:
      'Levantamientos visuales, modelos de terreno y documentacion aerea para obras y propiedades.',
  },
  {
    title: 'Renders tecnicos',
    icon: Ruler,
    description:
      'Proyecciones 3D, laminas conceptuales y apoyo visual para comunicar espacios con claridad.',
  },
];

export const portfolioItems = [
  {
    title: 'Retrato profesional',
    category: 'Fotografia',
    image: '/images/retrato_mujer_1.jpg',
  },
  {
    title: 'Contenido para negocios',
    category: 'Marketing',
    image: '/images/contenido_negocios_1.jpg',
  },
  {
    title: 'Sitios web empresariales',
    category: 'Web Dev',
    image: '/images/web_empresarial_1.jpg',
  },
  {
    title: 'Video social',
    category: 'Video',
    image: '/images/video_social_1.jpg',
  },
];

export const serviceGroups = [
  {
    title: 'LENS',
    subtitle: 'Fotografia y video profesional',
    icon: Film,
    href: '/servicios/lens',
    description:
      'Sesiones al aire libre y videografía profesional. Los precios pueden variar según la complejidad del proyecto y la estrategia recomendada; solicite una cotización por WhatsApp o redes sociales.',
  },
  {
    title: 'MARKETING',
    subtitle: 'Crecimiento digital para marcas',
    icon: PenTool,
    href: '/servicios/marketing',
    description:
      'Gestión de redes, contenido profesional y campañas publicitarias. Los precios pueden variar según alcance y frecuencia; contacte para una cotización personalizada.',
  },
  {
    title: 'WEB DEV',
    subtitle: 'Sitios para empresas y profesionales',
    icon: Code2,
    href: '/servicios/marketing',
    description:
      'Portafolios y sitios corporativos responsivos. Los precios pueden variar según funcionalidades; solicite cotización por WhatsApp o redes sociales.',
  },
  {
    title: 'DRAFT',
    subtitle: 'Unidad técnica — soluciones visuales y técnicas',
    icon: Blocks,
    href: '/servicios/draft',
    description:
      'CAD, fotogrametría con dron y soluciones visuales. Los precios se determinan por requerimientos del proyecto; pida una cotización por los canales de contacto.',
  },
];

export const pricingNotice =
  'Los precios pueden variar según el caso y la estrategia de trabajo. Recomendamos solicitar una cotización por WhatsApp o redes sociales para obtener un presupuesto preciso.';
