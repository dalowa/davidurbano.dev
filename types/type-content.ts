export interface HeroContent {
   mainTitle: string;
   subTitle: string;
   cta?: {
    text: string;
    href: string;
   };
}

export interface AboutContent {
  title: string;
  mainText: string;
  sections: {
    learning: AboutSectionItem;
    tech: AboutSectionItem;
    dartboard: AboutSectionItem;
  };
  cta?: {
    text: string;
    href: string;
  };
}

export interface AboutSectionItem {
  title: string;
  description: string;
  icon?: string;
}

export interface Project {
  id: number;
  name: string;
  type: "Website Project" | "Api Project" | "Mobile Project";
  description: string;
  techStack: string[];
  repositoryLink?: string;
  deployLink?: string;
  imageUrl: string;
  featured: boolean;
}

export interface ProjectsContent {
  title: string;
  description?: string;
  projects: Project[];
}