import { useEffect, useRef, useState } from "react"

export const useCenterTag = () => {
     const [isInViewport, setIsInViewport] = useState(false)
     const elementRef = useRef<HTMLDivElement>(null)
     
       useEffect(() => {
       const element = elementRef.current
       if (!element) return // Si no hay elemento, no hacer nada
   
       // 🔍 INTERSECTION OBSERVER: Detecta visibilidad
       const observer = new IntersectionObserver(
         (entries) => {
           entries.forEach((entry) => {
             console.log(`📊 Elemento visible: ${entry.isIntersecting}`)
             
             if (entry.isIntersecting) {
               // ✅ ELEMENTO ENTRA AL VIEWPORT
               console.log('🟢 Elemento entró al viewport')
               setIsInViewport(true)
               
               // 🎯 AUTO-CENTRAR después de un pequeño delay
               setTimeout(() => {
                 console.log('🎯 Centrando elemento...')
                 element.scrollIntoView({
                   behavior: 'smooth',   // Animación suave
                   block: 'center',      // Centrar verticalmente
                   inline: 'nearest'     // Mantener posición horizontal
                 })
               }, 100) // Esperar 300ms para que la animación CSS se vea
               
             } else {
               // ❌ ELEMENTO SALE DEL VIEWPORT
               console.log('🔴 Elemento salió del viewport')
               setIsInViewport(false)
             }
           })
         },
         {
           threshold: 0.01,           // Trigger cuando 1% sea visible
           rootMargin: '0px 0px 0px 0px' // Sin margen extra
         }
       )
   
       // 👀 EMPEZAR A OBSERVAR
       observer.observe(element)
       console.log('👀 Observer iniciado')
   
       // 🧹 CLEANUP: Limpiar cuando el componente se desmonte
       return () => {
         observer.unobserve(element)
         console.log('🧹 Observer limpiado')
       }
     }, [])
     
     return { elementRef, isInViewport }
}