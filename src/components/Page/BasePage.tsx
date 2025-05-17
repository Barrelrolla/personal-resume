import { PropsWithChildren } from "react";
import { motion, MotionConfig } from "motion/react";

export default function BasePage({ children }: PropsWithChildren) {
  // window.scrollTo(0, 0);

  return (
    <>
      <MotionConfig transition={{ duration: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
        {/* <motion.div
          initial={{ scaleY: 1, transformOrigin: "top" }}
          animate={{ scaleY: [1, 0, 0] }}
          exit={{ scaleY: [0, 1, 1] }}
          className="bg-main border-main-content absolute top-0 left-0 z-15 h-[50vh] w-screen border-b-2"
        />
        <motion.div
          initial={{ scaleY: 1, transformOrigin: "bottom" }}
          animate={{ scaleY: [1, 0, 0] }}
          exit={{ scaleY: [0, 1, 1] }}
          className="bg-main border-main-content absolute bottom-0 left-0 z-15 h-[50vh] w-screen border-t-2"
        /> */}
      </MotionConfig>
    </>
  );
}
