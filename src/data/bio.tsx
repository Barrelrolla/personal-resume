import ubiLogo from "../assets/ubisoft_logo.avif";
import melonLogo from "../assets/melon_logo.svg";
import telerikLogo from "../assets/telerik_logo.png";

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
      "At Ubisoft I work as a UI Programmer. I worked on projects like The Division 2, Assassin's creed: Mirage, Assassin's Creed: Shadows and others.",
    fullInfo: "Not yet implemented",
    dates: "April 2018 - Present",
    website: "https://www.ubisoft.com/",
  },
  {
    id: "melontech",
    img: melonLogo,
    title: "Melontech",
    specialty: "Front-end developer",
    description:
      "At melontech I worked as a front-end developer on a bingo game using Phaser and a booking webiste using React and Flow.",
    fullInfo: "Not yet implemented",
    dates: "April 2017 - April 2018",
    website: "https://oldmelon.melontech.com/",
    bgColor: "#183f57",
    imgClass: "scale-50 object-contain group-hover:scale-55 transition",
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
    fullInfo: "Not yet implemented",
    dates: "March 2016 - March 2017",
    imgClass: "scale-90 object-contain group-hover:scale-100 transition py-14",
    website: "https://www.telerikacademy.com/",
    bgColor: "#fff",
  },
];

export const projectsData: BioDataType[] = [
  {
    id: "react-components-library",
    img: "https://placehold.co/600x400",
    title: "React components library",
    description: "A react components library I build for my personal projects.",
    fullInfo: "Not yet implemented",
    website: "https://barrelrolla.github.io/react-components-library/",
    github: "https://github.com/Barrelrolla/react-components-library",
  },
];
