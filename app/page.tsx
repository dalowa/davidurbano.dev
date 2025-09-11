
import Image from "next/image";
/* import dynamic from 'next/dynamic'; */

import HeroAbout from "@/components/sections/HeroAbout";

import HeroProjects from "@/components/sections/HeroProjects";


// Dynamically import MapBox to avoid SSR issues
/* const MapBox = dynamic(() => import('@/components/ui/MapBox'), {
  ssr: false,
  loading: () => (
    <div className="max-w-[500px] mx-auto aspect-square rounded-lg border-2 border-red-dalowa/30 bg-gray-800/30 flex items-center justify-center">
      <div className="text-center text-gray-400">
        <div className="text-2xl mb-2">🗺️</div>
        <p>Loading map...</p>
      </div>
    </div>
  )
}); */
export default function Home() {
  return (

    <>
      {/* -- HERO SECTION -- */}
      <section className="animate-scale-in flex flex-col w-[75vw] min-h-[80vh] justify-center items-center gap-[1vh] text-white-dalowa mb-[10vh]">
        
        <div className="glowing-bg">
          <Image 
            
            src="/dalowa-logo-clear.png" 
            alt="David Urbano" 
            priority 
            width={275} height={275} 
            className="scale-110" 
          />
        </div>
        
        
        <h1 className="text-center font-extrabold text-4xl texto-background">David Urbano</h1>
        <p className="text-base leading-relaxed text-center font-light max-w-xs">
          {`Software developer with a current focus on web development while pursuing a degree in Software Engineering`}
        </p>
      </section>

      {/* -- ABOUT SECTION -- */}
      <HeroAbout />

      {/* -- PROJECTS SECTION -- */}
      <HeroProjects />

      {/* -- BLOG SECTION -- */}
      <section className="border-2 border-red-dalowa aspect-[16/8] flex flex-col w-[75vw] p-8 text-white justify-center">
        
      </section>   

      {/* -- BANNER SECTION -- */}
      <section className="border-2 border-red-dalowa aspect-[16/8] flex flex-col w-[75vw] p-8 text-white justify-center">

      </section>
    </>
  );
}
