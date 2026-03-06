import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { blogs } from "../data/blogsData";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blogs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-[#0a0c10] pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[30%] h-[60%] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-cyan-500 text-[11px] uppercase tracking-[0.3em] font-black mb-6"
          >
            <span className="w-8 h-[2px] bg-cyan-500" />
            Insights & Resources
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-none"
          >
            All{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">
              Insights
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl leading-relaxed"
          >
            Expert knowledge on technology, digital marketing, security, and
            business growth — curated by the TechHub team.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 px-6 bg-[#0a0c10]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6"
          >
            Ready to grow your business?
          </motion.h2>
          <p className="text-gray-400 mb-10 text-lg">
            Let's discuss how TechHub Technology can help you achieve your goals.
          </p>
          <motion.a
            href="https://wa.me/9368465315"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-cyan-500 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-cyan-500/20 hover:bg-cyan-400 transition-colors"
          >
            Consult on WhatsApp
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
