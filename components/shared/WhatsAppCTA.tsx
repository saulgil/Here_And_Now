'use client';

import { MessageCircle } from 'lucide-react';

interface WhatsAppCTAProps {
  url?: string;
  message?: string;
}

// Shows only on mobile/tablet — hidden on desktop
export function WhatsAppCTA({
  url,
  message = 'Hola, me interesa alquilar un coche.',
}: WhatsAppCTAProps) {
  const encodedMessage = encodeURIComponent(message);
  const phone = '34625305620'; // Without +
  const href = url ?? `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={[
        'fixed bottom-6 right-6 z-40 lg:hidden',
        'flex items-center justify-center w-14 h-14',
        'bg-[#25D366] text-white rounded-full',
        'shadow-[0_4px_16px_rgba(37,211,102,0.4)]',
        'hover:scale-105 transition-transform duration-150',
      ].join(' ')}
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} aria-hidden="true" />
    </a>
  );
}
