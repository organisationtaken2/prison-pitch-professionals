
import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-orange-500" />
            <div>
              <h1 className="text-2xl font-bold">Indian Prison XI</h1>
              <p className="text-sm text-gray-300">Cricket Team</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#team" className="hover:text-orange-500 transition-colors">Team</a>
            <a href="#matches" className="hover:text-orange-500 transition-colors">Matches</a>
            <a href="#stats" className="hover:text-orange-500 transition-colors">Statistics</a>
            <a href="#news" className="hover:text-orange-500 transition-colors">News</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="py-2 hover:text-orange-500 transition-colors">Home</a>
              <a href="#team" className="py-2 hover:text-orange-500 transition-colors">Team</a>
              <a href="#matches" className="py-2 hover:text-orange-500 transition-colors">Matches</a>
              <a href="#stats" className="py-2 hover:text-orange-500 transition-colors">Statistics</a>
              <a href="#news" className="py-2 hover:text-orange-500 transition-colors">News</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
