
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const newsArticles = [
    {
      id: "1",
      title: "Manoj 'Lightning-u' Prabhu Century Adichchu Villain குரூப்ஸ்-a Ootitaan!",
      excerpt: "Captain Lightning-u semma century adichu 156* runs pannaan. Last over-la 4 sixes consecutive-a adichu match-a thiruppinaan. Opposition bowler-u cry pannitaan...",
      date: "2024-05-30",
      author: "Match Reporter Machaan",
      authorPhoto: "https://cds-players-development.zohostratus.com/GOD.png",
      category: "Mass Victory",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400"
    },
    {
      id: "2",
      title: "Piradeep 'Six Machine-u' Hat-trick of Sixes Pottaan!",
      excerpt: "Piradeep anna last 3 balls-la 3 sixes adichu stadium-la irukka crowd-a mad panniraan. Ball ellaam veliya pochu, ball boy-ku romba vela achu...",
      date: "2024-05-25",
      author: "Six Counter Anna",
      authorPhoto: "https://cds-players-development.zohostratus.com/Piradeep.png",
      category: "Breaking Records",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400"
    },
    {
      id: "3",
      title: "Ragul 'Kaara Look-u' Pandi 5 Wickets in 5 Balls!",
      excerpt: "Ragul bhai oru over-la 5 wickets edukkaran! Opposition team full-a nervous aagi, stumps ellaam flying. Umpire kooda bayandhuchu...",
      date: "2024-05-20",
      author: "Wicket Tracker Bro",
      authorPhoto: "https://cds-players-development.zohostratus.com/ragul.png",
      category: "Bowling Beast",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
    },
    {
      id: "4",
      title: "Team-a Celebrity XI-ku Challenge Pannanga!",
      excerpt: "Namma boys Celebrity XI-ku challenge pannirukanga. Dhoni, Kohli ellaam varanga. Manoj Lightning already practice pannitu irukkaan. Mass show aagum!",
      date: "2024-05-15",
      author: "Challenge Committee Thala",
      authorPhoto: "https://cds-players-development.zohostratus.com/msand.png",
      category: "Big Match Coming",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
    }
  ];

  return (
    <section id="news" className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest News-u 🔥</h2>
          <p className="text-xl text-muted-foreground">Namma Prison XI-oda latest mass updates-ku stay tuned-a irungappa!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article, index) => (
            <article key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-bold rounded">
                    {article.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <img 
                    src={article.authorPhoto} 
                    alt={article.author}
                    className="w-10 h-10 rounded-full border-2 border-card"
                  />
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('en-IN')}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary cursor-pointer transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  <Link 
                    to={`/news/${article.id}`}
                    className="text-primary hover:text-primary/80 font-semibold text-sm transition-colors hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
