
import { CalendarDays, Trophy, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-amber-800 via-orange-900 to-red-900 text-amber-50 py-20 relative overflow-hidden">
      {/* Prison-like grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-amber-600"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="bg-amber-900/30 backdrop-blur-sm border-2 border-amber-600 rounded-lg p-8 mb-8 shadow-2xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-amber-100">
              CHIN TAPAK <span className="text-amber-300">DUM DUM</span>
            </h2>
            <p className="text-lg text-amber-200 mb-2">चिन तपक डम डम</p>
            <p className="text-xl md:text-2xl mb-8 text-amber-200 max-w-3xl mx-auto">
              क्रिकेट के माध्यम से मुक्ति। जहाँ दूसरे मौके चैंपियनशिप के सपनों से मिलते हैं।
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <div className="flex items-center space-x-2 bg-amber-800/50 px-4 py-2 rounded-lg border border-amber-600">
              <Trophy className="h-6 w-6 text-amber-300" />
              <span className="text-lg">5 टूर्नामेंट जीत</span>
            </div>
            <div className="flex items-center space-x-2 bg-amber-800/50 px-4 py-2 rounded-lg border border-amber-600">
              <Users className="h-6 w-6 text-amber-300" />
              <span className="text-lg">15 सक्रिय खिलाड़ी</span>
            </div>
            <div className="flex items-center space-x-2 bg-amber-800/50 px-4 py-2 rounded-lg border border-amber-600">
              <CalendarDays className="h-6 w-6 text-amber-300" />
              <span className="text-lg">स्थापना 2015</span>
            </div>
          </div>
          
          <div className="space-x-4">
            <button className="bg-amber-600 hover:bg-amber-700 text-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors border-2 border-amber-500 shadow-lg">
              टीम रोस्टर देखें
            </button>
            <button className="border-2 border-amber-500 text-amber-200 hover:bg-amber-600 hover:text-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
              नवीनतम मैच
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
