'use client'

import { useCenterTag } from '@/src/hooks'
import { cn } from '@/src/lib/utils'
import { ContactInfo } from './ContactInfo'
import { ContactForm } from './ContactForm'

export function HomeContactMe() {
  const { elementRef, isInViewport } = useCenterTag()
  
  return (
    <section 
      ref={elementRef}
      className={cn(
        "w-screen h-screen min-h-[600px] flex flex-col gap-6 items-center justify-center bg-white transition-all duration-700",
        "lg:flex-row",
        {
          "opacity-100": isInViewport,
          "opacity-75": !isInViewport
        }
      )}
    >
      <ContactInfo />
      <ContactForm />
    </section>
  )
}
