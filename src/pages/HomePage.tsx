import { useEffect, useRef, useState } from "react";
import { Button, CaretIcon } from "@barrelrolla/react-components-library";
import Experience from "../components/Content/Experience";
import Hero from "../components/Hero/Hero";
import Education from "../components/Content/Education";
import Projects from "../components/Content/Projects";
import BasePage from "../components/Page/BasePage";
import { motion } from "motion/react";
import { HomePageContextProvider } from "../contexts.ts/HomaPageContext";

export default function HomePage() {
  document.title = "Julian Teofilov";

  function checkNeedButton() {
    const innerHeight = window.innerHeight;
    let overMin = false;

    if (innerHeight > window.innerWidth) {
      overMin = innerHeight > 650;
    } else {
      overMin = innerHeight > 450;
    }
    return overMin && innerHeight < 1050;
  }
  const [needButton, setNeedButton] = useState(checkNeedButton());
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bioRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function scrollHandler() {
      buttonRef.current?.classList.add("animate-fade-out");
    }
    function resizeHandler() {
      setNeedButton(checkNeedButton());
    }

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <BasePage>
      <HomePageContextProvider value={{ exists: true }}>
        <Hero />
        {needButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <Button
              ref={buttonRef}
              aria-label="scroll down"
              variant="outline"
              radius="pill"
              size="xl"
              startIcon={<CaretIcon />}
              wrapperClasses="absolute bottom-4 animate-bounce left-[calc(50%-28px)]"
              onClick={() => {
                buttonRef.current?.parentElement?.classList.add(
                  "animate-fade-out",
                );
                bioRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            ></Button>
          </motion.div>
        )}
        <section
          className="space-y-14"
          ref={bioRef}
          style={{ scrollMargin: "60px" }}
        >
          <Experience title="Experience" />
          <Education title="Education" />
          <Projects title="Projects" />
        </section>
      </HomePageContextProvider>
    </BasePage>
  );
}
