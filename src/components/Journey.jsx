function Journey() {
  const milestones = [
    {
      year: "Apr 14, 2024",
      title: "unique 1.0",
      description: "Unique RP je pokrenut kao jedan od najkvalitetnijih Balkanskih roleplay servera, okupljajući stotine igrača"
    },
    {
      year: "Feb 14, 2025",
      title: "unique 2.0",
      description: "Značajna nadogradnja servera sa potpuno novim poslovima, vozilima i mehanikama koje su podigle roleplay iskustvo na novu razinu"
    },
    {
      year: "Dec 04, 2025",
      title: "unique 3.0",
      description: "Kompletan reboot servera sa NOVIM custom skriptama, novom ekonomijom i proširenom mapom koja donosi svež početak za sve igrače"
    },
  ]

  return (
    <section id="journey" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue bg-clip-text text-transparent neon-text-blue">PUT SERVERA</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue mx-auto neon-glow-blue"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="relative pl-8 md:pl-16 border-l-2 border-neon-purple/50 pb-8 animate-slide-up hover:border-neon-blue/70 transition-colors group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-0 top-0 w-5 h-5 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-blue rounded-full transform -translate-x-[10px] neon-glow-blue group-hover:scale-125 transition-transform"></div>
                
                <div className="mb-2">
                  <span className="text-sm text-neon-blue tracking-wider uppercase font-semibold neon-text-blue">{milestone.year}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide uppercase bg-gradient-to-r from-white to-neon-purple group-hover:from-neon-blue group-hover:to-neon-purple bg-clip-text text-transparent transition-all">
                  {milestone.title}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-2xl">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
