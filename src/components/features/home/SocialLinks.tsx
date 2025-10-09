import { CONTACT_CONFIG } from '@/config/content'
import { ExternalLink } from '@/src/components/ui'
import { cn } from '@/src/lib/utils'

export function SocialLinks() {
  return (
    <div className={cn(
      "hidden flex-col mt-2",
      "lg:flex lg:max-w-xs lg:w-full",
      "xl:max-w-md"
    )}>
      <h6 className="font-semibold">{CONTACT_CONFIG.socialTitle}</h6>
      
      <ul className="flex gap-4 mt-2 items-center">
        {CONTACT_CONFIG.socialLinks.map((social) => (
          <li key={social.name}>
            <ExternalLink
              href={social.href}
              title={social.title}
              className={cn(
                "text-black-dalowa text-3xl transition-colors duration-200",
                "hover:text-red-dalowa focus:text-red-dalowa focus:outline-none",
              )}
            >
              <social.icon />
            </ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  )
}