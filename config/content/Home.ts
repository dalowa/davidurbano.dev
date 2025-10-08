import type { HeroContent, AboutContent, ProjectsContent } from '@/src/types';
import { CountriesExplorer, PhotographerWebsite } from './Projects';

export const homeHeroContent: HeroContent = {
  mainTitle: "David Urbano",
  subTitle: "Software developer with a current focus on web development while pursuing a degree in Software Engineering",
} as const;

export const homeAboutContent: AboutContent = {
  title: "About Me",
  mainText: 
    `I’m currently a student from Lima, Peru, with a strong curiosity and a passion for continuous learning. 
    I firmly believe we can build a better world through software. Driven by the challenge of creating new things, 
    my goal is to keep growing as a developer while contributing to projects that make a difference. 
    I strive to build software that not only works but also supports people in their needs.`,
  sections: {
    learning: {
      title: "Currently Learning",
      description: "Software Engineering principles, modern web development, and problem-solving techniques"
    },
    tech: {
      title: "Tech Focus",
      description: "React, Next.js, TypeScript, NodeJs, PostgreSQL and building user-centered applications"
    },
    dartboard: {
      title: "Beyond Code",
      description: "Gaming, chess strategy, and exploring how technology can solve real-world problems"
    },
  },
  cta: {
    href: "/about",
    text: "More about me"
  }
}

export const homeProjectsContent:ProjectsContent = {
  title: "Most Valuable Project",
  description: "",
  projects: [
    PhotographerWebsite,
    CountriesExplorer,
  ],
  cta: {
    href: "/projects",
    text: "Check my projects"
  }
}


