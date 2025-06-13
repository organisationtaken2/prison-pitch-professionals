import { useState } from 'react';
import { Crown, Zap, Users, Heart } from 'lucide-react';

const ThalaVsThalapathyDebate = () => {
  const [selectedSide, setSelectedSide] = useState<'thala' | 'thalapathy' | null>(null);
  const [voteCount, setVoteCount] = useState({ thala: 7, thalapathy: 6 });

  const handleVote = (side: 'thala' | 'thalapathy') => {
    setSelectedSide(side);
    setVoteCount(prev => ({
      ...prev,
      [side]: prev[side] + 1
    }));
  };

  return (
    <div className="bg-gradient-to-br from-card to-secondary/30 p-6 rounded-lg border-2 border-primary/40 hover:border-primary transition-all duration-300">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
          <Crown className="h-6 w-6 text-primary animate-bounce" />
          Ultimate Cricket Captain Debate! 
          <Zap className="h-6 w-6 text-accent animate-pulse" />
        </h3>
        <p className="text-muted-foreground">
          Yaarachu cricket team-ku captain-a irukanum? Controversial question! 😤
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Thala Side */}
        <div 
          className={`bg-card border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${
            selectedSide === 'thala' ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'
          }`}
          onClick={() => handleVote('thala')}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">🦁</div>
            <h4 className="text-xl font-bold text-foreground mb-2">Thala (No.7) Gang</h4>
            <p className="text-sm text-muted-foreground mb-3">
              "Helicopter shot-ku yaarum competition illa! Captain cool-a irukkanum!"
            </p>
            <div className="flex items-center justify-center gap-2 text-primary font-bold">
              <Users className="h-4 w-4" />
              {voteCount.thala} Votes
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Jersey #7 • Wicket Keeper • Finisher
            </div>
          </div>
        </div>

        {/* Thalapathy Side */}
        <div 
          className={`bg-card border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${
            selectedSide === 'thalapathy' ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'
          }`}
          onClick={() => handleVote('thalapathy')}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">🔥</div>
            <h4 className="text-xl font-bold text-foreground mb-2">Thalapathy Army</h4>
            <p className="text-sm text-muted-foreground mb-3">
              "All-rounder-a irukaan! Acting-um cricket-um perfect combo!"
            </p>
            <div className="flex items-center justify-center gap-2 text-primary font-bold">
              <Users className="h-4 w-4" />
              {voteCount.thalapathy} Votes
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              All-Rounder • Dance Moves • Mass Appeal
            </div>
          </div>
        </div>
      </div>

      {selectedSide && (
        <div className="bg-primary/20 border border-primary rounded-lg p-4 text-center animate-fade-in">
          <Heart className="h-5 w-5 text-primary mx-auto mb-2 animate-pulse" />
          <p className="text-foreground font-medium">
            {selectedSide === 'thala' 
              ? "Thala fan-aa! Cricket-la experience mukkiyam dhan! 🏏" 
              : "Thalapathy supporter-aa! Young energy thevai cricket-ku! ⚡"
            }
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            *This is just for fun. Please don't start actual fights! 😅*
          </p>
        </div>
      )}

      <div className="mt-4 text-center">
        <p className="text-xs text-muted-foreground italic">
          "End of the day, both are legends. But cricket-la yaaru better-nu theriyanum!" - Prison Cricket Commentary
        </p>
      </div>
    </div>
  );
};

export default ThalaVsThalapathyDebate;