import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import WeOffering from "../components/WeOffering";
import Testimonials from "../components/Testimonials";
import { services } from "../data/servicesData";

const ServicesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappUrl =
    "https://wa.me/9368465315?text=" +
    encodeURIComponent(
      "Hi! I'd like to discuss TechHub Technology's services and see how you can help my business."
    );

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0a0c10] pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[45%] h-full bg-cyan-500/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[35%] h-[70%] bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-cyan-500 text-[11px] uppercase tracking-[0.3em] font-black mb-6"
          >
            <span className="w-8 h-[2px] bg-cyan-500" />
            What We Do
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-none"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">
              Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-10"
          >
            From cutting-edge web development to enterprise IT security — we
            deliver technology solutions that drive real business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-cyan-500 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-cyan-500/20 hover:bg-cyan-400 transition-colors"
            >
              <MessageCircle size={17} />
              Get Free Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* All Services Quick Links */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <motion.button
                key={service.slug}
                onClick={() => navigate(`/services/${service.slug}`)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-3 p-4 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-cyan-200 hover:bg-white hover:shadow-md transition-all duration-300 text-left"
              >
                <span className="text-2xl">{service.emoji}</span>
                <div className="flex-grow min-w-0">
                  <div className="text-slate-800 font-bold text-sm leading-tight group-hover:text-cyan-600 transition-colors truncate">
                    {service.title}
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  className="text-slate-300 group-hover:text-cyan-400 flex-shrink-0 transition-colors"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section (reused component) */}
      <Services />

      {/* Full Offerings Bento Grid */}
      <WeOffering />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0a0c10]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6"
          >
            Not sure which service you need?
          </motion.h2>
          <p className="text-gray-400 mb-10 text-lg">
            Let's talk. Our experts will understand your goals and recommend the
            right solution for your business.
          </p>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-12 py-5 rounded-2xl bg-cyan-500 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-cyan-500/20 hover:bg-cyan-400 transition-colors"
          >
            <MessageCircle size={18} />
            Consult on WhatsApp
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
