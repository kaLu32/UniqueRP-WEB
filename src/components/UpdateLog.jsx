import { memo } from 'react';

const getChangeLabel = (type) => {
  switch(type) {
    case 'new': return 'NOVO';
    case 'improvement': return 'POBOLJŠANJE';
    case 'fix': return 'ISPRAVKA';
    default: return 'PROMJENA';
  }
};

const getBorderColor = (type) => {
  switch(type) {
    case 'new': return 'border-l-green-500';
    case 'improvement': return 'border-l-purple-500';
    case 'fix': return 'border-l-blue-500';
    default: return 'border-l-gray-500';
  }
};

const getLabelColor = (type) => {
  switch(type) {
    case 'new': return 'text-green-500';
    case 'improvement': return 'text-purple-500';
    case 'fix': return 'text-blue-500';
    default: return 'text-gray-400';
  }
};

const ChangeItem = memo(({ change }) => (
  <div className={`flex gap-4 p-5 rounded-xl bg-black/40 hover:bg-black/70 transition-colors duration-200 border-l-4 ${getBorderColor(change.type)}`}>
    <div className="flex-1">
      <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-2 ${getLabelColor(change.type)}`}>
        {getChangeLabel(change.type)}
      </span>
      {Array.isArray(change.text) ? (
        <ul className="space-y-2">
          {change.text.map((line, idx) => (
            <li key={idx} className="text-gray-300 text-base leading-relaxed flex items-start gap-2">
              <span className="text-purple-500 mt-1">•</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-300 text-base leading-relaxed">
          {change.text}
        </p>
      )}
    </div>
  </div>
));

ChangeItem.displayName = 'ChangeItem';

const UpdateCard = memo(({ update }) => (
  <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-neon-blue/50 transition-all duration-300 hover:-translate-y-1">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 pb-6 border-b-2 border-gray-800/50">
      <div className="flex items-center gap-4 flex-wrap">
        <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-5 py-2 rounded-full font-bold text-sm tracking-wider uppercase">
          v{update.version}
        </span>
        <span className="text-gray-500 text-sm tracking-wide">{update.date}</span>
      </div>
      <span className="text-gray-400 text-sm italic tracking-wide">{update.developer}</span>
    </div>
    
    <div className="space-y-4">
      {update.changes.map((change, idx) => (
        <ChangeItem key={idx} change={change} />
      ))}
    </div>
  </div>
));

UpdateCard.displayName = 'UpdateCard';

const updates = [
  {
    version: '1.2.0',
    date: '10/12/2025',
    developer: 'Unique Development Team',
    changes: [
      { 
        type: 'new', 
        text: [
          'Dodana nova funkcionalnost za upload slika',
          'Implementiran sistem za optimizaciju slika',
          'Dodana podrška za više formata'
        ]
      },
      { type: 'improvement', text: 'Poboljšan performans učitavanja stranice' },
      { type: 'fix', text: 'Ispravljena greška sa prijavom korisnika' }
    ]
  },
  {
    version: '3.0.1',
    date: '06/12/2025',
    developer: 'Unique Development Team',
    changes: [
      { 
        type: 'new', 
        text: [
          'Dodate plate pd-u/bolnici',
          'Dodat stash u bolnici',
          'Dodane zdravstvene knjizice',
          'Dodan bmx u salon',
          'Dodane kategorije u salonu po klasama vozila',
          'Aktivirana skripta za obijanje automobila'
        ]
      },
      { 
        type: 'improvement', 
        text: [
          'Smanjen damage (generalno)',
          'Smanjeni npc-evi na ulicama',
          'Skolnjena cena za text vozn ju u salonu'
        ]
      },
      { type: 'fix', text: 'Fixan problem sa slanjem novca preko banke'}
    ]
  },
  {
    version: '3.0.0',
    date: '05/12/2025',
    developer: 'Unique Development Team',
    changes: [
      { 
        type: 'new', 
        text: [
          'Dodan butik u centru grada',
          'Ubacena renta automobila kod apartmana (svih)', 
          'Ubacena mehanicarska west u sandy-u'
        ],
      },
      { type: 'improvement', text: 'Smanjena potrosnja goriva' },
      { 
        type: 'fix', 
        text: [
          'Popravljen prevod na poslovima (izbaceno č,ć,š,đ)', 
          'Popravljen digital den u centru grada (nestajanje textura)',
          'Fixana Poslovi Prodavnica (sada je moguce prodati iteme)',
          'Fixan BossMenu u Bolnici',
          'Fixan pristup bankama (pomerene kordinate)'
        ]}
    ]
  }
];

function UpdateLog() {
  return (
    <section id="updatelog" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            UPDATE LOG
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Pregled svih izmjena i poboljšanja servera. Pratite najnovije update-ove i prilagodite se novinama.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {updates.map((update, index) => (
            <UpdateCard key={`${update.version}-${index}`} update={update} />
          ))}
        </div>

        <div className="text-center mt-16 p-10 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 tracking-wide bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            BUDI U TOKU
          </h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Pridruži se našem Discord serveru da budeš prvi obavješten o novim update-ovima i promjenama.
          </p>
          <a 
            href="https://discord.gg/XKxkvsMtKP" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white px-10 py-4 rounded-full font-semibold tracking-wide transition-all duration-200 hover:scale-105 uppercase"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>Pridruži se Discord-u</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(UpdateLog);
