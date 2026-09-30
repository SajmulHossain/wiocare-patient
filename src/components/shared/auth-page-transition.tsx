"use client";

import { motion } from "motion/react";

interface AuthPageTransitionProps {
  children: React.ReactNode;
  direction?: "left" | "right";
}

export const AuthPageTransition = ({
  children,
  direction = "left",
}: AuthPageTransitionProps) => {
  const rotateYStart = direction === "left" ? 90 : -90;
  const origin = direction === "left" ? "left center" : "right center";

  return (
    <div
      className="w-full flex justify-center"
      style={{ perspective: "1500px" }}
    >
      <motion.div
        initial={{
          rotateY: rotateYStart,
          opacity: 0,
          scale: 0.95,
          transformOrigin: origin,
        }}
        animate={{
          rotateY: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full flex justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};
