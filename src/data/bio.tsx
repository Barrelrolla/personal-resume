import ubiLogo from "../assets/ubisoft_logo.avif";
import ubiLogo2 from "../assets/ubisoft_logo_2.jpg";
import melonLogo from "../assets/melon_logo.svg";
import telerikLogo from "../assets/telerik_logo.png";
import ibsLogo from "../assets/ibs_logo.webp";
import libraryLogo from "../assets/react_components_library_logo.png";
import resumeLogo from "../assets/resume_logo.jpg";
import resumeLogoDark from "../assets/resume_logo_dark.jpg";
import nextLogo from "../assets/next_logo.svg";
import udemyLogo from "../assets/udemy-logo.svg";

import {
  GitHubIcon,
  LetterIcon,
  LinkedInIcon,
  PhoneIcon,
} from "@barrelrolla/react-components-library";

export const contacts = [
  {
    title: "Github",
    url: "https://github.com/barrelrolla",
    text: "github.com/barrelrolla",
    icon: GitHubIcon,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/julian-teofilov/",
    text: "linkedin.com/in/julian-teofilov/",
    icon: LinkedInIcon,
  },
  {
    title: "Email",
    url: "mailto:julian.teofilov@gmail.com",
    text: "julian.teofilov@gmail.com",
    icon: LetterIcon,
  },
  {
    title: "Phone",
    url: "tel:+359888971167",
    text: "+359 888 971167",
    icon: PhoneIcon,
  },
];

export type BioCategory = "experience" | "education" | "projects";

export type BioDataType = {
  id: string;
  category: BioCategory;
  img: string;
  imgDark?: string;
  title: string;
  specialty?: string;
  description: string;
  fullInfo: string;
  dates?: string;
  website?: string;
  github?: string;
  imgClass?: string;
  bgColor?: string;
};

export const experienceData: BioDataType[] = [
  {
    id: "ubisoft",
    category: "experience",
    img: ubiLogo,
    title: "Ubisoft",
    specialty: "UI Programmer",
    description:
      "Worked on multiple AAA projects like The <i>Division 2, Assassin's Creed: Mirage, Assassin's Creed: Shadows</i> and others.",
    fullInfo:
      "Worked on multiple AAA video game titles, including <i>The Division 2, Assassin's Creed Valhalla: Dawn of Ragnarok, Assassin's Creed Mirage, Assassin's Creed Shadows</i> and others. Developed, maintained, and optimized a wide range of HUD elements and menus across several projects.<ol><li>Implemented the in-game currency store menu page for The Division 2.</li><li>Implemented numerous HUD components and menu pages in Assassin's Creed titles, collaborating closely with designers and gameplay programmers.</li><li>Regularly optimized and debugged UI systems, delivering high-quality features under tight deadlines.</li><li>Used tools like Jira and Confluence for task management and documentation, and Perforce for version control.</li><li>Adapted quickly to the unique requirements and constraints of each project, consistently delivering results.</li></ol>",
    dates: "April 2018 - Present",
    website: "https://www.ubisoft.com/",
  },
  {
    id: "melontech",
    category: "experience",
    img: melonLogo,
    title: "Melontech",
    specialty: "Front-end developer",
    description:
      "Worked on a variety of projects, including a web-based game using Phaser and TypeScript, as well as a front-end web application built with React.",
    fullInfo:
      "Worked on a variety of projects, including a web-based game using Phaser and TypeScript, as well as a front-end web application built with React. Focused on creating reusable components and developing libraries for cross-project use.<ol><li>Developed and maintained a web-based game using Phaser and TypeScript, implementing interactive UI elements and optimizing performance.</li><li>Built scalable and maintainable front-end solutions using React, contributing to high-quality web applications with a focus on reusability and modular design.</li><li>Adapted quickly to different frameworks and JavaScript variations, demonstrating a strong ability to learn new technologies and deliver results on time.</li><li>Utilized REST APIs for seamless data integration and unit testing to ensure quality.</li><li>Used Jira for task management, Webpack for module bundling, and Git for version control, ensuring a smooth development workflow.</ol>",
    dates: "April 2017 - April 2018",
    website: "https://oldmelon.melontech.com/",
    bgColor: "#183f57",
    imgClass:
      "scale-50 object-contain group-hover:scale-55 group-focus-visible:scale-55 transition",
  },
  {
    id: "ubisoft-tester",
    category: "experience",
    img: ubiLogo2,
    title: "Ubisoft",
    specialty: "Development tester",
    description:
      "Worked on projects from early development stages, providing feedback on design documents and newly implemented features.",
    fullInfo:
      "Worked on projects from early development stages, providing feedback on design documents and newly implemented features. Helped ensuring build stability and supporting milestone deliveries.<ol><li>Reviewed design documentation and early prototypes, offering feedback to improve gameplay and usability.</li><li>Tested and validated new features throughout development, identifying issues and collaborating closely with developers to ensure quality.</li><li>Helped securing working builds for internal reviews and major milestones, often under tight deadlines.</li><li>As one of the studio’s first development testers, contributed significantly to establishing workflows and processes that improved build stability and streamlined integration.</li></ol>",
    dates: "March 2012 - March 2017",
    website: "https://www.ubisoft.com/",
  },
];

