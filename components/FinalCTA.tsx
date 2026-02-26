
import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Black Hole / Portal Background */}
      <div className="absolute inset-0 bg-[#0B0F14]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_40%,#8F62AA_100%)] animate-pulse" />
           <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#0B0F14)]" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-panel p-12 md:p-24 rounded-[40px] text-center border-white/5 relative overflow-hidden">
          {/* Inner Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#8F62AA30,transparent_70%)]" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              The Future of Growth <br />
              <span className="text-[#8F62AA]">Is Not Ads. It’s Systems.</span>
            </h2>
            
            <p className="max-w-2xl mx-auto text-lg text-white/50 mb-12">
              Ready to stop gambling with your marketing budget and start building a predictable growth engine? 
              The activation sequence starts with a single call.
            </p>

            <a 
              href="https://calendly.com/tathastudigital/growth-call"
              target="_blank"
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#8F62AA] text-white font-bold text-xl rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(143,98,170,0.5)]"
            >
              <span className="relative z-10">Book Your Growth Call</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <div className="mt-8 flex items-center justify-center gap-8 text-white/30 font-mono text-[10px] tracking-[0.3em] uppercase">
              <span>Secure Connection</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Available Slots: 03</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
