import { useEffect, useRef } from "react";
import { Button, CaretIcon } from "@barrelrolla/react-components-library";
import Hero from "../components/Hero/Hero";

export default function HomePage() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function scrollHandler() {
      buttonRef.current?.classList.add("hidden");
    }
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <section className="h-[calc(100vh-50px)]">
        <Hero />
      </section>
      <Button
        ref={buttonRef}
        variant="outline"
        radius="pill"
        size="xl"
        startIcon={<CaretIcon />}
        wrapperClasses="absolute bottom-10 animate-bounce left-[calc(50%-20px)]"
      ></Button>
    </>
  );
}
