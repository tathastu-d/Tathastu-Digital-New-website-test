
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0F14] relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Digital Weaponry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50"
          >
            Precise tools engineered for market domination.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group glass-panel p-8 rounded-2xl relative overflow-hidden transition-all hover:border-[#8F62AA]/50"
            >
              {/* Animated corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#8F62AA]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#8F62AA] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/50 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8 flex items-center text-[#8F62AA] font-mono text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                <span>VIEW MODULE_0{idx + 1}</span>
                <div className="ml-2 w-0 group-hover:w-8 h-[1px] bg-[#8F62AA] transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
