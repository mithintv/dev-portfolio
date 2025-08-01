import { getProjects } from "@/services/contentful";
import { useQuery } from "@tanstack/react-query";
import { Header } from "../../ui/header";
import { ProjectCard } from "./project-card/project-card";

export const Projects = () => {
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return (
    <section id="projects" className="pt-24 pb-4 animate-appear">
      <Header>Projects</Header>
      <div className="flex flex-row flex-wrap justify-center gap-y-8 w-[350px] md:w-[725px] lg:w-[1000px]">
        {projects &&
          projects.map((project) => {
            return (
              <ProjectCard key={project.sys.id} project={project.fields} />
            );
          })}
      </div>
    </section>
  );
};
