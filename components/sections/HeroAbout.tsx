'use client'

import Link from 'next/link'
import React from 'react'
import { Dartboard, LocationIcon, ScreenIcon, StudentIcon } from '../icons'
import { heroAboutSection } from '@/utils/data'
import Image from 'next/image'

export default function HeroAbout() {
  return (
    <section className="border-2s border-red-dalowa flex flex-col lg:flex-row w-[75vw] min-h-[80vh] justify-center items-center gap-8 text-white-dalowa mb-[10vh]">
        <div className="w-full lg:w-[50%] space-y-6 max-w-[500px]">
          <h2 className="text-center lg:text-left font-extrabold text-3xl text-red-dalowa">About Me</h2>
          
          <p className="text-base leading-relaxed text-center lg:text-left font-light">
            {heroAboutSection.mainText}
          </p>
          
          <div className="space-y-4 max-w-[350px] mx-auto lg:mx-0">
            <div className="flex items-start gap-1">
              <div className="w-[2rem] flex justify-center">
                <StudentIcon className="text-red-dalowa text-[1.75rem]" />
              </div>
              <div className="w-[calc(100%-2rem)]">
                <h3 className="font-semibold text-red-dalowa">{heroAboutSection.learning.title}</h3>
                <p className="text-sm text-gray-300">{heroAboutSection.learning.description}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-1">
              <div className="w-[2rem] flex justify-center">
                <ScreenIcon className="text-red-dalowa text-[1.75rem]" />
              </div>
              <div className="w-[calc(100%-2rem)]">
                <h3 className="font-semibold text-red-dalowa">{heroAboutSection.tech.title}</h3>
                <p className="text-sm text-gray-300">{heroAboutSection.tech.description}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-1">
              <div className="w-[2rem] flex justify-center">
                <Dartboard className="text-red-dalowa text-[1.75rem]" />
              </div>
              <div className="w-[calc(100%-2rem)]">
                <h3 className="font-semibold text-red-dalowa">{heroAboutSection.dartboard.title}</h3>
                <p className="text-sm text-gray-300">{heroAboutSection.dartboard.description}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center lg:justify-end gap-1 text-red-dalowa">
            <LocationIcon className="text-[1.75rem]" />
            <span className="font-semibold text-lg">Lima, Perú</span>
          </div>
          
          <div className="flex justify-center lg:justify-start">
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 bg-red-dalowa hover:bg-red-dalowa/80 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More About Me
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
        
        <div className="w-full lg:w-[50%] z-10 max-w-[500px]">
          {/* <MapBox /> */}
          {/* <div className="inset-0 w-[500px] aspect-square bg-black-dalowa/50 rounded-lg border-red-dalowa/30 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-sm">Loading Lima, Perú...</p>
                <div className="mt-2">
                  <div className="w-8 h-8 border-2 border-red-dalowa border-t-transparent rounded-full animate-spin mx-auto"></div>
                </div>
              </div>
            </div> */}
            <Image 
              src={"/location.jpg"} 
              alt="Lima, Perú" 
              width={500} 
              height={500} 
              className="aspect-square"
              priority={true}
              placeholder='blur'
            />
        </div>
      </section>
  )
}
