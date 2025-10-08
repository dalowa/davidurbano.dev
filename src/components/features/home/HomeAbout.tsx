

import React from 'react'
import { ImageAbout } from './ImageAbout'
import { Dartboard, LocationIcon, ScreenIcon, StudentIcon } from '@/src/components/icons'
import { ToPageButton } from '@/src/components/ui'
import { homeAboutContent } from '@/config/content'
import { cn } from '@/src/lib/utils'

export function HomeAbout() {
  return (
      <section className={cn(
        "flex flex-col mx-auto justify-center items-center gap-8 text-white-dalowa transition-all duration-1000",
        "w-[75vw] max-w-6xl min-h-[80vh] mb-[10vh]",
        "lg:flex-row"
      )}>
        <div className={cn(
          "w-full space-y-6 max-w-[500px]",
          "lg:w-[50%]"
        )}>
          <h2 className={cn(
            "text-center font-extrabold text-3xl text-red-dalowa",
            "lg:text-left"
          )}>About Me</h2>
          
          <p className={cn(
            "text-base leading-relaxed text-center font-light",
            "lg:text-left"
          )}>
            {homeAboutContent.mainText}
          </p>
          
          <div className={cn(
            "space-y-4 max-w-[350px] mx-auto",
            "lg:mx-0"
          )}>
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
          
          <div className={cn(
            "flex items-center justify-center gap-1 text-red-dalowa",
            "lg:justify-end"
          )}>
            <LocationIcon className="text-[1.75rem]" />
            <span className="font-semibold text-lg">Lima, Perú</span>
          </div>
          <div className={cn(
            "flex justify-center",
            "lg:justify-start"
          )}>
            <ToPageButton redirectTo={homeAboutContent.cta?.href as string}>
              {homeAboutContent.cta?.text}
            </ToPageButton>
          </div>
        </div>
          <ImageAbout />
      </section>
  )
}
