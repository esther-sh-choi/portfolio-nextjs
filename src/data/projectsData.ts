import { FaMobileAlt, FaDesktop } from "react-icons/fa";

const jobnomicsGif = "/projects/dragdrop_dropdown_date.gif";
const foodPickup = "/projects/food-pickup.png";
const foodPickupGif = "/projects/foodPickupGif.gif";
const scheduler = "/projects/interview-scheduler.png";
const jobnomics = "/projects/jobnomics.jpg";
const jollymessages = "/projects/jollymessages.png";
const jollymessagesGif = "/projects/jollymessagesGif.gif";
const ladderGif = "/projects/ladder-demo.gif";
const ladder = "/projects/ladder.png";
const schedulerGif = "/projects/scheduler2.gif";

const icon = [
  { label: FaDesktop, alt: "Desktop Compatible" },
  { label: FaMobileAlt, alt: "Mobile Compatible" },
];

export const projects = [
  {
    id: 2,
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
      gif: jobnomicsGif,
      alt: "jobnomics thumbnail",
    },
    links: {
      website: "https://www.jobnomics.net",
      githubClient: "https://github.com/tienviet10/jobnomics",
      github: "https://github.com/esther-sh-choi/jobnomics-api",
    },
  },
  {
    id: 1,
    icon,
    title: "Restaurant Food Pickup App (SMS notification)",
    skills: [
      "JQuery",
      "Twilio",
      "Express",
      "Node.js",
      "PostgreSQL",
      "Materialize CSS",
      "Heroku",
    ],
    description:
      "This app provides service for two types of users: customer and restaurant owner. The customer page contains a menu and a cart to keep track of their order. They are able to see the status of their order real time due to polling. On the restaurant admin page, when they order from customers, they are able to see the order cards. They have to option to set the preparation time, edit the preparation time, cancel order, notify customer that order is ready, and complete the order once picked up. All of this is done notified to the customers in the status page and as SMS text to the phone number entered during checkout. *To view the restaurant orders page, please login with username <strong>admin</strong> and password <strong>admin</strong>.",
    technology: [
      "Utilized Jira agile method to plan and delegate tasks for heightened efficiency",
      "Provided peer mentorship to peers",
      "Created user authentication and REST API functionality for restaurant staff to manage orders, including a real-time countdown timer for order preparation",
      "Built a food ordering app with real-time status updates to customer and restaurant via app and SMS (i.e., Twilio).",
    ],
    image: {
      src: foodPickup,
      gif: foodPickupGif,
      alt: "Food Pickup Order",
    },
    links: {
      website: "https://food-pickup-order.herokuapp.com/",
      github: "https://github.com/esther-sh-choi/food-pickup-order",
    },
  },

  {
    id: 3,
    icon,
    title: "Jolly Messages: Stuff My Stocking (Client-side)",
    skills: [
      "React",
      "TypeScript",
      "Material UI",
      "Jira",
      "Zeplin",
      "Confluence",
    ],
    description:
      "Created a user-authenticated app for sharing virtual fireplaces via unique links. Both users and visitors can hang stockings on other's fireplaces but must be registered to create their own fireplace.",
    technology: [
      "Implemented a countdown until Christmas midnight and prevented stockings from being opened before then.",
      "•Collaborated with a backend developer and 2 designers as the main frontend developer of the team - Jira & Zeplin.",
    ],
    image: {
      src: jollymessages,
      gif: jollymessagesGif,
      alt: "jolly messages thumbnail",
    },
    links: {
      website: "https://jollymessage.com/",
      github: "https://github.com/esther-sh-choi/stuff-stocking-frontend",
    },
  },
  {
    id: 4,
    icon,
    title: "Interview Scheduler",
    skills: ["React", "Web Socket", "useReducer"],
    description:
      "Using an available database, I built a client-side website using React and WebSocket according to what the API has to offer. Many times, using external API means, we cannot controll the type of data structure we receive. I learned to use these data structures and restructure it for increased performance.",
    technology: [
      "Created the client facing website and connected it with the existing scheduler REST API.",
      "Real time update to website across all devices and users with the use of WebSocket.",
      "Optimized state management through React built-in useReducer hook and other custom hooks for enhanced performance and modularity.",
    ],
    image: {
      src: scheduler,
      gif: schedulerGif,
      alt: "Interview Scheduler",
    },
    links: {
      website: "https://stellular-genie-2bbdd4.netlify.app/",
      github: "https://github.com/esther-sh-choi/interview-scheduler",
    },
  },
  {
    id: 5,
    icon,
    title: "Ladder Game for Indecisive People",
    skills: [
      "Figma",
      "React.js",
      "CSS Module",
      "Canvas",
      "Context API",
      "Howler",
    ],
    description:
      "Assigning roles or deciding what to eat can be a daunting task for indecisive people. Choose 2-6 players. Each player can pick an animal and write down the options according to the number of players. The ladder algorithm will randomly generate a ladder each game and will match the animal with an option. Watch a cool animation of color-codes paths leading to the option as you anticipate which option you get matched to.",
    technology: [
      "Learned basic React hooks (useState, useEffect, useHistory, useRef, useContext)",
      "Learned to use localstorage",
      "Background music, dynamic ladder game based on number of players chosen",
    ],
    image: {
      src: ladder,
      gif: ladderGif,
      alt: "Ladder game demo thumbnail",
    },
    links: {
      website: "https://adorable-stroopwafel-9cc3ff.netlify.app/",
      github: "https://github.com/esther-sh-choi/ladder-game",
    },
  },
];
