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
          bgGradient: 'bg-green-600',
          iconColor: 'text-green-100',
          emoji: '🎉',
          sound: 'success'
        };
      case 'error':
        return {
          icon: XCircle,
          bgGradient: 'bg-destructive',
          iconColor: 'text-destructive-foreground',
          emoji: '😱',
          sound: 'error'
        };
      case 'warning':
        return {
          icon: AlertCircle,
          bgGradient: 'bg-orange-600',
          iconColor: 'text-orange-100',
          emoji: '⚠️',
          sound: 'warning'
        };
      case 'achievement':
        return {
          icon: Trophy,
          bgGradient: 'bg-primary',
          iconColor: 'text-primary-foreground',
          emoji: '🏆',
          sound: 'achievement'
        };
      default:
        return {
          icon: Info,
          bgGradient: 'bg-secondary',
          iconColor: 'text-secondary-foreground',
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
      relative max-w-sm w-full ${config.bgGradient} 
      border border-border rounded-lg shadow-lg 
      transform transition-all duration-300 hover:scale-105
      animate-fade-in
    `}>
      {/* Sparkle effects */}
      <div className="absolute -top-1 -right-1">
        <Sparkles className="h-5 w-5 text-primary animate-sparkle" />
      </div>
      <div className="absolute -bottom-1 -left-1">
        <Zap className="h-4 w-4 text-primary animate-pulse" />
      </div>
      
      <div className="flex items-start p-4 space-x-3">
        <div className="flex-shrink-0">
          <div className="rounded-full p-2 bg-secondary border border-border">
            <IconComponent className={`h-5 w-5 ${config.iconColor}`} />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <p className="text-sm font-bold text-foreground">
              {randomTitle}
            </p>
            <span className="text-base animate-bounce">
              {config.emoji}
            </span>
          </div>
          
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </p>
          
          {description && (
            <p className="text-xs text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
        
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-2 p-1 rounded-full hover:bg-secondary 
                     transition-colors text-muted-foreground hover:text-foreground"
          >
            <XCircle className="h-4 w-4" />
          </button>
        )}
      </div>
      
      {/* Progress bar animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted rounded-b-lg overflow-hidden">
        <div className="h-full bg-primary rounded-full animate-slide-in-right"></div>
      </div>
    </div>
  );
};

export default FunToast;