import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-a-display',
});

export default function DesignALayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cormorant.variable} style={{ isolation: 'isolate' }}>
      {children}
    </div>
  );
}
