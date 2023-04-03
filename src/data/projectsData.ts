import jobnomics from "../../public/projects/jobnomics.jpg";
import ladderDemo from "../../public/projects/ladder-demo.gif";
import schedulerDemo from "../../public/projects/scheduler2.gif";
import { FaMobileAlt, FaDesktop } from "react-icons/fa";

const icon = [
  { label: FaDesktop, alt: "Desktop Compatible" },
  { label: FaMobileAlt, alt: "Mobile Compatible" },
];

export const projects = [
  {
    id: 1,
    icon,
    title: "Ladder Game for Indecisive People",
    skills: ["Figma", "React.js", "CSS Module"],
    description:
      "Assigning roles or deciding what to eat can be a daunting task for indecisive people. Simply input the roles and choose an animal. Can't choose? Let the ladder pick for you.",
    technology: [
      "Technology: Howler, Context API, React hooks (useState, useEffect, useHistory, useRef, useContext), localStorage, Canvas API",
      "Built ladder algorithm from scratch",
      "Dynamic website based on the number of players",
    ],
    image: {
      src: ladderDemo,
      alt: "Ladder game demo thumbnail",
    },
    links: {
      website: "https://adorable-stroopwafel-9cc3ff.netlify.app/",
      github: "https://github.com/esther-sh-choi/ladder-game",
    },
  },
  {
    id: 2,
    icon,
    title: "Interview Scheduler",
    skills: ["React", "Web Socket", "useReducer"],
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            nemo, rem tempora ea deleniti tempore inventore id numquam est
            nesciunt at deserunt? Rem eaque eveniet, iure velit veritatis culpa
            quis.`,
    image: {
      src: schedulerDemo,
      alt: "Interview Scheduler",
    },
    links: {
      website: "",
      github: "",
    },
  },
];

export const featured = [
  {
    id: 1,
    icon,
    title: "Jobnomics: AI-Powered Job Application Tracking Tool",
    skills: [
      "React",
      "Node.js",
      "Express",
      "Redux Toolkit",
      "RTK Query",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Auth0 - OAuth2",
      "Puppeteer",
      "React Beautiful Dnd",
      "Material UI",
      "AWS SES",
      "Cron",
      "OpenAI",
      "Github Actions",
      "Railway",
      "Netlify",
    ],
    description:
      "Do you ever get tired of managing hundreds of job applications? It's easy to forget when and where you applied when you're applying to so many jobs. Jobnomics helps you organize your job applications and it comes with loads of other cools features to help you with your job search. All you need to do is copy and paste the job posting link, and we provide you with the summary of job description and sample interview questions and answers. Additional features include job filter/search/sorting, note-taking, and email reminders for interview dates.",
    technology: [
      "Secure with Auth0 (OAuth 2) with bearer token rotation and integrated Github Actions for continuous deployment.",
      "Optimistic update with RTK Query to allow to smooth user experience when dragging and dropping job cards.",
    ],
    image: {
      src: jobnomics,
      alt: "jobnomics thumbnail",
    },
    links: {
      website: "https://www.jobnomics.net",
      githubClient: "https://github.com/tienviet10/jobnomics",
      github: "https://github.com/esther-sh-choi/jobnomics-api",
    },
  },
];

const others = [
  {
    icon,
    id: 3,
    title: "Foodify - Playlist of Restaurants",
    skills: ["Figma", "React.js", "CSS Module", "Node.js"],
    description:
      "We love to share our favourite songs through a playlist. Why not have a playlist for our favorite restaurants? Introducing the Eatlist. Share your go-to restaurants with the world!",
    technology: [
      "Technology: Google Places API, React hooks (useHistory, useRef, useContext), Redux",
      "CRUD website",
      "User authentication using Node.js",
    ],
    image: {
      src: ladderDemo,
      alt: "Foodify demo thumbnail",
    },
    links: {
      website: "https://food-pickup-order.herokuapp.com/",
      github: "",
    },
  },
];
