
import { CalendarDays, Trophy, Users, Zap, Shield, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [escapeAttempt, setEscapeAttempt] = useState(false);
  const [prisonerCount, setPrisonerCount] = useState(15);
  
  const funnyQuotes = [
    "Enna da... Boundary-ku ball poiduchu! Warden-u kooda clap pannaaru! 🏏",
    "Commissary-la cricket bat order panni... toilet paper kuda vaanginachu! 🧻⚡",
    "Naanga Dhoni-ya vida better... ana phone call panna mudiyaathu! 📞🔥",
    "Lock up-la Six adichu... neighboring cell-la poi vizhundhuchu! 💪",
    "Hard time serve pannitu... soft drinks-um serve pannrom canteen-la! 🥤🏏",
    "Umpire decision wrong-nu complaint panninom... RTI file panninachu! 📄",
    "Team captain election conduct panninachu... democracy success! 🗳️"
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
    <section id="home" className="bg-gradient-to-br from-background via-card to-secondary text-foreground py-20 relative overflow-hidden">
      {/* Animated prison grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className={`border-r border-border transition-all duration-1000 ${escapeAttempt ? 'animate-pulse border-destructive' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Searchlight animation */}
      <div className={`absolute inset-0 bg-gradient-radial from-primary/20 to-transparent transition-all duration-1000 ${escapeAttempt ? 'animate-ping' : ''}`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="bg-card/30 backdrop-blur-sm border-2 border-border rounded-lg p-8 mb-8 shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full animate-bounce">
                <span className="text-sm font-bold">PRISONER #001</span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground hover:text-primary transition-colors cursor-pointer hover:animate-wiggle" onClick={handleEscapeAttempt}>
              CHIN TAPAK <span className="text-primary animate-pulse hover:animate-bounce">DUM DUM</span>
              <div className="text-sm text-muted-foreground mt-2 animate-marquee">
                *Name suggested by team. Management not responsible for confusion.*
              </div>
            </h2>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto transition-all duration-500">
                {funnyQuotes[currentQuote]}
              </p>
            </div>
            
            {escapeAttempt && (
              <div className="animate-bounce text-destructive font-bold text-lg bg-destructive/20 border border-destructive rounded-lg p-4 mt-4">
                🚨 AYYO! ESCAPE PANNRAN! ALERT ALERT! 🚨
                <br />
                <span className="text-sm">Warden sir-ku inform panniten! GPS tracker ON achu! 📍</span>
                <br />
                <span className="text-xs animate-pulse">*Also mom-ku call panniten*</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <div className="flex items-center space-x-2 bg-card/50 px-4 py-2 rounded-lg border border-border hover:scale-110 transition-transform cursor-pointer group">
              <Trophy className="h-6 w-6 text-primary group-hover:animate-spin" />
              <span className="text-lg">5 Parole Jeyithu</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 px-4 py-2 rounded-lg border border-border hover:scale-110 transition-transform cursor-pointer group">
              <Users className="h-6 w-6 text-primary group-hover:animate-bounce" />
              <span className="text-lg">{prisonerCount} Active Kaidis</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 px-4 py-2 rounded-lg border border-border hover:scale-110 transition-transform cursor-pointer group">
              <CalendarDays className="h-6 w-6 text-primary group-hover:animate-pulse" />
              <span className="text-lg">2015-la Sentence Aachu</span>
            </div>
          </div>
          
          <div className="space-x-4">
            <a href="#team" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:scale-110 hover:rotate-3 hover:animate-wiggle">
              🔍 Kaidi Database (Password Protected) 👥
            </a>
            <a href="#matches" className="inline-block border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:scale-110 hover:-rotate-3 animate-pulse">
              📺 Live From Yard (No Commentary) 🏏
            </a>
          </div>
          
          {/* Fun scrolling ticker */}
          <div className="mt-8 bg-card/80 border-2 border-primary rounded-full p-3 overflow-hidden shadow-lg">
            <div className="animate-marquee whitespace-nowrap text-muted-foreground font-bold">
              🚨 BREAKING: Manoj-u century adichu celebration-la cake cut pannaan! • Someone stole the wickets (investigation ongoing) • New rule: No dancing after six! • Warden-u umpire duties additional-a vaangi! • Canteen-la cricket shaped samosa introduced! • WiFi password changed again (hint: captain's jersey number) • Rain dance practice cancelled due to rain • 🚨
            </div>
          </div>
          
          {/* Silly disclaimer */}
          <div className="mt-4 text-xs text-muted-foreground bg-card/50 border border-border rounded-lg p-2 hover:bg-card transition-all">
            ⚠️ <strong>Disclaimer:</strong> No actual prisoners were harmed during cricket matches. All injuries due to terrible bowling. Management not responsible for hurt egos. Please maintain 6 feet distance from Ragul when he's angry. Medical facility available (band-aids only). ⚠️
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
