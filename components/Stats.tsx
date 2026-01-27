import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="bg-background-dark py-32 border-b border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0">
        <div className="flex flex-col items-center justify-center text-center group cursor-default">
          <span className="text-6xl lg:text-7xl font-serif text-white mb-4 font-light tracking-tighter group-hover:text-primary transition-colors duration-700">100k+</span>
          <span className="text-[11px] uppercase tracking-[0.5em] text-white/40 font-bold group-hover:text-white/60 transition-colors">Throughput Cap</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center border-y md:border-y-0 md:border-x border-white/10 py-12 md:py-0 group cursor-default">
          <span className="text-6xl lg:text-7xl font-serif text-white mb-4 font-light tracking-tighter group-hover:text-primary transition-colors duration-700">$4.2B</span>
          <span className="text-[11px] uppercase tracking-[0.5em] text-white/40 font-bold group-hover:text-white/60 transition-colors">Secured Reserve</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center group cursor-default">
          <span className="text-6xl lg:text-7xl font-serif text-white mb-4 font-light tracking-tighter group-hover:text-primary transition-colors duration-700">&lt;0.1s</span>
          <span className="text-[11px] uppercase tracking-[0.5em] text-white/40 font-bold group-hover:text-white/60 transition-colors">Settlement Speed</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;