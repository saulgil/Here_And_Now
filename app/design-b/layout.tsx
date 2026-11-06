import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-b-display',
});

export default function DesignBLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={playfair.variable} style={{ isolation: 'isolate' }}>
      {children}
    </div>
  );
}
