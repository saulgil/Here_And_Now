'use client';

import { useState, useEffect, useRef } from 'react';

// Dev-only font preview tool. Rendered only when NODE_ENV === 'development'
// (see app/layout.tsx). Zero production footprint.
//
// Loads comparison fonts from Google Fonts on demand, then overrides the
// --font-display and --font-body CSS variables so every component on the
// page uses the selected font without any code changes.

const FONTS = [
  {
    id: 'clash',
    label: 'Clash Grotesk',
    family: null, // native — let globals.css take over
    googleUrl: null,
  },
  {
    id: 'manrope',
    label: 'Manrope',
    family: "'Manrope', system-ui, sans-serif",
    googleUrl:
      'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap',
  },
  {
    id: 'jakarta',
    label: 'Plus Jakarta Sans',
    family: "'Plus Jakarta Sans', system-ui, sans-serif",
    googleUrl:
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
  },
  {
    id: 'dmsans',
    label: 'DM Sans',
    family: "'DM Sans', system-ui, sans-serif",
    googleUrl:
      'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap',
  },
  {
    id: 'system',
    label: 'system-ui (prev. fallback)',
    family: 'system-ui, sans-serif',
    googleUrl: null,
  },
] as const;

type FontId = (typeof FONTS)[number]['id'];

const STORAGE_KEY = 'dev-font-preview';

export function FontSwitcher() {
  const [active, setActive] = useState<FontId>('clash');
  const [open, setOpen] = useState(false);
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const loadedFonts = useRef<Set<string>>(new Set());

  // Restore persisted choice (runs only on client)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as FontId | null;
      if (saved && FONTS.some((f) => f.id === saved)) setActive(saved);
    } catch {}
  }, []);

  // Apply font whenever selection changes
  useEffect(() => {
    const font = FONTS.find((f) => f.id === active);
    if (!font) return;

    // Load Google Fonts once per session
    if (font.googleUrl && !loadedFonts.current.has(font.id)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = font.googleUrl;
      document.head.appendChild(link);
      loadedFonts.current.add(font.id);
    }

    // Inject or update the override <style> tag
    if (!styleRef.current) {
      const el = document.createElement('style');
      el.id = 'dev-font-override';
      document.head.appendChild(el);
      styleRef.current = el;
    }
    styleRef.current.textContent =
      font.family == null
        ? '' // ClashGrotesk — remove override
        : `:root { --font-display: ${font.family}; --font-body: ${font.family}; }`;

    // Persist
    try {
      localStorage.setItem(STORAGE_KEY, active);
    } catch {}
  }, [active]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 9999,
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {open ? (
        <div
          style={{
            background: '#1a1a18',
            color: '#fff',
            borderRadius: 8,
            padding: '12px 14px',
            minWidth: 210,
            boxShadow: '0 6px 28px rgba(0,0,0,0.5)',
            fontSize: 12,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: 10,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                opacity: 0.45,
              }}
            >
              Font Preview
            </span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                opacity: 0.5,
                fontSize: 14,
                padding: '0 2px',
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>

          {/* Font options */}
          {FONTS.map((f) => {
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '7px 10px',
                  marginBottom: 4,
                  background: isActive ? '#B8965A' : 'transparent',
                  color: isActive ? '#0e0e0c' : '#fff',
                  border: `1px solid ${isActive ? '#B8965A' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontSize: 12,
                  fontFamily: 'system-ui',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {isActive ? '✓ ' : ''}
                {f.label}
              </button>
            );
          })}

          <p
            style={{
              marginTop: 10,
              opacity: 0.3,
              fontSize: 10,
              lineHeight: 1.4,
            }}
          >
            Solo visible en desarrollo.
            <br />
            Recarga para limpiar.
          </p>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          title="Font preview — dev only"
          style={{
            background: '#1a1a18',
            color: active === 'clash' ? '#B8965A' : '#fff',
            border: '1px solid rgba(184,150,90,0.35)',
            borderRadius: 6,
            padding: '6px 11px',
            cursor: 'pointer',
            fontSize: 12,
            fontFamily: 'system-ui',
            fontWeight: 700,
            letterSpacing: '0.04em',
            boxShadow: '0 2px 8px rgba(0,0,0,0.35)',
          }}
        >
          Aa
        </button>
      )}
    </div>
  );
}
