import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ loading, progress }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] bg-[#0a0c10] flex flex-col items-center justify-center"
        >
          <div className="text-7xl font-black italic bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {progress}%
          </div>
          <div className="w-48 h-[1px] bg-white/10 mt-4">
            <div className="h-full bg-cyan-400" style={{ width: `${progress}%` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
