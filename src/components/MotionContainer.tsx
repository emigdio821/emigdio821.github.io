import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

interface MotionContainerProps {
  children: React.ReactNode;
}

export const MotionContainer = ({ children }: MotionContainerProps) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.2, type: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
