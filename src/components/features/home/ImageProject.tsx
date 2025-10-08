'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/src/lib/utils/cn'
import { ExternalLink } from '@/src/components/ui';

export function ImageProject({localImageUrl, whereTo, index}: {localImageUrl: string, whereTo: string, index: number}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className={cn(
        "websiterelevant absolute flex items-center justify-center cursor-pointer opacity-5 rounded-xl w-full h-[60vh] max-h-[450px]",
        `lg:h-auto lg:aspect-video lg:max-h-none lg:max-w-[500px] lg:opacity-90 ${index % 2 === 0 ? 'lg:right-0' : 'lg:left-0'}`,
        `xl:max-w-[600px]`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ExternalLink href={whereTo} className={cn('transition-transform duration-300 relative w-full h-full overflow-hidden rounded-xl border-red-dalowa border hover:border-0', 'lg:hover:scale-105')}>
        <Image 
          src={localImageUrl} 
          alt="Project Screenshot" 
          fill
          className=''
          sizes='40vw' 
        />
        <div 
          className={cn(`absolute inset-0 bg-red-dalowa/50 mix-blend-multiply transition-opacity duration-500`, { 'opacity-0': isHovered, 'opacity-100': !isHovered })} 
        />
      </ExternalLink>
    </div>
  )
}
