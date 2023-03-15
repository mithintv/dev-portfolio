import Button from "../interface/Button";
import { resumeLink } from "../constants";

export default function Resume() {
  return (
    <a target="_blank" rel="noreferrer" href={resumeLink}>
      <Button size="md">
        DOWNLOAD RESUME <i className="fa-solid fa-file-arrow-down"></i>
      </Button>
    </a>
  );
}
