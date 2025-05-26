import { Github } from "lucide-react";

export const ProjectHeader = (
  { title, repoLink }: { title: string; repoLink: string }
) => {
  return (
    <div className="flex justify-between items-center py-2">
      <h4 className="text-xl font-bold">{title}</h4>
      <div className="flex flex-row items-center gap-x-2">
        <a
          aria-label="github link"
          rel="noreferrer"
          target="_blank"
          href={repoLink}
        >
          <Github
            size={18}
            className="hover:text-foreground/75 transition-colors"
          />
        </a>
      </div>
    </div>
  );
};
