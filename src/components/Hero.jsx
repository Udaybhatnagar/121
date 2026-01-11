import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-44 pb-20 text-center px-6">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-6xl md:text-8xl font-black mb-8"
      >
        Engineering the <br />
        <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent italic">
          Digital Frontier
        </span>
      </motion.h1>

      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        Strategic technology roadmaps and high-performance development.
      </p>

      <div className="flex justify-center gap-6">
        <button className="px-8 py-4 bg-cyan-500 text-black font-black rounded-xl flex items-center gap-2">
          START A PROJECT <ChevronRight />
        </button>
        <button className="px-8 py-4 border border-white/10 rounded-xl">
          VIEW OUR WORK
        </button>
      </div>
    </section>
  );
};

export default Hero;
