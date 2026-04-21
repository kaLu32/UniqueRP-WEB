function CreatorsGallery() {
  const creators = [
    {
      name: "LanaGaming",
      avatar: "https://cdn.discordapp.com/avatars/402090062185234432/78eed4d88d64faaad6fdec61f3c1d787.png?size=1024",
      kick: "https://kick.com/Lanagaming",
      tiktok: "https://www.tiktok.com/@amodiligere",
      trovo: "https://trovo.live/Lanagaming",
      youtube : "https://www.youtube.com/@lana_gaming_",
    },
    {
      name: "Nikola_d_007",
      avatar: "https://cdn.discordapp.com/avatars/825293604796497941/a_28995cc84aba77a88eedd11e5f467138.gif?size=1024",
      kick: "https://kick.com/nikolad007",
    },
    {
      name: "M4ster",
      avatar: "https://cdn.discordapp.com/avatars/424210737003495424/a7e130a8dd82783011089805e8bb03e2.png?size=1024",
      kick: "https://kick.com/m4ster",
    },
    {
      name: "vNM",
      avatar: "https://cdn.discordapp.com/avatars/260872804205985792/a_5aee818645c58f4cc4c2528f4830f712.png",
      kick: "https://kick.com/nervosis",
    },
    {
      name: "frencicc",
      avatar: "https://cdn.discordapp.com/avatars/1095673742614601788/102219cee1259c07338c55ccdf88e7e3.png?size=512",
      kick: "https://kick.com/pajseravgo"
    },
    {
      name: "▄︻Ljubexx══━一",
      avatar: "https://cdn.discordapp.com/avatars/1458951557285675059/29ebf03700b038df0688ba96a86ab0c9.png?size=512",
      kick: "https://kick.com/ljubex921",
    },
    {
      name: "SinanMaslic",
      avatar: "https://cdn.discordapp.com/avatars/1063231250476830730/09ff0feee5f48b17b0f4103c6a55d39c.png?size=512",
      youtube: "https://www.youtube.com/@maslicgaming96",
    },
    {
      name: "krofna",
      avatar: "https://cdn.discordapp.com/avatars/306056489183739905/640697b940ddbbd2fef59f57b0347a54.png?size=512",
      youtube: "https://www.youtube.com/@krofnaaa",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20 md:py-32 text-center relative">
      <h2 className="text-5xl md:text-6xl font-bold mb-20 tracking-wide bg-neon-purple bg-clip-text text-transparent neon-text-purple">Naši Kreatori</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {creators.map((creator, index) => (
          <div 
            key={index} 
            className="bg-gray-800/50 rounded-lg p-6 text-center backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <img 
              src={creator.avatar} 
              alt={creator.name} 
              className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-purple-500/30"
              onError={(e) => { e.target.src = "https://via.placeholder.com/112?text=Avatar" }}
            />
            <h3 className="text-xl font-semibold mb-2">{creator.name}</h3>
            <p className="text-sm text-gray-400 mb-3">{creator.platform}</p>
            <p className="text-gray-300 text-sm mb-4 line-clamp-3">{creator.description}</p>
            
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {creator.kick && (
                <a 
                  href={creator.kick} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lime-600 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-white rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105 shadow-lg hover:shadow-lime-500/50"
                >
                  <span>Kick</span>
                </a>
              )}
              {creator.tiktok && (
                <a 
                  href={creator.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105 shadow-lg hover:shadow-slate-500/50"
                >
                  <span>TikTok</span>
                </a>
              )}
              {creator.youtube && (
                <a 
                  href={creator.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105 shadow-lg hover:shadow-red-500/50"
                >
                  <span>YouTube</span>
                </a>
              )}
              {creator.trovo && (
                <a 
                  href={creator.trovo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 text-white rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105 shadow-lg hover:shadow-green-500/50"
                >
                  <span>Trovo</span>
                </a>
              )}
              {creator.twitch && (
                <a 
                  href={creator.twitch} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105 shadow-lg hover:shadow-purple-500/50"
                >
                  <span>Twitch</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatorsGallery;