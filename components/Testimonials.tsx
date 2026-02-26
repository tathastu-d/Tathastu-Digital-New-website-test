
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 relative overflow-hidden bg-[radial-gradient(circle_at_50%_120%,#8F62AA20,transparent)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute -top-10 -left-10 w-20 h-20 text-[#8F62AA]/10 rotate-12" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass-panel p-10 md:p-16 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-mono text-white/20">
                  {index + 1}/{TESTIMONIALS.length}
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#8F62AA] flex-shrink-0 shadow-[0_0_20px_#8F62AA40]">
                  <img src={TESTIMONIALS[index].avatar} alt={TESTIMONIALS[index].name} className="w-full h-full object-cover" />
                </div>
                
                <div>
                  <p className="text-xl md:text-2xl text-white/80 italic leading-relaxed mb-8">
                    "{TESTIMONIALS[index].content}"
                  </p>
                  <div>
                    <h4 className="text-xl font-bold">{TESTIMONIALS[index].name}</h4>
                    <p className="text-[#8F62AA] font-mono text-xs tracking-widest uppercase">{TESTIMONIALS[index].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#8F62AA] transition-colors group">
              <ChevronLeft className="w-6 h-6 group-hover:text-white" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#8F62AA] transition-colors group">
              <ChevronRight className="w-6 h-6 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
