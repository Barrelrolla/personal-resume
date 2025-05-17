import { useLocation, useOutlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { AnimatePresence } from "motion/react";
import { cloneElement } from "react";

function AnimatedOutlet() {
  const location = useLocation();
  const element = useOutlet();
  return (
    <AnimatePresence mode="wait" initial={true}>
      {element && cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default function RootLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-clip pt-16">
      <Navbar />
      <main className="mb-6 w-full max-w-(--max-width) flex-1 p-4">
        <AnimatePresence mode="wait">
          <AnimatedOutlet />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
