import { Spotlight } from "@/components/spotlight";
import { cn } from "@/lib/utils";
import { ProjectHeader } from "./project-header";

export const ProjectCard = (
  {
    className,
    title,
    description,
    img,
    demoLink,
    repoLink,
    tech,
  }: {
    className?: string;
    title: string;
    description: string;
    img: string;
    demoLink: string;
    repoLink: string;
    tech: string[];
  }
) => {
  return (
    <a
      className="hover:scale-105 duration-300"
      aria-label="project link"
      rel="noreferrer"
      target="_blank"
      href={demoLink}
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
          src={img}
        />
        <Spotlight className="flex flex-col px-4 py-2 gap-y-2 w-full">
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
    </a>
  );
};
