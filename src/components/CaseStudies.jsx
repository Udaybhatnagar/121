import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layers, Shield, Cpu, Zap, Database, ArrowUpRight } from 'lucide-react';

const CaseStudiesSlider = () => {
  // Extended list for a continuous loop with images
  const projects = [
    {
      title: "E-commerce Platform",
      cat: "Web Dev",
      icon: <Globe size={18} />,
      image: "https://images.unsplash.com/photo-1572044158428-f10f443e0618?auto=format&fit=crop&q=80&w=400",
      color: "cyan"
    },
    {
      title: "Data Integration Hub",
      cat: "Tech Solutions",
      icon: <Layers size={18} />,
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=400",
      color: "blue"
    },
    {
      title: "Enterprise Security",
      cat: "Cybersecurity",
      icon: <Shield size={18} />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
      color: "indigo"
    },
    {
      title: "AI-Powered Analytics",
      cat: "AI/ML",
      icon: <Cpu size={18} />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190a07ef?auto=format&fit=crop&q=80&w=400",
      color: "purple"
    },
    {
      title: "Cloud Migration",
      cat: "Infrastructure",
      icon: <Zap size={18} />,
      image: "https://images.unsplash.com/photo-1581456106606-44440c94982a?auto=format&fit=crop&q=80&w=400",
      color: "orange"
    },
    {
      title: "Secure Database",
      cat: "Data Management",
      icon: <Database size={18} />,
      image: "https://images.unsplash.com/photo-1599026330962-d4850d998394?auto=format&fit=crop&q=80&w=400",
      color: "emerald"
    },
  ];

  // Double the array for seamless infinite looping
  const infiniteProjects = [...projects, ...projects, ...projects]; // Triple for smoother, longer loop

  return (
    <section className="py-24 bg-[#0a0c10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <span className="text-cyan-500 font-bold tracking-[0.2em] text-xs uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">Our Case Studies</h2>
        </div>
        <div className="text-gray-500 text-sm font-medium mt-4 md:mt-0">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Drag or scroll to explore →
          </motion.p>
        </div>
      </div>

      {/* Slider Container */}
      <div className="flex relative cursor-grab active:cursor-grabbing">
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: ["-33.33%", "0%"] }} // Adjust based on number of duplicated sets
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60, // Slower duration for more cards
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {infiniteProjects.map((project, index) => (
            <div 
              key={index}
              className="w-[320px] h-[400px] shrink-0 group relative rounded-[2rem] bg-white/[0.03] border border-white/5 overflow-hidden transition-all hover:border-cyan-500/30"
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-500"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 text-${project.color}-400`}>
                    {project.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2 block">
                    {project.cat}
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Decorative Tech Lines */}
              <div className="absolute top-0 right-0 p-4">
                 <div className={`w-16 h-[1px] bg-gradient-to-r from-transparent to-${project.color}-500/30`} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSlider;