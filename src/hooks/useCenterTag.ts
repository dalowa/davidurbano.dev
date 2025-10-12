import { useEffect, useRef, useState } from "react"

/**
 * Custom hook that detects when an element enters the viewport
 * and automatically centers it on the screen with smooth scrolling.
 * 
 * @returns {Object} Object with elementRef to assign to element and isInViewport state
 * @returns {React.RefObject<HTMLDivElement>} elementRef - Reference to assign to DOM element
 * @returns {boolean} isInViewport - State indicating if element is visible in viewport
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { elementRef, isInViewport } = useCenterTag();
 *   
 *   return (
 *     <div ref={elementRef} className={isInViewport ? 'animate-in' : ''}>
 *       Content that will be automatically centered
 *     </div>
 *   );
 * }
 * ```
 */
export const useCenterTag = () => {
  // State to track if element is visible in viewport
  const [isInViewport, setIsInViewport] = useState(false)
  
  // Reference to DOM element that will be observed
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    
    // Check if element exists before observing it
    if (!element) return

    // Create observer to detect when element enters/exits viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible: activate state and center with smooth scroll
            setIsInViewport(true)
            
            // Timeout to allow CSS animations to execute first
            setTimeout(() => {
              element.scrollIntoView({
                behavior: 'smooth',   // Smooth scroll animation
                block: 'center',      // Center vertically on screen
                inline: 'nearest'     // Maintain current horizontal position
              })
            }, 100) // 100ms delay for CSS animation coordination
          } else {
            // Element is not visible: deactivate state
            setIsInViewport(false)
          }
        })
      },
      {
        threshold: 0.01,                // Trigger when 1% of element is visible
        rootMargin: '0px 0px 0px 0px'  // No additional margin for detection
      }
    )

    // Start observing the element
    observer.observe(element)

    // Cleanup: stop observation when component unmounts
    return () => {
      observer.unobserve(element)
    }
  }, []) // Effect only runs once when component mounts

  return { elementRef, isInViewport }
}