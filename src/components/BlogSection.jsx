import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { blogs } from "../data/blogsData";

const BlogSection = () => {
  const navigate = useNavigate();
  const previewPosts = blogs.slice(0, 3);

  return (
    <section id="blog" className="py-32 px-6 bg-[#f8fafc] relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-[30%] h-[40%] bg-cyan-100/30 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-cyan-600 text-[11px] uppercase tracking-[0.3em] font-black mb-4"
            >
              <span className="w-8 h-[2px] bg-cyan-500" />
              Insights
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
            >
              Latest{" "}
              <span className="bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent italic">
                Updates
              </span>
            </motion.h2>
          </div>

          <motion.div whileHover={{ x: 5 }}>
            <Link
              to="/blogs"
              className="group flex items-center gap-2 text-[12px] uppercase tracking-widest font-black text-slate-500 hover:text-cyan-600 transition-colors"
            >
              View All Insights <ArrowRight size={16} className="text-cyan-500" />
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Content Area */}
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-6 text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} className="text-cyan-500" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} className="text-cyan-500" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-tight text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
                  {post.shortDesc}
                </p>

                <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-tighter text-slate-400 group-hover:text-slate-900 transition-colors">
                    Read Article
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white group-hover:rotate-45 transition-all duration-500 shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button below grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-sm hover:bg-cyan-500 transition-colors duration-300 shadow-xl"
          >
            View All Insights <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;