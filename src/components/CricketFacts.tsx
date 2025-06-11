import { useState, useEffect } from 'react';
import { Trophy, Zap, Target, Award } from 'lucide-react';

const CricketFacts = () => {
  const [currentFact, setCurrentFact] = useState(0);
  
  const facts = [
    {
      icon: Trophy,
      title: "Championship Record",
      fact: "Our team holds the record for most consecutive wins in prison cricket history: 127 matches!",
      color: "text-yellow-400"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      fact: "Manoj 'Lightning' Prabhu once bowled a ball so fast it broke the speed camera!",
      color: "text-blue-400"
    },
    {
      icon: Target,
      title: "Perfect Aim",
      fact: "Surya 'The Keeper' has caught 847 balls without dropping a single one!",
      color: "text-green-400"
    },
    {
      icon: Award,
      title: "Legendary Hit",
      fact: "Piradeep once hit a six so hard it landed in the neighboring county prison!",
      color: "text-red-400"
    },
    {
      icon: Trophy,
      title: "Team Spirit",
      fact: "No player has ever attempted escape during cricket practice - that's true team loyalty!",
      color: "text-purple-400"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentFactData = facts[currentFact];
  const Icon = currentFactData.icon;

  return (
    <div className="bg-gradient-to-r from-stone-800 to-stone-700 p-6 rounded-lg border-2 border-amber-600 shadow-xl">
      <div className="text-center">
        <h3 className="text-xl font-bold text-amber-100 mb-4 flex items-center justify-center gap-2">
          🏏 Cricket Facts & Records
        </h3>
        
        <div className="min-h-[120px] flex flex-col items-center justify-center">
          <Icon className={`h-12 w-12 ${currentFactData.color} mb-3 animate-bounce`} />
          <h4 className="text-lg font-semibold text-amber-200 mb-2">{currentFactData.title}</h4>
          <p className="text-amber-100 max-w-md leading-relaxed">{currentFactData.fact}</p>
        </div>
        
        <div className="flex justify-center space-x-2 mt-4">
          {facts.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentFact ? 'bg-amber-400' : 'bg-stone-600'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CricketFacts;