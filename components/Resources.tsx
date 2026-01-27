import React from 'react';

const Resources: React.FC = () => {
  return (
    <section className="py-32 lg:py-48 px-8 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 lg:mb-32 gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-sm font-display tracking-[0.7em] text-primary uppercase mb-8 font-bold">Knowledge Base</h2>
            <h3 className="text-5xl lg:text-8xl font-serif text-white font-light">Resource Center</h3>
          </div>
          <a href="#archive" className="text-white/70 hover:text-primary transition-all duration-500 text-[11px] tracking-[0.4em] uppercase border-b border-white/20 pb-4 font-bold">View Full Archive →</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="glass-card p-12 group cursor-pointer border-white/10 hover:-translate-y-3 bg-surface/40 flex flex-col h-full">
            <p className="text-[10px] text-primary tracking-[0.6em] uppercase mb-12 font-bold">Protocol Whitepaper</p>
            <h4 className="text-3xl font-serif text-white mb-8 font-light leading-tight">The Consensus of Value</h4>
            <p className="text-lg text-white/50 leading-relaxed mb-16 font-light flex-grow">An exhaustive analysis of our proprietary proof-of-stability consensus mechanism.</p>
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-700">
              <span className="material-symbols-outlined text-xl rotate-0 group-hover:rotate-45 transition-transform">arrow_outward</span>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="glass-card p-12 group cursor-pointer border-white/10 hover:-translate-y-3 bg-surface/40 flex flex-col h-full">
            <p className="text-[10px] text-primary tracking-[0.6em] uppercase mb-12 font-bold">Tokenomics 2.0</p>
            <h4 className="text-3xl font-serif text-white mb-8 font-light leading-tight">Gold Standard 2.0</h4>
            <p className="text-lg text-white/50 leading-relaxed mb-16 font-light flex-grow">Algorithmic stability protocols and collateralized reserve management structures.</p>
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-700">
              <span className="material-symbols-outlined text-xl rotate-0 group-hover:rotate-45 transition-transform">arrow_outward</span>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="glass-card p-12 group cursor-pointer border-white/10 hover:-translate-y-3 bg-surface/40 flex flex-col h-full">
            <p className="text-[10px] text-primary tracking-[0.6em] uppercase mb-12 font-bold">Strategy & Roadmap</p>
            <h4 className="text-3xl font-serif text-white mb-8 font-light leading-tight">Phase 4: Global Nexus</h4>
            <p className="text-lg text-white/50 leading-relaxed mb-16 font-light flex-grow">The strategic blueprint for the integration of physical gold and digital assets.</p>
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-700">
              <span className="material-symbols-outlined text-xl rotate-0 group-hover:rotate-45 transition-transform">arrow_outward</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;