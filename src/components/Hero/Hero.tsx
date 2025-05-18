import {
  Hero as BarrelrollaHero,
  Button,
  HeroActions,
  HeroSection,
  HeroTitle,
} from "@barrelrolla/react-components-library";
import Ring from "../Ring/Ring";
import { Link } from "react-router";

export default function Hero() {
  return (
    <BarrelrollaHero
      wrapperClasses="overflow-visible"
      className="height-hero -mt-20 gap-6 font-serif"
      textAlign="responsive"
    >
      <HeroSection className="relative flex-1/2 items-center overflow-x-visible md:order-last">
        <Ring />
        <HeroTitle className="relative z-1 text-center text-5xl font-medium sm:text-6xl xl:text-8xl">
          Julian
          <br />
          Teofilov
        </HeroTitle>
        <h2 className="relative z-1 font-semibold sm:text-2xl xl:text-4xl">
          UI Developer
        </h2>
      </HeroSection>
      <HeroSection className="flex-1/2 font-sans max-md:justify-start">
        <p className="text-pretty">
          I'm a UI developer with 8 years of experience in front-end web and
          video game UI development. Skilled in C++, C#, JavaScript, TypeScript,
          React, Unity, Phaser, and proprietary game engines. I've contributed
          to AAA titles like The Division 2 and multiple Assassin's Creed games,
          working in both small teams and large international studios.
        </p>
        <HeroActions className="justify-around gap-2">
          <Button as={Link} to="/projects" className="w-[145px]">
            My projects
          </Button>
          <Button as={Link} to="/contacts" className="w-[145px]">
            My contacts
          </Button>
        </HeroActions>
      </HeroSection>
    </BarrelrollaHero>
  );
}
