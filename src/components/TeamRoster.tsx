
import PlayerCard from './PlayerCard';

const TeamRoster = () => {
  const players = [
    {
      name: "Rajesh 'The Wall' Kumar",
      prisonerNumber: "IP2015-001",
      position: "Captain/Batsman",
      sentence: "12 Years",
      crime: "Excessive Ball Blocking",
      stats: { matches: 45, runs: 2150, wickets: 5, average: "48.9" }
    },
    {
      name: "Vikram 'Lightning' Singh",
      prisonerNumber: "IP2017-023",
      position: "Fast Bowler",
      sentence: "8 Years",
      crime: "Bowling Too Fast for Umpires",
      stats: { matches: 38, runs: 245, wickets: 87, average: "18.2" }
    },
    {
      name: "Suresh 'Spin King' Patel",
      prisonerNumber: "IP2016-045",
      position: "Spinner",
      sentence: "15 Years",
      crime: "Making Batsmen Dizzy with Spin",
      stats: { matches: 42, runs: 567, wickets: 95, average: "16.8" }
    },
    {
      name: "Amit 'The Keeper' Sharma",
      prisonerNumber: "IP2018-067",
      position: "Wicket Keeper",
      sentence: "6 Years",
      crime: "Stealing Too Many Wickets",
      stats: { matches: 40, runs: 1234, wickets: 0, average: "31.2" }
    },
    {
      name: "Ravi 'Big Hitter' Gupta",
      prisonerNumber: "IP2019-089",
      position: "All Rounder",
      sentence: "10 Years",
      crime: "Hitting Sixes Out of Stadium",
      stats: { matches: 35, runs: 1567, wickets: 42, average: "44.8" }
    },
    {
      name: "Deepak 'The Anchor' Verma",
      prisonerNumber: "IP2020-112",
      position: "Batsman",
      sentence: "7 Years",
      crime: "Refusing to Give Strike to Partners",
      stats: { matches: 30, runs: 1345, wickets: 2, average: "42.1" }
    }
  ];

  return (
    <section id="team" className="bg-gradient-to-b from-stone-800 to-stone-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-100 mb-4">Team Roster</h2>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            Meet our extraordinary team of players who have found redemption and purpose through cricket.
            Each player brings unique skills forged through adversity and determination behind bars.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player, index) => (
            <PlayerCard key={index} {...player} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamRoster;
