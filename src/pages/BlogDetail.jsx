import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  User,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { blogs } from "../data/blogsData";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogs.find((b) => b.id === parseInt(id));
  const related = blogs.filter((b) => b.id !== parseInt(id)).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0c10] flex flex-col items-center justify-center text-white">
        <Navbar />
        <h1 className="text-4xl font-black mb-4">Blog not found</h1>
        <button
          onClick={() => navigate("/blogs")}
          className="text-cyan-400 hover:underline mt-4"
        >
          ← Back to all blogs
        </button>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/9368465315?text=${encodeURIComponent(
    `Hi! I read your article "${post.title}" and would like to consult with TechHub Technology.`
  )}`;

  // Render markdown-styled content (basic)
  const renderContent = (content) => {
    return content.split("\n\n").map((para, i) => {
      if (para.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-2xl font-black text-slate-900 mt-10 mb-4"
          >
            {para.replace("## ", "")}
          </h2>
        );
      }
      if (para.startsWith("```")) {
        const code = para.replace(/```\w*\n?/, "").replace(/```$/, "");
        return (
          <pre
            key={i}
            className="bg-slate-900 text-cyan-300 rounded-2xl p-6 overflow-x-auto text-sm my-6 font-mono"
          >
            {code}
          </pre>
        );
      }
      if (para.startsWith("**") && para.endsWith("**")) {
        return (
          <p key={i} className="font-bold text-slate-800 my-3">
            {para.replace(/\*\*/g, "")}
          </p>
        );
      }
      return (
        <p key={i} className="text-slate-600 leading-relaxed my-4 text-[17px]">
          {para}
        </p>
      );
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0a0c10] pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.button
            onClick={() => navigate("/blogs")}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            All Insights
          </motion.button>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block bg-cyan-500/10 text-cyan-400 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6"
          >
            {post.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white leading-tight mb-8"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-sm text-gray-400"
          >
            <span className="flex items-center gap-2">
              <User size={15} className="text-cyan-500" />
              {post.author}
              <span className="text-gray-600">· {post.authorRole}</span>
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={15} className="text-cyan-500" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={15} className="text-cyan-500" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] h-72 md:h-96"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Article Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose-content"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* Consult Now CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-[#0a0c10] to-slate-800 rounded-[2.5rem] p-10 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={26} className="text-cyan-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
                Have questions about how this applies to your business? Let's
                chat on WhatsApp — our experts are ready to help.
              </p>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white font-black uppercase tracking-widest text-sm px-10 py-4 rounded-2xl shadow-xl shadow-cyan-500/30 transition-colors"
              >
                <MessageCircle size={18} />
                Consult Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 px-6 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="text-cyan-600 text-[11px] uppercase tracking-[0.3em] font-black mb-2">
                  Continue Reading
                </div>
                <h2 className="text-3xl font-black text-slate-900">
                  Related Articles
                </h2>
              </div>
              <Link
                to="/blogs"
                className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-black text-slate-500 hover:text-cyan-600 transition-colors"
              >
                View All <ArrowRight size={16} className="text-cyan-500" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogDetail;
