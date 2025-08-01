import { Github } from "lucide-react";

export const ProjectHeader = (
  { title, repoLink }: { title: string; repoLink: string }
) => {
  return (
    <div className="flex justify-between items-center py-2">
      <h4 className="text-xl font-bold">{title}</h4>
      <div className="flex flex-row items-center gap-x-2">
        <button
          className="cursor-pointer hover:text-foreground/75 transition-colors"
          onClick={() => window.open(repoLink, "_blank", "noopener,noreferrer")}
        >
          <Github size={18} />
        </button>
      </div>
    </div>
  );
};
