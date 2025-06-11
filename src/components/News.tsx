
import { Calendar, User } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      title: "Manoj 'Lightning-u' Prabhu Century Adichchu Villain குரூப்ஸ்-a Ootitaan!",
      excerpt: "Captain Lightning-u semma century adichu 156* runs pannaan. Last over-la 4 sixes consecutive-a adichu match-a thiruppinaan. Opposition bowler-u cry pannitaan...",
      date: "2024-05-30",
      author: "Match Reporter Machaan",
      category: "Mass Victory"
    },
    {
      title: "Piradeep 'Six Machine-u' Hat-trick of Sixes Pottaan!",
      excerpt: "Piradeep anna last 3 balls-la 3 sixes adichu stadium-la irukka crowd-a mad panniraan. Ball ellaam veliya pochu, ball boy-ku romba vela achu...",
      date: "2024-05-25",
      author: "Six Counter Anna",
      category: "Breaking Records"
    },
    {
      title: "Ragul 'Kaara Look-u' Pandi 5 Wickets in 5 Balls!",
      excerpt: "Ragul bhai oru over-la 5 wickets edukkaran! Opposition team full-a nervous aagi, stumps ellaam flying. Umpire kooda bayandhuchu...",
      date: "2024-05-20",
      author: "Wicket Tracker Bro",
      category: "Bowling Beast"
    },
    {
      title: "Team-a Celebrity XI-ku Challenge Pannanga!",
      excerpt: "Namma boys Celebrity XI-ku challenge pannirukanga. Dhoni, Kohli ellaam varanga. Manoj Lightning already practice pannitu irukkaan. Mass show aagum!",
      date: "2024-05-15",
      author: "Challenge Committee Thala",
      category: "Big Match Coming"
    }
  ];

  return (
    <section id="news" className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Latest News-u 🔥</h2>
          <p className="text-xl text-gray-300">Namma Prison XI-oda latest mass updates-ku stay tuned-a irungappa!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article, index) => (
            <article key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-orange-500 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-orange-500 text-white px-3 py-1 text-sm font-bold rounded">
                  {article.category}
                </span>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(article.date).toLocaleDateString('en-IN')}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 hover:text-orange-500 cursor-pointer transition-colors">
                {article.title}
              </h3>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-400 text-sm">
                  <User className="h-4 w-4 mr-1" />
                  {article.author}
                </div>
                <button className="text-orange-500 hover:text-orange-400 font-semibold text-sm transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
