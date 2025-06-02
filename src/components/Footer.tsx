
import { Building, Lock, Key } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-stone-800 text-stone-100 py-12 border-t-4 border-stone-600 relative">
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
                <h3 className="text-xl font-bold text-stone-100">Chin Tapak Dum Dum</h3>
                <p className="text-orange-400 text-sm">जेल क्रिकेट टीम</p>
              </div>
            </div>
            <p className="text-stone-200 mb-4 max-w-md">
              खेल के माध्यम से मुक्ति संभव है इसका प्रमाण। हमारी टीम आशा, दूसरे मौकों और 
              क्रिकेट की परिवर्तनकारी शक्ति का प्रतिनिधित्व करती है।
            </p>
            <div className="text-sm text-orange-400">
              <p>© 2024 Chin Tapak Dum Dum. सभी अधिकार सुरक्षित।</p>
              <p>केंद्रीय जेल खेल विभाग द्वारा प्रबंधित</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">संपर्क</h4>
            <div className="space-y-3 text-stone-200">
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-orange-400" />
                <span className="text-sm">sports@centralprison.gov.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Key className="h-4 w-4 text-orange-400" />
                <span className="text-sm">+91 11 2345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building className="h-4 w-4 text-orange-400" />
                <span className="text-sm">केंद्रीय जेल, नई दिल्ली</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">त्वरित लिंक</h4>
            <div className="space-y-2 text-stone-200">
              <a href="#team" className="block text-sm hover:text-orange-400 transition-colors">टीम रोस्टर</a>
              <a href="#matches" className="block text-sm hover:text-orange-400 transition-colors">फिक्स्चर</a>
              <a href="#stats" className="block text-sm hover:text-orange-400 transition-colors">आंकड़े</a>
              <a href="#news" className="block text-sm hover:text-orange-400 transition-colors">नवीनतम समाचार</a>
              <a href="#" className="block text-sm hover:text-orange-400 transition-colors">पुनर्वास कार्यक्रम</a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-stone-600 mt-8 pt-8 text-center">
          <p className="text-orange-400 text-sm">
            खेल और सामुदायिक सहयोग के माध्यम से कैदी पुनर्वास का समर्थन
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
