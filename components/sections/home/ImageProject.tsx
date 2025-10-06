'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { cn } from '@/lib/utils/cn'
import { ExternalLink } from '@/components/ui';

export function ImageProject({localImageUrl, whereTo, index}: {localImageUrl: string, whereTo: string, index: number}) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(index);

  return (
    <div 
      className={cn(
        // Base layout
        "websiterelevant absolute flex items-center justify-center cursor-pointer",
        
        // Dimensions
        "w-full h-[60vh] max-h-[450px]",
        
        // Desktop responsive
        "lg:h-auto lg:aspect-video lg:max-h-none lg:max-w-[500px]",
        `xl:max-w-[600px] ${index % 2 === 0 ? 'lg:right-0' : 'lg:left-0'}`,
        
        // Opacity states
        "opacity-5 lg:opacity-90",
        
        // Border radius
        "rounded-xl"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ExternalLink href={whereTo} className='lg:hover:scale-105 transition-transform duration-300 relative w-full h-full overflow-hidden rounded-xl border-red-dalowa border hover:border-0'>
        <Image 
          src={localImageUrl} 
          alt="Project Screenshot" 
          fill
          className='' 

        />
        <div 
          className={`absolute inset-0 bg-red-dalowa/50 mix-blend-multiply transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`} 
        />
      </ExternalLink>
    </div>
  )
}
