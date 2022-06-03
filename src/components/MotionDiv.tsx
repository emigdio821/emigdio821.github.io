import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface MotionDivProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}

export const MotionDiv = ({ children, delay = 0, y = 100 }: MotionDivProps) => {
  const frameVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 1, y },
  };

  const animation = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animation}
      variants={frameVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};
