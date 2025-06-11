
import Header from '../components/Header';
import Hero from '../components/Hero';
import TeamRoster from '../components/TeamRoster';
import Matches from '../components/Matches';
import Statistics from '../components/Statistics';
import News from '../components/News';
import Footer from '../components/Footer';
import PrisonAlert from '../components/PrisonAlert';
import CricketBall from '../components/CricketBall';
import SoundEffects from '../components/SoundEffects';
import CricketMiniGame from '../components/CricketMiniGame';
import CricketFacts from '../components/CricketFacts';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 to-amber-900 relative">
      <Header />
      <Hero />
      
      {/* Interactive Elements Section */}
      <section className="bg-gradient-to-r from-stone-800 to-stone-700 py-12 border-y-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-100 mb-4">🎮 Prison Entertainment Zone-u</h2>
            <p className="text-amber-200">Interactive games and mass features - engagement-ku semma irukku!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CricketMiniGame />
            <CricketFacts />
          </div>
        </div>
      </section>
      
      <TeamRoster />
      <Matches />
      <Statistics />
      <News />
      <Footer />
      
      {/* Interactive overlay components */}
      <CricketBall />
      <SoundEffects />
      <PrisonAlert />
    </div>
  );
};

export default Index;
