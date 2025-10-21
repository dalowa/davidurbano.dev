'use client'

import { ToPageButton } from "../../ui"

export const HomeBlog = () => {
   return (
      <section
         className="border-2d mx-auto mb-[10vh] border-red-dalowa aspect-[16/8] flex flex-col w-[75vw] max-w-6xl py-8 text-white justify-center">
         <h2 className="text-center font-extrabold text-3xl text-red-dalowa">Sharing My Process</h2>
         {/* Gallery Posts */}
         <div className="py-7 flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-center">
            {/* Post 1 */}
            <div className="flex flex-col gap-3 md:w-[250px] lg:w-[350px]">
               <div className="bg-red-dalowa aspect-video rounded-lg"></div>
               <h4 className="text-2xl text-white-dalowa font-semibold">The Rise of Brutalism in Web Design</h4>
               <p className="font-light text-sm text-white-dalowa/85">{`Discover the raw and unfiltered approach of brutalism in web design, where functionality meets aesthetics in a bold statement.`}</p>
               <a className="text-red-dalowa/75" href="#">Read more</a>
            </div>
            {/* Post 2 */}
            <div className="flex flex-col gap-3 md:w-[250px] lg:w-[350px]">
               <div className="bg-red-dalowa aspect-video rounded-lg"></div>
               <h4 className="text-2xl text-white-dalowa font-semibold">Why I Switched to TypeScript</h4>
               <p className="font-light text-sm text-white-dalowa/85">{`A quick look at the benefits and challenges of moving from JavaScript to TypeScript in modern web development.`}</p>
               <a className="text-red-dalowa/75" href="#">Read more</a>
            </div>
            {/* Post 3 */}
            <div className="flex flex-col gap-3 md:w-[250px] lg:w-[350px]">
               <div className="bg-red-dalowa aspect-video rounded-lg"></div>
               <h4 className="text-2xl text-white-dalowa font-semibold">Building a Personal Brand Online</h4>
               <p className="font-light text-sm text-white-dalowa/85">{`Tips and strategies for creating a unique digital presence that stands out in today's crowded internet landscape.`}</p>
               <a className="text-red-dalowa/75" href="#">Read more</a>
            </div>
         </div>
         <div className="flex justify-end w-full">
            <ToPageButton redirectTo="/blog">
               Visit My Blog
            </ToPageButton>
         </div>
         
      </section>  
   )
}
