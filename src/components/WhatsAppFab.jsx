import { MessageCircle } from 'lucide-react';
import { company } from '../data/siteData.js';

export default function WhatsAppFab() {
  const text = encodeURIComponent(
    'Hola Draft & Lens, quiero informacion sobre una sesion o servicio para mi marca.',
  );
  const href = `https://wa.me/${company.whatsapp}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-accent-gradient text-brand-dark shadow-glow transition hover:-translate-y-1"
    >
      <MessageCircle size={25} />
    </a>
  );
}
