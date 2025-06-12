import { useState } from 'react';
import { Volume2, VolumeX, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const navigate = useNavigate();

  const handleEnterGrounds = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    // Navigate to prison with animation delay
    setTimeout(() => {
      navigate('/prison');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center relative overflow-hidden">
      {/* Prison bar pattern overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="flex h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1 border-r border-border"></div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {!isPlaying ? (
          <div className="animate-fade-in">
            <div className="bg-card/30 backdrop-blur-sm border-2 border-border rounded-lg p-8 mb-8 shadow-2xl">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground prison-shadow">
                CHIN TAPAK <span className="text-primary animate-pulse">DUM DUM</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Ultimate Cricket Experience-ku vandhutingaaa! 🏏
              </p>
              <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-mono border border-border rounded-full inline-block mb-8 animate-pulse">
                ⚠️ MAXIMUM MASALA ENTERTAINMENT ⚠️
              </div>
            </div>
            
            <div className="mt-8">
              <button
                onClick={handleEnterGrounds}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 rounded-lg font-bold text-xl transition-all border-4 border-primary shadow-xl hover:scale-105 hover:shadow-primary/50"
              >
                Ground-ku Polaam! 🏃‍♂️💨
              </button>
            </div>
          </div>
        ) : (
          <div className="fixed inset-0 bg-background z-50 flex items-center justify-center animate-fade-in">
            {/* Blurred background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-card/20 to-secondary/20 backdrop-blur-sm"></div>
            <div className="w-4/5 h-4/5 relative z-10">
              <video
                className="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-primary/50 backdrop-blur-sm"
                autoPlay
                muted={isMuted}
                onEnded={handleVideoEnd}
                style={{ outline: 'none', filter: 'blur(2px) drop-shadow(0 0 20px hsl(var(--primary)))' }}
                controls={false}
              >
                <source 
                  src="https://chin-tapak-dum-dum-development.zohostratus.com/Chin%20Tapak%20Dam%20Dam%F0%9F%98%82%F0%9F%A4%A3%20%28online-video-cutter.com%29.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
              
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute top-4 right-4 bg-primary text-primary-foreground p-3 rounded-full hover:scale-110 transition-all z-20 shadow-lg"
              >
                {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
              </button>
              
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 left-4 bg-destructive text-destructive-foreground p-3 rounded-full hover:scale-110 transition-all z-20 shadow-lg"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcome;