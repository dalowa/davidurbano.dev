import { CONTACT_CONFIG } from '@/config/content'
import { DalowaBlackIcon } from '@/src/components/icons'
import { cn } from '@/src/lib/utils'

export function ContactInfo() {
  return (
    <div className={cn(
      "text-center text-black-dalowa",
      "lg:text-start lg:h-[650px] lg:flex lg:flex-col lg:gap-4 lg:w-[40vw]",
      "xl:max-w-xl"
    )}>
      <h4 className={cn(
        "text-3xl font-extrabold select-none",
        "lg:text-4xl",
        "xl:text-5xl"
      )}>
        {CONTACT_CONFIG.title}
      </h4>
      
      <p className={cn(
        "hidden text-black-dalowa/75 select-none",
        "lg:inline",
        "2xl:text-lg"
      )}>
        {CONTACT_CONFIG.subtitle}
      </p>
      
      <DalowaBlackIcon className={cn(
        "hidden aspect-square mx-auto mt-4",
        "lg:inline w-64",
        "xl:w-80"
      )} />
    </div>
  )
}