
import Header from '../components/Header';
import Hero from '../components/Hero';
import TeamRoster from '../components/TeamRoster';
import Matches from '../components/Matches';
import Statistics from '../components/Statistics';
import News from '../components/News';
import Footer from '../components/Footer';
import SoundEffects from '../components/SoundEffects';
import CricketMiniGame from '../components/CricketMiniGame';
import CricketFacts from '../components/CricketFacts';
import TamilMovieReferences from '../components/TamilMovieReferences';
import ThalaVsThalapathyDebate from '../components/ThalaVsThalapathyDebate';
import Chennai600028Tribute from '../components/Chennai600028Tribute';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <Hero />
      
      {/* Interactive Elements Section */}
      <section className="bg-card py-12 border-y-4 border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">🎮 Prison Entertainment Zone-u</h2>
            <p className="text-muted-foreground">Interactive games and mass features - engagement-ku semma irukku!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CricketMiniGame />
            <CricketFacts />
          </div>
        </div>
      </section>

      {/* Tamil Cinema Cricket Section */}
      <section className="bg-gradient-to-br from-background to-secondary py-16 border-y-4 border-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 hover:animate-wiggle cursor-pointer">
              🎬 Tamil Cinema Cricket Connection-u! 🏏
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Namma prison team-u ellaam famous Tamil movies-la cricket scenes-a inspire pannithu! 
              Movie dialogue-ku cricket match-u perfect combo! 🎭⚡
            </p>
          </div>
          
          <div className="space-y-8">
            <TamilMovieReferences />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ThalaVsThalapathyDebate />
              <Chennai600028Tribute />
            </div>
          </div>
        </div>
      </section>
      
      <TeamRoster />
      <Matches />
      <Statistics />
      <News />
      <Footer />
      
      {/* Interactive overlay components */}
      <SoundEffects />
    </div>
  );
};

export default Index;
