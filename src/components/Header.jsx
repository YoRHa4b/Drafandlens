import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Camera, Menu, Sparkles, X } from 'lucide-react';
import { navItems, quickSegments } from '../data/siteData.js';

const linkClass = ({ isActive }) =>
  `rounded-full px-3 py-2 text-sm font-semibold transition ${
    isActive
      ? 'bg-brand-primary text-brand-white'
      : 'text-brand-primary hover:bg-brand-surface'
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/70 bg-brand-cream/90 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-full" onClick={() => setOpen(false)}>
          <span className="grid size-11 place-items-center rounded-2xl bg-brand-primary text-brand-accent shadow-soft">
            <Camera size={22} />
          </span>
          <span>
            <span className="block font-serif text-2xl font-bold leading-none text-brand-primary">
              Draft & Lens
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">
              Studio & Tech
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/segmentos/quinceaneras"
          className="focus-ring hidden items-center gap-2 rounded-full bg-accent-gradient px-5 py-3 text-sm font-bold text-brand-dark shadow-glow lg:flex"
        >
          <Sparkles size={17} />
          Quinceaneras
        </Link>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid size-11 place-items-center rounded-full bg-brand-primary text-brand-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-0 top-20 z-40 border-b border-brand-border bg-brand-dark px-4 pb-6 pt-3 text-brand-white shadow-soft lg:hidden"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-base font-semibold ${
                      isActive ? 'bg-brand-accent text-brand-dark' : 'bg-white/5 text-brand-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="mt-5 grid gap-3">
              {quickSegments.map((segment) => (
                <Link
                  key={segment.href}
                  to={segment.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="text-sm font-bold text-brand-accent">{segment.title}</span>
                  <p className="mt-1 text-sm text-brand-white/75">{segment.description}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
