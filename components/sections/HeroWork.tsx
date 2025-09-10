'use client'

import Link from 'next/link'
import { GithubIcon, LinkIcon } from '../icons'
import { HeroProjectShowBox } from '../ui/HeroProjectShowBox'
import { useIntersectionObserver } from '@/hooks';
import { heroWorkSection } from '@/utils/data';

export default function HeroWork() {

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
        <div className="text-center w-full">
          <h2 className="text-center mx-auto w-full font-extrabold text-3xl text-red-dalowa">Most Relevant Work</h2>
        </div>

        <div className=" lg:w-full xl:max-w-[900px] lg:border-0 lg:max-w-[850px] lg:shadow-none lg:flex-row lg:justify-end bg-black-dalowa/90 mx-auto rounded-2xl max-w-[300px] h-[60vh] max-h-[450px] items-center justify-center backdrop-blur-sm flex flex-col z-10 shadow-xs shadow-red-dalowa/50 border-[0.25px] border-red-dalowa/15">
          <HeroProjectShowBox/>
          <div className="flex flex-col gap-6 px-5 rounded-lg max-w-lg z-10 lg:max-w-[450px] lg:items-end">
            <div className="w-full flex flex-col lg:items-end">
              <span className="font-light text-sm lg:text-end">{heroWorkSection.typeProject}</span>
              <h3 className="font-bold text-red-dalowa text-lg">{heroWorkSection.nameProject}</h3>
            </div>
            <p className="font-light text-base lg:bg-red-dalowa/65 lg:text-end lg:p-2">{heroWorkSection.description}</p>
            <ul className="flex flex-wrap gap-2 lg:w-[275px] justify-end text-xs lg:text-sm font-light lg:text-white-dalowa text-red-dalowa">
              {heroWorkSection.tools.map((tool, index) => (
                <li key={index} className="lg:px-2 lg:py-1 lg:border-[1px] border-red-dalowa rounded-lg">{tool}</li>
              ))}
            </ul>
            <ul className="flex gap-4 justify-end">
              <li><a href={heroWorkSection.githubLink} title="View Code" target="_blank" rel="noopener noreferrer"><GithubIcon className="h-5 w-5 lg:h-6 lg:w-6 hover:text-red-dalowa cursor-pointer" /></a></li>
              <li><a title="View Project" target="_blank" rel="noopener noreferrer" href={heroWorkSection.websiteLink}><LinkIcon className="h-5 w-5 lg:h-6 lg:w-6 hover:text-red-dalowa cursor-pointer" /></a></li>
            </ul>
          </div>
        
        </div>
        <div className="flex justify-center lg:justify-start mx-auto">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 bg-red-dalowa hover:bg-red-dalowa/80 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              {`More things I've done`}
              <span className="text-lg">→</span>
            </Link>
          </div>
      </section>
  )
}
