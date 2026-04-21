function StaffMembers() {
  const staffTeam = [
    {
      name: "LanaGaming",
      role: "Vlasnik",
      description: "Osnivač zajednice, glas razuma i vizionar – uvek tu da pomogne, prihvata svakoga bez razlike i donosi osmeh na lice svakom članu zajednice.",
      avatar: "https://cdn.discordapp.com/avatars/402090062185234432/78eed4d88d64faaad6fdec61f3c1d787.png?size=1024",
      discord: "_lana_gaming_"
    },
    {
      name: "vNM",
      role: "Vlasnik",
      description: "Osnivač zajednice, posvećen i odan onome što radi – uvek tu da pomogne, ispravi greške i osigura da server funkcioniše besprekorno.",
      avatar: "https://images-ext-1.discordapp.net/external/9Tu-uXjnEprr-BO-n4l5ieeLFFZEj9e8-tqAxonSVso/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/260872804205985792/a_5aee818645c58f4cc4c2528f4830f712.gif?width=906&height=906",
      discord: "vnm3214"
    },
    {
      name: "M4ster",
      role: "Developer",
      description: "Izuzetan developer koji je sve izgradio od nule – maksimalno posvećen, precizan i uvek spreman da sprovede svaku ideju u delo.",
      avatar: "https://cdn.discordapp.com/avatars/424210737003495424/a7e130a8dd82783011089805e8bb03e2.png?size=1024",
      discord: "master12392"
    },
    {
      name: "Stefann",
      role: "Developer",
      description: "Skroman, ali izuzetno posvećen – od samog početka gradi sve zajedno sa M4sterom, dajući svoj doprinos u svakom detalju razvoja.",
      avatar: "https://cdn.discordapp.com/avatars/645219049420226570/750ec1caff536f38703d1cc8717e5b49.png",
      discord: "stefann_1"
    },
    {
      name: "_Luka32!",
      role: "Developer",
      description: "Developer u usponu, strastven i predan – uči brzo i daje sve od sebe da doprinese razvoju servera na najbolji mogući način.",
      avatar: "https://cdn.discordapp.com/avatars/865874522062585856/e99cac7456f6b321586c200723aa56a4.png?size=1024",
      discord: "_luka32_"
    },
    {
      name: "Nikola_d_007",
      role: "Maper",
      description: "Majstor mapiranja koji gradi nemoguće – svaku viziju pretvara u stvarnost i osigurava da naše mape budu zaista Unique.",
      avatar: "https://cdn.discordapp.com/avatars/825293604796497941/a_28995cc84aba77a88eedd11e5f467138.gif?size=1024",
      discord: "nikolad_007"
    },
    {
      name: "Deass",
      role: "Maper",
      description: "Tehničar koji brine da svaka naša cigla bude postavljena s preciznošću, osiguravajući savršenstvo u svakom detalju.",
      avatar: "https://cdn.discordapp.com/avatars/286893618915049472/9c5259c5fcb135427c198e81cb72f93c.png",
      discord: "deass_01"
    },
    {
      name: "AMKOje.",
      role: "Vodja staffa",
      description: "Jedan je od vođa staffa. Smiren, tih, pravedan, vredan i pošten, uvek posvećen unapređenju zajednice kao i rešavanju svih problema.",
      avatar: "https://cdn.discordapp.com/avatars/646488591157035008/527fbc7dcf4948923fb5f8e113e5cbeb.png?size=1024",
      discord: "amkoje."
    },
    {
      name: "iMorph3us",
      role: "Vodja staffa",
      description: "Jedan je od vođa staffa. Smiren, pravedan i strog, svojom smirenošću i odlučnošću doprinosi stabilnosti i napretku zajednice.",
      avatar: "https://cdn.discordapp.com/avatars/278291326599036928/82cbaf17b8d4e667d1287b37a291cb32.png?size=1024",
      discord: "imorph3us"
    },
    {
      name: "HzBa",
      role: "High staff",
      description: "Odan, vredan i uvek se trudi da sve funkcioniše besprekorno.",
      avatar: "https://cdn.discordapp.com/avatars/593038970204717086/c731a3408f2e8b5ab1605d8008a1865a.png?size=1024",
      discord: "hzba"
    },
    {
      name: "!Laza",
      role: "Administrator",
      description: "Održava red i kvalitet roleplay-a na serveru.",
      avatar: "https://cdn.discordapp.com/avatars/514843396469424173/794952d5ea7deb795a4308abec89e915.png?size=1024",
      discord: "pavloviccccc"
    },
    {
      name: "Cevu",
      role: "Administrator",
      description: "Odan, vredan i uvek se trudi da sve funkcioniše besprekorno.",
      avatar: "https://cdn.discordapp.com/avatars/1157678146204733510/e1e9ca12f6d28fe5ebd0919a00b12886.png",
      discord: "cevu_1"
    },
    {
      name: "Skadi",
      role: "Administrator",
      description: "Održava mir i kvalitet roleplay-a na serveru.",
      avatar: "https://cdn.discordapp.com/avatars/553132937638445056/a2cc458d4690d4a5d5b34a18de729549.png",
      discord: "skadi_g"
    },
    // Dodaj više staff članova po potrebi
  ];

  const getRoleBadgeColor = (role) => {
    switch(role.toLowerCase()) {
      case 'vlasnik':
        return 'bg-gradient-to-r from-pink-600 via-pink-200 to-white text-black';
      case 'developer':
        return 'bg-gradient-to-r from-cyan-600 via-cyan-200 to-blue-200 text-black';
      case 'maper':
        return 'bg-gradient-to-r from-red-600 to-blue-600 text-black';
      case 'vodja staffa':
        return 'bg-gradient-to-r from-blue-700 to-cyan-200 text-black';
      case 'high staff':
        return 'bg-gradient-to-r from-pink-200 to-purple-600 text-black';
      case 'administrator':
        return 'bg-gradient-to-r from-cyan-300 to-red-600 text-black';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="container mx-auto px-4 text-center py-20 md:py-32">
      <h2 className="text-5xl md:text-6xl font-bold mb-20 tracking-wide bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-purple">Naš Staff Team</h2>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Upoznajte tim koji radi na tome da vaše iskustvo na serveru bude najbolje moguće
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {staffTeam.map((staff, index) => (
          <div 
            key={index} 
            className="bg-gray-800/50 rounded-lg p-6 text-center backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <div className="relative inline-block mb-4">
              <img 
                src={staff.avatar} 
                alt={staff.name} 
                className="w-28 h-28 rounded-full object-cover border-4 border-purple-500/30"
              />
              <span className={`absolute bottom-0 right-0 px-3 py-1 ${getRoleBadgeColor(staff.role)} text-xs font-bold rounded-full border-2 border-gray-800`}>
                {staff.role.toUpperCase()}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{staff.name}</h3>
            <p className="text-gray-300 text-sm mb-4">{staff.description}</p>
            
            {staff.discord && (
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span>{staff.discord}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StaffMembers;
