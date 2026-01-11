import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      name: "Rahul Sharma",
      role: "CEO, TechFlow India",
      content:
        "121Developer transformed our legacy systems into a blazing-fast React infrastructure with rock-solid security.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
      stars: 5
    },
    {
      name: "Anita Desai",
      role: "Marketing Director, Global Retail",
      content:
        "Their digital strategy helped us grow organic conversions by 150% in just four months.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
      stars: 5
    },
    {
      name: "Vikram Malhotra",
      role: "Founder, SecureFin",
      content:
        "Clear roadmap, smart decisions, and serious cost savings. Highly recommended.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
      stars: 5
    }
  ];

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-20 px-6 bg-[#0a0c10] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]" />

      <div className="max-w-3xl mx-auto text-center relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase mb-8"
        >
          <Quote size={14} />
          Testimonials
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="p-8 md:p-10 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-xl"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: reviews[index].stars }).map((_, i) => (
                  <Star key={i} size={16} className="fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
                “{reviews[index].content}”
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={reviews[index].avatar}
                  alt={reviews[index].name}
                  className="w-14 h-14 rounded-xl object-cover border border-cyan-500/30"
                />
                <div className="text-left">
                  <h4 className="text-white font-semibold">
                    {reviews[index].name}
                  </h4>
                  <p className="text-cyan-400 text-xs uppercase tracking-wide">
                    {reviews[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-500 hover:text-black transition"
          >
            <ChevronLeft className="mx-auto" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-500 hover:text-black transition"
          >
            <ChevronRight className="mx-auto" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all ${
                i === index ? "w-8 bg-cyan-500" : "w-3 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
