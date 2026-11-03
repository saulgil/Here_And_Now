import { PortableText as SanityPortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold mt-4 mb-2">{children}</h4>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href ?? '#';
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="underline underline-offset-2 hover:text-[var(--color-gold)] transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};

interface PortableTextProps {
  value: PortableTextBlock[];
  className?: string;
}

export function PortableText({ value, className }: PortableTextProps) {
  return (
    <div className={className}>
      <SanityPortableText value={value} components={components} />
    </div>
  );
}
