'use client'

import { useIntersectionObserver } from '@/hooks';
import { HeroProjectsContent } from './HeroProjectsContent';

export default function HeroProjects() {

   const { elementRef, isIntersecting } = useIntersectionObserver({
       threshold: 0.1,
       triggerOnce: true
     });

  return (
      <section 
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`mb-[10vh] border-red-dalowa flex flex-col gap-6 w-[75vw] text-white ${
                      isIntersecting 
                        ? 'animate-scale-in translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}>
        <HeroProjectsContent />
      </section>
  )
}
