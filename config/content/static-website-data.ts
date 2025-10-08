import { NavigationItem } from "@/src/types";
import { AboutIcon, BlogIcon, HomeIcon, WorkIcon, LabIcon, TwitterIcon, GithubIcon, InstagramIcon, LinkedinIcon, ChessIcon, SpotifyIcon } from '@/src/components/icons';

export const SITE_CONFIG = {
   name: "David Urbano",
   title: "Software Engineer & Web Developer",
   description: "Software Engineer and Web Developer from Lima, Peru",
   url: "https://davidurbano.dev",
   location: "Lima, Perú",
   social: {
      email: "davidurbano.dev@gmail.com",
      twitter: "https://x.com/da_lo_wa",
      github: "https://github.com/dalowa",
      instagram: "https://www.instagram.com/da_lo_wa",
      linkedin: "https://www.linkedin.com/in/david-urbano-82a151223",
      chess: "https://www.chess.com/member/da_lo_wa",
      spotify: "https://open.spotify.com/user/31xxwpuprnospxn2kb6s2p34q6oq?si=0f917ea2af674f56"
   }
} as const;


export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/about", label: "About", icon: AboutIcon },
  { href: "/projects", label: "Projects", icon: WorkIcon },
  { href: "/blog", label: "Blog", icon: BlogIcon },
  { href: "/lab", label: "Lab", icon: LabIcon },
  
] as const;


export const FOOTER_LINKS = [
      {href: "https://x.com/da_lo_wa", label: "Twitter", icon: TwitterIcon},
      {href: "https://github.com/dalowa", label: "GitHub", icon: GithubIcon},
      {href: "https://www.instagram.com/da_lo_wa", label: "Instagram", icon: InstagramIcon},
      {href: "https://www.linkedin.com/in/david-urbano-82a151223", label: "LinkedIn", icon: LinkedinIcon},
      {href: "https://www.chess.com/member/da_lo_wa", label: "Chess", icon: ChessIcon},
      {href: "https://open.spotify.com/user/31xxwpuprnospxn2kb6s2p34q6oq?si=0f917ea2af674f56", label: "Spotify", icon: SpotifyIcon}
]