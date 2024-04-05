"use client";
import { stagger, useAnimate, motion } from "framer-motion";
import { useEffect, useState } from "react";

const staggerMenuItems_first = stagger(0.18, { from: "first" });
const staggerMenuItems_last = stagger(0.18, { from: "last" });

function usePageAnimation(isInView: boolean, direction?: "left" | "right") {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".animate-container",
      isInView
        ? { opacity: 1, x: 0 }
        : direction === "left"
        ? { opacity: 0, x: -40 }
        : { opacity: 0, x: 40 },
      {
        duration: 1.2,
        delay:
          isInView && direction === "left"
            ? staggerMenuItems_first
            : staggerMenuItems_last,
      }
    );
  }, [isInView, direction, animate]);

  return scope;
}

type TAppearsGraduallyProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
};

function AppearsGradually({ children, direction }: TAppearsGraduallyProps) {
  const [isView, setIsInView] = useState(false);
  const scope = usePageAnimation(isView, direction);

  return (
    <motion.div onViewportEnter={() => setIsInView(true)}>
      <div ref={scope}> {children}</div>
    </motion.div>
  );
}

export default AppearsGradually;
