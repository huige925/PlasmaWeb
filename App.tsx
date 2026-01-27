import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Advisor from './components/Advisor';
import QuoteSection from './components/QuoteSection';
import Resources from './components/Resources';
import GlobalNexus from './components/GlobalNexus';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Advisor />
        <QuoteSection />
        <Resources />
        <GlobalNexus />
      </main>
      <Footer />
    </div>
  );
};

export default App;