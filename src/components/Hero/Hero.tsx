import {
  Hero as BarrelrollaHero,
  Button,
  HeroActions,
  HeroSection,
  HeroText,
  HeroTitle,
} from "@barrelrolla/react-components-library";
import Ring from "../Ring/Ring";
import { Link } from "react-router";

export default function Hero() {
  return (
    <BarrelrollaHero
      wrapperClasses="overflow-visible"
      className="height-hero -mt-20 font-serif gap-6"
      textAlign="responsive"
    >
      <HeroSection className="flex-1/2 items-center">
        <Ring />
        <HeroTitle className="text-4xl font-medium sm:text-6xl xl:text-8xl relative z-1 hero-text-shadow md:max-w-[500px] text-center">
          Julian Teofilov
        </HeroTitle>
        <HeroText className="font-semibold sm:text-2xl xl:text-4xl relative z-1">
          UI Developer
        </HeroText>
      </HeroSection>
      <HeroSection className="font-sans flex-1/2 max-md:justify-start">
        <p className="text-pretty">
          I'm a UI developer with 8 years of experience in front-end web and
          video game UI development. Skilled in C++, C#, JavaScript, TypeScript,
          React, Unity, Phaser, and proprietary game engines. I've contributed
          to AAA titles like The Division 2 and multiple Assassin's Creed games,
          working in both small teams and large international studios.
        </p>
        <HeroActions>
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
