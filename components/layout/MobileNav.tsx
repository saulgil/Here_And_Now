'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, Menu, Phone } from 'lucide-react';

type NavItem = {
  label: { es: string; en?: string };
  href: string;
  children?: Array<{ label: { es: string }; href: string }>;
};

interface MobileNavProps {
  items: NavItem[];
  phone?: string;
}

export function MobileNav({ items, phone }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menú"
        aria-expanded={isOpen}
        className="flex items-center justify-center w-12 h-12 -mr-2 text-[var(--color-ink)] lg:hidden"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={[
          'fixed inset-y-0 left-0 w-full max-w-sm bg-[var(--color-canvas)] z-50 flex flex-col',
          'transform transition-transform duration-280 lg:hidden',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
        style={{ transition: 'transform 280ms cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-mist)]">
          <span className="font-semibold text-lg tracking-tight">Here &amp; Now</span>
          <button
            ref={closeButtonRef}
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú"
            className="flex items-center justify-center w-10 h-10 -mr-2 text-[var(--color-ink)]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-6 py-4" aria-label="Navegación móvil">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={`${item.href}-${item.label.es}`}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-base font-medium text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors"
                >
                  {item.label.es}
                </Link>
                {item.children && item.children.length > 0 && (
                  <ul className="ml-4 space-y-1 border-l border-[var(--color-mist)] pl-4 mb-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm text-[var(--color-vapor)] hover:text-[var(--color-gold)] transition-colors"
                        >
                          {child.label.es}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom CTAs */}
        <div className="px-6 py-6 border-t border-[var(--color-mist)] space-y-3">
          <Link
            href="/ibiza"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-3 px-6 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold text-sm tracking-wider uppercase rounded-[var(--radius-sm)]"
          >
            Reservar en Ibiza
          </Link>
          <Link
            href="/alicante"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-3 px-6 border-[1.5px] border-[var(--color-ink)] text-[var(--color-ink)] font-semibold text-sm tracking-wider uppercase rounded-[var(--radius-sm)]"
          >
            Reservar en Alicante
          </Link>
          {phone && (
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 py-2 text-sm text-[var(--color-vapor)]"
            >
              <Phone size={16} />
              {phone}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
