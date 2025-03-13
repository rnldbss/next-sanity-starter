import Image from "next/image";
import { urlFor } from "@/lib/imageBuilder";

interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  [key: string]: string | number | boolean | object | undefined;
}

interface SanityImageProps {
  image: SanityImage;
  alt?: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  sizes?: string;
  quality?: number;
  fill?: boolean;
}

// Component for rendering optimized images from Sanity CMS
export default function SanityImage({
  image,
  width,
  height,
  alt,
  className = "",
  priority,
  loading,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw",
  quality,
  fill,
}: SanityImageProps) {
  // Generate the image URL with specified dimensions
  const imageUrl = urlFor(image).width(width).height(height).url();

  const blurUrl = urlFor(image).width(24).height(24).blur(10).url();

  return (
    <Image
      src={imageUrl}
      alt={alt || image.alt || "Sorry, someone missed this alt text."}
      width={width}
      height={height}
      className={className}
      loading={loading}
      priority={priority}
      sizes={sizes}
      placeholder="blur"
      blurDataURL={blurUrl}
      quality={quality || 85}
      fill={fill}
    />
  );
}
