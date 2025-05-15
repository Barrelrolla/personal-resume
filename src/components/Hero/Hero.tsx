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
        <HeroText className="text-balance">
          I am a UI developer with 8 years of experience. I'm experienced both
          in front-end web development and video games UI. I possess a diverse
          skillset of working with different programming languages, frameworks
          and game engines, such as C++, C#, JavaScript, TypeScript, React,
          Phaser, Unity 3D and multiple proprietary game engines. I have the
          ability to work not only in a small team, but also in a big
          international team creating AAA games as The Division 2 and multiple
          Assassin's Creed titles.
        </HeroText>
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
