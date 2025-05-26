import type { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export const Link = (
  {
    children,
    href,
    target = "_blank",
    tooltip,
  }: {
    children: ReactNode;
    href: string;
    target?: string;
    tooltip?: string;
  }
) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <a
            rel="noreferrer"
            target={target}
            href={href}
            className="w-min text-muted-foreground hover:text-foreground transition-colors"
          >
            {children}
          </a>
        </TooltipTrigger>
        {tooltip && (
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};
