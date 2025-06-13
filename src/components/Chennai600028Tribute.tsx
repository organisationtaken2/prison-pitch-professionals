import { useState, useEffect } from 'react';
import { MapPin, Clock, Star, Coffee } from 'lucide-react';

const Chennai600028Tribute = () => {
  const [currentScene, setCurrentScene] = useState(0);
  
  const movieScenes = [
    {
      location: "Shiva's Gully Cricket Ground",
      time: "Evening 6 PM",
      scene: "Karthik-u batting practice pannutu, love failure-a cricket-la mix panniraan!",
      dialogue: "Cricket-la focus pannu da... love ellaam later!",
      mood: "💔"
    },
    {
      location: "Besant Nagar Beach Cricket",
      time: "Sunday Morning",
      scene: "Team full-a beach cricket! Sand-la stumps fix pannradhu kooda challenge!",
      dialogue: "Sand castle illa da... wicket setup pannrom!",
      mood: "🏖️"
    },
    {
      location: "T. Nagar Cricket Shop",
      time: "Saturday Evening",
      scene: "New bat vaanga ponaanga... seller-um cricket fan-nu therinja discount kudukkaan!",
      dialogue: "Willow wood bat-a vida friendship wood bat better!",
      mood: "🛒"
    },
    {
      location: "Adyar Cricket Match",
      time: "Finals Day",
      scene: "Climax match! Friendship, cricket, romance ellaam oru nerathula!",
      dialogue: "Final ball... friendship-a vida cricket mukkiyam!",
      mood: "🏆"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % movieScenes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-accent/20 to-card border-2 border-accent/40 rounded-lg p-6 hover:border-accent transition-all duration-300">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
          <Star className="h-6 w-6 text-primary animate-sparkle" />
          Chennai 600028 Cricket Tribute 🎬
          <Coffee className="h-6 w-6 text-accent animate-bounce" />
        </h3>
        <p className="text-muted-foreground text-sm">
          Classic Tamil cricket movie scenes recreated in our prison yard!
        </p>
      </div>

      <div className="bg-card/80 border border-border rounded-lg p-6 min-h-[160px]">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {movieScenes[currentScene].location}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {movieScenes[currentScene].time}
          </div>
        </div>

        <div className="text-center">
          <div className="text-4xl mb-3">{movieScenes[currentScene].mood}</div>
          <p className="text-lg text-foreground mb-3 font-medium">
            {movieScenes[currentScene].scene}
          </p>
          <blockquote className="text-primary font-bold italic text-lg border-l-4 border-primary pl-4">
            "{movieScenes[currentScene].dialogue}"
          </blockquote>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {movieScenes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentScene(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentScene 
                ? 'bg-accent' 
                : 'bg-accent/30 hover:bg-accent/60'
            }`}
          />
        ))}
      </div>

      <div className="mt-4 bg-primary/10 border border-primary/30 rounded-lg p-3 text-center">
        <p className="text-sm text-foreground">
          <strong>Prison Cricket Fact:</strong> Namma team-a Chennai 600028 inspire pannirukku! 
          Romance failure aanalum cricket success dhaan! 🏏💪
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          *No actual movie scenes were harmed in making this tribute*
        </p>
      </div>
    </div>
  );
};

export default Chennai600028Tribute;