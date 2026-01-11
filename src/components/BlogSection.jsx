import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: "AI is Revolutionizing Web Development",
      date: "Jan 10, 2026",
      time: "5 min",
      category: "Tech",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Top SEO Strategies for Local Business",
      date: "Jan 08, 2026",
      time: "4 min",
      category: "SEO",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      title: "Database Security Best Practices",
      date: "Jan 05, 2026",
      time: "6 min",
      category: "Security",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-[#0a0c10]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-cyan-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
              Blog
            </p>
            <h2 className="text-3xl font-black">
              Latest <span className="text-gray-500 italic">Updates</span>
            </h2>
          </div>

          <a
            href="#"
            className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-cyan-400 transition-colors"
          >
            View All
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-28 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
                <span className="absolute top-2 left-2 bg-cyan-500 text-black text-[9px] font-black px-2 py-[2px] rounded-full uppercase tracking-widest">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-3 text-[10px] text-gray-500 font-semibold mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} className="text-cyan-500" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} className="text-cyan-500" />
                    {post.time}
                  </span>
                </div>

                <h3 className="text-sm font-bold leading-snug mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
