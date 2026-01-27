import React from 'react';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-48 lg:py-64 bg-background-dark relative flex items-center justify-center text-center px-8 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.03] select-none">
        <span className="watermark-text font-serif">PRESTIGE</span>
      </div>
      
      <div className="max-w-6xl relative z-10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-16 font-light">
          Simplicity is the <span className="italic text-primary">Ultimate</span> Sophistication
        </h2>
        
        <div className="flex items-center justify-center mb-16">
          <div className="w-24 md:w-48 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
          <div className="mx-6 md:mx-10 w-2.5 h-2.5 bg-primary rounded-full dot-glow"></div>
          <div className="w-24 md:w-48 h-px bg-gradient-to-l from-transparent via-primary/40 to-transparent"></div>
        </div>
        
        <p className="text-white/70 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto tracking-wide">
          We strip away the noise of traditional finance. No hidden fees, no opaque intermediaries. Pure mathematical stability for the digital age.
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;