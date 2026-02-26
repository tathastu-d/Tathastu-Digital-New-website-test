
import React, { useState } from 'react';
import { SOCIALS } from '../constants';
import { Activity } from 'lucide-react';

const Footer: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  // Direct link to the user's logo from Google Drive
  const logoUrl = "https://drive.google.com/uc?export=view&id=1V5BoniEPFkrHeVvD4SOhw87PBYaCmfoG";

  return (
    <footer className="py-20 border-t border-white/5 bg-[#0B0F14] relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="mb-8 flex items-center gap-5 group cursor-default">
              <div className="relative">
                <div className="absolute inset-0 bg-[#8F62AA]/30 blur-2xl rounded-full scale-150 opacity-50" />
                
                {!imgError ? (
                  <img 
                    src={logoUrl} 
                    alt="Tathastu Digital" 
                    onError={() => setImgError(true)}
                    className="h-16 w-auto object-contain brightness-110 drop-shadow-[0_0_15px_rgba(143,98,170,0.6)] transition-transform duration-500 hover:scale-105 relative z-10"
                  />
                ) : (
                  <div className="h-16 w-16 bg-white/5 border border-[#8F62AA]/40 rounded-xl flex items-center justify-center relative z-10">
                    <Activity size={32} className="text-[#8F62AA]" />
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <h3 className="text-4xl font-black tracking-tighter text-white italic uppercase">
                  Tathastu<span className="text-[#8F62AA]">Digital</span>
                </h3>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">Future_Growth_Laboratory</span>
              </div>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8 font-light">
              The next-generation laboratory for digital acceleration. We architect high-performance systems for the disruptors of the future.
            </p>
            <div className="flex gap-4">
              {SOCIALS.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/60 hover:text-[#8F62AA] hover:border-[#8F62AA] transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white/50 font-mono">Contact_Core</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex flex-col">
                <span className="text-[10px] text-white/20 uppercase font-mono">Location</span>
                Mumbai, India
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-white/20 uppercase font-mono">Encrypted_Mail</span>
                <a href="mailto:buisness@tathastudigital.co" className="hover:text-[#8F62AA] transition-colors">
                  buisness@tathastudigital.co
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-white/20 uppercase font-mono">Secure_Line</span>
                <a href="tel:+918976330555" className="hover:text-[#8F62AA] transition-colors">
                  +91 8976330555
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white/50 font-mono">Navigation</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-[#8F62AA] transition-colors">Growth Lab</a></li>
              <li><a href="#" className="hover:text-[#8F62AA] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#8F62AA] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#8F62AA] transition-colors">Privacy_Protocol</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-[10px] font-mono tracking-widest">
          <p>© 2024 TATHASTU DIGITAL // NEXT-GEN GROWTH SYSTEMS</p>
          <div className="flex gap-8">
            <p className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
              SYSTEMS_ONLINE
            </p>
            <p>LAT: 19.0760 N</p>
            <p>LON: 72.8777 E</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
