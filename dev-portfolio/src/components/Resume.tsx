import { resumeLink } from "../constants";
import Button from "../interface/Button";

export default function Resume() {
	return (
		<a target="_blank" rel="noreferrer" href={resumeLink}>
			<Button size="md">
				DOWNLOAD RESUME <i className="fa-solid fa-file-arrow-down"></i>
			</Button>
		</a>
	);
}
