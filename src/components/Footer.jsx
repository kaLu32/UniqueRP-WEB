function Footer() {
  return (
    <footer className="mx-auto mt-5 max-w-5xl">
      <div className="text-center p-6 rounded-lg border-2 border-neon-purple/40 neon-glow-purple relative overflow-hidden mt-20 md:mt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-wider mb-2 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">UNIQUE</h2>
              <div className="text-sm tracking-[0.3em] text-neon-purple">ROLEPLAY</div>
            </div>
            
            <p className="text-gray-400 max-w-2xl mb-6 leading-relaxed">
              Budite deo sveta gde priče oživljavaju. Pridružite se Unique zajednici 
              i doživite najunikatniji roleplay.
            </p>
            
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition text-sm tracking-wider uppercase">
                Discord
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition text-sm tracking-wider uppercase">
                YouTube
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition text-sm tracking-wider uppercase">
                Tiktok
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition text-sm tracking-wider uppercase">
                Tebex
              </a>
            </div>
          </div>
          
          <div className="border-t border-neon-purple/10">
            <p className="text-gray-600 text-sm">
              © 2025 Unique Roleplay Studios. Sva prava zadržana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer