import React from 'react';

const Advisor: React.FC = () => {
  return (
    <section className="py-32 lg:py-48 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">
          
          <div className="w-full md:w-5/12 relative">
            <div className="relative bg-surface p-4 border border-white/10 shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuelbvBQc_itq1zs6dKXQFk9o9iZ0exYknIMS9yLJ2zNgYIhH8GNrtWamGJDm42UJLCr4lGwMu6zDakmNS2GRx6gYoayfo3wGw_sBoyQf2oZTDixIb710H-3TTL9crpdQmI4R4Lq6cJR5MJiPZuhHPx1P3_rxWPrso72fo4kv1UerKRTI6cfessVjoFyf4D00dYCn17RdLwcRkfyMj86WC4L41O5VZxfa84i1GufitGoWGmniwVwomr5EobXaXlCXUqj_Lx9a-3Q" 
                alt="Alexander Thorne" 
                className="w-full h-[500px] lg:h-[650px] object-cover portrait-mask grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute top-0 right-0 p-6">
                <div className="w-12 h-12 border-t border-r border-primary/50"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="w-12 h-12 border-b border-l border-primary/50"></div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12 text-left relative">
            <h2 className="text-sm font-display tracking-[0.6em] text-primary uppercase mb-12 font-bold">The Advisory Council</h2>
            <span className="material-symbols-outlined text-primary text-7xl mb-8 opacity-30">format_quote</span>
            <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-white/95 leading-[1.4] mb-16 italic font-light">
              "Plasma Gold represents a paradigm shift in the definition of liquidity. It is the necessary bridge that allows institutional capital to enter the digital space with absolute confidence."
            </p>
            
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-10 mb-16">
                <div className="w-16 h-px bg-primary/60"></div>
                <div>
                  <p className="text-white font-display tracking-[0.4em] text-xl uppercase font-bold">Alexander Thorne</p>
                  <p className="text-primary/80 text-[11px] tracking-[0.5em] uppercase mt-3 font-bold">Managing Director, Nexus Private Equity</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center w-full md:w-auto md:ml-24">
                <div className="flex items-center space-x-10 select-none">
                  <span className="material-symbols-outlined text-primary/40 text-2xl cursor-pointer hover:text-primary transition-colors hover:-translate-x-1">chevron_left</span>
                  <div className="flex space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full dot-glow"></div>
                    <div className="w-2 h-2 bg-white/10 rounded-full hover:bg-white/30 transition-colors cursor-pointer"></div>
                    <div className="w-2 h-2 bg-white/10 rounded-full hover:bg-white/30 transition-colors cursor-pointer"></div>
                  </div>
                  <span className="material-symbols-outlined text-primary/40 text-2xl cursor-pointer hover:text-primary transition-colors hover:translate-x-1">chevron_right</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advisor;