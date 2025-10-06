import { HomeAbout, HomeHero, HomeProjects } from "@/components/sections/home";

export default function Home() {
  return (
    <>
      {/* -- HERO SECTION -- */}
      <HomeHero />

      {/* -- ABOUT SECTION -- */}
      <HomeAbout />

      {/* -- PROJECTS SECTION -- */}
      <HomeProjects />

      {/* -- BLOG SECTION -- */}
      <section className="border-2 mb-[10vh] border-red-dalowa aspect-[16/8] flex flex-col w-[75vw] p-8 text-white justify-center">
        <h2 className="text-center font-extrabold text-3xl text-red-dalowa">Latest Blog Posts</h2>
      </section>   

      {/* -- CONTACT SECTION -- */}
      <section className="border-2 border-red-dalowa aspect-[16/8] flex flex-col w-[75vw] p-8 text-white justify-center">
        <h2 className="text-center font-extrabold text-3xl text-red-dalowa mb-4">Get in Touch</h2>
      </section>

      {/* -- BANNER SECTION -- */}
      {/* <section className="border-2 border-red-dalowa aspect-[16/8] flex flex-col w-[75vw] p-8 text-white justify-center">

      </section> */}
    </>
  );
}
