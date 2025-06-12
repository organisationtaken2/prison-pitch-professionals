
import { useState } from 'react';
import { Lock, Users, Calendar, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
  const [clickCount, setClickCount] = useState(0);
  const { toast } = useToast();

  const handleEscapeAttempt = () => {
    setIsEscaping(true);
    setClickCount(prev => prev + 1);
    
    if (clickCount === 4) {
      toast({
        title: "Achievement Unlocked! 🏆",
        description: `${name.split(' ')[0]} tried to escape 5 times! That's dedication!`,
      });
      setClickCount(0);
    }
    
    setTimeout(() => setIsEscaping(false), 2000);
  };

  const behaviorRating = Math.floor(Math.random() * 5) + 1;
  const dangerLevel = ['😇 Angel', '😊 Good Boy', '😐 Neutral', '😏 Mischief', '🔥 Trouble'][Math.floor(Math.random() * 5)];

  return (
    <div className={`relative perspective-1000 h-96 ${isEscaping ? 'animate-bounce' : ''}`}>
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Side - Mugshot */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-card border-2 border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl h-full cursor-pointer"
               onClick={() => setIsFlipped(true)}>
            
            {/* Mugshot-style photo */}
            <div className="relative">
          <div className="bg-secondary h-48 flex items-center justify-center border-b-2 border-border relative overflow-hidden">
                {/* Prison ID backdrop */}
                <div className="absolute inset-0 bg-muted opacity-20">
                  <div className="grid grid-cols-8 h-full">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="border-r border-border"></div>
                    ))}
                  </div>
                </div>
                
                {/* Click counter for escape attempts */}
                {clickCount > 0 && (
                  <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full animate-bounce z-10">
                    Escape attempts: {clickCount}/5
                  </div>
                )}
                
                <div className="text-center z-10">
                  <div className="w-24 h-24 rounded-full mx-auto mb-2 border-4 border-primary shadow-lg hover:animate-spin cursor-pointer overflow-hidden relative hover-jiggle"
                       onClick={handleEscapeAttempt}
                       data-sound="catch">
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
                    <div className="hidden w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-2xl font-bold text-foreground">{name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    {/* Jail bars overlay */}
                    <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="w-0.5 h-full bg-muted opacity-60"></div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-secondary text-secondary-foreground px-3 py-1 text-xs font-mono border border-border rounded">
                    #{prisonerNumber}
                  </div>
                </div>
                
                {/* Height measurement lines */}
                <div className="absolute right-2 top-0 bottom-0 w-8 bg-muted/30 flex flex-col justify-between text-xs text-muted-foreground py-2">
                  <div>6'</div>
                  <div>5'</div>
                  <div>4'</div>
                </div>
              </div>
              
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-bold rounded border border-border animate-pulse">
                {position}
              </div>
              
              <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-bold rounded animate-bounce">
                {dangerLevel}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-bold text-foreground mb-2 hover:text-primary transition-colors">{name}</h3>
              <div className="space-y-1 text-xs">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">Sentence:</span> {sentence}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">Crime:</span> {crime}
                </p>
                <div className="flex items-center space-x-1 mt-2">
                  <Lock className="h-3 w-3 text-primary" />
                  <span className="text-foreground text-xs">Behavior: {'⭐'.repeat(behaviorRating)}</span>
                </div>
              </div>
              
              <div className="text-center mt-3">
                <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">
                  Click to see rap sheet →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side - Stats */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-card border-2 border-border rounded-lg p-4 h-full cursor-pointer"
               onClick={() => setIsFlipped(false)}>
            
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-foreground mb-2">Criminal Record 📋</h3>
              <div className="bg-destructive text-destructive-foreground px-3 py-1 text-xs font-mono border border-border rounded">
                CLASSIFIED STATS
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-secondary/50 p-3 rounded border border-border">
                <h4 className="text-foreground font-semibold mb-2 text-sm">Cricket Crimes</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-muted-foreground">Matches</p>
                    <p className="text-foreground font-bold">{stats.matches}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Runs Stolen</p>
                    <p className="text-foreground font-bold">{stats.runs}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Wickets Taken</p>
                    <p className="text-foreground font-bold">{stats.wickets}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Average</p>
                    <p className="text-foreground font-bold">{stats.average}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/50 p-2 rounded border border-border">
                <div className="flex items-center space-x-2 text-xs">
                  <AlertTriangle className="h-3 w-3 text-destructive" />
                  <span className="text-destructive">Escape Attempts: {Math.floor(Math.random() * 5)}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs mt-1">
                  <Calendar className="h-3 w-3 text-primary" />
                  <span className="text-primary">Good Behavior Days: {Math.floor(Math.random() * 100) + 50}</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <span className="text-xs text-muted-foreground hover:text-foreground">
                ← Click to return to mugshot
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {isEscaping && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-bold animate-bounce z-10">
          🚨 CAUGHT! 🚨
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
