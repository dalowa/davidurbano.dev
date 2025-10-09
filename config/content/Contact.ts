import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/src/components/icons";
import { SITE_CONFIG } from "./static-website-data";

export const CONTACT_CONFIG = {
  title: "Let's build something together",
  subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions",
  formTitle: "Send a message",
  socialTitle: "Or Follow Me",
  fields: [
    { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Your Name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Regarding...' },
    { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Your message...' }
  ],
  socialLinks: [
    {
      name: 'LinkedIn',
      href: SITE_CONFIG.social.linkedin,
      icon: LinkedinIcon,
      title: 'David Urbano LinkedIn'
    },
    {
      name: 'Instagram',
      href: SITE_CONFIG.social.instagram,
      icon: InstagramIcon,
      title: 'David Urbano Instagram'
    },
    {
      name: 'GitHub',
      href: SITE_CONFIG.social.github,
      icon: GithubIcon,
      title: 'David Urbano GitHub'
    }
  ]
} as const