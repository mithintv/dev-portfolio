import type { IProject } from "@/components/ui/project-card/i-project";
import * as contentful from "contentful";

const VITE_CONTENTFUL_SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const VITE_CONTENTFUL_ACCESS_TOKEN = import.meta.env
  .VITE_CONTENTFUL_ACCESS_TOKEN;

const client = contentful.createClient({
  space: VITE_CONTENTFUL_SPACE_ID,
  accessToken: VITE_CONTENTFUL_ACCESS_TOKEN,
});

interface IContentfulProject {
  fields: IProject;
  contentTypeId: string;
}

export const getProjects = async () => {
  const res = await client.getEntries<IContentfulProject>({
    content_type: "project",
    "fields.active[in]": "true",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    order: "-fields.order",
  });
  return res.items;
};
