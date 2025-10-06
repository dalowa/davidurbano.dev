import { homeProjectsContent } from '@/lib/data/Home';
import { ShowcaseProject } from './ShowcaseProject';
import { ToPageButton } from '@/components/common';

export function HomeProjects() {

  return (
      <section className={`mb-[10vh] border-red-dalowa flex flex-col gap-6 w-[75vw] text-white`}>
        <div className="text-center w-full">
           <h2 className="text-center mx-auto w-full font-extrabold text-3xl text-red-dalowa">Most Valuable Project</h2>
        </div>
        <div className='flex flex-col lg:gap-10 gap-6 items-center justify-center mx-auto w-full'>
          { homeProjectsContent.projects.map((project) => (
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
        <div className="flex justify-center lg:justify-start mx-auto">
            <ToPageButton redirectTo="/projects">
              Projects gallery
            </ToPageButton>
        </div>
      </section>
  )
}
