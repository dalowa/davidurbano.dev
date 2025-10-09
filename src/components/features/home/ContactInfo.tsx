// src/components/features/home/contact/ContactInfo.tsx
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
        {`Let's build something together`}
      </h4>
      
      <p className={cn(
        "hidden text-black-dalowa/75 select-none",
        "lg:inline",
        "2xl:text-lg"
      )}>
        {`I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions`}
      </p>
      
      <DalowaBlackIcon className={cn(
        "hidden aspect-square mx-auto mt-4",
        "lg:inline w-64",
        "xl:w-80"
      )} />
    </div>
  )
}