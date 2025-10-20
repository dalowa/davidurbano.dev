'use client'

import { useCenterTag } from '@/src/hooks'

export const HomeLab = () => {
   const { elementRef } = useCenterTag()
   return (
      <section 
         ref={elementRef}
         className="mx-auto h-screen flex flex-col w-screen items-center text-white justify-center">
         <h2 className="text-center font-extrabold text-3xl w-[50%] aspect-video bg-red-dalowa text-white mb-4">Banner coming soon...</h2>
      </section>
   )
}
