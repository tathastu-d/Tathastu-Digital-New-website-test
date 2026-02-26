
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Added Sparkles to the imported icons from lucide-react
import { ShieldCheck, Rocket, ChevronRight, Activity, Cpu, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const GrowthAuditTool: React.FC = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ niche: '', currentReach: '', goal: '' });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);

  const handleNext = () => setStep(step + 1);
  
  const runAnalysis = async () => {
    setIsAnalyzing(true);
    try {
      // Correctly initializing GoogleGenAI within the function to ensure the latest API key is used
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Generate a high-level 3-point tactical growth blueprint for a brand in the ${data.niche} niche currently seeing ${data.currentReach} monthly reach. Focus on 'Social Media Domination', 'Performance Engines', and 'Influencer Synergy'. Make it sound futuristic and ultra-effective. Return as a plain string of text, about 60 words.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "You are the Tathastu Growth Engine. You provide data-driven, futuristic-sounding marketing strategies. Use words like 'activation', 'leverage', 'velocity', and 'mindshare'.",
        }
      });
      
      // Accessing .text property directly as per guidelines
      setAiAnalysis(response.text || "Analysis complete. Neural models suggest vertical scaling.");
      setStep(4);
    } catch (e) {
      setAiAnalysis("Neural link unstable. Core recommendation: Execute aggressive omni-channel saturation.");
      setStep(4);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-panel p-8 md:p-12 rounded-[2rem] border-[#8F62AA]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-10">
          <Activity className="w-24 h-24 text-[#8F62AA]" />
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h4 className="text-xl font-bold mb-6">Which sector is your brand dominating?</h4>
              <div className="grid grid-cols-2 gap-4">
                {['E-commerce', 'SaaS', 'Personal Brand', 'Real Estate', 'Education', 'Fintech'].map(n => (
                  <button
                    key={n}
                    onClick={() => { setData({ ...data, niche: n }); handleNext(); }}
                    className="p-4 rounded-xl border border-white/10 hover:border-[#8F62AA] hover:bg-[#8F62AA]/5 text-sm font-medium transition-all text-left"
                  >
                    {n}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h4 className="text-xl font-bold mb-6">Current average monthly reach?</h4>
              <div className="space-y-4">
                {['< 10k', '10k - 100k', '100k - 1M', '1M+'].map(r => (
                  <button
                    key={r}
                    onClick={() => { setData({ ...data, currentReach: r }); handleNext(); }}
                    className="w-full p-4 rounded-xl border border-white/10 hover:border-[#8F62AA] hover:bg-[#8F62AA]/5 text-sm font-medium transition-all flex justify-between items-center"
                  >
                    {r} <ChevronRight className="w-4 h-4 opacity-40" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              {isAnalyzing ? (
                <div className="py-12">
                  <div className="relative w-20 h-20 mx-auto mb-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-t-2 border-[#8F62AA] rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-2 border-r-2 border-[#8F62AA]/40 rounded-full"
                    />
                    <Cpu className="absolute inset-0 m-auto text-[#8F62AA] animate-pulse" />
                  </div>
                  <p className="font-mono text-sm text-[#8F62AA] tracking-[0.2em] animate-pulse uppercase">Neural Engine Processing...</p>
                </div>
              ) : (
                <>
                  <h4 className="text-xl font-bold mb-4">Synthesize Your Strategy?</h4>
                  <p className="text-white/50 mb-8">The AI will analyze your {data.niche} brand metrics against our 3.5X ROI proprietary model.</p>
                  <button
                    onClick={runAnalysis}
                    className="px-10 py-4 bg-[#8F62AA] text-white font-bold rounded-xl shadow-[0_0_20px_#8F62AA50] flex items-center gap-3 mx-auto"
                  >
                    <Sparkles className="w-5 h-5" /> GENERATE BLUEPRINT
                  </button>
                </>
              )}
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight uppercase font-mono">Activation Protocol Found</h4>
              
              <div className="bg-white/5 rounded-2xl p-6 mb-8 text-left border border-white/10 relative group">
                <div className="absolute -top-3 left-4 px-2 bg-[#0B0F14] text-[10px] text-[#8F62AA] font-mono tracking-widest uppercase">Proprietary_Strategy_Output</div>
                <p className="text-white/80 text-sm leading-relaxed font-light italic">
                  "{aiAnalysis}"
                </p>
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-white/20">
                  <span>UN-TAPPED GAP: 285%</span>
                  <span>CONFIDENCE: 98.4%</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="https://calendly.com/tathastudigital/growth-call"
                  target="_blank"
                  className="w-full py-4 bg-[#8F62AA] text-white font-bold rounded-xl flex items-center justify-center gap-2 group overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  <Rocket className="w-5 h-5 relative z-10" /> 
                  <span className="relative z-10">ACTIVATE BLUEPRINT NOW</span>
                </a>
                <button onClick={() => setStep(1)} className="text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest font-mono">
                  Reset Diagnosis
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GrowthAuditTool;
