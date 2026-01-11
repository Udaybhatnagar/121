import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/servicesData";

const Services = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className={`p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 ${service.border}`}
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 mb-6">{service.desc}</p>
            <button className="flex items-center gap-2 text-sm font-bold">
              Explore Service <ArrowUpRight className="text-cyan-500" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
