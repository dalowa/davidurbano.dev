'use client'

import { GithubIcon, LinkIcon } from '@/src/components/icons'
import { ExternalLink } from '@/src/components/ui';
import { useIntersectionObserver } from '@/src/hooks';
import { ImageProject } from './ImageProject'
import { cn } from '@/src/lib/utils';
import { ShowcaseProjectProps } from '@/src/types';


export const ShowcaseProject = ({
  localImageUrl, 
  nameProject, 
  typeProject, 
  description, 
  tools, 
  repositoryLink, 
  deployLink, 
  id
}: ShowcaseProjectProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const projectIndex = Number(id);
  const isEvenProject = projectIndex % 2 === 0;
  
  const layoutClasses = {
    container: cn(
      "bg-black-dalowa/90 mx-auto rounded-2xl backdrop-blur-sm flex z-10",
      "shadow-xs shadow-red-dalowa/50 border-[0.25px] border-red-dalowa/15",
      "max-w-[300px] h-[60vh] max-h-[450px] items-center justify-center flex-col",
      "lg:w-full lg:border-0 lg:shadow-none lg:flex-row lg:max-w-[850px] xl:max-w-[900px]",
      isEvenProject ? "lg:justify-start" : "lg:justify-end",
      isIntersecting ? (isEvenProject ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'
    ),
    content: cn(
      "flex flex-col gap-6 px-5 rounded-lg max-w-lg z-10 lg:max-w-[450px]",
      isEvenProject ? "lg:items-start" : "lg:items-end"
    ),
    header: cn(
      "w-full flex flex-col gap-1",
      isEvenProject ? "items-start text-left" : "items-end text-right"
    ),
    description: cn(
      "font-light text-base lg:bg-gray-900/75 lg:p-2 lg:rounded-lg lg:border lg:border-gray-700/50",
      isEvenProject ? "lg:text-start" : "lg:text-end"
    ),
    tools: cn(
      "flex flex-wrap gap-2 lg:w-[275px] text-xs lg:text-sm font-light lg:text-white-dalowa text-red-dalowa",
      isEvenProject ? "justify-start" : "justify-end"
    )
  };

 return (
    <div className={layoutClasses.container} ref={elementRef as React.RefObject<HTMLDivElement>}>
      <ImageProject localImageUrl={localImageUrl} whereTo={deployLink} index={projectIndex} />
      
      <div className={layoutClasses.content}>
        <div className={layoutClasses.header}>
          <span className="font-light text-sm">{typeProject}</span>
          <h3 className="font-bold text-red-dalowa text-lg xl:text-xl">{nameProject}</h3>
        </div>
        <p className={layoutClasses.description}>
          {description}
        </p>  
        <ul className={layoutClasses.tools}>
          {tools.map((tool, index) => (
            <li key={index} className="lg:px-2 lg:py-1 lg:border-[1px] border-red-dalowa rounded-lg">
              {tool}
            </li>
          ))}
        </ul>
        <ul className="flex gap-4 justify-end">
          <li>
            <ExternalLink href={repositoryLink} title="View Code">
              <GithubIcon className="h-5 w-5 lg:h-6 lg:w-6 hover:text-red-dalowa cursor-pointer" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink title="View Project" href={deployLink}>
              <LinkIcon className="h-5 w-5 lg:h-6 lg:w-6 hover:text-red-dalowa cursor-pointer" />
            </ExternalLink>
          </li>
        </ul>
      </div>
    </div>
  );
};