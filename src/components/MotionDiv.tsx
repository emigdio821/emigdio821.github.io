import { motion, Variants } from "framer-motion";

interface MotionDivProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}

export const MotionDiv = ({ children, delay = 0, y = 20 }: MotionDivProps) => {
  const variants: Variants = {
    offscreen: {
      y,
      opacity: 0,
      scale: 1.01,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1,
      },
    },
    onscreen: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        // bounce: 0.4,
        // duration: 1,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      variants={variants}
      whileInView="onscreen"
      transition={{ delay }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
};
