import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

const BlogCard = ({ post, index = 0 }) => {
  const navigate = useNavigate();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onClick={() => navigate(`/blog/${post.id}`)}
      className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-5 text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} className="text-cyan-500" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} className="text-cyan-500" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-lg font-bold leading-snug text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6 flex-grow">
          {post.shortDesc}
        </p>

        <div className="pt-5 border-t border-slate-50 flex items-center justify-between">
          <span className="text-[11px] font-black uppercase tracking-tighter text-slate-400 group-hover:text-slate-900 transition-colors">
            Read Article
          </span>
          <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white group-hover:rotate-45 transition-all duration-500">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
