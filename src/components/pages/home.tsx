import { FolderOpen, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "../ui/link";

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="flex justify-center pt-56 pb-56 w-[350px] px-2 md:w-[768px] md:px-24 animate-appear"
      >
        <div className="flex flex-col gap-y-4 justify-center">
          <h1 className="text-5xl font-bold px-1">Mithin Thomas</h1>

          <h2 className="px-1 leading-6 text-xl font-semibold">
            I'm a software engineer with an enthusiasm for compassionate and
            empathetic ideas that can have real impact because I believe...
          </h2>

          <blockquote className="px-1 text-sm font-light italic">
            We have become accustomed to understanding the social world in terms
            of “forces,” “pressures,” “processes,” and “developments” often
            forgetting that these terms are the statistical summaries of the
            deeds of millions of individual men and women who act on their
            beliefs in pursuit of their desires.
            <span className="text-muted-foreground">
              {" "}
              - Steven Pinker,
            </span>{" "}
            <span className="italic font-thin text-muted-foreground">
              The Sense of Style: The Thinking Person's Guide to Writing in the
              21st Century
            </span>
          </blockquote>

          <div className="flex flex-row gap-4 px-1">
            <Link
              href="https://www.linkedin.com/in/mithin-thomas/"
              tooltip="LinkedIn"
            >
              <Linkedin />
            </Link>
            <Link href="https://www.github.com/mithintv/" tooltip="GitHub">
              <Github />
            </Link>
            <Link href="#projects" target="_self" tooltip="Projects">
              <FolderOpen />
            </Link>
            <Link
              href="mailto:mithingthomas@gmail.com"
              target="_self"
              tooltip="Email"
            >
              <Mail />
            </Link>
          </div>
          <span className="text-sm text-muted-foreground px-1">
            New York, NY
          </span>

          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <img
              className="w-[350px] md:w-[285px] bg-background"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-b93e3.appspot.com/o/github%2Fgifs%2Foverview.svg?alt=media"
            />
            <img
              className="w-[350px] md:w-[285px] bg-background"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-b93e3.appspot.com/o/github%2Fgifs%2Flanguages.svg?alt=media"
            />
          </div>
        </div>
      </section>
    </>
  );
};
