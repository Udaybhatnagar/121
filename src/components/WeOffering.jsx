import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Smartphone, Layout, BarChart, 
  Search, Star, Palette, ArrowRight 
} from 'lucide-react';

const WeOffering = () => {
  const offerings = [
    { title: "Website Development", icon: <Globe />, color: "cyan", desc: "High-performance, SEO-ready web applications." },
    { title: "iOS Development", icon: <Smartphone />, color: "blue", desc: "Premium native apps for Apple's ecosystem." },
    { title: "Android Development", icon: <Smartphone />, color: "indigo", desc: "Scalable and robust Android solutions." },
    { title: "SMO Services", icon: <BarChart />, color: "purple", desc: "Strategic social media optimization for brands." },
    { title: "Google Ads (PPC)", icon: <Search />, color: "orange", desc: "High-conversion paid search campaigns." },
    { title: "Google Review Mgmt", icon: <Star />, color: "yellow", desc: "Reputation management and trust building." },
    { title: "Graphic Design", icon: <Palette />, color: "pink", desc: "Visual storytelling and brand identity." },
    { title: "Custom UI/UX", icon: <Layout />, color: "emerald", desc: "User-centric designs that drive engagement." }
  ];

  return (
    <section id="offering" className="py-32 px-6 bg-[#0a0c10] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-cyan-500 font-bold tracking-[0.3em] text-xs uppercase mb-4 flex items-center gap-2"
            >
              <span className="w-8 h-[1px] bg-cyan-500"></span>
              We Offering
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              Shape Your Business <br /> 
              <span className="text-gray-600">With Our Expertise</span>
            </motion.h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="group px-8 py-4 bg-cyan-500 text-black font-bold rounded-2xl flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            Explore More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-px bg-gradient-to-br from-${item.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-${item.color}-500/20 group-hover:text-${item.color}-400 transition-all duration-500 shadow-inner`}>
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-gray-400 group-hover:text-white transition-colors">
                  Service Details <div className="w-4 h-[1px] bg-gray-600 group-hover:w-8 group-hover:bg-cyan-500 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeOffering;