"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";

function Welcome() {
  const t = useTranslations("container");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [-0.1, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
   <div className="relative bg-gradient">
      <div
        ref={ref}
        className="w-full h-[130vh] overflow-hidden relative grid place-items-center"
      >
        <motion.div
          style={{ y: textY }}
          className="font-bold text-white text-center text-5xl md:text-5xl relative z-10 "
        >
          <h2>{t('welcome')}</h2>
          <h1 className="text-11xl uppercase mt-8">Việt Nam</h1>
        </motion.div>
  
        <div
          className="absolute inset-0 z-0 overplay-bg"
          style={{
            backgroundImage: `url(/bg-2.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <motion.div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(/clouds1.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            y: backgroundY,
          }}
        />
      </div>
   </div>
  );
}

export default Welcome;
