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
    <div className="min-h-screen bg-gradient-to-b from-stone-900 to-amber-900 flex items-center justify-center relative overflow-hidden">
      {/* Prison bar pattern overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="flex h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1 border-r border-amber-600"></div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {!isPlaying ? (
          <div className="animate-fade-in">
            <div className="bg-amber-900/30 backdrop-blur-sm border-2 border-amber-600 rounded-lg p-8 mb-8 shadow-2xl">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-amber-100 prison-shadow">
                CHIN TAPAK <span className="text-amber-300 animate-pulse">DUM DUM</span>
              </h1>
              <p className="text-xl md:text-2xl text-amber-200 mb-8">
                Welcome to the Ultimate Cricket Experience
              </p>
              <div className="bg-red-900 text-red-100 px-4 py-2 text-sm font-mono border border-red-600 rounded inline-block mb-8">
                ⚠️ MAXIMUM SECURITY ENTERTAINMENT ⚠️
              </div>
            </div>
            
            <div className="mt-8">
              <button
                onClick={handleEnterGrounds}
                className="bg-amber-600 hover:bg-amber-700 text-amber-50 px-12 py-6 rounded-lg font-bold text-xl transition-all border-4 border-amber-500 shadow-xl hover:scale-105 hover:shadow-amber-500/50"
              >
                Enter the Grounds →
              </button>
            </div>
          </div>
        ) : (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center animate-fade-in">
            <div className="w-4/5 h-4/5 relative">
              <video
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                muted={isMuted}
                onEnded={handleVideoEnd}
                style={{ outline: 'none' }}
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
                className="absolute top-4 right-4 bg-stone-900/80 text-amber-100 p-3 rounded-lg hover:bg-stone-800 transition-all z-10"
              >
                {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
              </button>
              
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 left-4 bg-stone-900/80 text-amber-100 p-3 rounded-lg hover:bg-stone-800 transition-all z-10"
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