
import { CalendarDays, Trophy, Users, Zap, Shield, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [escapeAttempt, setEscapeAttempt] = useState(false);
  const [prisonerCount, setPrisonerCount] = useState(15);
  
  const funnyQuotes = [
    "Apdi podra... losing streak-a break pannitom! 🏏",
    "Time serve pannitu... ace-um serve pannrom! ⚡",
    "Naanga batting-a criminal-a pottu thakkarom! 🔥",
    "Lock up-la irukkom ana locked down illiye! 💪",
    "Hard time pannitu... hard ball-um hit pannrom! 🏏"
  ];
  
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % funnyQuotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleEscapeAttempt = () => {
    setEscapeAttempt(true);
    setPrisonerCount(prev => Math.max(0, prev - 1));
    setTimeout(() => {
      setEscapeAttempt(false);
      setPrisonerCount(15); // They got caught and brought back!
    }, 3000);
  };

  return (
    <section id="home" className="bg-gradient-to-br from-amber-800 via-orange-900 to-red-900 text-amber-50 py-20 relative overflow-hidden">
      {/* Animated prison grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className={`border-r border-amber-600 transition-all duration-1000 ${escapeAttempt ? 'animate-pulse border-red-500' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Searchlight animation */}
      <div className={`absolute inset-0 bg-gradient-radial from-yellow-300/20 to-transparent transition-all duration-1000 ${escapeAttempt ? 'animate-ping' : ''}`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="bg-amber-900/30 backdrop-blur-sm border-2 border-amber-600 rounded-lg p-8 mb-8 shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-600 text-white px-4 py-2 rounded-full animate-bounce">
                <span className="text-sm font-bold">PRISONER #001</span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-amber-100 hover:text-purple-300 transition-colors cursor-pointer" onClick={handleEscapeAttempt}>
              CHIN TAPAK <span className="text-purple-300 animate-pulse">DUM DUM</span>
            </h2>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-amber-200 max-w-3xl mx-auto transition-all duration-500">
                {funnyQuotes[currentQuote]}
              </p>
            </div>
            
            {escapeAttempt && (
              <div className="animate-bounce text-pink-400 font-bold text-lg">
                🚨 OI OI! ESCAPE PANNA TRY PANNRIYAA! 🚨
                <br />
                <span className="text-sm">Yellam prisoners kanakku correct-a irukku da!</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <div className="flex items-center space-x-2 bg-amber-800/50 px-4 py-2 rounded-lg border border-amber-600 hover:scale-110 transition-transform cursor-pointer group">
              <Trophy className="h-6 w-6 text-amber-300 group-hover:animate-spin" />
              <span className="text-lg">5 Parole Jeyithu</span>
            </div>
            <div className="flex items-center space-x-2 bg-amber-800/50 px-4 py-2 rounded-lg border border-amber-600 hover:scale-110 transition-transform cursor-pointer group">
              <Users className="h-6 w-6 text-purple-300 group-hover:animate-bounce" />
              <span className="text-lg">{prisonerCount} Active Kaidis</span>
            </div>
            <div className="flex items-center space-x-2 bg-amber-800/50 px-4 py-2 rounded-lg border border-amber-600 hover:scale-110 transition-transform cursor-pointer group">
              <CalendarDays className="h-6 w-6 text-pink-300 group-hover:animate-pulse" />
              <span className="text-lg">2015-la Sentence Aachu</span>
            </div>
          </div>
          
          <div className="space-x-4">
            <a href="#team" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:scale-105 hover:rotate-1">
              Kaidi List Paakkalaam 👥
            </a>
            <a href="#matches" className="inline-block border-2 border-purple-500 text-purple-200 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:scale-105 hover:-rotate-1">
              Latest Yard Match 🏏
            </a>
          </div>
          
          {/* Fun scrolling ticker */}
          <div className="mt-8 bg-gradient-to-r from-purple-800/80 to-pink-800/80 border border-purple-500 rounded-full p-2 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-purple-200">
              🚨 BREAKING: Team-oda vera match jeyithuchu • Indha week escape illa! • Commissary-la extra cricket bats kuduthaanga • Warden pudhu uniform approve panniyaachu • 🚨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
