
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Team Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="text-xl font-bold">Indian Prison XI</h3>
                <p className="text-gray-400 text-sm">Cricket Team</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Proving that redemption is possible through sport. Our team represents hope, 
              second chances, and the transformative power of cricket.
            </p>
            <div className="text-sm text-gray-400">
              <p>© 2024 Indian Prison XI. All rights reserved.</p>
              <p>Managed by Central Prison Sports Department</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-sm">sports@centralprison.gov.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-sm">+91 11 2345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-sm">Central Prison, New Delhi</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h4>
            <div className="space-y-2 text-gray-300">
              <a href="#team" className="block text-sm hover:text-orange-500 transition-colors">Team Roster</a>
              <a href="#matches" className="block text-sm hover:text-orange-500 transition-colors">Fixtures</a>
              <a href="#stats" className="block text-sm hover:text-orange-500 transition-colors">Statistics</a>
              <a href="#news" className="block text-sm hover:text-orange-500 transition-colors">Latest News</a>
              <a href="#" className="block text-sm hover:text-orange-500 transition-colors">Rehabilitation Program</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Supporting prisoner rehabilitation through sports and community engagement
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
