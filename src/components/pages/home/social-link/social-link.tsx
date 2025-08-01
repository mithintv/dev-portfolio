import { Github, Linkedin } from "lucide-react";

import { Link } from "@/components/ui/link";

const socialIconMapping = {
  Linkedin: <Linkedin />,
  Github: <Github />,
};

export interface ISocial {
  title: keyof typeof socialIconMapping;
  link: string;
}

export const SocialLink = (
  { social: { title, link } }: { social: ISocial }
) => {
  return (
    <Link href={link} tooltip={title}>
      {socialIconMapping[title]}
    </Link>
  );
};
