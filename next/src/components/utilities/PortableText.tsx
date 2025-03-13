// components/PortableText.tsx

import { PortableText as PT } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import SanityImage from "./SanityImage";

interface PortableTextProps {
  value: PortableTextBlock[];
}

export function PortableText({ value }: PortableTextProps) {
  return (
    <PT
      value={value}
      components={{
        types: {
          image: ({ value }) => (
            <SanityImage
              image={value}
              width={800}
              height={500}
              alt={value.alt}
              className="rounded-lg"
            />
          ),
        },
        marks: {
          link: ({ value, children }) => {
            const href = value?.href || "#";
            const isExternal = href.startsWith("http");
            return (
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                {children}
              </a>
            );
          },
        },
        block: {
          h1: ({ children }) => <h1>{children}</h1>,
          h2: ({ children }) => <h2>{children}</h2>,
          h3: ({ children }) => <h3>{children}</h3>,
          normal: ({ children }) => <p>{children}</p>,
        },
        list: {
          bullet: ({ children }) => (
            <ul className="list-disc pl-5 space-y-1">{children}</ul>
          ),
          number: ({ children }) => (
            <ol className="list-decimal pl-5 space-y-1">{children}</ol>
          ),
        },
        listItem: {
          bullet: ({ children }) => <li>{children}</li>,
          number: ({ children }) => <li>{children}</li>,
        },
      }}
    />
  );
}
