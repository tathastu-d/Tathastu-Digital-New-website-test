
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Globe, ExternalLink, TrendingUp, Zap, BarChart3, Activity } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Source {
  title: string;
  uri: string;
}

interface Message {
  role: 'user' | 'ai';
  content: string;
  sources?: Source[];
}

const NeuralAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'ai', 
      content: "Neural Protocol Active. I have established a high-velocity link with global marketing data. I can provide real-time news, viral campaign breakdowns, and growth tactics. What intelligence do you require?" 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const cleanText = (text: string) => {
    // Remove all markdown formatting for a clean, professional plain-text look
    return text.replace(/\*/g, '').replace(/#/g, '').replace(/_/g, '').replace(/`/g, '').trim();
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    try {
      // Create fresh instance for latest key/config
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Switched to gemini-3-flash-preview for ultra-fast response times
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the 'Tathastu Marketing Oracle'. 
          
          MISSION:
          - Provide instant marketing intelligence.
          - Use Google Search for the absolute latest marketing news and campaigns.
          - Explain the STRATEGIC VALUE of every news piece.

          STRICT FORMATTING:
          - DO NOT USE ASTERISKS (*) OR MARKDOWN.
          - Use plain text only.
          - Ensure the language is extremely clear and understandable for everyone.
          - No jargon without an immediate simple explanation.
          
          Tone: Futuristic, lightning-fast, and precise.`,
          tools: [{ googleSearch: {} }],
        },
      });

      let aiText = response.text || "Communication relay failure. Please re-initialize.";
      aiText = cleanText(aiText);

      const sources: Source[] = [];
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (groundingChunks) {
        groundingChunks.forEach((chunk: any) => {
          if (chunk.web && chunk.web.uri) {
            sources.push({
              title: chunk.web.title || 'Market Intelligence',
              uri: chunk.web.uri
            });
          }
        });
      }

      const uniqueSources = Array.from(new Map(sources.map(s => [s.uri, s])).values());

      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: aiText,
        sources: uniqueSources.length > 0 ? uniqueSources : undefined
      }]);
    } catch (error) {
      console.error("Marketing Oracle Error:", error);
      setMessages(prev => [...prev, { role: 'ai', content: "Grid interference detected. I am stabilizing the connection. Please send your query again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute bottom-20 right-0 w-[94vw] sm:w-[450px] md:w-[520px] h-[80vh] max-h-[750px] glass-panel rounded-[2.5rem] overflow-hidden border-[#8F62AA]/40 flex flex-col shadow-[0_50px_120px_rgba(0,0,0,0.7),0_0_100px_rgba(143,98,170,0.2)] ring-1 ring-white/10"
          >
            {/* Animated Scanning Header */}
            <div className="relative p-7 border-b border-white/10 bg-black/60 backdrop-blur-3xl flex justify-between items-center z-20">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8F62AA]/10 to-transparent pointer-events-none"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="flex items-center gap-5">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 border-2 border-dashed border-[#8F62AA]/40 rounded-full" 
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-8 h-8 bg-[#8F62AA]/20 rounded-full flex items-center justify-center border border-[#8F62AA]"
                  >
                    <Activity size={16} className="text-[#8F62AA]" />
                  </motion.div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-white uppercase tracking-tighter text-lg">Tathastu Oracle</span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                      <span className="text-[9px] font-mono text-[#8F62AA] uppercase font-bold">Velocity_Mode</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-white/40 font-mono tracking-[0.3em] uppercase">Real-Time News Engine Active</span>
                </div>
              </div>

              <button 
                onClick={() => setIsOpen(false)} 
                className="group w-11 h-11 rounded-2xl bg-white/5 hover:bg-red-500/10 hover:border-red-500/40 border border-white/5 flex items-center justify-center text-white/30 hover:text-red-500 transition-all"
              >
                <X size={24} className="group-hover:rotate-180 transition-transform duration-500" />
              </button>
            </div>

            {/* Immersive Chat Interface */}
            <div 
              ref={scrollRef} 
              className="flex-1 overflow-y-auto p-7 space-y-10 no-scrollbar relative bg-[#0B0F14]/40"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#8F62AA10,transparent_50%)] pointer-events-none" />

              {messages.map((m, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`group relative max-w-[90%] p-6 rounded-[2rem] text-[15px] leading-relaxed transition-all ${
                    m.role === 'user' 
                      ? 'bg-[#8F62AA] text-white rounded-tr-none shadow-[0_15px_40px_rgba(143,98,170,0.3)] border border-[#8F62AA]/20' 
                      : 'bg-white/[0.04] border border-white/10 text-white/90 rounded-tl-none backdrop-blur-xl shadow-2xl'
                  }`}>
                    {m.role === 'ai' && (
                       <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                        className="absolute -left-[2px] top-0 w-[2px] bg-[#8F62AA] opacity-50"
                       />
                    )}
                    <div className="whitespace-pre-wrap">{m.content}</div>
                    
                    {m.sources && m.sources.length > 0 && (
                      <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp size={12} className="text-[#8F62AA]" />
                          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30">Verified Campaign Data</span>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          {m.sources.map((source, idx) => (
                            <motion.a 
                              whileHover={{ x: 8, backgroundColor: 'rgba(143, 98, 170, 0.15)' }}
                              key={idx}
                              href={source.uri}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 group/link transition-all"
                            >
                              <div className="flex items-center gap-4 truncate">
                                <Globe size={14} className="text-[#8F62AA] group-hover/link:animate-spin" />
                                <span className="text-white/70 group-hover/link:text-white truncate font-semibold text-xs tracking-tight">{source.title}</span>
                              </div>
                              <ExternalLink size={14} className="text-white/20 group-hover/link:text-[#8F62AA]" />
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {/* High-Fidelity Neural Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/[0.05] border border-white/10 p-6 rounded-[2rem] rounded-tl-none flex flex-col gap-4 min-w-[180px]">
                      <div className="flex items-center gap-3">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              scale: [1, 1.5, 1],
                              backgroundColor: ['#8F62AA40', '#8F62AA', '#8F62AA40'],
                              boxShadow: ['0 0 0px #8F62AA00', '0 0 15px #8F62AA', '0 0 0px #8F62AA00']
                            }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 1, 
                              delay: i * 0.15,
                              ease: "easeInOut"
                            }}
                            className="w-2.5 h-2.5 rounded-full"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="relative w-4 h-4">
                           <Zap size={16} className="text-[#8F62AA] absolute inset-0 animate-pulse" />
                         </div>
                         <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-[#8F62AA] uppercase tracking-widest font-bold">Neural_Search</span>
                            <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em] whitespace-nowrap">Scanning Marketing Grid...</span>
                         </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Premium Input Hub */}
            <div className="p-7 bg-black/80 border-t border-white/10 backdrop-blur-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
              <div className="relative group">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask for the latest news or growth tips..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-7 py-5 text-[15px] focus:outline-none focus:border-[#8F62AA] focus:ring-4 focus:ring-[#8F62AA]/10 transition-all placeholder:text-white/20 text-white"
                />
                <motion.button 
                  onClick={handleSend}
                  disabled={isTyping}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-[#8F62AA] text-white flex items-center justify-center transition-all disabled:opacity-20 shadow-[0_10px_30px_rgba(143,98,170,0.6)]"
                >
                  <Send size={22} className={isTyping ? 'animate-ping' : ''} />
                </motion.button>
              </div>
              
              <div className="mt-5 overflow-x-auto no-scrollbar flex gap-3 pb-1">
                 {[
                   { label: "Latest News", query: "What is the biggest marketing news in the last 24 hours?" },
                   { label: "Viral Campaigns", query: "Show me viral marketing campaigns happening right now." },
                   { label: "Scale Tip", query: "Give me a high-impact tip to scale a brand on social media." }
                 ].map((chip, idx) => (
                   <button 
                    key={idx}
                    onClick={() => setInput(chip.query)}
                    className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-[9px] font-mono text-white/40 hover:text-[#8F62AA] hover:border-[#8F62AA]/40 hover:bg-[#8F62AA]/5 transition-all uppercase tracking-[0.1em]"
                   >
                     {chip.label}
                   </button>
                 ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08, y: -8 }}
        whileTap={{ scale: 0.9 }}
        className={`w-18 h-18 rounded-3xl flex items-center justify-center shadow-[0_25px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(143,98,170,0.4)] border-2 transition-all relative overflow-hidden group p-4 ${
          isOpen 
          ? 'bg-white border-white text-[#8F62AA]' 
          : 'bg-[#8F62AA] border-[#8F62AA]/50 text-white'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 180, opacity: 0 }}>
              <X size={32} strokeWidth={3} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 2, opacity: 0 }} className="relative">
              <Sparkles size={34} className="animate-pulse" />
              <motion.div 
                className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-[3px] border-[#8F62AA] shadow-[0_0_15px_rgba(239,68,68,0.8)] flex items-center justify-center"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default NeuralAssistant;
