import {
  Hero as BarrelrollaHero,
  Button,
  HeroActions,
  HeroSection,
} from "@barrelrolla/react-components-library";
import Ring from "../Ring/Ring";
import { Link } from "react-router";
import { MotionHeroSection, MotionHeroTitle } from "../motion/motion";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <BarrelrollaHero
      wrapperClasses="overflow-visible"
      className="height-hero -mt-14 gap-6 font-serif"
      textAlign="responsive"
    >
      <HeroSection className="relative flex-1/2 items-center overflow-x-visible md:order-last">
        <Ring />
        <MotionHeroTitle
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
          className="relative z-1 text-center text-5xl font-medium sm:text-6xl xl:text-8xl"
        >
          Julian
          <br />
          Teofilov
        </MotionHeroTitle>
        <motion.h2
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-1 font-semibold sm:text-2xl xl:text-4xl"
        >
          UI Developer
        </motion.h2>
      </HeroSection>
      <MotionHeroSection
        className="flex-1/2 font-sans max-md:justify-start"
        initial={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-pretty">
          UI Developer with 8 years of experience in both front-end web
          development and video game UI. Skilled in C++, C#, JavaScript,
          TypeScript, React, Phaser, Unity 3D, as well as multiple proprietary
          game engines. I've contributed effectively in both small and large,
          international teams on high-profile AAA titles.
        </p>
        <HeroActions className="justify-around gap-2">
          <Button as={Link} to="/projects" className="w-[145px]">
            My projects
          </Button>
          <Button as={Link} to="/contacts" className="w-[145px]">
            My contacts
          </Button>
        </HeroActions>
      </MotionHeroSection>
    </BarrelrollaHero>
  );
}
