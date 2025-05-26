import { Header } from "../ui/header";
import { ProjectCard } from "../ui/project-card/project-card";

export const Projects = () => {
  return (
    <section id="projects" className="pt-24">
      <Header>Projects</Header>
      <div className="flex flex-row flex-wrap justify-center gap-y-8 w-[350px] md:w-[725px] lg:w-[1000px]">
        <ProjectCard
          img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fdemographix_gif.gif?alt=media"
          title="Demographix"
          description="Demographix is a data visualization tool designed to showcase demographics of on-screen cast members in popular Hollywood movies."
          tech={[
            "Beautiful Soup",
            "Flask",
            "Material UI",
            "React.js",
            "OpenAI API",
            "PaLM API",
            "PostgreSQL",
            "Python",
            "SQLAlchemy",
          ]}
          repoLink="https://github.com/mithintv/demographix"
          demoLink="http://demographix.mithin.com/"
        />
        <ProjectCard
          img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fhorse-race_gif.gif?alt=media"
          title="Horse Race"
          description="Horse Race is a web implementation of a drinking game usually played with a deck of cards. Players bet on up to four horses (represented as aces of a suit) and the horses themselves move across the 'field' based on cards that are drawn from the deck."
          tech={["Emotion", "Next.js", "React.js", "Typescript", "Vercel"]}
          repoLink="https://github.com/mithintv/horse-race"
          demoLink="https://horse-race-mu.vercel.app/"
        />
        <ProjectCard
          img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Ffilm-portfolio-screenshot.png?alt=media"
          title="Film Portfolio"
          description="A web portfolio of my film and commercial work. Working on this portfolio was the initial inspiration and catalyst to my journey as a developer and software engineer."
          tech={[
            "Emotion",
            "MySQL",
            "Next.js",
            "Sequelize",
            "React.js",
            "Typescript",
            "Vercel",
          ]}
          repoLink="https://github.com/mithintv/film-portfolio"
          demoLink="https://mithin.tv"
        />
        <ProjectCard
          img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fono_1.gif?alt=media"
          title="One On One"
          description="One On One is a slack bot that randomly pairs up individuals within a channel for one-on-one's to help them get to know each other."
          tech={["Jest", "MongoDB", "Node.js", "Slack API"]}
          repoLink="https://github.com/mithintv/one-on-one"
          demoLink="https://slack.com/apps/A04DXH6FR8U-one-on-one"
        />
      </div>
    </section>
  );
};
