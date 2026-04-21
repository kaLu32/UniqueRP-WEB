function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center py-32">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <div className="inline-block">
              <h1 className="text-7xl md:text-9xl font-bold tracking-wider mb-2 neon-text-blue">
                UNIQUE
              </h1>
              <div className="text-lg md:text-xl tracking-[0.3em] text-neon-purple font-light neon-text-purple">
                ROLEPLAY
              </div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Budi deo sveta gde priče oživljavaju. Pridruži se Unique zajednici i doživi 
            najautentičniji roleplay server.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a href="#" className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue hover:from-neon-purple hover:via-neon-blue hover:to-neon-purple text-white px-10 py-4 text-sm font-semibold tracking-wide transition uppercase neon-glow-blue animate-pulse-slow">
              Pridruži Se
            </a>
            <a href="#journey" className="border-2 border-neon-purple hover:bg-gradient-to-r hover:from-neon-purple hover:to-neon-blue hover:border-neon-blue px-10 py-4 text-sm font-semibold tracking-wide transition uppercase neon-glow-purple">
              Naša Priča
            </a>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero
