import ubiLogo from "../assets/ubisoft_logo.avif";
import melonLogo from "../assets/melon_logo.svg";
import telerikLogo from "../assets/telerik_logo.png";
import ibsLogo from "../assets/ibs_logo.webp";
import libraryLogo from "../assets/react_components_library_logo.png";
import resumeLogo from "../assets/resume_logo.png";
import nextLogo from "../assets/next_logo.svg";

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
  img: string;
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
    img: ubiLogo,
    title: "Ubisoft",
    specialty: "UI Programmer",
    description:
      "I contributed to multiple AAA projects like The Division 2, Assassin's Creed: Mirage, Assassin's Creed: Shadows and others.",
    fullInfo:
      "As a UI Programmer in Ubisoft, I have worked on multiple AAA video games, such as The Division 2, Assassin's Creed Valhalla: Dawn of Ragnarok, Assassin's Creed Mirage and Assassin's Creed Shadows. I have developed different HUD elements and menu pages in the game, and maintained others. In The Division 2 I was responsible for the in-game currency store while in Assassin's Creed I have worked on many HUD elements in different projects, as well as several menu pages. I have used tools like Jira, Confluence, Perfoce and many others to help with organizing tasks, documentation and source control.\nEvery project I have worked on comes with it's own set of challenges, but I am experienced in optimizing and debugging code, finding issues and delivering projects with a tight deadline.",
    dates: "April 2018 - Present",
    website: "https://www.ubisoft.com/",
  },
  {
    id: "melontech",
    img: melonLogo,
    title: "Melontech",
    specialty: "Front-end developer",
    description:
      "I worked on front-end applications in different frameworks like Phaser and React.",
    fullInfo:
      "As a front-end developer I have worked on several different projects , a web-based game using Phaser and TypeScript, a couple front-end web applications, one using Angular and the other using React, creating reusable components as well as creating libraries for use on other projects.\nEvery project I have worked on during my time there used a different framework and a different variation of JavaScript. I have proven my ability to learn new technologies and adapt fast.\nI have used REST APIs, unit tests as well as tools like Jira, webpack, Git and many others to help with the development process.",
    dates: "April 2017 - April 2018",
    website: "https://oldmelon.melontech.com/",
    bgColor: "#183f57",
    imgClass: "scale-50 object-contain group-hover:scale-55 transition",
  },
  {
    id: "ubisoft-tester",
    img: ubiLogo,
    title: "Ubisoft",
    specialty: "UI Programmer",
    description: "I helped defining testing workflows and maintaining Jira.",
    fullInfo:
      "As a Development Tester I worked on projects from their very beginning. I had to provide feedback on design documents and later test and give feedback on features. Securing working builds for reviews and milestones was also a huge part of the job. As I was one of the first development testers in the studio and we had a lot of build stability issues at the time, I helped a lot in creating a workflow that would allow us to have stable builds and integrate changes without major issues.",
    dates: "April 2018 - Present",
    website: "https://www.ubisoft.com/",
  },
];

export const educationData: BioDataType[] = [
  {
    id: "telerik",
    img: telerikLogo,
    title: "Telerik Academy",
    specialty: "web and mobile development",
    description:
      "I studied programming basics with C#, back-end with Node.js and C#, HTML, CSS, JavaScript, TypeScript, Angular, iOS and Android.",
    fullInfo:
      "In this one-year course I learned programming basics using C#; web development, both front-end using JavaScript, and back-end using node.js; mobile applications for iOS and Android; and working with data bases. I graduated with one of the best results during my year.",
    dates: "March 2016 - March 2017",
    imgClass: "scale-90 object-contain group-hover:scale-100 transition py-14",
    website: "https://www.telerikacademy.com/",
    bgColor: "#fff",
  },
  {
    id: "ibs",
    img: ibsLogo,
    title: "International Business School Botevgrad",
    description: "I studied international business relations.",
    fullInfo: "I studied international business relations.",
    specialty: "International Business Relations",
    dates: "March 2016 - March 2017",
    imgClass: "scale-90 object-contain group-hover:scale-100 transition py-14",
    website: "https://ibsedu.bg/",
    bgColor: "#fff",
  },
];

export const projectsData: BioDataType[] = [
  {
    id: "next.js-project",
    img: nextLogo,
    imgClass: "scale-50 object-contain group-hover:scale-55 transition py-20",
    bgColor: "#fff",
    title: "NextJS project",
    description: "A NextJS I'm currently working on.",
    fullInfo: "A NextJS I'm currently working on.",
  },
  {
    id: "react-components-library",
    img: libraryLogo,
    bgColor: "#1b1c1d",
    imgClass: "card-image scale-90 group-hover:scale-100",
    title: "React components library",
    description: "A react components library I build for my personal projects.",
    fullInfo:
      "A react components library I built for my personal projects. I'm still adding new components and improving it.",
    website: "https://barrelrolla.github.io/react-components-library/",
    github: "https://github.com/Barrelrolla/react-components-library",
  },
  {
    id: "personal-resume",
    img: resumeLogo,
    title: "Personal resume",
    description: "My personal resume website.",
    fullInfo: "A personal resume website I built using my component library.",
    website: "https://julian-teofilov.vercel.app/",
    github: "https://github.com/Barrelrolla/personal-resume",
  },
];
