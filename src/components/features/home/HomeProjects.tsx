import { homeProjectsContent } from "@/config/content";
import { ShowcaseProject } from "./ShowcaseProject";
import { ToPageButton } from "../../ui";
import { cn } from "@/src/lib/utils/cn";
export function HomeProjects() {
  return (
      <section className={`mb-[10vh] mx-auto border-red-dalowa flex flex-col gap-6 w-[75vw] max-w-6xl text-white`}>
        <div className="text-center w-full">
          <h2 className="text-center mx-auto w-full font-extrabold text-3xl text-red-dalowa">{homeProjectsContent.title}</h2>
        </div>
        <div className={cn('flex flex-col gap-6 items-center justify-center mx-auto w-full', "lg:gap-10")}>
          {homeProjectsContent.projects.map((project) => (
            <ShowcaseProject 
              id={project.id}
              key={project.id}
              localImageUrl={project.imageUrl}
              nameProject={project.name}
              typeProject={project.type}
              description={project.description}
              tools={project.techStack}
              repositoryLink={project.repositoryLink as string}
              deployLink={project.deployLink as string}
            />
          ))}
        </div>
        <div className={cn("flex justify-center mx-auto", " lg:justify-start")}>
          <ToPageButton redirectTo={homeProjectsContent.cta?.href as string}>
            {homeProjectsContent.cta?.text}
          </ToPageButton>
        </div>
      </section>
  )
}
