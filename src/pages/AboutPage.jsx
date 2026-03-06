import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Headphones,
  Target,
  Users,
  Award,
  TrendingUp,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
import Testimonials from "../components/Testimonials";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Team Members" },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    desc: "We measure success by your business outcomes — not just deliverables. Every decision we make is tied to your growth.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Users,
    title: "Client-First Culture",
    desc: "Your goals are our goals. We work as a true extension of your team, keeping you informed at every step.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Award,
    title: "Quality Without Compromise",
    desc: "We never take shortcuts. Our code, designs, and strategies are held to the highest professional standards.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: TrendingUp,
    title: "Innovation at Core",
    desc: "We stay ahead of technology trends so our clients always receive modern, future-proof solutions.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

const milestones = [
  {
    year: "2019",
    title: "TechHub Founded",
    desc: "Started as a small web development studio with a vision to empower Indian businesses with world-class technology.",
  },
  {
    year: "2020",
    title: "First 50 Clients",
    desc: "Expanded to digital marketing and IT consultancy, serving clients across Faridabad, Delhi NCR, and beyond.",
  },
  {
    year: "2022",
    title: "Team of 25+",
    desc: "Grew our expert team and launched enterprise-grade cybersecurity and app development services.",
  },
  {
    year: "2024",
    title: "200+ Projects",
    desc: "Crossed a major milestone — 200+ successful projects delivered across industries from BFSI to e-commerce.",
  },
];

const AboutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappUrl =
    "https://wa.me/9368465315?text=" +
    encodeURIComponent("Hi! I'd like to learn more about TechHub Technology and discuss a potential project.");

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0a0c10] pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[45%] h-full bg-indigo-500/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[70%] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-cyan-500 text-[11px] uppercase tracking-[0.3em] font-black mb-6"
            >
              <span className="w-8 h-[2px] bg-cyan-500" />
              About TechHub Technology
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              We Build the{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">
                Digital Future
              </span>{" "}
              of Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-10"
            >
              TechHub Technology is a full-service digital agency based in
              Faridabad, Haryana. Since 2019, we've been empowering businesses
              across India with innovative web development, digital marketing,
              and enterprise IT solutions.
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
                Work With Us
              </motion.a>
              <motion.button
                onClick={() => navigate("/services")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/10 text-white font-black uppercase tracking-widest text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all"
              >
                Our Services <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Image + floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900"
                alt="TechHub Team"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10]/60 via-transparent to-transparent" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-8 -left-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="text-4xl font-black text-white">200+</div>
              <div className="text-gray-400 text-sm font-medium mt-1">
                Projects Delivered
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-cyan-600 text-[11px] uppercase tracking-[0.3em] font-black mb-4"
              >
                Our Story
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-8 leading-tight"
              >
                From a Small Studio to a{" "}
                <span className="text-slate-400 italic font-medium">
                  Full-Service Agency
                </span>
              </motion.h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  TechHub Technology was born in 2019 with a simple but
                  ambitious goal: to give Indian businesses access to
                  world-class technology solutions without the world-class
                  price tag.
                </p>
                <p>
                  What started as a web development studio with a handful of
                  talented engineers quickly grew into a full-service digital
                  agency. Today, we offer everything from custom web
                  applications and mobile apps to digital marketing, IT
                  management, and cybersecurity.
                </p>
                <p>
                  We serve clients across Faridabad, Delhi NCR, and across
                  India — from early-stage startups to established enterprises.
                  Our diverse team of developers, designers, marketers, and
                  security experts share one passion: building technology that
                  genuinely transforms businesses.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-cyan-600 text-[11px] uppercase tracking-[0.3em] font-black mb-4"
              >
                Our Journey
              </motion.div>
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-6"
                >
                  {i < milestones.length - 1 && (
                    <div className="absolute left-[19px] top-12 w-[2px] h-[calc(100%+8px)] bg-slate-100" />
                  )}
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 relative z-10">
                    <span className="text-cyan-500 text-[10px] font-black">
                      {m.year.slice(-2)}
                    </span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex-grow">
                    <div className="text-[10px] text-cyan-500 font-black uppercase tracking-widest mb-1">
                      {m.year}
                    </div>
                    <h3 className="font-black text-slate-900 mb-1">{m.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6 bg-[#0a0c10] relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-cyan-500 text-[11px] uppercase tracking-[0.3em] font-black mb-4"
            >
              What Drives Us
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white"
            >
              Our Core{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent italic">
                Values
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl ${v.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <v.icon size={24} className={v.color} />
                </div>
                <h3 className="text-white font-black text-lg mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-cyan-600 text-[11px] uppercase tracking-[0.3em] font-black mb-4"
            >
              Why TechHub?
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-slate-900 mb-10 leading-tight"
            >
              We Are Ready to Help &{" "}
              <span className="text-slate-400 italic font-medium">
                Grow Your Business
              </span>
            </motion.h2>

            <div className="space-y-6">
              {[
                {
                  title: "Personalized Approach",
                  desc: "No cookie-cutter solutions. Every project is custom-crafted to your unique business needs and goals.",
                  icon: CheckCircle,
                  color: "text-cyan-500 bg-cyan-500/10",
                },
                {
                  title: "End-to-End Expertise",
                  desc: "From strategy and design to development, marketing, and ongoing support — all under one roof.",
                  icon: Headphones,
                  color: "text-blue-500 bg-blue-500/10",
                },
                {
                  title: "Transparent Partnership",
                  desc: "Regular updates, clear pricing, no hidden costs. You'll always know exactly where your project stands.",
                  icon: Users,
                  color: "text-indigo-500 bg-indigo-500/10",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 items-start bg-[#f8fafc] p-6 rounded-2xl border border-slate-100 hover:border-cyan-100 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-slate-100 aspect-[4/5] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=700"
                alt="Team at work"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-4 md:-right-10 bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">
                Client Satisfaction
              </div>
              <div className="text-4xl font-black text-slate-900">98%</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[#0a0c10]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6"
          >
            Ready to work together?
          </motion.h2>
          <p className="text-gray-400 mb-10 text-lg">
            Let's build something extraordinary. Start the conversation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-cyan-500 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-cyan-500/20 hover:bg-cyan-400 transition-colors"
            >
              <MessageCircle size={18} />
              Start on WhatsApp
            </motion.a>
            <motion.button
              onClick={() => { navigate("/contact"); window.scrollTo(0, 0); }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl border border-white/10 text-white font-black uppercase tracking-widest text-sm hover:border-cyan-400 transition-all"
            >
              Contact Us <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
