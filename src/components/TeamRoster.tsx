
import PlayerCard from './PlayerCard';

const TeamRoster = () => {
  const players = [
    {
      name: "Rajesh 'The Wall' Kumar",
      prisonerNumber: "IP2015-001",
      position: "Captain/Batsman",
      sentence: "12 years",
      crime: "Bank Robbery",
      stats: { matches: 45, runs: 2150, wickets: 5, average: "48.9" }
    },
    {
      name: "Vikram 'Lightning' Singh",
      prisonerNumber: "IP2017-023",
      position: "Fast Bowler",
      sentence: "8 years",
      crime: "Armed Robbery",
      stats: { matches: 38, runs: 245, wickets: 87, average: "18.2" }
    },
    {
      name: "Suresh 'Spin King' Patel",
      prisonerNumber: "IP2016-045",
      position: "Spinner",
      sentence: "15 years",
      crime: "Fraud",
      stats: { matches: 42, runs: 567, wickets: 95, average: "16.8" }
    },
    {
      name: "Amit 'The Keeper' Sharma",
      prisonerNumber: "IP2018-067",
      position: "Wicket Keeper",
      sentence: "6 years",
      crime: "Theft",
      stats: { matches: 40, runs: 1234, wickets: 0, average: "31.2" }
    },
    {
      name: "Ravi 'Big Hitter' Gupta",
      prisonerNumber: "IP2019-089",
      position: "All-rounder",
      sentence: "10 years",
      crime: "Assault",
      stats: { matches: 35, runs: 1567, wickets: 42, average: "44.8" }
    },
    {
      name: "Deepak 'The Anchor' Verma",
      prisonerNumber: "IP2020-112",
      position: "Batsman",
      sentence: "7 years",
      crime: "Burglary",
      stats: { matches: 30, runs: 1345, wickets: 2, average: "42.1" }
    }
  ];

  return (
    <section id="team" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Team Roster</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet our extraordinary team of players who have found redemption and purpose through cricket.
            Each player brings unique skills forged through adversity.
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
