import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 px-8 lg:px-20 py-6 flex justify-between items-center transition-all duration-300 border-b ${scrolled ? 'bg-background-dark/95 backdrop-blur-2xl border-white/10 py-4' : 'bg-transparent border-white/5'}`}>
      <div className="flex items-center space-x-3">
        <span className="text-primary font-display text-xl lg:text-2xl tracking-[0.25em] uppercase font-bold">Plasma Gold</span>
      </div>
      <div className="hidden lg:flex space-x-12 text-[10px] uppercase tracking-[0.4em] font-bold text-white/80">
        <a href="#ecosystem" className="hover:text-primary transition-colors">Ecosystem</a>
        <a href="#network" className="hover:text-primary transition-colors">Network</a>
        <a href="#institutional" className="hover:text-primary transition-colors">Institutional</a>
        <a href="#governance" className="hover:text-primary transition-colors">Governance</a>
      </div>
      <button className="border border-primary/40 px-8 py-3 text-[10px] uppercase tracking-[0.3em] text-primary font-bold hover:bg-primary hover:text-black transition-all duration-500">
        Access Protocol
      </button>
    </nav>
  );
};

export default Navbar;