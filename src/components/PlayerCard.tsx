
import { useState } from 'react';
import { Lock, Users, Calendar, AlertTriangle } from 'lucide-react';

interface PlayerCardProps {
  name: string;
  prisonerNumber: string;
  position: string;
  sentence: string;
  crime: string;
  image: string;
  stats: {
    matches: number;
    runs: number;
    wickets: number;
    average: string;
  };
}

const PlayerCard = ({ name, prisonerNumber, position, sentence, crime, image, stats }: PlayerCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isEscaping, setIsEscaping] = useState(false);

  const handleEscapeAttempt = () => {
    setIsEscaping(true);
    setTimeout(() => setIsEscaping(false), 2000);
  };

  const behaviorRating = Math.floor(Math.random() * 5) + 1;
  const dangerLevel = ['😇 Angel', '😊 Good Boy', '😐 Neutral', '😏 Mischief', '🔥 Trouble'][Math.floor(Math.random() * 5)];

  return (
    <div className={`relative perspective-1000 h-96 ${isEscaping ? 'animate-bounce' : ''}`}>
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Side - Mugshot */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-gradient-to-b from-stone-700 to-stone-800 border-2 border-amber-700 rounded-lg overflow-hidden hover:border-amber-500 transition-all duration-300 hover:shadow-xl shadow-amber-900/30 h-full cursor-pointer"
               onClick={() => setIsFlipped(true)}>
            
            {/* Mugshot-style photo */}
            <div className="relative">
              <div className="bg-gradient-to-b from-stone-600 to-stone-700 h-48 flex items-center justify-center border-b-2 border-amber-700 relative overflow-hidden">
                {/* Prison ID backdrop */}
                <div className="absolute inset-0 bg-stone-600 opacity-20">
                  <div className="grid grid-cols-8 h-full">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="border-r border-stone-500"></div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center z-10">
                  <div className="w-24 h-24 rounded-full mx-auto mb-2 border-4 border-amber-600 shadow-lg hover:animate-spin cursor-pointer overflow-hidden relative"
                       onClick={handleEscapeAttempt}>
                    <img 
                      src={image} 
                      alt={`${name} mugshot`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full bg-stone-500 flex items-center justify-center">
                      <span className="text-2xl font-bold text-amber-100">{name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    {/* Jail bars overlay */}
                    <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="w-0.5 h-full bg-stone-700 opacity-60"></div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-amber-900 text-amber-100 px-3 py-1 text-xs font-mono border border-amber-600 rounded">
                    #{prisonerNumber}
                  </div>
                </div>
                
                {/* Height measurement lines */}
                <div className="absolute right-2 top-0 bottom-0 w-8 bg-stone-500/30 flex flex-col justify-between text-xs text-amber-300 py-2">
                  <div>6'</div>
                  <div>5'</div>
                  <div>4'</div>
                </div>
              </div>
              
              <div className="absolute top-2 right-2 bg-amber-600 text-amber-50 px-2 py-1 text-xs font-bold rounded border border-amber-500 animate-pulse">
                {position}
              </div>
              
              <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded animate-bounce">
                {dangerLevel}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-bold text-amber-100 mb-2 hover:text-orange-400 transition-colors">{name}</h3>
              <div className="space-y-1 text-xs">
                <p className="text-amber-200">
                  <span className="text-amber-300 font-semibold">Sentence:</span> {sentence}
                </p>
                <p className="text-amber-200">
                  <span className="text-amber-300 font-semibold">Crime:</span> {crime}
                </p>
                <div className="flex items-center space-x-1 mt-2">
                  <Lock className="h-3 w-3 text-amber-500" />
                  <span className="text-amber-300 text-xs">Behavior: {'⭐'.repeat(behaviorRating)}</span>
                </div>
              </div>
              
              <div className="text-center mt-3">
                <span className="text-xs text-amber-400 hover:text-amber-300 cursor-pointer">
                  Click to see rap sheet →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side - Stats */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-gradient-to-b from-stone-700 to-stone-800 border-2 border-amber-700 rounded-lg p-4 h-full cursor-pointer"
               onClick={() => setIsFlipped(false)}>
            
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-amber-100 mb-2">Criminal Record 📋</h3>
              <div className="bg-red-900 text-red-100 px-3 py-1 text-xs font-mono border border-red-600 rounded">
                CLASSIFIED STATS
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-stone-600/50 p-3 rounded border border-amber-700">
                <h4 className="text-amber-300 font-semibold mb-2 text-sm">Cricket Crimes</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-amber-300">Matches</p>
                    <p className="text-amber-100 font-bold">{stats.matches}</p>
                  </div>
                  <div>
                    <p className="text-amber-300">Runs Stolen</p>
                    <p className="text-amber-100 font-bold">{stats.runs}</p>
                  </div>
                  <div>
                    <p className="text-amber-300">Wickets Taken</p>
                    <p className="text-amber-100 font-bold">{stats.wickets}</p>
                  </div>
                  <div>
                    <p className="text-amber-300">Average</p>
                    <p className="text-amber-100 font-bold">{stats.average}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-stone-600/50 p-2 rounded border border-amber-700">
                <div className="flex items-center space-x-2 text-xs">
                  <AlertTriangle className="h-3 w-3 text-red-400" />
                  <span className="text-red-300">Escape Attempts: {Math.floor(Math.random() * 5)}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs mt-1">
                  <Calendar className="h-3 w-3 text-green-400" />
                  <span className="text-green-300">Good Behavior Days: {Math.floor(Math.random() * 100) + 50}</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <span className="text-xs text-amber-400 hover:text-amber-300">
                ← Click to return to mugshot
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {isEscaping && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold animate-bounce z-10">
          🚨 CAUGHT! 🚨
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
