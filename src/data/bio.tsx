import ubiLogo from "../assets/ubisoft_logo.avif";
import melonLogo from "../assets/melon_logo.svg";
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

type ExperienceType = {
  img: string;
  title: string;
  specialty: string;
  description: string;
  fullInfo: string;
  dates: string;
  website?: string;
  bgColor?: string;
  logoPadding?: string;
};

export const experienceData: ExperienceType[] = [
  {
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
    img: melonLogo,
    title: "Melontech",
    specialty: "Front-end developer",
    description:
      "At melontech I worked as a front-end developer on a bingo game using Phaser and a booking webiste using React and Flow.",
    fullInfo: "Not yet implemented",
    dates: "April 2017 - April 2018",
    website: "https://oldmelon.melontech.com/",
    bgColor: "#183f57",
    logoPadding: "1rem",
  },
];
