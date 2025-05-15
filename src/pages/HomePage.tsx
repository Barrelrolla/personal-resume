import { useEffect, useRef, useState } from "react";
import { Button, CaretIcon } from "@barrelrolla/react-components-library";
import Hero from "../components/Hero/Hero";

export default function HomePage() {
  const [needButton, setNeedButton] = useState(
    window.innerHeight > 400 && window.innerWidth > 400,
  );
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function scrollHandler() {
      buttonRef.current?.classList.add("animate-fade-out");
    }
    function resizeHandler() {
      setNeedButton(window.innerHeight > 400 && window.innerWidth > 400);
    }

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      <section className="p-4 overflow-x-clip">
        <Hero />
      </section>
      {needButton && (
        <Button
          ref={buttonRef}
          aria-label="scroll down"
          variant="outline"
          radius="pill"
          size="xl"
          startIcon={<CaretIcon />}
          wrapperClasses="absolute bottom-4 animate-bounce left-[calc(50%-28px)]"
          onClick={() => {
            buttonRef.current?.parentElement?.classList.add("animate-fade-out");
            scrollBy({ top: 300, behavior: "smooth" });
          }}
        ></Button>
      )}
    </>
  );
}
