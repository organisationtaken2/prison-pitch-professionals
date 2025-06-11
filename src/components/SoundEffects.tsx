import { useEffect } from 'react';

interface SoundEffectsProps {
  onPlayerClick?: () => void;
  onBallClick?: () => void;
  onScoreUpdate?: () => void;
}

const SoundEffects = ({ onPlayerClick, onBallClick, onScoreUpdate }: SoundEffectsProps) => {
  const playSound = (frequency: number, duration: number, type: OscillatorType = 'sine') => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = type;
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration / 1000);
    } catch (error) {
      // Silent fail if audio context is not available
    }
  };

  const cricketSounds = {
    bat: () => playSound(200, 100, 'square'),
    wicket: () => {
      playSound(150, 50);
      setTimeout(() => playSound(120, 100), 60);
    },
    six: () => {
      playSound(300, 200);
      setTimeout(() => playSound(400, 200), 100);
      setTimeout(() => playSound(500, 300), 200);
    },
    catch: () => playSound(250, 150, 'triangle'),
    cheer: () => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => playSound(400 + i * 50, 100), i * 100);
      }
    }
  };

  // Global click listener for cricket sounds
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('[data-sound="bat"]')) {
        cricketSounds.bat();
      } else if (target.closest('[data-sound="wicket"]')) {
        cricketSounds.wicket();
      } else if (target.closest('[data-sound="six"]')) {
        cricketSounds.six();
      } else if (target.closest('[data-sound="catch"]')) {
        cricketSounds.catch();
      } else if (target.closest('[data-sound="cheer"]')) {
        cricketSounds.cheer();
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return null;
};

export default SoundEffects;