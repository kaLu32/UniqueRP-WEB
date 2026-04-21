function Rules() {
  const rules = [
    {
      title: "1. Poštovanje Igrača",
      description: "Uvijek postupajte sa poštovanjem prema drugim igračima. Nikakvo vrijeđanje ili diskriminacija neće biti tolerisano.",
      icon: "👥"
    },
    {
      title: "2. Roleplay Uvijek",
      description: "Server je 100% roleplay. Sve akcije moraju imati RP razlog.",
      icon: "🎭"
    },
    {
      title: "3. Bez Meta-gaminga",
      description: "Korištenje informacija van igre u igri je strogo zabranjeno.",
      icon: "🚫"
    },
    {
      title: "4. Bez RDM/VDM",
      description: "Random Death Match i Vehicle Death Match su zabranjeni.",
      icon: "⚔️"
    }
  ]

  return (
    <section id="rules">
      <div className="container mx-auto px-4 md:py-32 py-20">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide bg-gradient-to-r from-neon-purple via-neon-blue to-neon-purple bg-clip-text text-transparent neon-text-blue">Osnovna pravila</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Poštovanje pravila osigurava kvalitetno iskustvo za sve igrače
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          {rules.map((rule, index) => (
            <div 
              key={index} 
              className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-neon-blue/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">
                  {rule.icon}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {rule.title}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://discord.com/channels/1203469999575015484/1385944320535691305" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            <span>Pogledaj Sva Pravila</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Rules
