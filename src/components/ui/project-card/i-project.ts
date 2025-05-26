export interface IProject {
  title: string;
  description: string;
  demoLink: string;
  repoLink: string;
  tech: string[];
  image: {
    fields: {
      title: string;
      description: string;
      file: {
        contentType: string;
        fileName: string;
        url: string;
        details: {
          size: number;
          image: {
            width: number;
            height: number;
          };
        };
      };
    };
  };
}
