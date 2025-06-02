
import { Prison, Lock, Key } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-amber-900 text-amber-50 py-12 border-t-4 border-amber-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Team Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Prison className="h-8 w-8 text-amber-300" />
              <div>
                <h3 className="text-xl font-bold text-amber-100">Chin Tapak Dum Dum</h3>
                <p className="text-amber-300 text-sm">जेल क्रिकेट टीम</p>
              </div>
            </div>
            <p className="text-amber-200 mb-4 max-w-md">
              खेल के माध्यम से मुक्ति संभव है इसका प्रमाण। हमारी टीम आशा, दूसरे मौकों और 
              क्रिकेट की परिवर्तनकारी शक्ति का प्रतिनिधित्व करती है।
            </p>
            <div className="text-sm text-amber-300">
              <p>© 2024 Chin Tapak Dum Dum. सभी अधिकार सुरक्षित।</p>
              <p>केंद्रीय जेल खेल विभाग द्वारा प्रबंधित</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-300">संपर्क</h4>
            <div className="space-y-3 text-amber-200">
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-amber-300" />
                <span className="text-sm">sports@centralprison.gov.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Key className="h-4 w-4 text-amber-300" />
                <span className="text-sm">+91 11 2345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Prison className="h-4 w-4 text-amber-300" />
                <span className="text-sm">केंद्रीय जेल, नई दिल्ली</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-300">त्वरित लिंक</h4>
            <div className="space-y-2 text-amber-200">
              <a href="#team" className="block text-sm hover:text-amber-300 transition-colors">टीम रोस्टर</a>
              <a href="#matches" className="block text-sm hover:text-amber-300 transition-colors">फिक्स्चर</a>
              <a href="#stats" className="block text-sm hover:text-amber-300 transition-colors">आंकड़े</a>
              <a href="#news" className="block text-sm hover:text-amber-300 transition-colors">नवीनतम समाचार</a>
              <a href="#" className="block text-sm hover:text-amber-300 transition-colors">पुनर्वास कार्यक्रम</a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-amber-700 mt-8 pt-8 text-center">
          <p className="text-amber-300 text-sm">
            खेल और सामुदायिक सहयोग के माध्यम से कैदी पुनर्वास का समर्थन
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
