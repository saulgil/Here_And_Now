import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity/sanity.config';

// Studio is always dynamic — never cached
export const dynamic = 'force-dynamic';

// Do not index the Studio
export const metadata = {
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}
