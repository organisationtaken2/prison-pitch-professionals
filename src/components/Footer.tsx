
import { Building, Lock, Key } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-card text-foreground py-12 border-t-4 border-primary relative">
      {/* Prison bar pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex h-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="flex-1 border-r border-border"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Team Info */}
          <div className="col-span-1 md:col-span-3">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://chin-tapak-dum-dum-development.zohostratus.com/teamlogo-removebg-preview.png?authorize" 
                alt="Team Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground prison-shadow">Chin Tapak Dum Dum</h3>
                <p className="text-primary text-sm">Cricket Champions</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Proving that <em>anything</em> is possible with enough <strong>snacks</strong> and <em>questionable decisions</em>. 
              Our team represents <strong>chaos</strong>, <em>entertainment</em>, and the transformative power of <strong>very loud cheering</strong>! 
              Also, we're really good at losing balls. 🏏
            </p>
            <div className="text-sm text-primary bg-card border border-primary rounded-lg p-3 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer">
              <p>© 2024 Chin Tapak Dum Dum Cricket Team. No rights reserved (we forgot to file the paperwork).</p>
              <p className="text-xs mt-1 opacity-80">*Team name subject to change based on mood*</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary border-b-2 border-primary pb-2 hover:animate-wiggle cursor-pointer">🗂️ Facility Directory (Mostly Accurate)</h4>
            <div className="space-y-2 text-muted-foreground">
              <a href="#team" className="block text-sm hover:text-primary transition-all border-l-4 border-transparent hover:border-primary pl-3 py-1 hover:scale-105">📋 Mugshot Gallery (Recent Photos)</a>
              <a href="#matches" className="block text-sm hover:text-primary transition-all border-l-4 border-transparent hover:border-primary pl-3 py-1 hover:scale-105">📅 Yard Schedule (Weather Permitting)</a>
              <a href="#stats" className="block text-sm hover:text-primary transition-all border-l-4 border-transparent hover:border-primary pl-3 py-1 hover:scale-105">📊 Fantasy Stats (95% True)</a>
              <a href="#news" className="block text-sm hover:text-primary transition-all border-l-4 border-transparent hover:border-primary pl-3 py-1 hover:scale-105">📰 Gossip Corner (Updated Hourly)</a>
              <a href="#" className="block text-sm hover:text-primary transition-all border-l-4 border-transparent hover:border-primary pl-3 py-1 hover:scale-105">🎓 Cricket Academy (Online Course Pending)</a>
              <a href="#" className="block text-sm hover:text-primary transition-all border-l-4 border-transparent hover:border-primary pl-3 py-1 hover:scale-105">🍕 Canteen Menu (Pizza Fridays!)</a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-primary mt-8 pt-8 text-center bg-card/30 rounded-lg p-4 hover:bg-card/50 transition-all">
          <p className="text-primary text-sm font-semibold animate-pulse">
            🏏 Supporting chaos through sports and questionable life choices 🏏
          </p>
          <p className="text-muted-foreground text-xs mt-2 italic">
            "Cricket: The path to freedom lies not in escape, but in hitting sixes and eating good food"
          </p>
          <p className="text-muted-foreground text-xs mt-1 opacity-60">
            - Manoj Lightning (while eating canteen samosa)
          </p>
          <div className="mt-3 text-xs text-muted-foreground">
            🎯 Follow us: @ChintapakDumDum | 📧 Email: cricketchaos@definitelynotreal.com | 📱 WhatsApp: Ask Warden
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
