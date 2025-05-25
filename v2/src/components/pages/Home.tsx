import { FolderOpen } from "lucide-react";
import { Button } from "../ui/button";

export const Home = () => {
	return (
		<>
			<section id="home" className="flex justify-center py-28 px-24 w-[768px]">
				<div className="flex flex-col justify-center">
					<h3 className="text-xl text-muted-foreground">HELLO, MY NAME IS</h3>
					<h1 className="text-5xl font-bold">MITHIN THOMAS</h1>
					<blockquote className="py-4 text-sm font-light">
						"We have become accustomed to understanding the social world in
						terms of “forces,” “pressures,” “processes,” and “developments”
						often forgetting that these terms are the statistical summaries of
						the deeds of millions of individual men and women who act on their
						beliefs in pursuit of their desires."
						<span className="text-muted-foreground">
							{" "}
							- Steven Pinker,
						</span>{" "}
						<span className="italic font-thin text-muted-foreground">
							The Sense of Style: The Thinking Person's Guide to Writing in the
							21st Century
						</span>
					</blockquote>
					<a href="#portfolio" className="pt-2">
						<Button className="w-[135px] h-[48px] pointer">
							<FolderOpen />
							MY WORK
						</Button>
					</a>
				</div>
			</section>
		</>
	);
};
