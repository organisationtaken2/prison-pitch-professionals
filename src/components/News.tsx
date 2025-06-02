
import { Calendar, User } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      title: "Indian Prison XI Wins Inter-Institutional Championship",
      excerpt: "Our team emerged victorious in the annual Inter-Institutional Cricket Championship, defeating 12 other teams...",
      date: "2024-05-30",
      author: "Sports Department",
      category: "Victory"
    },
    {
      title: "New Training Facility Inaugurated",
      excerpt: "A state-of-the-art cricket training facility was inaugurated at the Central Prison, featuring modern equipment...",
      date: "2024-05-25",
      author: "Administration",
      category: "Facility"
    },
    {
      title: "Player Rehabilitation Success Story",
      excerpt: "Former team captain shares his journey of transformation through cricket and how the sport changed his life...",
      date: "2024-05-20",
      author: "Rehabilitation Team",
      category: "Success Story"
    },
    {
      title: "Upcoming Charity Match Announcement",
      excerpt: "Indian Prison XI will face Celebrity XI in a charity match to raise funds for prisoner education programs...",
      date: "2024-05-15",
      author: "Event Committee",
      category: "Announcement"
    }
  ];

  return (
    <section id="news" className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Latest News</h2>
          <p className="text-xl text-gray-300">Stay updated with the latest happenings from Indian Prison XI</p>
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
