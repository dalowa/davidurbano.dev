
export interface ToPageButtonProps {
  redirectTo: string;
  children: React.ReactNode;
}

export interface IconsSvgType {
   className?: string;
}

export interface NavigationItem {
  href: string;
  label: string;
  icon: React.ComponentType<IconsSvgType>; // Más específico
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

export interface ContactFormFieldProps {
  label: string
  type: string
  placeholder: string
  required?: boolean
  name?: string
  stateValue?: string
  onChange?: (name: string, value: string) => void
  error?: string
}