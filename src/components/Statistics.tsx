import { Trophy, Target, TrendingUp, Users, Award, Zap, Crown, Star } from 'lucide-react';

const Statistics = () => {
  const teamStats = [
    {
      label: "Total Kaidis",
      value: "7",
      icon: Users,
      description: "Active Prison Cricket Warriors",
      color: "text-primary"
    },
    {
      label: "Matches Won",
      value: "786",
      icon: Trophy,
      description: "Victory Count (Slightly Exaggerated)",
      color: "text-accent"
    },
    {
      label: "Sixes Hit",
      value: "420",
      icon: Target,
      description: "Ball-galu Space-ku Anuppitom!",
      color: "text-primary"
    },
    {
      label: "Wickets Taken",
      value: "555",
      icon: Award,
      description: "Opposition Batsman-gala Out Panninom",
      color: "text-accent"
    }
  ];

  const playerHighlights = [
    {
      player: "Manoj Lightning",
      achievement: "Fastest Century",
      value: "42 balls",
      description: "Helicopter shot specialist-u!",
      icon: Zap,
      image: "https://cds-players-development.zohostratus.com/GOD.png"
    },
    {
      player: "Piradeep Six Machine",
      achievement: "Most Sixes",
      value: "89 sixes",
      description: "Ball boy-ku romba vela!",
      icon: Crown,
      image: "https://cds-players-development.zohostratus.com/Piradeep.png"
    },
    {
      player: "Ragul Kaara Look",
      achievement: "Best Bowling",
      value: "7/11",
      description: "Opposition-a scare panniraan!",
      icon: Star,
      image: "https://cds-players-development.zohostratus.com/ragul.png"
    }
  ];

  const funStats = [
    { stat: "Balls Lost", count: "23", reason: "Six adichchu veliya anuppinadhu" },
    { stat: "Umpire Changes", count: "8", reason: "Decision wrong-nu complaint" },
    { stat: "Rain Delays", count: "15", reason: "Weather kooda namma side-la illa" },
    { stat: "Canteen Breaks", count: "156", reason: "Cricket vida food important!" },
    { stat: "Dance Celebrations", count: "67", reason: "Six adicha piragu mandatory!" },
    { stat: "Opposition Walkouts", count: "11", reason: "Too much intimidation!" }
  ];

  return (
    <section id="stats" className="bg-gradient-to-br from-background to-secondary py-16 border-y-4 border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-foreground mb-4 prison-shadow hover:animate-wiggle cursor-pointer">
            📊 Prison Cricket Statistics-u (Verified by Warden) 🏏
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Namma team-oda <em>100% accurate</em> performance data! <strong>*Numbers may be inflated for entertainment purposes*</strong>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {teamStats.map((stat, index) => (
            <div key={index} className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-lg p-6 text-center hover:border-primary transition-all duration-300 hover:scale-105 group">
              <stat.icon className={`h-10 w-10 ${stat.color} mx-auto mb-3 group-hover:animate-bounce`} />
              <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:animate-pulse`}>
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {playerHighlights.map((highlight, index) => (
            <div key={index} className="bg-gradient-to-br from-card to-primary/10 border-2 border-primary/40 rounded-lg p-6 hover:border-primary transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center mb-4">
                <img 
                  src={highlight.image} 
                  alt={highlight.player}
                  className="w-12 h-12 rounded-full border-2 border-primary mr-4 group-hover:animate-bounce"
                />
                <div>
                  <h4 className="font-bold text-foreground">{highlight.player}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.achievement}</p>
                </div>
              </div>
              <div className="text-center">
                <highlight.icon className="h-8 w-8 text-primary mx-auto mb-2 group-hover:animate-spin" />
                <div className="text-2xl font-bold text-primary mb-2 group-hover:animate-pulse">
                  {highlight.value}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-accent/20 to-primary/20 border-2 border-accent/40 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6 hover:animate-wiggle cursor-pointer">
            😄 Fun Prison Cricket Facts 🎭
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {funStats.map((funStat, index) => (
              <div key={index} className="bg-card/60 border border-border rounded-lg p-4 hover:bg-card transition-all hover:scale-105 group">
                <div className="text-2xl font-bold text-primary text-center mb-2 group-hover:animate-bounce">
                  {funStat.count}
                </div>
                <div className="font-semibold text-foreground text-center mb-1">
                  {funStat.stat}
                </div>
                <div className="text-xs text-muted-foreground text-center italic">
                  {funStat.reason}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;