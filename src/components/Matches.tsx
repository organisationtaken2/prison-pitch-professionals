
import { Calendar, MapPin, Clock } from 'lucide-react';

const Matches = () => {
  const upcomingMatches = [
    {
      opponent: "Villain குரூப்ஸ்",
      date: "20245-06-14",
      time: "10:00 AM",
      venue: "New OMR Arena",
      type: "League Match"
    },
    {
      opponent: "Nambi vanga point oda ponga ",
      date: "2025-06-14",
      time: "12:30 PM",
      venue: "New OMR Arena",
      type: "League Match"
    }
  ];

  const recentResults = [
    {
      opponent: "GBU Mammey",
      result: "Won by 4-1",
      date: "2025-05-30"
    },
    {
      opponent: "Catalyst கொத்தனார்ஸ்",
      result: "Won by 4-1",
      date: "2025-05-29"
    },
    {
      opponent: "Anaconda Boys Returnzz",
      result: "Won by 3-2",
      date: "2024-06-04"
    }
  ];

  return (
    <section id="matches" className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Matches & Results-u 🏏</h2>
          <p className="text-xl text-gray-300">Namma team-oda latest matches and upcoming mass fixtures-ku update aagunga!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upcoming Matches */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-6">Upcoming Matches</h3>
            <div className="space-y-4">
              {upcomingMatches.map((match, index) => (
                <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-orange-500 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white">vs {match.opponent}</h4>
                    <span className="bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded">
                      {match.type}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                      <span>{new Date(match.date).toLocaleDateString('en-IN', { 
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="h-4 w-4 mr-2 text-orange-500" />
                      <span>{match.time}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                      <span>{match.venue}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Results */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-6">Recent Results</h3>
            <div className="space-y-4">
              {recentResults.map((result, index) => (
                <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white">vs {result.opponent}</h4>
                    <span className={`px-3 py-1 text-sm font-bold rounded ${
                      result.result.includes('Won') 
                        ? 'bg-green-600 text-white' 
                        : 'bg-red-600 text-white'
                    }`}>
                      {result.result}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {/* No score property, so this line is removed */}
                    <p className="text-gray-400 text-sm">{new Date(result.date).toLocaleDateString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matches;
