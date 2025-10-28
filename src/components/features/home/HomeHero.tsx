import { cn } from '@/src/lib/utils'
import Image from 'next/image'

export const HomeHero = () => {
   return (
      <section className={cn("animate-fade-in mx-auto flex flex-col w-[75vw] max-w-6xl min-h-[80vh] justify-center items-center gap-[1vh] text-white-dalowa mb-[10vh]")}>
         <div className="glowing-bg">
            <Image 
               src="/dalowa-logo-clear.webp" 
               alt="David Urbano" 
               priority
               loading='eager' 
               width={275} height={275} 
               className="scale-110" 
            />
         </div>
         <h1 className="text-center font-extrabold text-4xl texto-background">David Urbano</h1>
         <p className="text-base leading-relaxed text-center font-light max-w-xs">
         {`Software developer with a current focus on web development while pursuing a degree in Software Engineering`}
         </p>
      </section>
  )
}
