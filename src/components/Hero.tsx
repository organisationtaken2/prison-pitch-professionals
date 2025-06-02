
import { CalendarDays, Trophy, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            INDIAN PRISON <span className="text-orange-500">XI</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Redemption through Cricket. Where Second Chances Meet Championship Dreams.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <div className="flex items-center space-x-2">
              <Trophy className="h-6 w-6 text-orange-500" />
              <span className="text-lg">5 Tournament Wins</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-orange-500" />
              <span className="text-lg">15 Active Players</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarDays className="h-6 w-6 text-orange-500" />
              <span className="text-lg">Est. 2015</span>
            </div>
          </div>
          <div className="space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Team Roster
            </button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Latest Matches
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
