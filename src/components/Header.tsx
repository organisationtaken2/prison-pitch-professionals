
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
    <header className={`bg-gradient-to-b from-stone-800 to-stone-900 text-stone-100 shadow-lg border-b-4 border-orange-600 relative transition-all duration-500 ${prisonAlarm ? 'animate-pulse bg-red-900' : ''}`}>
      {/* Prison bar pattern overlay with animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="flex h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className={`flex-1 border-r border-stone-600 transition-all duration-300 ${prisonAlarm ? 'border-red-500 animate-bounce' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Siren Animation */}
      {prisonAlarm && (
        <div className="absolute top-2 right-4 z-50">
          <Siren className="h-8 w-8 text-red-500 animate-spin" />
          <div className="text-red-500 text-xs font-bold animate-bounce">ESCAPE ALERT!</div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={triggerAlarm}>
            <div className="relative">
              <Building className="h-8 w-8 text-orange-400 group-hover:animate-bounce transition-all" />
              <Lock className="h-4 w-4 text-orange-600 absolute -top-1 -right-1 group-hover:rotate-45 transition-transform" />
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
            <a href="#home" className="hover:text-orange-400 transition-all duration-300 hover:scale-110 hover:rotate-2 font-medium relative group border-b-2 border-transparent hover:border-orange-400">
              Cell Block
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#team" className="hover:text-orange-400 transition-all duration-300 hover:scale-110 hover:-rotate-2 font-medium relative group border-b-2 border-transparent hover:border-orange-400">
              Inmates
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#matches" className="hover:text-orange-400 transition-all duration-300 hover:scale-110 hover:rotate-2 font-medium relative group border-b-2 border-transparent hover:border-orange-400">
              Yard Time
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#stats" className="hover:text-orange-400 transition-all duration-300 hover:scale-110 hover:-rotate-2 font-medium relative group border-b-2 border-transparent hover:border-orange-400">
              Rap Sheet
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#news" className="hover:text-orange-400 transition-all duration-300 hover:scale-110 hover:rotate-2 font-medium relative group border-b-2 border-transparent hover:border-orange-400">
              Cell Block News
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <button
            className="md:hidden hover:rotate-180 transition-transform duration-500 border-2 border-stone-600 rounded p-2 hover:border-orange-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t-2 border-stone-600 pt-4 animate-fade-in bg-stone-800/90 backdrop-blur-sm rounded-b-lg">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="py-2 hover:text-orange-400 transition-all hover:translate-x-2 border-l-4 border-transparent hover:border-orange-400 pl-4">🏠 Cell Block</a>
              <a href="#team" className="py-2 hover:text-orange-400 transition-all hover:translate-x-2 border-l-4 border-transparent hover:border-orange-400 pl-4">👥 Inmates</a>
              <a href="#matches" className="py-2 hover:text-orange-400 transition-all hover:translate-x-2 border-l-4 border-transparent hover:border-orange-400 pl-4">🏏 Yard Time</a>
              <a href="#stats" className="py-2 hover:text-orange-400 transition-all hover:translate-x-2 border-l-4 border-transparent hover:border-orange-400 pl-4">📊 Rap Sheet</a>
              <a href="#news" className="py-2 hover:text-orange-400 transition-all hover:translate-x-2 border-l-4 border-transparent hover:border-orange-400 pl-4">📰 Cell Block News</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
