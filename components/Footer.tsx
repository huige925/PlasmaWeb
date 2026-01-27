import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark pt-48 pb-16 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24 mb-32">
          <div className="max-w-lg">
            <span className="text-primary font-display text-3xl tracking-[0.4em] uppercase mb-12 block font-bold">Plasma Gold</span>
            <p className="text-lg text-white/50 leading-relaxed mb-12 font-light">
              Redefining the global financial standard through sovereign digital architecture and institutional-grade stability. Built for the future of capital, anchored in the past's most reliable asset.
            </p>
            <div className="flex space-x-10">
              <a href="#" className="text-white/50 hover:text-primary transition-colors hover:scale-110 transform duration-300">
                <span className="material-symbols-outlined text-3xl">language</span>
              </a>
              <a href="#" className="text-white/50 hover:text-primary transition-colors hover:scale-110 transform duration-300">
                <span className="material-symbols-outlined text-3xl">terminal</span>
              </a>
              <a href="#" className="text-white/50 hover:text-primary transition-colors hover:scale-110 transform duration-300">
                <span className="material-symbols-outlined text-3xl">account_tree</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-24 gap-y-16">
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.6em] text-white/80 mb-10 font-bold">Protocol</h5>
              <ul className="space-y-6 text-[10px] text-white/50 uppercase tracking-[0.4em] font-bold">
                <li><a href="#" className="hover:text-white transition-colors">Network Explorer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Staking Hub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Validator Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.6em] text-white/80 mb-10 font-bold">Institution</h5>
              <ul className="space-y-6 text-[10px] text-white/50 uppercase tracking-[0.4em] font-bold">
                <li><a href="#" className="hover:text-white transition-colors">Reserve Report</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custody Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Foundation</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.6em] text-white/80 mb-10 font-bold">Legal</h5>
              <ul className="space-y-6 text-[10px] text-white/50 uppercase tracking-[0.4em] font-bold">
                <li><a href="#" className="hover:text-white transition-colors">Governance Charter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-12 opacity-30"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 uppercase tracking-[0.6em] gap-8 font-bold">
          <p>© 2024 Plasma Gold Foundation. All rights reserved.</p>
          <div className="flex items-center space-x-8">
            <span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>
            <p>Designed for the Institutional Sovereign.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;