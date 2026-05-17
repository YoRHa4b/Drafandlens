# 🎥 Draft & Lens | Portafolio Audiovisual y Digital

Sitio web profesional para **Draft & Lens**, empresa de servicios audiovisuales, marketing digital y desarrollo web ubicada en Santa Bárbara, Honduras.

## 🌐 **Ver en Línea**
**[Visita la página aquí](https://yorha4b.github.io/Drafandlens/)**

---

## ✨ **Características**

✅ **Responsive 100%** - Diseño mobile-first optimizado para todos los dispositivos  
✅ **Animaciones elegantes** - Transiciones suaves con Framer Motion  
✅ **Rutas inteligentes** - Segmentación dinámica por tipo de cliente (Quinceañeras, Negocios, Profesionales)  
✅ **Formulario de contacto** - Integración con Formspree para envío real de mensajes  
✅ **Botón WhatsApp flotante** - Contacto directo con mensaje pre-configurado  
✅ **SEO optimizado** - Meta tags y estructura semántica  
✅ **Paleta profesional** - Colores personalizados para identidad visual  

---

## 🛠️ **Tech Stack**

- **Frontend:** React.js (Hooks + Functional Components)
- **Styling:** Tailwind CSS (mobile-first)
- **Animaciones:** Framer Motion
- **Routing:** React Router DOM v6
- **Iconografía:** Lucide React
- **Carruseles:** Swiper.js
- **Formularios:** EmailJS
- **SEO:** React Helmet
- **Build:** Vite

---

## 📁 **Estructura del Proyecto**

```
src/
├── components/       # Componentes reutilizables
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Gallery.jsx
│   ├── ContactForm.jsx
│   ├── MarketingCarousel.jsx
│   └── ...
├── pages/           # Páginas de rutas
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Lens.jsx
│   ├── Marketing.jsx
│   ├── About.jsx
│   └── ...
├── data/
│   └── siteData.js  # Datos centralizados
├── App.jsx          # Router principal
├── main.jsx         # Entry point
└── index.css        # Estilos globales
```

---

## 🚀 **Instalación y Desarrollo Local**

### 1. Clonar el repositorio
```bash
git clone https://github.com/YoRHa4b/Drafandlens.git
cd Drafandlens
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre http://localhost:5173/ en tu navegador.

---

## 📦 **Comandos Disponibles**

```bash
npm run dev         # Servidor de desarrollo
npm run build       # Build de producción
npm run preview     # Previsualizar build en local
npm run deploy      # Deploy automático a GitHub Pages (requiere gh-pages instalado)
```

---

## 🎨 **Paleta de Colores**

| Elemento | Color | HEX |
|----------|-------|-----|
| Primario | Azul Técnico | `#0F2747` |
| Accent | Naranja Draft | `#E67A1F` |
| Fondo | Crema | `#F7F3EE` |
| Oscuro | Navy | `#091423` |
| Texto | Soft Black | `#1A1A1A` |

---

## 📧 **Configuración de Formspree**

Este sitio usa la integración de React con Formspree para enviar los mensajes.

1. El formulario ya está apuntando a tu formulario activo en Formspree.
2. No es necesario crear un servicio de EmailJS.
3. El formulario envía directamente a tu endpoint de Formspree:

```text
https://formspree.io/f/xojbakjv
```

4. Si deseas cambiar el formulario, actualiza la clave en `src/components/ContactForm.jsx`.

### Ver el estado de envío
- El mensaje muestra confirmación cuando la solicitud se envía.
- Si necesitas cambiar el correo receptor, configura el mismo formulario en Formspree.

---

## 🖼️ **Agregar tus propias fotos**

Para mostrar tu trabajo real, usa imágenes locales o URLs externas:

### Opción 1: Fotos locales en el sitio
1. Crea la carpeta `public/images`.
2. Copia tus fotos dentro de `public/images/`.
3. En `src/data/siteData.js`, reemplaza cualquier URL de ejemplo con rutas como:

```js
image: '/images/mi-foto-1.jpg'
```

4. Vuelve a ejecutar `npm run build` y despliega.

### Opción 2: Fotos alojadas en Google Drive
1. Sube tu imagen a Google Drive.
2. Configura el enlace para compartir como público.
3. Usa una URL directa de imagen en `src/data/siteData.js`.

> Nota: GitHub Pages sirve mejor imágenes locales en `public/images`.

---

## 🌍 **Secciones del Sitio**

### 🏠 Home
- Hero cinematográfico con carrusel de imágenes
- Banner de promoción (Sesión de fotos L. 2,000)
- Servicios principales
- Rutas inteligentes por segmento
- Planes de marketing
- Formulario de contacto

### 📸 Lens (Audiovisual)
- Fotografía de estudio (Coming Soon)
- Fotografía al aire libre (L. 4,000-4,500)
- Videografía profesional
- Galerías Bento Grid con overlay

### 💼 Marketing Digital
- Planes Starter ($280/mes) y PRO ($390/mes)
- Gestión de redes sociales
- Diseño web profesional
- Carrusel interactivo

### 📐 Draft (Técnico - Coming Soon)
- CAD 2D/3D
- Fotogrametría con dron
- Renders 3D

### ℹ️ Quiénes Somos
- Historia santabarbarense
- Ética de trabajo
- Perfil del ingeniero
- Valores empresariales

### 🖼️ Galería
- Portafolio completo
- Filtros por categoría
- Lazy loading optimizado

### 📋 Contacto
- Formulario con EmailJS
- Validación de campos
- Feedback inmediato

---

## 🔗 **Rutas del Sitio**

| Ruta | Descripción |
|------|-------------|
| `/` | Home |
| `/servicios` | Todos los servicios |
| `/servicios/lens` | Audiovisual (Fotografía y Video) |
| `/servicios/marketing` | Marketing Digital |
| `/servicios/draft` | Servicios Técnicos (Coming Soon) |
| `/quienes-somos` | Información de la empresa |
| `/galeria` | Portafolio de trabajos |
| `/contacto` | Formulario de contacto |
| `/segmentos/:segment` | Rutas inteligentes (quinceaneras, negocios, profesionales) |

---

## 📱 **Responsive Design**

Breakpoints Tailwind:
- **Mobile:** 0px - 640px (xs - sm)
- **Tablet:** 640px - 1024px (md)
- **Desktop:** 1024px+ (lg, xl, 2xl)

---

## ✅ **Checklist de Deploy**

- ✅ Código subido a GitHub
- ✅ GitHub Pages configurado
- ✅ Build optimizado (archivos ligeros)
- ✅ SEO básico implementado
- ✅ Responsive testeado
- 📝 Configurar EmailJS (ver sección arriba)
- 📝 Agregar logo en `src/data/siteData.js`
- 📝 Actualizar redes sociales en footer
- 📝 Cargar PDF de paquetes en `/public/paquetes.pdf`

---

## 🐛 **Troubleshooting**

### La página se ve en blanco
- Limpia el caché del navegador (Ctrl + Shift + Delete)
- Recarga la página (Ctrl + R o Cmd + R)
- Revisa la consola del navegador (F12) para errores

### Formulario no envía emails
- Verifica que EmailJS esté configurado correctamente
- Revisa la consola del navegador para errores
- Asegúrate de haber reemplazado tus claves en `ContactForm.jsx`

### GitHub Pages no se actualiza
- Espera 1-2 minutos después de hacer push
- Recarga la página sin caché
- Verifica que el branch "main" esté configurado en Settings > Pages

---

## 📄 **Licencia**

Proyecto personal de Draft & Lens. Todos los derechos reservados © 2026.

---

## 👨‍💻 **Autor**

Desarrollado por **YoRHa4b** para **Draft & Lens**

---

**¿Preguntas o sugerencias?** Contacta a través del formulario en la web o vía WhatsApp. 📞
