import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import CricketConfetti from './CricketConfetti';

const CricketMiniGame = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [ballPosition, setBallPosition] = useState(50);
  const [batPosition, setBatPosition] = useState(50);
  const [gameSpeed, setGameSpeed] = useState(1000);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();
  const gameRef = useRef<NodeJS.Timeout>();

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setGameSpeed(1000);
    setBallPosition(Math.random() * 80 + 10);
  };

  const stopGame = () => {
    setIsPlaying(false);
    if (gameRef.current) {
      clearTimeout(gameRef.current);
    }
  };

  const swing = () => {
    if (!isPlaying) return;
    
    const distance = Math.abs(ballPosition - batPosition);
    
    if (distance < 15) {
      // Hit!
      const newScore = score + 1;
      setScore(newScore);
      setGameSpeed(prev => Math.max(300, prev - 50));
      
      if (newScore % 10 === 0) {
        setShowConfetti(true);
        toast({
          title: "Century! 🏏",
          description: `Amazing! You've hit ${newScore} runs!`,
        });
      } else if (newScore % 5 === 0) {
        toast({
          title: "Boundary! 🎯",
          description: `Great shot! ${newScore} runs`,
        });
      }
      
      // Next ball
      setBallPosition(Math.random() * 80 + 10);
    } else {
      // Miss!
      toast({
        title: "Bowled Out! 😅",
        description: `Game Over! Final Score: ${score} runs`,
        variant: "destructive",
      });
      stopGame();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      gameRef.current = setTimeout(() => {
        setBallPosition(Math.random() * 80 + 10);
      }, gameSpeed);
    }
    
    return () => {
      if (gameRef.current) {
        clearTimeout(gameRef.current);
      }
    };
  }, [isPlaying, ballPosition, gameSpeed]);

  return (
    <div className="bg-gradient-to-r from-green-800 to-green-600 p-6 rounded-lg border-2 border-green-500 shadow-xl">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">🏏 Prison Cricket Challenge</h3>
        <p className="text-green-100">Hit the ball by timing your swing perfectly!</p>
      </div>
      
      <div className="bg-green-900 h-32 rounded-lg relative mb-4 overflow-hidden">
        {/* Cricket pitch */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-700 to-green-800">
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="absolute border-l border-green-500" style={{ left: `${i * 10}%`, height: '100%' }}></div>
            ))}
          </div>
        </div>
        
        {/* Ball */}
        {isPlaying && (
          <div 
            className="absolute top-4 w-4 h-4 bg-red-600 rounded-full animate-bounce transition-all duration-300"
            style={{ left: `${ballPosition}%` }}
          >
            <div className="w-full h-full border border-red-400 rounded-full"></div>
          </div>
        )}
        
        {/* Bat */}
        <div 
          className="absolute bottom-4 w-1 h-12 bg-amber-600 transition-all duration-200"
          style={{ left: `${batPosition}%` }}
          onMouseEnter={() => !isPlaying && setBatPosition(50)}
        ></div>
        
        {/* Wickets */}
        <div className="absolute bottom-0 right-4 flex space-x-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="w-1 h-8 bg-amber-400"></div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="text-white">
          <span className="text-lg font-bold">Score: {score}</span>
          {isPlaying && <span className="ml-4 text-sm">Speed: {Math.round(1000 / gameSpeed)}x</span>}
        </div>
        
        <div className="space-x-2">
          {!isPlaying ? (
            <Button onClick={startGame} className="bg-orange-600 hover:bg-orange-700">
              Start Game
            </Button>
          ) : (
            <>
              <Button 
                onClick={swing} 
                className="bg-red-600 hover:bg-red-700 animate-pulse"
                data-sound="bat"
              >
                SWING! 🏏
              </Button>
              <Button onClick={stopGame} variant="outline" className="text-black">
                Stop
              </Button>
            </>
          )}
        </div>
      </div>
      
      {/* Move bat with mouse */}
      <div 
        className="h-4 bg-green-800 rounded cursor-pointer relative"
        onMouseMove={(e) => {
          if (isPlaying) {
            const rect = e.currentTarget.getBoundingClientRect();
            const percentage = ((e.clientX - rect.left) / rect.width) * 100;
            setBatPosition(Math.max(5, Math.min(95, percentage)));
          }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-600 to-transparent opacity-50"></div>
        <div className="text-center text-xs text-green-200 pt-1">
          {isPlaying ? 'Move mouse to position bat' : 'Click Start Game to play'}
        </div>
      </div>
      
      <CricketConfetti trigger={showConfetti} onComplete={() => setShowConfetti(false)} />
    </div>
  );
};

export default CricketMiniGame;