import { ExternalLinkProps } from '@/src/types';

export function ExternalLink({ href, title, children, className }: ExternalLinkProps) {
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
