import Link from 'next/link';
import Image from 'next/image';
import { MobileNav } from './MobileNav';

type NavItem = {
  label: { es: string; en?: string };
  href: string;
  children?: Array<{ label: { es: string }; href: string }>;
};

type SiteSettings = {
  siteName?: string;
  logo?: { asset?: { url: string } };
  phone?: string;
  mainNav?: NavItem[];
};

interface HeaderProps {
  settings: SiteSettings | null;
}

export function Header({ settings }: HeaderProps) {
  const siteName = settings?.siteName ?? 'Here & Now';
  const logoUrl = settings?.logo?.asset?.url;
  const navItems = settings?.mainNav ?? [];
  const phone = settings?.phone;

  return (
    <header className="sticky top-0 z-30 h-16 flex items-center bg-[var(--color-canvas)]/95 backdrop-blur-sm border-b border-[var(--color-mist)]">
      <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between px-6 lg:px-12">

        {/* Logo */}
        <Link href="/" aria-label={`${siteName} — página de inicio`} className="flex-shrink-0 rounded-sm focus:outline-none focus-visible:outline-none">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={siteName}
              width={180}
              height={34}
              priority
              unoptimized
              style={{ height: '32px', width: 'auto' }}
            />
          ) : (
            <span className="font-bold text-lg tracking-tight">{siteName}</span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
          {navItems.map((item) => (
            <div key={`${item.href}-${item.label.es}`} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors py-2"
              >
                {item.label.es}
                {item.children && item.children.length > 0 && (
                  <span className="ml-1 text-[var(--color-fog)]">▾</span>
                )}
              </Link>

              {/* Dropdown */}
              {item.children && item.children.length > 0 && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-180">
                  <ul className="bg-[var(--color-surface)] border border-[var(--color-mist)] rounded-[var(--radius-md)] shadow-[var(--shadow-modal)] py-2 min-w-[200px]">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-[var(--color-ink)] hover:bg-[var(--color-stone)] transition-colors"
                        >
                          {child.label.es}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/ibiza"
            className="hidden lg:inline-flex items-center justify-center h-10 px-6 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold text-xs tracking-wider uppercase rounded-[var(--radius-sm)] hover:bg-[var(--color-gold-deep)] transition-colors"
          >
            Reservar
          </Link>
          <MobileNav items={navItems} phone={phone} />
        </div>
      </div>
    </header>
  );
}
