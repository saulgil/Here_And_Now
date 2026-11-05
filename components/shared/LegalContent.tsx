import Link from 'next/link';
import type { ReactNode } from 'react';

// Structured content model for legal pages (privacidad, términos, aviso
// legal, política de cancelación, cookies). Content is supplied as typed
// blocks (not raw HTML/Markdown) so headings stay semantic (h2/h3/h4),
// lists/tables are real <ul>/<ol>/<table>, and the visual language matches
// the rest of the site via the existing CSS custom properties.

export type LegalListItem = string | { text: string; children?: string[] };

export type LegalBlock =
  | { type: 'heading'; level: 2 | 3 | 4; text: string; id?: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered?: boolean; items: LegalListItem[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'divider' };

// Minimal inline formatting: **bold** and [text](url). This mirrors the
// only two inline constructs present in the cleaned legal source content
// (docs/legal/*-original.md) — no need for a full Markdown parser.
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      nodes.push(<strong key={`${keyPrefix}-b-${i++}`}>{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      const linkText = match[2];
      const href = match[3];
      const isAbsolute = href.startsWith('http://') || href.startsWith('https://');
      const isMail = href.startsWith('mailto:');
      if (isAbsolute) {
        nodes.push(
          <a
            key={`${keyPrefix}-a-${i++}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--color-gold)] transition-colors"
          >
            {linkText}
          </a>,
        );
      } else if (isMail) {
        nodes.push(
          <a key={`${keyPrefix}-a-${i++}`} href={href} className="underline hover:text-[var(--color-gold)] transition-colors">
            {linkText}
          </a>,
        );
      } else {
        nodes.push(
          <Link key={`${keyPrefix}-a-${i++}`} href={href} className="underline hover:text-[var(--color-gold)] transition-colors">
            {linkText}
          </Link>,
        );
      }
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function ListItems({ items, keyPrefix }: { items: LegalListItem[]; keyPrefix: string }) {
  return (
    <>
      {items.map((item, i) => {
        const text = typeof item === 'string' ? item : item.text;
        const children = typeof item === 'string' ? undefined : item.children;
        return (
          <li key={i}>
            {renderInline(text, `${keyPrefix}-${i}`)}
            {children && children.length > 0 && (
              <ul className="mt-2 pl-5 space-y-2 list-disc marker:text-[var(--color-fog)]">
                {children.map((c, j) => (
                  <li key={j}>{renderInline(c, `${keyPrefix}-${i}-${j}`)}</li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
}

interface LegalContentProps {
  blocks: LegalBlock[];
  className?: string;
}

export function LegalContent({ blocks, className }: LegalContentProps) {
  return (
    <div className={className}>
      {blocks.map((block, idx) => {
        const key = `block-${idx}`;
        switch (block.type) {
          case 'heading': {
            const className =
              block.level === 2
                ? 'text-2xl lg:text-3xl font-bold text-[var(--color-ink)] mt-10 mb-4 first:mt-0 scroll-mt-24'
                : block.level === 3
                ? 'text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3 scroll-mt-24'
                : 'text-base font-semibold text-[var(--color-ink)] mt-6 mb-2 scroll-mt-24';
            if (block.level === 2) {
              return (
                <h2 key={key} id={block.id} className={className}>
                  {block.text}
                </h2>
              );
            }
            if (block.level === 3) {
              return (
                <h3 key={key} id={block.id} className={className}>
                  {block.text}
                </h3>
              );
            }
            return (
              <h4 key={key} id={block.id} className={className}>
                {block.text}
              </h4>
            );
          }
          case 'paragraph':
            return (
              <p key={key} className="text-[var(--color-vapor)] leading-relaxed mb-4">
                {renderInline(block.text, key)}
              </p>
            );
          case 'list': {
            const items = <ListItems items={block.items} keyPrefix={key} />;
            const listCls = `mb-4 pl-5 space-y-2 text-[var(--color-vapor)] leading-relaxed ${
              block.ordered ? 'list-decimal' : 'list-disc marker:text-[var(--color-fog)]'
            }`;
            return block.ordered ? (
              <ol key={key} className={listCls}>
                {items}
              </ol>
            ) : (
              <ul key={key} className={listCls}>
                {items}
              </ul>
            );
          }
          case 'table':
            return (
              <div key={key} className="mb-6 overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-mist)]">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="bg-[var(--color-stone)]">
                    <tr>
                      {block.headers.map((h, i) => (
                        <th key={i} scope="col" className="px-4 py-3 font-semibold text-[var(--color-ink)] whitespace-nowrap">
                          {renderInline(h, `${key}-h-${i}`)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-mist)]">
                    {block.rows.map((row, i) => (
                      <tr key={i} className="bg-[var(--color-surface)]">
                        {row.map((cell, j) => (
                          <td key={j} className="px-4 py-3 text-[var(--color-vapor)] align-top">
                            {renderInline(cell, `${key}-${i}-${j}`)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'divider':
            return <hr key={key} className="my-8 border-[var(--color-mist)]" />;
          default:
            return null;
        }
      })}
    </div>
  );
}
