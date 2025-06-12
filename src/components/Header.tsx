
import { useState, useEffect } from 'react';
import { Menu, X, Building, Siren, Lock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prisonAlarm, setPrisonAlarm] = useState(false);

  const triggerAlarm = () => {
    setPrisonAlarm(true);
    setTimeout(() => setPrisonAlarm(false), 2000);
  };

  return (
    <header className={`bg-gradient-to-b from-card to-background text-foreground shadow-lg border-b-4 border-primary relative transition-all duration-500 ${prisonAlarm ? 'animate-pulse bg-destructive' : ''}`}>
      {/* Prison bar pattern overlay with animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="flex h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className={`flex-1 border-r border-border transition-all duration-300 ${prisonAlarm ? 'border-destructive animate-bounce' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Siren Animation */}
      {prisonAlarm && (
        <div className="absolute top-2 right-4 z-50">
          <Siren className="h-8 w-8 text-destructive animate-spin" />
          <div className="text-destructive text-xs font-bold animate-bounce">OI! ESCAPE PANNRAAN!</div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={triggerAlarm}>
            <div className="relative">
              <Building className="h-8 w-8 text-primary group-hover:animate-bounce transition-all" />
              <Lock className="h-4 w-4 text-primary/80 absolute -top-1 -right-1 group-hover:rotate-45 transition-transform" />
            </div>
            <div>
              <img 
                src="https://chin-tapak-dum-dum-development.zohostratus.com/teamlogo-removebg-preview.png" 
                alt="Team Logo" 
                className="h-12 w-auto"
              />
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:rotate-2 font-medium relative group border-b-2 border-transparent hover:border-purple-400">
              Cell Block-u
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#team" className="hover:text-pink-400 transition-all duration-300 hover:scale-110 hover:-rotate-2 font-medium relative group border-b-2 border-transparent hover:border-pink-400">
              Kaidi Maaplai
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#matches" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:rotate-2 font-medium relative group border-b-2 border-transparent hover:border-cyan-400">
              Yard Time-u
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#stats" className="hover:text-yellow-400 transition-all duration-300 hover:scale-110 hover:-rotate-2 font-medium relative group border-b-2 border-transparent hover:border-yellow-400">
              Rap Sheet-u
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#news" className="hover:text-green-400 transition-all duration-300 hover:scale-110 hover:rotate-2 font-medium relative group border-b-2 border-transparent hover:border-green-400">
              Cell Block News-u
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <button
            className="md:hidden hover:rotate-180 transition-transform duration-500 border-2 border-border rounded p-2 hover:border-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t-2 border-border pt-4 animate-fade-in bg-card/90 backdrop-blur-sm rounded-b-lg">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="py-2 hover:text-purple-400 transition-all hover:translate-x-2 border-l-4 border-transparent hover:border-purple-400 pl-4">🏠 Cell Block-u</a>
              <a href="#team" className="py-2 hover:text-pink-400 transition-all hover:translate-x-2 border-l-4 border-transparent hover:border-pink-400 pl-4">👥 Kaidi Maaplai</a>
              <a href="#matches" className="py-2 hover:text-cyan-400 transition-all hover:translate-x-2 border-l-4 border-transparent hover:border-cyan-400 pl-4">🏏 Yard Time-u</a>
              <a href="#stats" className="py-2 hover:text-yellow-400 transition-all hover:translate-x-2 border-l-4 border-transparent hover:border-yellow-400 pl-4">📊 Rap Sheet-u</a>
              <a href="#news" className="py-2 hover:text-green-400 transition-all hover:translate-x-2 border-l-4 border-transparent hover:border-green-400 pl-4">📰 Cell Block News-u</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
