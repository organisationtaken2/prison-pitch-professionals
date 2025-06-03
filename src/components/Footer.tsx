
import { Building, Lock, Key } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-stone-800 text-stone-100 py-12 border-t-4 border-orange-600 relative">
      {/* Prison bar pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex h-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="flex-1 border-r border-stone-600"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Team Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Building className="h-8 w-8 text-orange-400" />
              <div>
                <h3 className="text-xl font-bold text-stone-100 prison-shadow">Iron Bars Cricket Club</h3>
                <p className="text-orange-400 text-sm">Maximum Security Cricket Team</p>
              </div>
            </div>
            <p className="text-stone-200 mb-4 max-w-md">
              Proving that redemption is possible through sport. Our team represents hope, second chances, 
              and the transformative power of cricket behind bars.
            </p>
            <div className="text-sm text-orange-400 bg-stone-700 border border-orange-600 rounded-lg p-3">
              <p>© 2024 Iron Bars Cricket Club. All rights reserved.</p>
              <p>Managed by Central Prison Sports Department</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400 border-b-2 border-orange-600 pb-2">Contact</h4>
            <div className="space-y-3 text-stone-200">
              <div className="flex items-center space-x-2 bg-stone-700/50 p-2 rounded border border-stone-600">
                <Lock className="h-4 w-4 text-orange-400" />
                <span className="text-sm">sports@centralprison.gov.in</span>
              </div>
              <div className="flex items-center space-x-2 bg-stone-700/50 p-2 rounded border border-stone-600">
                <Key className="h-4 w-4 text-orange-400" />
                <span className="text-sm">+91 11 2345 6789</span>
              </div>
              <div className="flex items-center space-x-2 bg-stone-700/50 p-2 rounded border border-stone-600">
                <Building className="h-4 w-4 text-orange-400" />
                <span className="text-sm">Central Prison, New Delhi</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400 border-b-2 border-orange-600 pb-2">Prison Directory</h4>
            <div className="space-y-2 text-stone-200">
              <a href="#team" className="block text-sm hover:text-orange-400 transition-colors border-l-4 border-transparent hover:border-orange-400 pl-3 py-1">Team Roster</a>
              <a href="#matches" className="block text-sm hover:text-orange-400 transition-colors border-l-4 border-transparent hover:border-orange-400 pl-3 py-1">Yard Schedule</a>
              <a href="#stats" className="block text-sm hover:text-orange-400 transition-colors border-l-4 border-transparent hover:border-orange-400 pl-3 py-1">Criminal Records</a>
              <a href="#news" className="block text-sm hover:text-orange-400 transition-colors border-l-4 border-transparent hover:border-orange-400 pl-3 py-1">Prison Gazette</a>
              <a href="#" className="block text-sm hover:text-orange-400 transition-colors border-l-4 border-transparent hover:border-orange-400 pl-3 py-1">Rehabilitation Program</a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-orange-600 mt-8 pt-8 text-center bg-stone-700/30 rounded-lg p-4">
          <p className="text-orange-400 text-sm font-semibold">
            🏏 Supporting prisoner rehabilitation through sports and community engagement 🏏
          </p>
          <p className="text-stone-300 text-xs mt-2">
            "Cricket: The path to freedom lies not in escape, but in redemption"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
