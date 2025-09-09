'use client'

import React from 'react'
import { useEffect } from 'react'


export function HeroProjectShowBox() {
   useEffect(() => {
    // Precargar la imagen
    const img = new Image()
    img.onload = () => {
      // Cuando la imagen carga, añade la clase 'loaded'
      const element = document.querySelector('.websiterelevant')
      if (element) {
        element.classList.add('loaded')
      }
    }
    img.src = '/johnmayta-web.jpg'
  }, [])

  return (
    <div className="websiterelevant absolute w-full h-[60vh] max-h-[450px] lg:h-auto lg:aspect-video lg:opacity-75 lg:max-h-none lg:max-w-[500px] xl:max-w-[600px] lg:left-0 lg: opacity-25 flex items-center justify-center">

   </div>
  )
}
