import Link from 'next/link';
import { SchemaOrg } from './SchemaOrg';
import { generateBreadcrumbSchema } from '@/lib/schema';

export type BreadcrumbItem = {
  label: string;
  href?: string; // No href = current page (last item)
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

// Server Component — no client JS needed
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

  const schemaItems = items.map((item) => ({
    name: item.label,
    url: item.href ? `${siteUrl}${item.href}` : siteUrl,
  }));

  return (
    <>
      <SchemaOrg schema={generateBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--color-vapor)]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-x-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-[var(--color-fog)]">›</span>
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-[var(--color-ink)] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? 'text-[var(--color-ink)] font-medium' : ''}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
