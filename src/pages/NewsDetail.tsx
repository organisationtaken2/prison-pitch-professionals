import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Eye, Heart, Share2, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const NewsDetail = () => {
  const { id } = useParams();
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const newsArticles = [
    {
      id: "1",
      title: "Manoj 'Lightning-u' Prabhu Century Adichchu Villain குரூப்ஸ்-a Ootitaan!",
      excerpt: "Captain Lightning-u semma century adichu 156* runs pannaan. Last over-la 4 sixes consecutive-a adichu match-a thiruppinaan. Opposition bowler-u cry pannitaan...",
      fullContent: `
        <p>Namma team captain Manoj 'Lightning-u' Prabhu yesterday-u semma mass-a century adichu entire prison-a celebrate panna vachitaan! 156 runs not out-a eduthu opposition team-a completely demoralize panniraan.</p>
        
        <p>Match start-la situation romba tough-a irundhuchu. First innings-la namma team 89/6-ku all out aagirukanga. Opposition team confident-a chase pannitu irundhaanga. Ana Lightning anna jail-la vandhappo dhan real game start aachu!</p>

        <p>"Enna da... Helicopter shot vida naan dhan helicopter-e udaikkaren!" - Lightning anna confidence speech prisoners ellaam kettu mass-a feel pannanga.</p>

        <p>Last over-la most dramatic-a irundhuchu. 24 runs needed, 6 balls mattum. Opposition captain kooda pressure-la field change pannitu irundharaan. Ana Lightning anna calmly walk-in pannitu, first 4 balls-la 4 sixes consecutive-a adicharaan!</p>

        <blockquote className="border-l-4 border-primary pl-4 italic text-lg my-6">
          "Shot adikka time-la enakku Dhoni-oda voice kekuthu... 'Manoj, helicopter ready panna!' Apram enna... ball-a space-ku anuppiten!" - Manoj Lightning post-match interview
        </blockquote>

        <p>Opposition bowler final ball-ku vandhapo already cry pannitu irundharaan. Lightning anna last ball-ku kooda six adichu total 156* runs complete panniraan. Ground-la irundha prisoners ellaam emotional-a aagiradhu!</p>

        <p>Warden sir kooda appreciate pannitu, special biriyani treat announce panniraan. "Cricket-la ippadi performance pannina, parole chance kooduthal irukum!" - Warden sir motivational speech.</p>

        <p>Lightning anna post-match-la humble-a irundharaan: "Team effort dhan main. Next match-la kooda semma performance kudukkanum. Prison-la cricket through dhan namma freedom feel pannrom!"</p>
      `,
      date: "2024-05-30",
      author: "Match Reporter Machaan",
      authorPhoto: "https://cds-players-development.zohostratus.com/GOD.png",
      category: "Mass Victory",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800",
      views: 1247,
      likes: 89
    },
    {
      id: "2", 
      title: "Piradeep 'Six Machine-u' Hat-trick of Sixes Pottaan!",
      excerpt: "Piradeep anna last 3 balls-la 3 sixes adichu stadium-la irukka crowd-a mad panniraan. Ball ellaam veliya pochu, ball boy-ku romba vela achu...",
      fullContent: `
        <p>Piradeep 'Six Machine-u' Ganesan yesterday match-la hat-trick of sixes adichu cricket history-la oru new record create panniraan! Last over-la consecutive 3 sixes adichu entire prison complex-a shake panniraan!</p>

        <p>Match situation tense-a irundhuchu. 18 runs needed in last over. Opposition team confident-a irundhaanga 15 runs defense panna mudiyum-nu. Ana Six Machine anna plan-e different-a irundhuchu!</p>

        <p>First ball-ku straight six! Ball veliya poiduchu, ball boy-u 10 minutes search pannitu kandupudikka mudiyala. Second ball-ku cover drive six! Third ball-ku... ayyo... pull shot six! Opposition captain-e shock-la standing!</p>

        <blockquote className="border-l-4 border-primary pl-4 italic text-lg my-6">
          "Bowling machine-la practice pannra time-la enakku thonuchu... real match-la kooda same confidence maintain pannanum. Appo dhan three sixes consecutive-a adichadhu!" - Piradeep Six Machine
        </blockquote>

        <p>Ball boy poor fellow ellaam tired-a aagiradhu balls search pannitu. Warden sir-u emergency-a 10 new balls order panniraan online-la. "Ippadi six adichchu balls-a waste pannina cricket budget exceed aagipoidum!" - Warden sir concerned-a solliraan.</p>

        <p>Prisoners ellaam Six Machine-ku special song kooda compose pannanga: "Piradeep anna... Six Machine-u... Ball-a space-ku anuppaan... Opposition-a shock-ku!" Full prison-la viral aagiradhu!</p>

        <p>Six Machine anna humble-a remain panniraan: "Team support illama naan onnum illa. Next match-la kooda same performance maintain pannanum. Prison cricket team-ku proud feel pannren!"</p>
      `,
      date: "2024-05-25",
      author: "Six Counter Anna",
      authorPhoto: "https://cds-players-development.zohostratus.com/Piradeep.png",
      category: "Breaking Records",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800",
      views: 892,
      likes: 67
    },
    {
      id: "3",
      title: "Ragul 'Kaara Look-u' Pandi 5 Wickets in 5 Balls!",
      excerpt: "Ragul bhai oru over-la 5 wickets edukkaran! Opposition team full-a nervous aagi, stumps ellaam flying. Umpire kooda bayandhuchu...",
      fullContent: `
        <p>Ragul 'Kaara Look-u' Pandi yesterday match-la impossible-nu nenachcha record create panniraan! Oru over-la 5 wickets continuous-a eduthu cricket history-la name register panniraan!</p>

        <p>Opposition team confident-a batting pannitu irundhaanga. 8 wickets remaining, target easy-nu plan pannitu irundhaanga. Ana Ragul bhai bowling-ku vandhapo atmosphere-e change aagiradhu!</p>

        <p>First ball: Clean bowled! Stumps flying! Second ball: LBW out! Umpire finger fast-a raise panniraan! Third ball: Caught behind! Keeper-u shock-la catch eduthaan! Fourth ball: Another clean bowled! Fifth ball: Hat-trick completed with run out!</p>

        <blockquote className="border-l-4 border-primary pl-4 italic text-lg my-6">
          "Kaara look pottu opposition batsman-a intimidate pannadhu secret weapon. Bowling accuracy-ku plus villain expression... unbeatable combination!" - Ragul Kaara Look
        </blockquote>

        <p>Opposition team completely collapse aagiradhu. Remaining batsmen bat hold panna kooda bayapadaanga. Umpire sir kooda Ragul bhai-ku respectfully ball kuduthaan next delivery-ku.</p>

        <p>Prison-la celebration level different-a irundhuchu. Prisoners ellaam Ragul bhai-ku new title kuduthanga: "Wicket Wizard of the Yard!" Special biriyani treat kooda arrange aagiradhu!</p>

        <p>Ragul bhai post-match interview-la modest-a irundharaan: "Look mattum podhahu, cricket skill kooda irukanum. Next match-la kooda opposition-a scare pannanum!"</p>
      `,
      date: "2024-05-20",
      author: "Wicket Tracker Bro", 
      authorPhoto: "https://cds-players-development.zohostratus.com/ragul.png",
      category: "Bowling Beast",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
      views: 1156,
      likes: 94
    },
    {
      id: "4",
      title: "Team-a Celebrity XI-ku Challenge Pannanga!",
      excerpt: "Namma boys Celebrity XI-ku challenge pannirukanga. Dhoni, Kohli ellaam varanga. Manoj Lightning already practice pannitu irukkaan. Mass show aagum!",
      fullContent: `
        <p>Breaking news! Namma Chin Tapak Dum Dum Cricket Team-ku official-a Celebrity XI challenge letter vandhiruchu! Dhoni, Kohli, Hardik Pandya ellaam participate pannaporaanga!</p>

        <p>Challenge letter-la mention pannirukanga: "Prison Cricket Team-oda performance impressive-a irukku. Professional players-ku kooda competition kudukkaranga. Official match organize pannalam!"</p>

        <p>Manoj Lightning captain-a excited-a irukkaraan: "Dream come true! Dhoni sir-oda helicopter shot-ku competition kudukkalam! Practice intensity double pannirukkom!"</p>

        <blockquote className="border-l-4 border-primary pl-4 italic text-lg my-6">
          "Celebrity XI varumbodhu namma prison team confidence-a irukanum. Ellaarum ready-a irukkom. Mass show kuduppom!" - Team Captain Lightning
        </blockquote>

        <p>Team preparation phase intense-a irukku. Daily practice 6 hours extend pannirukanga. Warden sir kooda special permission kuduthu equipment upgrade panniraan. New jerseys kooda design pannitu irukku!</p>

        <p>Six Machine Piradeep already celebrity players-ku message send panniraan: "Unga sixes-ku competition ready! Prison cricket different level-la irukku!"</p>

        <p>Match date officially announce pannumbodhu ticket booking start aagum. Prison authorities expecting huge crowd. TV coverage kooda irukum!</p>

        <p>Team motivation speech Ragul Kaara Look kuduthaan: "Celebrity-gala aanalum namma prison pride-ku play pannanum. Kaara look-la opposition-a intimidate pannuvom!"</p>
      `,
      date: "2024-05-15",
      author: "Challenge Committee Thala",
      authorPhoto: "https://cds-players-development.zohostratus.com/msand.png", 
      category: "Big Match Coming",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      views: 2341,
      likes: 156
    }
  ];

  const article = newsArticles.find(article => article.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article not found!</h1>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-card">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/20"></div>
        
        {/* Navigation */}
        <div className="absolute top-4 left-4 z-10">
          <Link 
            to="/" 
            className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border hover:bg-card transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
            {article.category}
          </span>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-8 left-8 right-8 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-lg">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Meta */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src={article.authorPhoto} 
                alt={article.author}
                className="w-12 h-12 rounded-full border-2 border-primary"
              />
              <div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.date).toLocaleDateString('en-IN')}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Eye className="h-4 w-4" />
                <span>{article.views} views</span>
              </div>
              <button 
                onClick={handleLike}
                className={`flex items-center gap-2 transition-all ${
                  isLiked ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                <span>{article.likes + likes}</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <div 
            className="prose prose-lg max-w-none text-foreground"
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'hsl(var(--foreground))'
            }}
            dangerouslySetInnerHTML={{ __html: article.fullContent }}
          />
        </div>

        {/* Related Articles Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            More Prison Cricket News
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {newsArticles.filter(a => a.id !== id).slice(0, 2).map((relatedArticle) => (
              <Link 
                key={relatedArticle.id}
                to={`/news/${relatedArticle.id}`}
                className="block bg-card border border-border rounded-lg p-4 hover:border-primary transition-all group"
              >
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {relatedArticle.title}
                </h4>
                <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                  {relatedArticle.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {new Date(relatedArticle.date).toLocaleDateString('en-IN')}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;