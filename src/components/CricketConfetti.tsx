import { useState, useEffect } from 'react';

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  rotation: number;
  color: string;
  symbol: string;
}

interface CricketConfettiProps {
  trigger: boolean;
  onComplete?: () => void;
}

const CricketConfetti = ({ trigger, onComplete }: CricketConfettiProps) => {
  const [particles, setParticles] = useState<ConfettiParticle[]>([]);

  const cricketSymbols = ['🏏', '🏆', '⚡', '🔥', '💪', '🎯'];
  const colors = ['#FFA500', '#FFD700', '#FF6B35', '#F7931E', '#FFC649'];

  useEffect(() => {
    if (trigger) {
      const newParticles: ConfettiParticle[] = [];
      
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: -10,
          velocityX: (Math.random() - 0.5) * 10,
          velocityY: Math.random() * 5 + 5,
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          symbol: cricketSymbols[Math.floor(Math.random() * cricketSymbols.length)]
        });
      }
      
      setParticles(newParticles);
      
      // Clear after animation
      setTimeout(() => {
        setParticles([]);
        onComplete?.();
      }, 3000);
    }
  }, [trigger]);

  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.velocityX,
          y: particle.y + particle.velocityY,
          rotation: particle.rotation + 5,
          velocityY: particle.velocityY + 0.3 // gravity
        })).filter(particle => particle.y < window.innerHeight + 50)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [particles.length]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute text-2xl transition-all duration-75"
          style={{
            left: particle.x,
            top: particle.y,
            transform: `rotate(${particle.rotation}deg)`,
            color: particle.color
          }}
        >
          {particle.symbol}
        </div>
      ))}
    </div>
  );
};

export default CricketConfetti;