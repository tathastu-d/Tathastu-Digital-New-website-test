
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Activity } from 'lucide-react';

interface NavbarProps {
  scrollProgress: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollProgress }) => {
  const [imgError, setImgError] = useState(false);
  const currentReach = Math.floor(1 + scrollProgress * 99);
  const barCount = 24;
  
  // Direct link to the user's logo from Google Drive
  const logoUrl = "https://drive.google.com/uc?export=view&id=1V5BoniEPFkrHeVvD4SOhw87PBYaCmfoG";

  return (
    <nav className="fixed top-0 w-full z-50 p-6 md:px-12 pointer-events-none">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <a href="/" className="flex items-center gap-4 group relative">
            <div className="relative z-10 flex items-center gap-4">
              <div className="relative h-12 w-auto flex items-center justify-center">
                {/* Logo Glow Backdrop */}
                <div className="absolute inset-0 bg-[#8F62AA]/40 blur-xl rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {!imgError ? (
                  <img 
                    src={logoUrl} 
                    alt="Tathastu Digital" 
                    onError={() => setImgError(true)}
                    className="h-10 w-auto object-contain brightness-125 drop-shadow-[0_0_10px_rgba(143,98,170,0.8)] transition-transform duration-500 group-hover:scale-110 relative z-10"
                  />
                ) : (
                  <div className="h-10 w-10 bg-white/5 border border-[#8F62AA]/50 rounded-lg flex items-center justify-center relative z-10 group-hover:bg-[#8F62AA]/10 transition-colors">
                    <Activity size={20} className="text-[#8F62AA] animate-pulse" />
                  </div>
                )}
                
                {/* Futuristic Scanning Line */}
                <motion.div 
                  className="absolute -inset-y-1 left-0 w-[1px] bg-[#8F62AA] shadow-[0_0_15px_#8F62AA]"
                  animate={{ x: [0, 120, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic leading-none">
                  Tathastu<span className="text-[#8F62AA]">Digital</span>
                </span>
                <span className="text-[7px] font-mono text-white/20 uppercase tracking-[0.4em] mt-1">Growth_Systems_Alpha</span>
              </div>
            </div>
          </a>
        </motion.div>
        
        <div className="flex items-center gap-6 md:gap-10 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-full px-5 py-2 group cursor-crosshair"
          >
            <div className="flex flex-col items-start mr-2 hidden xs:flex">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8F62AA] animate-pulse shadow-[0_0_5px_#8F62AA]" />
                <span className="text-[9px] font-mono text-white/40 tracking-[0.2em] uppercase leading-none">Live Growth</span>
              </div>
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-tighter leading-none">Optimization Active</span>
            </div>

            <div className="flex items-end gap-[1.5px] h-6 w-24 md:w-32 relative">
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5" />
              {[...Array(barCount)].map((_, i) => {
                const isActive = scrollProgress * barCount > i;
                const randomPeak = 0.4 + Math.sin(i * 0.5) * 0.3 + Math.random() * 0.2;
                const height = Math.max(15, randomPeak * 100);
                return (
                  <motion.div
                    key={i}
                    className="flex-1 min-w-[1px] rounded-t-[1px] relative overflow-hidden"
                    initial={{ height: '10%' }}
                    animate={{ 
                      height: isActive ? `${height}%` : '10%',
                      backgroundColor: isActive ? '#8F62AA' : 'rgba(255,255,255,0.05)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                );
              })}
            </div>

            <div className="flex flex-col items-center">
               <motion.span 
                 key={currentReach}
                 className="text-sm font-mono text-[#8F62AA] font-bold tracking-tight min-w-[3.5rem] text-right"
               >
                 {currentReach}.{Math.floor((scrollProgress * 100) % 10)}M
               </motion.span>
               <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest leading-none mt-0.5">Reach</span>
            </div>
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 glass-panel rounded-full flex items-center justify-center hover:bg-[#8F62AA]/20 transition-all border border-white/10 group"
          >
            <Menu className="w-5 h-5 group-hover:text-[#8F62AA]" />
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
