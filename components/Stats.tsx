
import React from 'react';
import { motion } from 'framer-motion';

const Stats: React.FC = () => {
  const stats = [
    { value: '100M+', label: 'Reach Generated' },
    { value: '3.5X', label: 'Avg. ROI Increase' },
    { value: '25+', label: 'Brands Transformed' },
    { value: '24/7', label: 'Systems Monitoring' },
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-[#8F62AA] mb-2">{stat.value}</div>
              <div className="text-white/40 uppercase tracking-widest font-mono text-[10px] md:text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white/30 text-xs font-mono mb-8 uppercase tracking-[0.4em]">Trusted by Global Disruptors</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40">
            {['VOLT', 'AERO', 'SYNTH', 'QUANTUM', 'CORE'].map((logo, idx) => (
              <motion.div
                key={logo}
                whileHover={{ opacity: 1, scale: 1.1 }}
                className="text-2xl font-black italic tracking-tighter"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
