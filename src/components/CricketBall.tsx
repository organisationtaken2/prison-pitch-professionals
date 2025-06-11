import { useState, useEffect } from 'react';

const CricketBall = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [velocity, setVelocity] = useState({ x: 2, y: 3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;
        let newVelX = velocity.x;
        let newVelY = velocity.y;

        // Bounce off walls
        if (newX <= 0 || newX >= 95) {
          newVelX = -newVelX;
          newX = newX <= 0 ? 0 : 95;
        }
        if (newY <= 0 || newY >= 90) {
          newVelY = -newVelY;
          newY = newY <= 0 ? 0 : 90;
        }

        setVelocity({ x: newVelX, y: newVelY });
        return { x: newX, y: newY };
      });
    }, 50);

    return () => clearInterval(interval);
  }, [velocity]);

  const handleClick = () => {
    // Random velocity on click
    setVelocity({
      x: (Math.random() - 0.5) * 8,
      y: (Math.random() - 0.5) * 8
    });
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <div
        className="absolute w-8 h-8 pointer-events-auto cursor-pointer transition-all duration-100"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
        onClick={handleClick}
      >
        <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 rounded-full shadow-lg animate-pulse border-2 border-red-500 relative">
          <div className="absolute inset-1 border border-red-400 rounded-full"></div>
          <div className="absolute top-1 left-1 w-2 h-2 bg-red-400 rounded-full opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default CricketBall;