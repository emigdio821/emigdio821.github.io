import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, x: 0, y: 10 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 10 },
};

interface MotionDivProps {
  children: React.ReactNode;
  delay?: number;
}

export const MotionDiv = ({
  children,
  delay = 0,
}: MotionDivProps) => {
  return (
    <motion.div
      exit="exit"
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 0.2, type: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
};
