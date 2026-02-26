
import React from 'react';
import { motion } from 'framer-motion';
import { GROWTH_STEPS } from '../constants';

const GrowthEngineFlow: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0F14]/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8F62AA] to-transparent" />
      
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Growth Blueprint</h2>
        <p className="text-white/40 font-mono tracking-widest uppercase text-xs">Phased Activation Sequence</p>
      </div>

      <div className="flex overflow-x-auto pb-12 gap-8 px-6 no-scrollbar snap-x lg:justify-between container mx-auto">
        {GROWTH_STEPS.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="min-w-[300px] flex-shrink-0 snap-center relative"
          >
            <div className="text-8xl font-black text-white/[0.03] absolute -top-10 -left-4 pointer-events-none select-none">
              0{idx + 1}
            </div>
            
            <div className="glass-panel p-8 rounded-2xl h-full border-l-4 border-l-[#8F62AA]">
              <div className="w-10 h-10 rounded-full bg-[#8F62AA]/20 flex items-center justify-center text-[#8F62AA] font-bold mb-6">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
            </div>

            {idx < GROWTH_STEPS.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-[#8F62AA]/30">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8F62AA] to-transparent" />
    </section>
  );
};

export default GrowthEngineFlow;
