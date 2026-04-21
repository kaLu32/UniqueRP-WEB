import { useEffect, useState } from "react"

function Features() {
  const [discordMembers, setDiscordMembers] = useState("500+")
  const [fivemPlayers, setFivemPlayers] = useState("0")

  useEffect(() => {
    const fetchDiscordMembers = async () => {
      try {
        // Koristi invite code umesto guild ID-a
        const response = await fetch('https://discord.com/api/v10/invites/8a4jThsxrv?with_counts=true')
        if (response.ok) {
          const data = await response.json()
          setDiscordMembers(`${data.approximate_member_count}`)
        }
      } catch (error) {
        console.error('Error fetching Discord members:', error)
      }
    }

    const fetchFivemPlayers = async () => {
      try {
        // Zameni sa svojim FiveM server IP:PORT
        const response = await fetch('https://servers-frontend.fivem.net/api/servers/single/epm4qa')
        if (response.ok) {
          const data = await response.json()
          setFivemPlayers(`${data.Data.clients}`)
        } else {
          console.error('FiveM API error:', response.status)
          setFivemPlayers("0")
        }
      } catch (error) {
        console.error('Error fetching FiveM players:', error)
        setFivemPlayers("0")
      }
    }

    fetchDiscordMembers()
    fetchFivemPlayers()
    
    const interval = setInterval(fetchFivemPlayers, 30000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { number: discordMembers, label: "Discord membera" },
    { number: fivemPlayers, label: "Igrači na serveru" },
    { number: "100+", label: "Jedinstvenih Poslova" },
    { number: "50+", label: "Custom Vozila" }
  ]

  const features = [
    {
      title: "Custom Skripte",
      description: "Potpuno custom razvijeni sistemi i mehanike koje nećete naći na drugim serverima."
    },
    {
      title: "Autentičan Roleplay",
      description: "Stroga roleplay pravila koja garantuju kvalitetno iskustvo igranja uloga bez narušavanja imerzije."
    },
    {
      title: "Aktivna Administracija",
      description: "Naš admin tim je dostupan 24/7 da osigura fer i kvalitetno okruženje za sve igrače."
    },
    {
      title: "Redovni Update-ovi",
      description: "Kontinuirano dodajemo novi sadržaj, poslove i mogućnosti kako bi iskustvo bilo svež."
    }
  ]

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center border-l-2 border-neon-purple/40 sm:first:border-l-0 md:first:border-l-0 group hover:border-neon-blue/60 transition-colors p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 tracking-wide bg-gradient-to-br from-neon-blue via-neon-purple to-neon-blue bg-clip-text text-transparent group-hover:scale-110 transition-transform neon-text-blue">{stat.number}</div>
              <div className="text-sm text-neon-purple uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 border border-transparent hover:border-neon-purple/30 rounded-lg transition-all">
                <div className="mb-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink group-hover:w-32 transition-all duration-300 neon-glow-blue"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide uppercase bg-gradient-to-r from-white to-neon-blue group-hover:from-neon-blue group-hover:to-neon-purple bg-clip-text text-transparent transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
