
import Header from '../components/Header';
import Hero from '../components/Hero';
import TeamRoster from '../components/TeamRoster';
import Matches from '../components/Matches';
import Statistics from '../components/Statistics';
import News from '../components/News';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 to-amber-900">
      <Header />
      <Hero />
      <TeamRoster />
      <Matches />
      <Statistics />
      <News />
      <Footer />
    </div>
  );
};

export default Index;
