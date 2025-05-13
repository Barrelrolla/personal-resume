import {
  Hero,
  HeroSection,
  HeroText,
  HeroTitle,
} from "@barrelrolla/react-components-library";

function HomePage() {
  return (
    <>
      <Hero
        className="h-[400px] font-serif md:h-[600px] xl:h-[800px]"
        textAlign="center"
      >
        <HeroSection>
          <HeroTitle className="text-4xl font-medium md:text-6xl xl:text-8xl">
            Julian Teofilov
          </HeroTitle>
          <HeroText className="font-semibold">UI Developer</HeroText>
        </HeroSection>
      </Hero>
    </>
  );
}

export default HomePage;
