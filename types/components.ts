
export interface IconsSvgType {
   className?: string;
}

export interface ShowcaseProjectProps {
   localImageUrl: string;
   nameProject: string;
   typeProject: string;
   description: string;
   tools: string[];
   repositoryLink: string;
   deployLink: string;
   id: number;
}

export interface ExternalLinkProps {
  href: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}