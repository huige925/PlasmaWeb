import React from 'react';

const videoSrc = new URL('../kling_20260127_4424_0.mp4', import.meta.url).href;

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-24 pb-12">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gray-900/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/20 z-10 opacity-80"></div>
      </div>

      <div className="relative z-20 text-center px-6 max-w-7xl">
        <p className="text-primary font-display text-sm tracking-[0.8em] mb-16 uppercase font-semibold animate-fade-in-up">
          Institutional Grade • Physical Settlement
        </p>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-display text-white mb-16 leading-[1.1] font-normal tracking-[0.05em] drop-shadow-lg">
          重新定义<br />
          <span className="text-primary italic">货币流动</span>方式
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light max-w-3xl mx-auto mb-20 leading-relaxed tracking-wide drop-shadow-md">
          The sovereign L1 blockchain architecture for global institutional liquidity. Physical gold backing meets absolute mathematical security.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <button className="text-white hover:text-primary font-display text-xs tracking-[0.5em] flex items-center uppercase transition-all duration-500 font-bold group">
            <span className="material-symbols-outlined mr-4 text-3xl group-hover:scale-110 transition-transform">play_circle</span> 
            Technical Blueprint
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background-dark to-transparent z-20"></div>
    </section>
  );
};

export default Hero;
