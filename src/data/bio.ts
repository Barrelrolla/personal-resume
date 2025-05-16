import ubiLogo from "../assets/ubisoft.logo.avif";
import melonLogo from "../assets/melon_logo.svg";

export type ExperienceData = {
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

export const experienceData: ExperienceData[] = [
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
