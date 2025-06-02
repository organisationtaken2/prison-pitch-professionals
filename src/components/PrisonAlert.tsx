
import { useState, useEffect } from 'react';
import { AlertTriangle, X, Siren } from 'lucide-react';

const PrisonAlert = () => {
  const [alerts, setAlerts] = useState<Array<{id: number, message: string, type: string}>>([]);
  const [alertId, setAlertId] = useState(0);

  const funnyAlerts = [
    { message: "🚨 INMATE SPOTTED PRACTICING COVER DRIVES IN CELL BLOCK C!", type: "warning" },
    { message: "📢 COMMISSARY NOW SERVING CRICKET BALLS FOR LUNCH", type: "info" },
    { message: "🔔 MANDATORY BATTING PRACTICE IN 5 MINUTES", type: "info" },
    { message: "⚠️ SOMEONE BROKE THE WICKETS... AGAIN!", type: "error" },
    { message: "🎉 TEAM WINS! EARLY LIGHTS OUT CANCELLED!", type: "success" },
    { message: "🚨 YOGA MATS MISSING - SUSPECTED PITCH COVERS", type: "warning" },
    { message: "📺 TONIGHT'S MOVIE: 'THE GREAT CRICKET ESCAPE'", type: "info" },
    { message: "🍽️ DINNER MENU: BOWL-ED RICE AND LEG-BEFORE-CHICKEN", type: "info" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance every 5 seconds
        const randomAlert = funnyAlerts[Math.floor(Math.random() * funnyAlerts.length)];
        const newAlert = { ...randomAlert, id: alertId };
        setAlerts(prev => [...prev, newAlert]);
        setAlertId(prev => prev + 1);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
          setAlerts(prev => prev.filter(alert => alert.id !== newAlert.id));
        }, 5000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [alertId]);

  const removeAlert = (id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const getAlertStyles = (type: string) => {
    switch (type) {
      case 'error': return 'bg-red-800 border-red-600 text-red-100';
      case 'warning': return 'bg-yellow-800 border-yellow-600 text-yellow-100';
      case 'success': return 'bg-green-800 border-green-600 text-green-100';
      default: return 'bg-blue-800 border-blue-600 text-blue-100';
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2 max-w-md">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`${getAlertStyles(alert.type)} border-2 rounded-lg p-4 shadow-lg animate-slide-in-right`}
        >
          <div className="flex items-start space-x-2">
            <Siren className="h-5 w-5 mt-1 animate-spin" />
            <div className="flex-1">
              <p className="text-sm font-medium">{alert.message}</p>
            </div>
            <button
              onClick={() => removeAlert(alert.id)}
              className="hover:opacity-70 transition-opacity"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrisonAlert;
