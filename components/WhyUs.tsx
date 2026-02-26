
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Database, ArrowRight } from 'lucide-react';
import GrowthAuditTool from './GrowthAuditTool';

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="why-us">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="text-[#8F62AA]">Tathastu Digital</span> Exists
            </h2>
            <div className="w-20 h-1 bg-[#8F62AA] mx-auto mb-8" />
            <p className="text-xl text-white/70 leading-relaxed mb-12">
              The standard agency model is broken. Most agencies sell "packages" — 10 posts a month, $5k ad spend, monthly reports. 
              <br /><br />
              We don't sell hours. We build predictable systems that output growth. Think of us as the architectural firm for your brand's digital skyscraper.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {[
              { icon: <Database className="text-[#8F62AA]" />, title: 'Data-Centric', desc: 'Every move we make is backed by proprietary analytics.' },
              { icon: <Zap className="text-[#8F62AA]" />, title: 'High Velocity', desc: 'We deploy systems at the speed of the current internet.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-panel p-8 rounded-2xl border-white/5"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* User Engagement Activity Section */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Test Your Growth Engine</h3>
            <p className="text-white/40 font-mono text-xs uppercase tracking-[0.3em]">Initialize Diagnosis Sequence</p>
          </div>
          <GrowthAuditTool />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
