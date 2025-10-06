import { SITE_CONFIG } from "./site";

export const NAVIGATION_ITEMS = [
  { href: "/", label: "Home", icon: "HomeIcon" },
  { href: "/about", label: "About", icon: "AboutIcon" },
  { href: "/projects", label: "Projects", icon: "ProjectsIcon" },
  { href: "/blog", label: "Blog", icon: "BlogIcon" },
  { href: "/lab", label: "Lab", icon: "LabIcon" },
  
] as const;

export const FOOTER_LINKS = {
  social: Object.entries(SITE_CONFIG.social),
  pages: NAVIGATION_ITEMS.filter(item => item.href !== "/"),
} as const;