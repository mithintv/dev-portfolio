import Button from "../ui/Button";

export default function Resume() {
	return (
		<a target="_blank" rel="noreferrer" href={import.meta.env.VITE_RESUME_LINK}>
			<Button size="md">
				DOWNLOAD RESUME <i className="fa-solid fa-file-arrow-down"></i>
			</Button>
		</a>
	);
}
