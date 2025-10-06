import { ExternalLinkProps } from '@/types';
import React from 'react'

export function ExternalLink({ href, title, children, className }: ExternalLinkProps) {
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer" // 👈 Siempre incluido
      className={className}
    >
      {children}
    </a>
  );
}
