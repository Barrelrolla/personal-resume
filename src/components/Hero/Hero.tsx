import {
  Hero as BarrelrollaHero,
  HeroSection,
  HeroText,
  HeroTitle,
} from "@barrelrolla/react-components-library";

export default function Hero() {
  return (
    <BarrelrollaHero
      className="height-hero font-serif"
      wrapperClasses="bg-transparent"
      textAlign="center"
    >
      <HeroSection>
        <HeroTitle className="text-4xl font-medium sm:text-6xl xl:text-8xl">
          Julian Teofilov
        </HeroTitle>
        <HeroText className="font-semibold sm:text-2xl xl:text-4xl">
          UI Developer
        </HeroText>
      </HeroSection>
    </BarrelrollaHero>
  );
}
