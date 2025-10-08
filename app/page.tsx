
import { HomeAbout, HomeBlog, HomeHero, HomeProjects, HomeBanner, HomeContactMe  } from "@/src/components/features/home";

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

      {/* -- BANNER SECTION -- */}
      <HomeBanner />

      {/* -- CONTACT SECTION -- */}
      <HomeContactMe />
    </>
  );
}
