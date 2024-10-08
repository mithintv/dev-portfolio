import classes from "./Portfolio.module.scss";

import Card from "../ui/Card";
import Header from "../ui/Header";

const Portfolio = () => {
	return (
		<section id="portfolio">
			<div>
				<Header>PORTFOLIO</Header>
				<ul className={classes.content}>
					<Card
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
						git="https://github.com/mithintv/demographix"
						link="http://demographix.mithin.com/"
					/>
					<Card
						img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fhorse-race_gif.gif?alt=media"
						title="Horse Race"
						description="Horse Race is a web implementation of a drinking game usually played with a deck of cards. Players bet on up to four horses (represented as aces of a suit) and the horses themselves move across the 'field' based on cards that are drawn from the deck."
						tech={["Emotion", "Next.js", "React.js", "Typescript", "Vercel"]}
						git="https://github.com/mithintv/horse-race"
						link="https://horse-race-mu.vercel.app/"
					/>
					<Card
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
						git="https://github.com/mithintv/film-portfolio"
						link="https://mithin.tv"
					/>
					<Card
						img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fono_1.gif?alt=media"
						title="One On One"
						description="One On One is a slack bot that randomly pairs up individuals within a channel for one-on-one's to help them get to know each other."
						tech={["Jest", "MongoDB", "Node.js", "Slack API"]}
						git="https://github.com/mithintv/one-on-one"
						link="https://slack.com/apps/A04DXH6FR8U-one-on-one"
					/>
					{/* <Card
						img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fwordle-tracker-screen.png?alt=media"
						title="Wordle Leaderboard"
						description="A slackbot that keeps track of daily Wordle scores hooked to a frontend that sorts players in a leaderboard with additional stats."
						tech={[
							"Bulma",
							"Express.js",
							"MongoDB",
							"Node.js",
							"React.js",
							"Render",
							"Slack API",
						]}
						git="https://github.com/mithintv/wordle-tracker"
						link="https://wordle-tracker.netlify.app/#all"
					/> */}
					{/* <Card
            img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fportfolio-screen.png?alt=media"
            title="Portfolio"
            description="The latest iteration of my portfolio. This is a single-page built with React, CSS3/Sass and Firebase hosted on Netlify."
            tech={["CSS3/Sass", "Firebase", "Netlify", "React"]}
            git="https://github.com/mithintv/portfolio-react"
            link="https://portfolio-react-2022-v1.netlify.app/"
          /> */}
					{/* <Card
						img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Ffood-order-app-screen.png?alt=media"
						title="Food Order App"
						description="A front-end proof of concept with a dynamic cart for a hypothetical food ordering app built with React and Firebase."
						tech={["CSS3", "Firebase", "Netlify", "React.js"]}
						git="https://github.com/mithintv/food-order-app"
						link="https://papaya-lily-f123eb.netlify.app/"
					/> */}
					{/* <Card
            img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fkeeper-app-screen.png?alt=media"
            title="Keeper"
            description="A clone of Google Keep. Create, update, and delete notes!"
            tech={["CSS3", "Netlify", "React.js"]}
            git="https://github.com/mithintv/keeper-app"
            link="https://keeper-app-project.netlify.app/"
          /> */}
					{/* <Card
            img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fyelp-camp-screen.png?alt=media"
            title="Yelp Camp"
            description="A Yelp-like application for campgrounds. Create an account and add campgrounds you have visited as well as review campgrounds that other users have added."
            tech={[
              "Bootstrap",
              "Cyclic",
              "EJS",
              "Express.js",
              "Helmet",
              "Node.js",
              "MongoDB",
              "Mongoose",
              "Passport.js",
            ]}
            git="https://github.com/mithintv/yelp-camp"
            link="https://blush-nightingale-wear.cyclic.app/.netlify/functions/app/campgrounds"
          /> */}
					{/* <Card
            img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fsimon-game-screen.png?alt=media"
            title="Simon Game"
            description="This is a web implementation of Simon, an electronic game of short-term memory skill originally released in 1978 built with vanilla JavaScript and CSS."
            tech={["CSS", "GitPages", "HTML5", "JavaScript"]}
            git="https://github.com/mithintv/simon-game"
            link="https://mithintv.github.io/simon-game/"
          /> */}
				</ul>
			</div>
		</section>
	);
};

export default Portfolio;
