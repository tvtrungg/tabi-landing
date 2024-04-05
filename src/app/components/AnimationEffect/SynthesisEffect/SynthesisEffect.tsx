"use client";
import {
  fadeIn,
  flipInX,
  scaleVariant,
  opacityVariant,
} from "@/constants/common";
import { motion } from "framer-motion";

type TAnimationType = "fade" | "flipX" | "scale" | "opacity";
type TDirection = "up" | "down" | "left" | "right";

type TAnimationVariants = {
  [key in TAnimationType]: any;
};

const animationVariants: TAnimationVariants = {
  fade: fadeIn,
  flipX: flipInX,
  scale: scaleVariant,
  opacity: opacityVariant,
};

type TFadeInAnimationProps = {
  children: React.ReactNode;
  animationType: TAnimationType;
  direction?: TDirection;
  setIsInView?: (value: boolean) => void;
};

function SynthesisEffect({
  setIsInView,
  children,
  animationType,
  direction,
}: TFadeInAnimationProps) {
  let variants = animationVariants[animationType];
  if (animationType === "fade") {
    variants = fadeIn(direction);
  }

  return (
    <motion.div
      className="h-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      onViewportEnter={() => setIsInView && setIsInView(true)}
    >
      {children}
    </motion.div>
  );
}

export default SynthesisEffect;
