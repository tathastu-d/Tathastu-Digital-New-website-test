
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grids & Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#8F62AA]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8F62AA]/10 rounded-full blur-[100px] animate-bounce duration-[8s]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-[#8F62AA]/30 bg-[#8F62AA]/5 text-[#8F62AA] text-xs font-mono tracking-widest uppercase">
            Est. 2024 • Next-Gen Laboratory
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tight"
        >
          We Don’t Run Ads.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8F62AA] to-white bg-[length:200%_auto] animate-gradient text-glow">
            We Build Growth Engines.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 font-light leading-relaxed"
        >
          Tathastu Digital is a next-generation growth agency that builds brands, scales revenue, 
          and creates unstoppable digital presence using content, performance marketing, and influencer ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="https://calendly.com/tathastudigital/growth-call"
            target="_blank"
            className="group relative px-10 py-5 bg-[#8F62AA] text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(143,98,170,0.3)] block"
          >
            <span className="relative z-10">Build My Growth Engine</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.4em] font-mono">Initiate Descent</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#8F62AA] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
