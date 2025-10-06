

import React from 'react'
import { ImageAbout } from './ImageAbout'
import { Dartboard, LocationIcon, ScreenIcon, StudentIcon } from '@/components/icons'
import { ToPageButton } from '@/components/common'
import { homeAboutContent } from '@/lib/data/Home'

export function HomeAbout() {

  return (
    <section
      
      className={`flex flex-col lg:flex-row w-[75vw] min-h-[80vh] justify-center items-center gap-8 text-white-dalowa mb-[10vh] transition-all duration-1000 
        `}>
        <div className="w-full lg:w-[50%] space-y-6 max-w-[500px]">
          <h2 className="text-center lg:text-left font-extrabold text-3xl text-red-dalowa">About Me</h2>
          
          <p className="text-base leading-relaxed text-center lg:text-left font-light">
            {homeAboutContent.mainText}
          </p>
          
          <div className="space-y-4 max-w-[350px] mx-auto lg:mx-0">
            <div className="flex items-start gap-1">
              <div className="w-[2rem] flex justify-center">
                <StudentIcon className="text-red-dalowa text-[1.75rem]" />
              </div>
              <div className="w-[calc(100%-2rem)]">
                <h3 className="font-semibold text-red-dalowa">{homeAboutContent.sections.learning.title}</h3>
                <p className="text-sm text-gray-300">{homeAboutContent.sections.learning.description}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-1">
              <div className="w-[2rem] flex justify-center">
                <ScreenIcon className="text-red-dalowa text-[1.75rem]" />
              </div>
              <div className="w-[calc(100%-2rem)]">
                <h3 className="font-semibold text-red-dalowa">{homeAboutContent.sections.tech.title}</h3>
                <p className="text-sm text-gray-300">{homeAboutContent.sections.tech.description}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-1">
              <div className="w-[2rem] flex justify-center">
                <Dartboard className="text-red-dalowa text-[1.75rem]" />
              </div>
              <div className="w-[calc(100%-2rem)]">
                <h3 className="font-semibold text-red-dalowa">{homeAboutContent.sections.dartboard.title}</h3>
                <p className="text-sm text-gray-300">{homeAboutContent.sections.dartboard.description}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center lg:justify-end gap-1 text-red-dalowa">
            <LocationIcon className="text-[1.75rem]" />
            <span className="font-semibold text-lg">Lima, Perú</span>
          </div>
          
          <div className="flex justify-center lg:justify-start">
            <ToPageButton redirectTo={homeAboutContent.cta?.href as string}>
              {homeAboutContent.cta?.text}
            </ToPageButton>
          </div>
        </div>
        
        <ImageAbout />
      </section>
  )
}
