import React from "react";

import Button from "../interface/Button";

import classes from "./Home.module.scss";

const Header = () => {
	return (
		<React.Fragment>
			<div id="home"></div>
			<section>
				<div className={classes.home}>
					<div className={classes.banner}>
						<h3 className={classes.bannerLead}>HELLO, MY NAME IS</h3>
						<h1 className={classes.bannerTitle}>MITHIN THOMAS</h1>
						<blockquote className={classes.bannerQuote}>
							"We have become accustomed to understanding the social world in
							terms of “forces,” “pressures,” “processes,” and “developments”
							often forgetting that these terms are the statistical summaries of
							the deeds of millions of individual men and women who act on their
							beliefs in pursuit of their desires."
							<span> - Steven Pinker,</span>{" "}
							<em>
								The Sense of Style: The Thinking Person's Guide to Writing in
								the 21st Century
							</em>
						</blockquote>
						<div className={classes.buttonWrapper}>
							<a href="#portfolio">
								<Button>
									MY WORK <i className="fa-solid fa-briefcase"></i>
								</Button>
							</a>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Header;
