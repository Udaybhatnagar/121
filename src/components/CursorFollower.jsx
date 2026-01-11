import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CursorFollower = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const spring = { damping: 25, stiffness: 700 };
  const x = useSpring(cursorX, spring);
  const y = useSpring(cursorY, spring);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-cyan-500 rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    />
  );
};

export default CursorFollower;
