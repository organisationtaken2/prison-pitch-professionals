
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
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300 hover:shadow-xl">
      {/* Mugshot-style photo placeholder */}
      <div className="relative">
        <div className="bg-gray-600 h-64 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-300">{name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div className="bg-black text-white px-4 py-1 text-sm font-mono">
              PRISONER #{prisonerNumber}
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded">
          {position}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <div className="space-y-2 mb-4">
          <p className="text-gray-300 text-sm">
            <span className="text-orange-500 font-semibold">Sentence:</span> {sentence}
          </p>
          <p className="text-gray-300 text-sm">
            <span className="text-orange-500 font-semibold">Crime:</span> {crime}
          </p>
        </div>
        
        <div className="border-t border-gray-700 pt-4">
          <h4 className="text-orange-500 font-semibold mb-2">Career Stats</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Matches</p>
              <p className="text-white font-bold">{stats.matches}</p>
            </div>
            <div>
              <p className="text-gray-400">Runs</p>
              <p className="text-white font-bold">{stats.runs}</p>
            </div>
            <div>
              <p className="text-gray-400">Wickets</p>
              <p className="text-white font-bold">{stats.wickets}</p>
            </div>
            <div>
              <p className="text-gray-400">Average</p>
              <p className="text-white font-bold">{stats.average}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
