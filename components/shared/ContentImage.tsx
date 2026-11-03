import Image from 'next/image';

interface ContentImageProps {
  // Local image asset ({ url, metadata? }).
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

export function ContentImage({
  asset,
  alt,
  width,
  height,
  priority = false,
  fill = false,
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  quality = 85,
}: ContentImageProps) {
  const naturalWidth = width ?? asset.metadata?.dimensions?.width ?? 1200;
  const naturalHeight = height ?? asset.metadata?.dimensions?.height ?? 800;

  const src = asset.url;

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
        quality={quality}
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
      quality={quality}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}
      sizes={sizes}
      className={className}
    />
  );
}
