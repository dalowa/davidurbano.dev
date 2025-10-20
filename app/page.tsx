
import { HomeAbout, HomeBlog, HomeHero, HomeProjects, HomeContactMe, HomeLab  } from "@/src/components/features/home";

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
      <HomeBlog /> 

      {/* -- LAB SECTION -- */}
      <HomeLab />

      {/* -- CONTACT SECTION -- */}
      <HomeContactMe />
    </>
  );
}
