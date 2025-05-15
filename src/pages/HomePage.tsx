import { useEffect, useRef } from "react";
import { Button, CaretIcon } from "@barrelrolla/react-components-library";
import Hero from "../components/Hero/Hero";

export default function HomePage() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function scrollHandler() {
      buttonRef.current?.classList.add("animate-fade-out");
    }
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <section className="p-4">
        <Hero />
      </section>
      {window.innerHeight > 400 && window.innerWidth > 400 && (
        <Button
          ref={buttonRef}
          aria-label="scroll down"
          variant="outline"
          radius="pill"
          size="xl"
          startIcon={<CaretIcon />}
          wrapperClasses="absolute bottom-4 animate-bounce left-[calc(50%-28px)]"
          onClick={() => {
            buttonRef.current?.classList.add("animate-fade-out");
            scrollBy({ top: 300, behavior: "smooth" });
          }}
        ></Button>
      )}
    </>
  );
}
