
import Image from "next/image";
/* import dynamic from 'next/dynamic'; */

import HeroAbout from "@/components/sections/HeroAbout";
import { HeroProjectShowBox } from "@/components/ui/HeroProjectShowBox";
import { GithubIcon, LinkIcon } from "@/components/icons";
import Link from "next/link";


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

      {/* -- WORK SECTION -- */}
      <section className=" mb-[10vh] border-red-dalowa flex flex-col gap-6 w-[75vw] text-white">
        <div className="text-center w-full">
          <h2 className="text-center mx-auto w-full font-extrabold text-3xl text-red-dalowa">Most Relevant Work</h2>
        </div>

        <div className=" lg:w-full xl:max-w-[900px] lg:border-0 lg:max-w-[850px] lg:shadow-none lg:flex-row lg:justify-end bg-black-dalowa/90 mx-auto rounded-2xl max-w-[300px] h-[60vh] max-h-[450px] items-center justify-center backdrop-blur-sm flex flex-col z-10 shadow-xs shadow-red-dalowa/50 border-[0.25px] border-red-dalowa/15">
          <HeroProjectShowBox/>
          <div className="flex flex-col gap-6 px-5 rounded-lg max-w-lg z-10 lg:max-w-[450px] lg:items-end">
            <div className="w-full flex flex-col lg:items-end">
              <span className="font-light text-sm lg:text-end">Website Project</span>
              <h3 className="font-bold text-red-dalowa text-lg">John Mayta - Photographer</h3>
            </div>
            <p className="font-light text-base lg:bg-red-dalowa/65 lg:text-end lg:p-2">{`A personal portfolio website showcasing the work of photographer John Mayta that allows him to display his projects and attract new clients, allowing them to easily navigate his work and get in touch for inquiries and contact him.`}</p>
            <ul className="flex flex-wrap gap-2 text-xs lg:text-sm font-light lg:text-white-dalowa text-red-dalowa">
              <li>VSCode</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>TailwindCSS</li>
            </ul>
            <ul className="flex gap-4 justify-end">
              <li><GithubIcon className="h-5 w-5 lg:h-6 lg:w-6" /></li>
              <li><a title="View Project" target="_blank" rel="noopener noreferrer" href="https://john-mayta.vercel.app/inicio"><LinkIcon className="h-5 w-5 lg:h-6 lg:w-6 hover:text-red-dalowa cursor-pointer" /></a></li>
            </ul>
          </div>
        
        </div>
        <div className="flex justify-center lg:justify-start mx-auto">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 bg-red-dalowa hover:bg-red-dalowa/80 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              {`More things I've done`}
              <span className="text-lg">→</span>
            </Link>
          </div>
      </section>

      {/* -- BANNER SECTION -- */}
      <section className="border-2 border-red-dalowa aspect-[16/8] flex flex-col w-[75vw] p-8 text-white justify-center">

      </section>
    </>
  );
}
