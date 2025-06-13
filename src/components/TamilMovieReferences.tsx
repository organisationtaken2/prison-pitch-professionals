import { useState, useEffect } from 'react';
import { Trophy, Music, Film, Sparkles } from 'lucide-react';

const TamilMovieReferences = () => {
  const [currentDialogue, setCurrentDialogue] = useState(0);
  
  const movieDialogues = [
    {
      movie: "Chennai 600028",
      dialogue: "Cricket-a vida Romance important-nu sonnanga... ana namma team-la romance-e illayae!",
      character: "Karthik Anna",
      icon: "🏏"
    },
    {
      movie: "Whistle",
      dialogue: "Vaathi raid... ana cricket ground-la vara maaten!",
      character: "Thalapathy Fan",
      icon: "🎬"
    },
    {
      movie: "Bigil",
      dialogue: "Singappenne... cricket team-la boys-um girls-um irundha enna aagum?",
      character: "Coach Rayappan",
      icon: "⚽"
    },
    {
      movie: "Dhoni",
      dialogue: "Captain cool-nu solraanga... ana namma captain hot-headed dhan!",
      character: "Commentary Box",
      icon: "😎"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDialogue((prev) => (prev + 1) % movieDialogues.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg border-2 border-primary/30 mb-8">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
          <Film className="h-6 w-6 text-primary animate-bounce" />
          Tamil Cinema Cricket-u Connection! 🎭
          <Music className="h-6 w-6 text-primary animate-pulse" />
        </h3>
        <p className="text-muted-foreground text-sm">Famous Tamil movie references mixed with cricket chaos!</p>
      </div>
      
      <div className="bg-card/80 border border-border rounded-lg p-4 min-h-[120px] flex items-center justify-center">
        <div className="text-center transition-all duration-500">
          <div className="text-3xl mb-2">{movieDialogues[currentDialogue].icon}</div>
          <p className="text-lg font-medium text-foreground mb-2 italic">
            "{movieDialogues[currentDialogue].dialogue}"
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="bg-primary/20 px-2 py-1 rounded font-bold">
              {movieDialogues[currentDialogue].movie}
            </span>
            <span>—</span>
            <span>{movieDialogues[currentDialogue].character}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {movieDialogues.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentDialogue(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentDialogue 
                ? 'bg-primary scale-125' 
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TamilMovieReferences;