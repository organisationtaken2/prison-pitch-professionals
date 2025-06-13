
import PlayerCard from './PlayerCard';

const TeamRoster = () => {
  const players = [
    {
      name: "Manoj 'Lightning-u' Prabhu",
      prisonerNumber: "IP2015-001",
      position: "Captain/Fast Bowler-u",
      sentence: "12 Varsham",
      crime: "Romba Fast-a Ball Potu Umpire-ku Kannu Theriyala",
      image: "https://cds-players-development.zohostratus.com/GOD.png",
      stats: { matches: 45, runs: 2150, wickets: 85, average: "48.9" }
    },
    {
      name: "Santhosh 'The Wall-u' Kumar",
      prisonerNumber: "IP2017-023",
      position: "Fast Bowler Thala",
      sentence: "8 Varsham",
      crime: "Yaarum Ball-a Hit Panna Mudiyala - Too Much Defense",
      image: "https://cds-players-development.zohostratus.com/msand.png",
      stats: { matches: 38, runs: 245, wickets: 87, average: "18.2" }
    },
    {
      name: "Manoj 'Spin Raja' Kumar",
      prisonerNumber: "IP2016-045",
      position: "Spinner Machaan",
      sentence: "15 Varsham",
      crime: "Batsman-a Spin Panni Mayakkam Pottu",
      image: "https://cds-players-development.zohostratus.com/manoj.png",
      stats: { matches: 42, runs: 567, wickets: 95, average: "16.8" }
    },
    {
      name: "Surya 'Keeper Boss' Prakash",
      prisonerNumber: "IP2018-067",
      position: "Wicket Keeper Thala",
      sentence: "6 Varsham",
      crime: "Romba Wicket-u Steal Pannitaan",
      image: "https://cds-players-development.zohostratus.com/surya.png",
      stats: { matches: 40, runs: 1234, wickets: 0, average: "31.2" }
    },
    {
      name: "Piradeep 'Six Machine-u' Ganesan",
      prisonerNumber: "IP2019-089",
      position: "All Rounder Mass",
      sentence: "10 Varsham",
      crime: "Six Adichchu Stadium Veliya Anupitaan",
      image: "https://cds-players-development.zohostratus.com/Piradeep.png",
      stats: { matches: 35, runs: 1567, wickets: 42, average: "44.8" }
    },
    {
      name: "Prabhu 'Anchor Pannuvan' Raam",
      prisonerNumber: "IP2020-112",
      position: "Opening Batsman-u",
      sentence: "7 Varsham",
      crime: "Strike-a Partner-ku Kudukka Maataan",
      image: "https://cds-players-development.zohostratus.com/prabhu.png",
      stats: { matches: 30, runs: 1345, wickets: 2, average: "42.1" }
    },
    {
      name: "Ragul 'Kaara Look-u' Pandi",
      prisonerNumber: "IP2021-134",
      position: "All Rounder Rowdy",
      sentence: "9 Varsham",
      crime: "Opposition Team-a Look Potti Bayam Panniraan",
      image: "https://cds-players-development.zohostratus.com/ragul.png",
      stats: { matches: 28, runs: 987, wickets: 35, average: "35.3" }
    }
  ];

  return (
    <section id="team" className="bg-background py-16 border-t-4 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prison bar pattern overlay */}
        <div className="absolute left-0 right-0 opacity-10 pointer-events-none">
          <div className="flex h-full">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="flex-1 border-r border-border"></div>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-foreground mb-4 prison-shadow hover:animate-wiggle cursor-pointer">
            🎭 Team Roster-u (Verified by Fingerprints) 💪
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Namma <em>totally innocent</em> players-a meet pannunga! Ellaarum cricket through <strong>pure luck</strong> and <em>questionable decisions</em> find pannirukanga.
            Warning: Approach with caution. Side effects include uncontrollable laughter and sudden urge to play cricket badly! 😂
          </p>
          <div className="mt-4 bg-card border-2 border-primary rounded-lg px-4 py-2 inline-block animate-pulse">
            <span className="text-primary font-bold">🏆 MAXIMUM ENTERTAINMENT CRICKET CHAOS 🔥</span>
          </div>
          <div className="mt-2 text-sm text-muted-foreground bg-destructive/20 border border-destructive rounded px-3 py-1 inline-block">
            ⚠️ All stats may be slightly exaggerated for dramatic effect ⚠️
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
