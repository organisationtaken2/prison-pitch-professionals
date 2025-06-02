
import { TrendingUp, Target, Award, Users } from 'lucide-react';

const Statistics = () => {
  const teamStats = [
    { label: "Matches Played", value: "78", icon: Users },
    { label: "Matches Won", value: "52", icon: Award },
    { label: "Win Percentage", value: "66.7%", icon: TrendingUp },
    { label: "Highest Score", value: "312/6", icon: Target }
  ];

  const topPerformers = [
    { name: "Rajesh Kumar", category: "Highest Individual Score", value: "156*" },
    { name: "Vikram Singh", category: "Best Bowling Figures", value: "7/23" },
    { name: "Suresh Patel", category: "Most Wickets", value: "95" },
    { name: "Ravi Gupta", category: "Most Sixes", value: "67" }
  ];

  return (
    <section id="stats" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Team Statistics</h2>
          <p className="text-xl text-gray-300">Our journey in numbers - proving that second chances lead to first-class performance</p>
        </div>

        {/* Team Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                <IconComponent className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Top Performers */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-orange-500 mb-6 text-center">Record Holders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topPerformers.map((performer, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                <div>
                  <p className="text-white font-semibold">{performer.name}</p>
                  <p className="text-gray-300 text-sm">{performer.category}</p>
                </div>
                <div className="text-2xl font-bold text-orange-500">
                  {performer.value}
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
