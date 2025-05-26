import { Spotlight } from "@/components/spotlight";
import { cn } from "@/lib/utils";
import type { IProject } from "./i-project";
import { ProjectHeader } from "./project-header";

export const ProjectCard = (
  {
    className,
    project: { title, description, image, demoLink, repoLink, tech },
  }: {
    className?: string;
    project: IProject;
  }
) => {
  return (
    <div
      className="h-[315px] cursor-pointer hover:scale-105 duration-300"
      onClick={() => window.open(demoLink, "_blank", "noopener,noreferrer")}
    >
      <div
        className={cn(
          "flex flex-col md:flex-row-reverse text-left bg-background w-full h-full border rounded-xl",
          className
        )}
      >
        <img
          className="[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_1px,rgba(0,0,0,1)_1px)] w-100 object-cover rounded-t-xl md:rounded-t-none md:rounded-r-xl"
          alt="project"
          src={image.fields.file.url}
        />
        <Spotlight className="flex flex-col px-4 py-2 gap-y-2 w-full rounded-b-xl md:rounded-b-none md:rounded-l-xl">
          <ProjectHeader title={title} repoLink={repoLink} />
          <p className="text-sm">{description}</p>
          <div className="flex flex-row flex-wrap gap-2 py-3 text-sm align-end">
            {tech.map((element, index) => {
              return (
                <span
                  key={index}
                  className="text-xxs border border-foreground p-2"
                >
                  {element}
                </span>
              );
            })}
          </div>
        </Spotlight>
      </div>
    </div>
  );
};
