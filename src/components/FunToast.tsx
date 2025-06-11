import React from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, Sparkles, Trophy, Zap } from 'lucide-react';

interface FunToastProps {
  type?: 'success' | 'error' | 'warning' | 'info' | 'achievement';
  title: string;
  description?: string;
  onClose?: () => void;
}

const FunToast: React.FC<FunToastProps> = ({ 
  type = 'info', 
  title, 
  description, 
  onClose 
}) => {
  const getToastConfig = () => {
    switch (type) {
      case 'success':
        return {
          icon: CheckCircle,
          bgGradient: 'from-green-500 to-emerald-600',
          iconColor: 'text-green-100',
          emoji: '🎉',
          sound: 'success'
        };
      case 'error':
        return {
          icon: XCircle,
          bgGradient: 'from-red-500 to-pink-600',
          iconColor: 'text-red-100',
          emoji: '😱',
          sound: 'error'
        };
      case 'warning':
        return {
          icon: AlertCircle,
          bgGradient: 'from-yellow-500 to-orange-600',
          iconColor: 'text-yellow-100',
          emoji: '⚠️',
          sound: 'warning'
        };
      case 'achievement':
        return {
          icon: Trophy,
          bgGradient: 'from-purple-500 to-pink-600',
          iconColor: 'text-purple-100',
          emoji: '🏆',
          sound: 'achievement'
        };
      default:
        return {
          icon: Info,
          bgGradient: 'from-blue-500 to-cyan-600',
          iconColor: 'text-blue-100',
          emoji: 'ℹ️',
          sound: 'info'
        };
    }
  };

  const config = getToastConfig();
  const IconComponent = config.icon;

  const funTitles = {
    success: ['Vera Level! 🔥', 'Adipoli! 💯', 'Thalaiva! 👑', 'Mass-u da! ⚡'],
    error: ['Aiyo! 😵', 'Kadavule! 😱', 'Enna da idhu! 🤯', 'Mokka! 💩'],
    warning: ['Careful-a iru! ⚠️', 'Alert-u! 🚨', 'Paathu! 👀', 'Danger-u! 🔴'],
    achievement: ['Thalaivar! 👑', 'Legend! 🏆', 'Champion! 💪', 'Mass Entry! 🎭'],
    info: ['FYI da! 📢', 'Update-u! 📱', 'News-u! 📰', 'Info-va! 💡']
  };

  const randomTitle = funTitles[type][Math.floor(Math.random() * funTitles[type].length)];

  return (
    <div className={`
      relative max-w-sm w-full bg-gradient-to-r ${config.bgGradient} 
      border border-white/20 rounded-2xl shadow-2xl 
      transform transition-all duration-500 hover:scale-105
      animate-fade-in backdrop-blur-sm
    `}>
      {/* Sparkle effects */}
      <div className="absolute -top-1 -right-1">
        <Sparkles className="h-6 w-6 text-yellow-300 animate-sparkle" />
      </div>
      <div className="absolute -bottom-1 -left-1">
        <Zap className="h-4 w-4 text-yellow-300 animate-pulse" />
      </div>
      
      <div className="flex items-start p-4 space-x-3">
        <div className="flex-shrink-0">
          <div className={`
            rounded-full p-2 bg-white/20 border border-white/30
            animate-bounce
          `}>
            <IconComponent className={`h-6 w-6 ${config.iconColor}`} />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <p className="text-lg font-bold text-white">
              {randomTitle}
            </p>
            <span className="text-xl animate-bounce">
              {config.emoji}
            </span>
          </div>
          
          <p className="text-sm font-semibold text-white/90 mb-1">
            {title}
          </p>
          
          {description && (
            <p className="text-sm text-white/80 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-2 p-1 rounded-full hover:bg-white/20 
                     transition-colors text-white/80 hover:text-white"
          >
            <XCircle className="h-5 w-5" />
          </button>
        )}
      </div>
      
      {/* Progress bar animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-2xl overflow-hidden">
        <div className="h-full bg-white/40 rounded-full animate-slide-in-right"></div>
      </div>
    </div>
  );
};

export default FunToast;