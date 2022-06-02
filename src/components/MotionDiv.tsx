import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 1, y: -40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: 10 },
};

interface MotionDivProps {
  children: React.ReactNode;
  delay?: number;
}

export const MotionDiv = ({ children, delay = 0 }: MotionDivProps) => {
  return (
    <motion.div
      exit="exit"
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};
