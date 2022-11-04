import emoji from "react-easy-emoji";

export const greetings = {
	name: "Suyog Chaulagain",
	title: "Hi all, I'm Suyog",
	description:
		"The computer was born to solve problems that did not exist before. Hi, my name is Suyog Chaulagain. The subject of my passion are Web development, Machine Learning and Blockchain.",
	resumeLink:
		"https://www.suyogchaulagain.com.np",
};

export const openSource = {
	githubUserName: "seaten779",
};

export const contact = {};

export const socialLinks = {
	url: "https://suyogchaulagain.com.np/",
	linkedin: "https://www.linkedin.com/in/seaten-sea-aa9a26251/",
	github: "https://github.com/seaten779",
	facebook: "https://www.facebook.com/suyog.chaulagain",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Uniglobe College",
		subHeader: "Science",
		duration: "September 2020 - June 2022",
		desc: "Completed Highschool with Science as a major with 3.65 GPA",
		grade: "Grade A+",
		descBullets: [
			"Rank at top 10% of the school",
		],
	},
];

export const experience = [
	{
		role: "Web Developer Intern",
		company: "Everest Walk Group ",
		companylogo: "/img/everestwalk2.jpg",
		date: "Jun 2022 – Current",
		desc: "Created a machine learning application which detects diseases in plants which contributes to a large scale project in the company involving agriculture. Providing farmers with easy access to an application which easily helps them identify diseases in plants.",
	},
	{
		role: "Research Article",
		company: "Relativity",
		companylogo: "/img/einstien.jpg",
		// date: "Jan 2022 – Mar 2022",
		desc: "Wrote a research article about general relativity discovered by Einstien involving various applications and history about the force of gravitation.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Developer",
		company: "Delta OS",
		companylogo: "/img/deltaos.png",
		date: "Sept 2021 - June 2022",
		desc: "Delta OS is an Arch based distribution created for developers and people intrested in Arch Linux. It is created by the Delta OS team which I was a part of. I was responsible for the design of the operating system.",
	},
	{
		role: "Blockchain Developer",
		company: "Merchant Plus",
		companylogo: "/img/merchant.jpg",
		date: "August 2021",
		desc: "Created a physical blockchain payment system using embedded system and ethereum.",
	},
];

export const projects = [
	{
		name: "Portfolio",
		desc: "My personal portfolio created using react and Next.js",
		github: "https://github.com/seaten779/PersonalPortfolio",
	},
	{
		name: "Dark",
		desc: "A backend framework created by my team which can be used to create APIs and websites",
		github: "https://github.com/apurbadh/Dark",
	},
	{
		name: "Personal Voice Assistant",
		desc: "A python app which can understand what you say and automate accordingly",
		github: "https://github.com/1hanzla100/django-react-forum",
	},
	{
		name: "GoodLeaf",
		desc: "A website created for farmers which can identifies diseases in plants using machine learning",
		github: "https://github.com/apurbadh/Goodleaf",
	},
];

export const feedbacks = [
];

export const seoData = {
	title: "Suyog Chaulagain",
	description:
		"A passionate Full Stack Web Developer and Blockchain Developer.",
	author: "Suyog Chaulagain",
	image: "https://avatars.githubusercontent.com/u/117005561?s=400&u=fd220ecbf3ce1c9217039344ff13aef71bbfa1d5&v=4",
	url: "https://suyogchaulagain.netlify.app/",
	keywords: [
		"Suyog Chaulagain",
		"Suyog Chaulagain",
		"Suyog Chaulagain",
		"Suyog Chaulagain",
	],
}