export const educationData: BioDataType[] = [
  {
    id: "udemy",
    category: "education",
    img: udemyLogo,
    title: "Udemy",
    description:
      "Completed a variety of courses to expand and refine technical skills, including React, Tailwind and Unity 3D.",
    fullInfo:
      "Completed a variety of courses to expand and refine technical skills, including:<ol><li>React - The Complete Guide 2025 (incl. Next.js, Redux)</li><li>Tailwind CSS From Scratch | Learn By Building Projects</li><li>Complete C# Unity Game Developer 3D</li></ol>",
    imgClass:
      "w-full h-full scale-50 object-contain group-hover:scale-55 group-focus-visible:scale-55 transition py-10",
    website: "https://www.udemy.com/",
    bgColor: "#fff",
  },
  {
    id: "telerik",
    category: "education",
    img: telerikLogo,
    title: "Telerik Academy",
    specialty: "Web and mobile development",
    description:
      "Completed an intensive one-year program covering a wide range of development disciplines.",
    fullInfo:
      "Completed an intensive one-year program covering a wide range of development disciplines, including:<ol><li>Programming fundamentals using C#</li><li>Front-end web development with JavaScript</li><li>Back-end development with Node.js</li><li>Mobile applications for iOS and Android</li><li>Database design and management</li></ol>Graduated among the highest-performing students in the group.",
    dates: "2016 - 2017",
    imgClass:
      "scale-90 object-contain group-hover:scale-100 group-focus-visible:scale-100 transition py-14",
    website: "https://www.telerikacademy.com/",
    bgColor: "#fff",
  },
  {
    id: "ibs",
    category: "education",
    img: ibsLogo,
    title: "International Business School of Bulgaria",
    description:
      "Gained foundational knowledge in international economics, business and marketing.",
    fullInfo:
      "Gained foundational knowledge in international economics, business and marketing.",
    specialty: "Bachelor's degree in International Business Relations",
    dates: "2010 - 2014",
    imgClass:
      "scale-90 object-contain group-hover:scale-100 group-focus-visible:scale-100 transition py-14",
    website: "https://ibsedu.bg/",
    bgColor: "#fff",
  },
];

export const projectsData: BioDataType[] = [
  {
    id: "next.js-project",
    category: "projects",
    img: nextLogo,
    imgClass:
      "scale-50 object-contain group-hover:scale-55 group-focus-visible:scale-55 transition py-20",
    bgColor: "#fff",
    title: "NextJS project",
    description:
      "A full-stack web application built with NextJS. Still under development.",
    fullInfo:
      "A full-stack web application built with NextJS.<ol><li>Focused on implementing complete Create, Read, Update, and Delete functionality</li><li>Implements user authentication.</li><li>Designed to explore the features of NextJS, including API routes and server-side rendering</li><li>Still under active development and not yet available",
    dates: "under development",
  },
  {
    id: "react-components-library",
    category: "projects",
    img: libraryLogo,
    bgColor: "#1b1c1d",
    imgClass:
      "object-cover transition scale-90 group-hover:scale-100 group-focus-visible:scale-100",
    title: "React components library",
    description:
      "A highly customizable React component library, designed for reusability and rapid development for personal use.",
    fullInfo:
      "A highly customizable React component library, designed for reusability and rapid development.<ol><li>Includes a growing collection of UI components styled with Tailwind CSS</li><li>Features a custom Tailwind plugin</li><li>Continuously updated with new components</li></ol>",
    website: "https://barrelrolla.github.io/react-components-library/",
    github: "https://github.com/Barrelrolla/react-components-library",
  },
  {
    id: "personal-resume",
    category: "projects",
    img: resumeLogoDark,
    imgDark: resumeLogo,
    title: "Personal resume",
    description:
      "A personal resume site showcasing projects, experience, and education. Built using my React component library.",
    fullInfo:
      "A personal resume site showcasing projects, experience, and education.<ol><li>Built using my React component library</li><li>Utilizes React Router for client-side navigation and Framer Motion for smooth animations</li><li>Designed with responsiveness and performance in mind</li></ol>",
    website: "https://julian-teofilov.vercel.app/",
    github: "https://github.com/Barrelrolla/personal-resume",
  },
];
