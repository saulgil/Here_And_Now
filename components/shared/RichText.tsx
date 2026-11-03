// Simple rich-text renderer for local plain-text content (array of
// paragraphs). All real content (FAQ answers, car/location descriptions)
// is always 1-2 short paragraphs, so no block/rich-text engine is needed.
interface RichTextProps {
  value: string[];
  className?: string;
}

export function RichText({ value, className }: RichTextProps) {
  return (
    <div className={className}>
      {value.map((paragraph, i) => (
        <p key={i} className="mb-4 last:mb-0">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
