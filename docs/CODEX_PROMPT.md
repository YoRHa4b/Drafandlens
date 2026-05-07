# Prompt Maestro Para Codex - Draft & Lens

Actua como Senior Full-Stack Developer, UX/UI Designer y estratega digital. Desarrolla el framework completo de un sitio web profesional para **Draft & Lens**, empresa santabarbarense de servicios audiovisuales, marketing digital, desarrollo web y futuras soluciones tecnicas.

## Stack obligatorio

- React.js con componentes funcionales y hooks.
- Vite como bundler.
- Tailwind CSS con arquitectura mobile-first.
- Framer Motion para transiciones elegantes.
- React Router DOM v6 para rutas.
- Lucide React para iconografia.
- Formulario preparado para EmailJS.

## Identidad visual

- Primario: `#0F2747`.
- Acento: `#E67A1F`.
- Fondo principal: `#F7F3EE`.
- Fondo secundario: `#E8DED1`.
- Fondo oscuro: `#091423`.
- Texto: `#1A1A1A`.
- Texto secundario: `#5B6B7A`.
- Bordes: `#D9D9D9`.
- Blanco premium: `#FCFAF7`.

La estetica debe sentirse premium, calida, minimalista, cinematografica y tecnologica. Evitar saturacion, neon excesivo, estilo gamer o corporate generico.

## Arquitectura requerida

- Rutas: Home, Servicios, Lens, Marketing & Digital, Draft Coming Soon, Quienes Somos, Galeria/Libreria, Contacto y rutas segmentadas.
- Header sticky mobile-first: menu hamburguesa en movil y navbar fija en escritorio.
- FAB fijo a WhatsApp con mensaje preconfigurado.
- Hero con tipografia serif, carrusel de imagenes de fondo y cross-fade.
- Galerias tipo Bento Grid.
- Carrusel horizontal de tarjetas para Marketing & Digital.
- Formulario con Nombre, Servicio de interes y Mensaje.
- Footer profesional con links, redes y contacto.

## UX segmentada

Implementa rutas inteligentes:

- `/segmentos/quinceaneras`: mostrar solo fotografia al aire libre, videografia, incentivo y contacto. Ocultar CAD, fotogrametria, web tecnica y servicios no relevantes.
- `/segmentos/negocios`: mostrar marketing digital, fotografia comercial, web y contacto.
- `/segmentos/profesionales`: mostrar portafolio, marca personal, web y contacto.

## Contenido comercial obligatorio

Incluye un banner destacado:

> Sesion de fotos profesional por L. 2,000 (~$81). Incluye 15-20 fotos editadas y una retratera de 10x15cm fisica de regalo.

## Servicios

### LENS

- Fotografia de estudio - Coming Soon.
- Fotografia al aire libre - Disponible.
- Videografia - Disponible.

El apartado de estudio debe mostrar overlay elegante con:

> Cambios de ropa, estudio climatizado, maquillaje profesional y privacidad garantizada.

### Marketing & Digital

Carrusel de planes:

- Starter Social: `$280/mes`.
- PRO Growth: `$390/mes`.
- Web Profesional: desde `$450`.
- Brand Commerce: cotizacion.

Cada tarjeta debe incluir titulo, icono, beneficios y precio.

### DRAFT - Coming Soon

- CAD 2D/3D.
- Fotogrametria con dron.
- Renders tecnicos.

Usar estetica tecnica con grid sutil y avisos Coming Soon, sin prometer disponibilidad inmediata.

## Empresa

Draft & Lens esta ubicada en Santa Barbara, Honduras. Es una empresa en crecimiento manejada por ciudadanos santabarbarenses, con etica de trabajo fuerte, orientacion a calidad y resultados. La marca esta respaldada por un Ingeniero en Analisis de Datos del area de sistemas.

## Entrega esperada

Genera estructura de carpetas, `App.js` con rutas, `tailwind.config.js`, componentes principales (`Header.jsx`, `Hero.jsx`, `ServiceCard.jsx`, `Gallery.jsx`) y paginas completas. El codigo debe ser limpio, modular, responsive, listo para produccion y facil de extender con logo, redes, correo real, PDF de paquetes y fotografias propias.
