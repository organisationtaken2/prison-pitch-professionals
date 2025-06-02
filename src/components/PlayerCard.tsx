
interface PlayerCardProps {
  name: string;
  prisonerNumber: string;
  position: string;
  sentence: string;
  crime: string;
  stats: {
    matches: number;
    runs: number;
    wickets: number;
    average: string;
  };
}

const PlayerCard = ({ name, prisonerNumber, position, sentence, crime, stats }: PlayerCardProps) => {
  return (
    <div className="bg-gradient-to-b from-stone-700 to-stone-800 border-2 border-amber-700 rounded-lg overflow-hidden hover:border-amber-500 transition-all duration-300 hover:shadow-xl shadow-amber-900/30">
      {/* Mugshot-style photo placeholder */}
      <div className="relative">
        <div className="bg-gradient-to-b from-stone-600 to-stone-700 h-64 flex items-center justify-center border-b-2 border-amber-700">
          <div className="text-center">
            <div className="w-32 h-32 bg-stone-500 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-amber-600 shadow-lg">
              <span className="text-4xl font-bold text-amber-100">{name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div className="bg-amber-900 text-amber-100 px-4 py-2 text-sm font-mono border border-amber-600 rounded">
              कैदी #{prisonerNumber}
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-amber-600 text-amber-50 px-3 py-1 text-xs font-bold rounded border border-amber-500">
          {position}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-100 mb-3">{name}</h3>
        <div className="space-y-2 mb-4">
          <p className="text-amber-200 text-sm">
            <span className="text-amber-300 font-semibold">सजा:</span> {sentence}
          </p>
          <p className="text-amber-200 text-sm">
            <span className="text-amber-300 font-semibold">अपराध:</span> {crime}
          </p>
        </div>
        
        <div className="border-t-2 border-amber-700 pt-4">
          <h4 className="text-amber-300 font-semibold mb-3">करियर आंकड़े</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-stone-600/50 p-2 rounded border border-amber-700">
              <p className="text-amber-300">मैच</p>
              <p className="text-amber-100 font-bold">{stats.matches}</p>
            </div>
            <div className="bg-stone-600/50 p-2 rounded border border-amber-700">
              <p className="text-amber-300">रन</p>
              <p className="text-amber-100 font-bold">{stats.runs}</p>
            </div>
            <div className="bg-stone-600/50 p-2 rounded border border-amber-700">
              <p className="text-amber-300">विकेट</p>
              <p className="text-amber-100 font-bold">{stats.wickets}</p>
            </div>
            <div className="bg-stone-600/50 p-2 rounded border border-amber-700">
              <p className="text-amber-300">औसत</p>
              <p className="text-amber-100 font-bold">{stats.average}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
