import {
  Hero,
  HeroSection,
  HeroText,
  HeroTitle,
} from "@barrelrolla/react-components-library";
// import rain from "../assets/rain.mp4";
import blob from "../assets/blob.mp4";

function HomePage() {
  return (
    <>
      <div className="bg-main height-hero pointer-events-none absolute top-0 left-0 -z-5 w-full mix-blend-color"></div>
      <div className="from-main height-hero pointer-events-none absolute top-0 left-0 -z-4 w-full bg-gradient-to-t to-transparent to-20%"></div>
      <video
        className="height-hero absolute top-0 left-0 -z-10 w-full object-cover brightness-25 contrast-75 not-dark:invert dark:brightness-50 dark:contrast-50 dark:sepia"
        src={blob}
        muted
        loop
        autoPlay
      ></video>
      <Hero
        className="height-hero font-serif"
        wrapperClasses="bg-transparent"
        textAlign="center"
      >
        <HeroSection>
          <HeroTitle className="text-4xl font-medium md:text-6xl xl:text-8xl">
            Julian Teofilov
          </HeroTitle>
          <HeroText className="font-semibold md:text-2xl xl:text-4xl">
            UI Developer
          </HeroText>
        </HeroSection>
      </Hero>
    </>
  );
}

export default HomePage;
