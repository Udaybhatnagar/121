import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { services } from "../data/servicesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const accentColors = {
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/20",
    badge: "bg-cyan-500/10 text-cyan-400",
    btn: "bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/25",
    step: "text-cyan-500",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    badge: "bg-blue-500/10 text-blue-400",
    btn: "bg-blue-500 hover:bg-blue-400 shadow-blue-500/25",
    step: "text-blue-500",
  },
  indigo: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    border: "border-indigo-500/20",
    badge: "bg-indigo-500/10 text-indigo-400",
    btn: "bg-indigo-500 hover:bg-indigo-400 shadow-indigo-500/25",
    step: "text-indigo-500",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    badge: "bg-emerald-500/10 text-emerald-400",
    btn: "bg-emerald-500 hover:bg-emerald-400 shadow-emerald-500/25",
    step: "text-emerald-500",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
    badge: "bg-purple-500/10 text-purple-400",
    btn: "bg-purple-500 hover:bg-purple-400 shadow-purple-500/25",
    step: "text-purple-500",
  },
  rose: {
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    border: "border-rose-500/20",
    badge: "bg-rose-500/10 text-rose-400",
    btn: "bg-rose-500 hover:bg-rose-400 shadow-rose-500/25",
    step: "text-rose-500",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
    badge: "bg-amber-500/10 text-amber-400",
    btn: "bg-amber-500 hover:bg-amber-400 shadow-amber-500/25",
    step: "text-amber-500",
  },
};

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === serviceName);
  const colors = service ? accentColors[service.accent] || accentColors.cyan : accentColors.cyan;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceName]);

  const whatsappUrl = service
    ? `https://wa.me/9368465315?text=${encodeURIComponent(
        `Hi! I'm interested in your ${service.title} service and would like to consult with TechHub Technology.`
      )}`
    : "https://wa.me/9368465315";

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0a0c10] flex flex-col items-center justify-center text-white">
        <Navbar />
        <h1 className="text-4xl font-black mb-4">Service not found</h1>
        <button
          onClick={() => navigate("/")}
          className="text-cyan-400 hover:underline"
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0a0c10] pt-40 pb-28 px-6 overflow-hidden">
        <div className={`absolute top-0 right-0 w-[50%] h-full ${colors.bg} blur-[180px] rounded-full pointer-events-none opacity-60`} />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.button
            onClick={() => navigate("/")}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            Back to Home
          </motion.button>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`inline-flex items-center gap-2 text-4xl mb-6`}
          >
            {service.emoji}
          </motion.span>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`inline-block ${colors.badge} text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 ml-3 align-middle`}
          >
            Our Service
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
          >
            {service.fullDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center gap-3 ${colors.btn} text-white font-black uppercase tracking-widest text-sm px-10 py-4 rounded-2xl shadow-xl transition-all duration-300`}
            >
              <MessageCircle size={18} />
              Consult on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`text-[11px] uppercase tracking-[0.3em] font-black ${colors.text} mb-4`}
              >
                What You Get
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-black text-slate-900 mb-10 leading-tight"
              >
                Key Benefits &{" "}
                <span className="text-slate-400 italic font-medium">
                  Deliverables
                </span>
              </motion.h2>

              <div className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-cyan-100 transition-all duration-300"
                  >
                    <CheckCircle size={20} className={`${colors.text} flex-shrink-0 mt-0.5`} />
                    <span className="text-slate-700 font-medium text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`text-[11px] uppercase tracking-[0.3em] font-black ${colors.text} mb-4`}
              >
                How We Work
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-black text-slate-900 mb-10 leading-tight"
              >
                Our{" "}
                <span className="text-slate-400 italic font-medium">
                  Process
                </span>
              </motion.h2>

              <div className="space-y-6">
                {service.process.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative flex gap-6"
                  >
                    {/* Line connector */}
                    {i < service.process.length - 1 && (
                      <div className="absolute left-[19px] top-12 w-[2px] h-[calc(100%+8px)] bg-slate-100" />
                    )}
                    <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0 relative z-10`}>
                      <span className={`text-xs font-black ${colors.text}`}>
                        {step.step}
                      </span>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex-grow">
                      <h3 className="font-black text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-black text-slate-900">
              Other Services
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services
              .filter((s) => s.slug !== serviceName)
              .slice(0, 4)
              .map((s, i) => (
                <motion.button
                  key={s.slug}
                  onClick={() => navigate(`/services/${s.slug}`)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex items-center gap-3 p-4 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all duration-300 text-left"
                >
                  <span className="text-2xl">{s.emoji}</span>
                  <span className="text-slate-700 font-bold text-sm leading-tight group-hover:text-cyan-600 transition-colors">
                    {s.title}
                  </span>
                  <ArrowRight size={14} className="text-slate-300 group-hover:text-cyan-400 ml-auto transition-colors" />
                </motion.button>
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[#0a0c10]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6"
          >
            Ready to get started?
          </motion.h2>
          <p className="text-gray-400 mb-10 text-lg">
            Let's discuss how our {service.title} service can transform your
            business.
          </p>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center gap-3 ${colors.btn} text-white font-black uppercase tracking-widest text-sm px-12 py-5 rounded-2xl shadow-xl transition-all duration-300`}
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

export default ServiceDetail;
