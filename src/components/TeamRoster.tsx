
import PlayerCard from './PlayerCard';

const TeamRoster = () => {
  const players = [
    {
      name: "राजेश 'द वॉल' कुमार",
      prisonerNumber: "IP2015-001",
      position: "कप्तान/बल्लेबाज",
      sentence: "12 साल",
      crime: "अत्यधिक गेंद रोकना",
      stats: { matches: 45, runs: 2150, wickets: 5, average: "48.9" }
    },
    {
      name: "विक्रम 'लाइटनिंग' सिंह",
      prisonerNumber: "IP2017-023",
      position: "तेज गेंदबाज",
      sentence: "8 साल",
      crime: "अंपायरों के लिए बहुत तेज गेंदबाजी",
      stats: { matches: 38, runs: 245, wickets: 87, average: "18.2" }
    },
    {
      name: "सुरेश 'स्पिन किंग' पटेल",
      prisonerNumber: "IP2016-045",
      position: "स्पिनर",
      sentence: "15 साल",
      crime: "स्पिन से बल्लेबाजों को चक्कर दिलाना",
      stats: { matches: 42, runs: 567, wickets: 95, average: "16.8" }
    },
    {
      name: "अमित 'द कीपर' शर्मा",
      prisonerNumber: "IP2018-067",
      position: "विकेट कीपर",
      sentence: "6 साल",
      crime: "बहुत सारे विकेट चुराना",
      stats: { matches: 40, runs: 1234, wickets: 0, average: "31.2" }
    },
    {
      name: "रवि 'बिग हिटर' गुप्ता",
      prisonerNumber: "IP2019-089",
      position: "ऑल राउंडर",
      sentence: "10 साल",
      crime: "स्टेडियम से बाहर छक्के मारना",
      stats: { matches: 35, runs: 1567, wickets: 42, average: "44.8" }
    },
    {
      name: "दीपक 'द एंकर' वर्मा",
      prisonerNumber: "IP2020-112",
      position: "बल्लेबाज",
      sentence: "7 साल",
      crime: "साझेदारों को स्ट्राइक देने से इनकार",
      stats: { matches: 30, runs: 1345, wickets: 2, average: "42.1" }
    }
  ];

  return (
    <section id="team" className="bg-gradient-to-b from-stone-800 to-stone-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-100 mb-4">टीम रोस्टर</h2>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            हमारी असाधारण खिलाड़ियों की टीम से मिलें जिन्होंने क्रिकेट के माध्यम से मुक्ति और उद्देश्य पाया है।
            प्रत्येक खिलाड़ी विपरीत परिस्थितियों से निखरे अनूठे कौशल लेकर आता है।
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
