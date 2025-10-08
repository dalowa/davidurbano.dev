'use client'

import { useCenterTag } from '@/src/hooks'
import { cn } from '@/src/lib/utils'

export const HomeContactMe = () => {
  const { elementRef, isInViewport } = useCenterTag()
  return (
    <section 
      className={cn(`w-screen h-[100vh] flex flex-col bg-white text-white justify-center transition-all duration-700`, 
        {'opacity-100': isInViewport},
        {'opacity-75': !isInViewport}
      )}
      ref={elementRef}
    >
      <h2 className={`text-center font-extrabold text-3xl text-red-dalowa mb-4`}>
        Get in Touch
      </h2>
    </section>
  )
}
