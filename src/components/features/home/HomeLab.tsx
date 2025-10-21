'use client'

import { useCenterTag } from '@/src/hooks'

export const HomeLab = () => {
   const { elementRef } = useCenterTag()
   return (
      <section 
         ref={elementRef}
         className="mx-auto h-screen min-h-[600px] flex flex-col w-screen items-center text-white justify-center">
         <div className="text-center flex justify-center items-center p-6 font-extrabold text-3xl w-[300px] lg:w-[55%] aspect-[9/16] lg:aspect-video bg-red-dalowa text-white mb-4">
            <h2 className="mt-4">Gonna post some experiments soon...</h2>
         </div>
      </section>
   )
}
