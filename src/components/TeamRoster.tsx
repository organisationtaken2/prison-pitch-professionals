
import PlayerCard from './PlayerCard';

const TeamRoster = () => {
  const players = [
    {
      name: "Manoj 'Lightning' Prabhu",
      prisonerNumber: "IP2015-001",
      position: "Captain/Bowler",
      sentence: "12 Years",
      crime: "Bowling Too Fast for Umpires",
      image: "https://cds-players-development.zohostratus.com/GOD.png",
      stats: { matches: 45, runs: 2150, wickets: 5, average: "48.9" }
    },
    {
      name: "Santhosh 'The Wall' Kumar",
      prisonerNumber: "IP2017-023",
      position: "Fast Bowler",
      sentence: "8 Years",
      crime: "Excessive Ball Blocking",
      image: "https://cds-players-development.zohostratus.com/msand.png",
      stats: { matches: 38, runs: 245, wickets: 87, average: "18.2" }
    },
    {
      name: "Manoj 'Spin King' Kumar",
      prisonerNumber: "IP2016-045",
      position: "Spinner",
      sentence: "15 Years",
      crime: "Making Batsmen Dizzy with Spin",
      image: "https://cds-players-development.zohostratus.com/manoj.png",
      stats: { matches: 42, runs: 567, wickets: 95, average: "16.8" }
    },
    {
      name: "Surya 'The Keeper' Prakash",
      prisonerNumber: "IP2018-067",
      position: "Wicket Keeper",
      sentence: "6 Years",
      crime: "Stealing Too Many Wickets",
      image: "https://cds-players-development.zohostratus.com/surya.png",
      stats: { matches: 40, runs: 1234, wickets: 0, average: "31.2" }
    },
    {
      name: "Piradeep 'Big Hitter' Ganesan",
      prisonerNumber: "IP2019-089",
      position: "All Rounder",
      sentence: "10 Years",
      crime: "Hitting Sixes Out of Stadium",
      image: "https://cds-players-development.zohostratus.com/Piradeep.png",
      stats: { matches: 35, runs: 1567, wickets: 42, average: "44.8" }
    },
    {
      name: "Prabhu 'The Anchor' Raam",
      prisonerNumber: "IP2020-112",
      position: "Batsman",
      sentence: "7 Years",
      crime: "Refusing to Give Strike to Partners",
      image: "https://cds-players-development.zohostratus.com/prabhu.png",
      stats: { matches: 30, runs: 1345, wickets: 2, average: "42.1" }
    },
    {
      name: "Ragul 'The Enforcer' Pandi",
      prisonerNumber: "IP2021-134",
      position: "All Rounder",
      sentence: "9 Years",
      crime: "Intimidating Opposition with Stare",
      image: "https://cds-players-development.zohostratus.com/ragul.png",
      stats: { matches: 28, runs: 987, wickets: 35, average: "35.3" }
    }
  ];

  return (
    <section id="team" className="bg-gradient-to-b from-stone-800 to-stone-900 py-16 border-t-4 border-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prison bar pattern overlay */}
        <div className="absolute left-0 right-0 opacity-10 pointer-events-none">
          <div className="flex h-full">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="flex-1 border-r border-stone-600"></div>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-amber-100 mb-4 prison-shadow">Team Roster</h2>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            Meet our extraordinary team of players who have found redemption and purpose through cricket.
            Each player brings unique skills forged through adversity and determination behind bars.
          </p>
          <div className="mt-4 bg-stone-700 border-2 border-amber-700 rounded-lg px-4 py-2 inline-block">
            <span className="text-orange-400 font-bold">MAXIMUM SECURITY CRICKET DIVISION</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {players.map((player, index) => (
            <PlayerCard key={index} {...player} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamRoster;
