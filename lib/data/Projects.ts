import { Project } from "@/types/type-content"

export const PhotographerWebsite:Project = {
  id: 1,
  name: "Photographer Portfolio",
  type: "Website Project",
  description: "Photography portfolio site connecting to external API for dynamic photo display. Replicated professional design to showcase John Mayta's work and facilitate client engagement.",
  techStack: ["OAuth Authentication","Next.js", "TailwindCSS", "Smugmug API" ],
  repositoryLink: "https://github.com/dalowa/dalowa_john-mayta",
  deployLink: "https://john-mayta.vercel.app/inicio",
  imageUrl: "/PhotographerWebsiteScreenshot-v1.jpg",
  featured: false,
}

export const CountriesExplorer: Project = {
  id: 2,
  name: "Countries Explorer",
  type: "Website Project",
  description: `Modern web application for exploring world countries with advanced filtering, search functionality, and favorites system. Features responsive design and persistent data storage.`,
  techStack: ["Next.js", "Zustand", "Typescript", "TailwindCSS", "REST Countries API"],
  repositoryLink: "https://github.com/dalowa/insalud-tt",
  deployLink: "https://countries-explorer-beta.vercel.app/",
  imageUrl: "/CountriesExplorerScreenshot-v1.png",
  featured: false,
}