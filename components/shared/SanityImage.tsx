import Image from 'next/image';
import { urlFor } from '@/lib/sanity/image';

interface SanityImageProps {
  // Sanity image asset (result of asset->{ _id, url, metadata{ blurHash, dimensions } })
  asset: {
    _id?: string;
    url: string;
    metadata?: {
      blurHash?: string;
      dimensions?: { width: number; height: number };
    };
  };
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
}

export function SanityImage({
  asset,
  alt,
  width,
  height,
  priority = false,
  fill = false,
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  quality = 85,
}: SanityImageProps) {
  const naturalWidth = width ?? asset.metadata?.dimensions?.width ?? 1200;
  const naturalHeight = height ?? asset.metadata?.dimensions?.height ?? 800;

  // urlFor needs the asset reference — use _id when available, fall back to raw URL
  const imageSource = asset._id
    ? { _ref: asset._id, _type: 'reference' as const }
    : asset.url;

  const src = urlFor(imageSource)
    .width(naturalWidth * 2)  // 2× for retina
    .quality(quality)
    .url();

  const blurDataURL = asset.metadata?.blurHash
    ? `data:image/png;base64,${asset.metadata.blurHash}`
    : undefined;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        sizes={sizes}
        className={className}
        style={{ objectFit: 'cover' }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={naturalWidth}
      height={naturalHeight}
      priority={priority}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}
      sizes={sizes}
      className={className}
    />
  );
}
