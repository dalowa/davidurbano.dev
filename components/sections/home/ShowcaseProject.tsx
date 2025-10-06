'use client'

import { GithubIcon, LinkIcon } from '@/components/icons'
import { useIntersectionObserver } from '@/hooks';
import { ImageProject } from './ImageProject'
import { cn } from '@/lib/utils';
import { ShowcaseProjectProps } from '@/types/components';



export const ShowcaseProject = ({localImageUrl, nameProject, typeProject, description, tools, repositoryLink, deployLink, id}: ShowcaseProjectProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
      threshold: 0.1,
      triggerOnce: true
    });

  return (
      <div 
        className={cn(
          // Base styles
          "bg-black-dalowa/90 mx-auto rounded-2xl backdrop-blur-sm flex z-10 shadow-xs",
          "shadow-red-dalowa/50 border-[0.25px] border-red-dalowa/15",
          "max-w-[300px] h-[60vh] max-h-[450px] items-center justify-center flex-col",
          
          // Large screen styles
          `lg:w-full lg:border-0 lg:shadow-none lg:flex-row ${Number(id) % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`,
          "lg:max-w-[850px] xl:max-w-[900px]",
          
          // Animation states
          isIntersecting 
            ? 'animate-scale-in translate-x-0' 
            : 'opacity-0 translate-x-10'
        )}
        ref={elementRef as React.RefObject<HTMLDivElement>}
        >
        <ImageProject localImageUrl={localImageUrl} whereTo={deployLink} index={Number(id)} />
        <div className={`flex flex-col gap-6 px-5 rounded-lg max-w-lg z-10 lg:max-w-[450px] ${Number(id) % 2 === 0 ? 'lg:items-start' : 'lg:items-end'}`}>
          <div className={`w-full flex flex-col gap-1 ${Number(id) % 2 === 0 ? 'items-start text-left' : 'items-end text-right'}`}>
            <span className={`font-light text-sm `}>{typeProject}</span>
            <h3 className="font-bold text-red-dalowa text-lg xl:text-xl">{nameProject}</h3>
          </div>
          <p className={`font-light text-base lg:bg-gray-900/75 lg:p-2 lg:rounded-lg lg:border lg:border-gray-700/50 ${Number(id) % 2 === 0 ? 'lg:text-start' : 'lg:text-end'}`}>{description}</p>
          <ul className={`flex flex-wrap gap-2 lg:w-[275px] ${Number(id) % 2 === 0 ? 'justify-start' : 'justify-end'} text-xs lg:text-sm font-light lg:text-white-dalowa text-red-dalowa`}>
            {tools.map((tool, index) => (
              <li key={index} className="lg:px-2 lg:py-1 lg:border-[1px] border-red-dalowa rounded-lg">{tool}</li>
            ))}
          </ul>
          <ul className="flex gap-4 justify-end">
            <li><a href={repositoryLink} title="View Code" target="_blank" rel="noopener noreferrer"><GithubIcon className="h-5 w-5 lg:h-6 lg:w-6 hover:text-red-dalowa cursor-pointer" /></a></li>
            <li><a title="View Project" target="_blank" rel="noopener noreferrer" href={deployLink}><LinkIcon className="h-5 w-5 lg:h-6 lg:w-6 hover:text-red-dalowa cursor-pointer" /></a></li>
          </ul>
        </div>       
      </div>
  )
}
