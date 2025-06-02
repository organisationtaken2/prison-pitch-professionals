
import { useState } from 'react';
import { Menu, X, Building } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-stone-800 text-stone-100 shadow-lg border-b-4 border-stone-600 relative">
      {/* Prison bar pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="flex h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1 border-r border-stone-600"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Building className="h-8 w-8 text-orange-400" />
            <div>
              <h1 className="text-2xl font-bold text-stone-100">Chin Tapak Dum Dum</h1>
              <p className="text-sm text-orange-400">जेल क्रिकेट टीम</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-orange-400 transition-colors font-medium">होम</a>
            <a href="#team" className="hover:text-orange-400 transition-colors font-medium">टीम</a>
            <a href="#matches" className="hover:text-orange-400 transition-colors font-medium">मैच</a>
            <a href="#stats" className="hover:text-orange-400 transition-colors font-medium">आंकड़े</a>
            <a href="#news" className="hover:text-orange-400 transition-colors font-medium">समाचार</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-stone-600 pt-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="py-2 hover:text-orange-400 transition-colors">होम</a>
              <a href="#team" className="py-2 hover:text-orange-400 transition-colors">टीम</a>
              <a href="#matches" className="py-2 hover:text-orange-400 transition-colors">मैच</a>
              <a href="#stats" className="py-2 hover:text-orange-400 transition-colors">आंकड़े</a>
              <a href="#news" className="py-2 hover:text-orange-400 transition-colors">समाचार</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
