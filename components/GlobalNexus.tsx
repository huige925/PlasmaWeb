import React from 'react';

const GlobalNexus: React.FC = () => {
  return (
    <section className="py-32 lg:py-48 bg-black relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-8 mb-24">
        <div className="text-center">
          <h2 className="text-sm font-display tracking-[0.7em] text-primary uppercase mb-8 font-bold">Global Nexus</h2>
          <h3 className="text-5xl md:text-8xl font-serif text-white font-light">Borderless Resilience</h3>
        </div>
      </div>
        
      {/* Full Width Map Container */}
      <div className="relative w-full h-[60vh] min-h-[500px] bg-surface border-y border-white/10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] group">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQbrXqZtpY8QpKl6y5n0AJZ0PX9-srdvwVjX4miaC9DAXCaBYGAj-EERdb1HgCyH1hsf4KRyikXCMezQb4VphPJ1MMaNE189tfTMYn7Cr0uv--hgg7WP6R-BijCuXmrur4iN1XEB_3ZN7eFwwxWG7G8ZEGFRU4gIRqfdl3c5RPlkNCRz6yuc4_jdUXOrqsxeqeAINbgLpLgp2qfRpekDJuCtiJjRM7UutWmNwmwNmlvuCEWPAb5oDExos_JhWaoHZQE7NqHxIOSQ" 
          alt="World Map Network" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale contrast-125 scale-105 group-hover:scale-100 transition-transform duration-[3s]"
        />
        
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80"></div>
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
            <path className="map-line" d="M280,300 Q600,200 800,400" pathLength="1"></path>
            <path className="map-line" d="M800,400 Q1000,300 1200,250" pathLength="1"></path>
            <path className="map-line" d="M800,400 Q700,550 640,600" pathLength="1"></path>
            <path className="map-line" d="M1200,250 Q1300,350 1360,500" pathLength="1"></path>
        </svg>
        
        {/* Animated Dots - Adjusted positions for larger container */}
        <div className="absolute top-[35%] left-[20%] w-3 h-3 bg-primary rounded-full dot-glow animate-pulse"></div>
        <div className="absolute top-[50%] left-[55%] w-4 h-4 bg-primary rounded-full dot-glow animate-pulse delay-300"></div>
        <div className="absolute top-[30%] left-[83%] w-3 h-3 bg-primary rounded-full dot-glow animate-pulse delay-700"></div>
        <div className="absolute top-[75%] left-[45%] w-3 h-3 bg-primary rounded-full dot-glow animate-pulse delay-150"></div>
        <div className="absolute top-[65%] left-[90%] w-3 h-3 bg-primary rounded-full dot-glow animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 mt-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-center">
          <div>
            <p className="text-white text-5xl lg:text-6xl font-serif font-light">142</p>
            <p className="text-[11px] text-white/50 uppercase tracking-[0.5em] mt-8 font-bold">Active Validators</p>
          </div>
          <div>
            <p className="text-white text-5xl lg:text-6xl font-serif font-light">28</p>
            <p className="text-[11px] text-white/50 uppercase tracking-[0.5em] mt-8 font-bold">Jurisdictions</p>
          </div>
          <div>
            <p className="text-white text-5xl lg:text-6xl font-serif font-light">1.2M+</p>
            <p className="text-[11px] text-white/50 uppercase tracking-[0.5em] mt-8 font-bold">Daily Operations</p>
          </div>
          <div>
            <p className="text-white text-5xl lg:text-6xl font-serif font-light">99.99%</p>
            <p className="text-[11px] text-white/50 uppercase tracking-[0.5em] mt-8 font-bold">Uptime Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNexus;