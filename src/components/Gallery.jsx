import { useState } from 'react'

import akademija from '../assets/images/akademija.png'
import gsf from '../assets/images/gsf.png'
import pume2win from '../assets/images/pume2win.png'
import sezona1 from '../assets/images/sezona1.jpg'
import trafficunit from '../assets/images/trafficunit.png'
import west from '../assets/images/west.png'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  
  const images = [
    {
      src: sezona1,
      title: 'Unique RP - Chapter 1.0',
      description: 'Kraj prve sezone',
      featured: true
    },
    {
      src: gsf,
      title: 'GSF',
      description: 'Grove Street Families - vladajuća banda ili ipak ne?',
      featured: true
    },
    {
      src: pume2win,
      title: 'Opasne pume',
      description: 'Eso ocekivali smo vise od tebe...',
      featured: false
    },
    {
      src: trafficunit,
      title: "Traffic Unit",
      description: "Chapter 3.0 - Traffic Unit",
      featured: false
    },
    {
      src: west,
      title: "Mehaničarska West",
      description: "Dream team nema sta da se kaze",
      featured: false
    },
    {
      src: akademija,
      title: "PD Akademija",
      description: "Sve pocinje negdje pa tako i policija :D",
      featured: false
    }
  ]

  return (
    <section id="gallery" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide bg-gradient-to-r bg-neon-blue bg-clip-text text-transparent neon-text-blue">DOŽIVITE SVET</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Zaronite u zapanjujuće vizuele i epske momente iz Unique sveta. 
            Svaka slika priča priču o avanturi, drami i nezaboravnim iskustvima.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-video overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
              onClick={() => setSelectedImage(image)}
            >
              {/* Placeholder za sliku - zameni sa pravim slikama */}
              <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500"></div>
              
              {/* Featured badge */}
              {image.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white px-3 py-1 text-xs font-semibold tracking-wider z-10 neon-glow-blue">
                  FEATURED
                </div>
              )}
              
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-blue transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(65,105,225,0.6)]"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {image.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  Klikni za uvećanje
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center p-12 rounded-lg  relative overflow-hidden mt-20 md:mt-32">
          <h3 className="text-3xl font-bold mb-4 tracking-wide bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent relative z-10">ŽELIŠ VIDETI VIŠE?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
            Pogledaj naš Tiktok kanal i društvene mreže za još epskih momenata i sadržaja iz pozadine.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a href="https://discord.com/channels/1203469999575015484/1278073437394567178" className="border-2 border-neon-purple hover:bg-gradient-to-r hover:from-neon-purple hover:to-neon-blue text-white px-8 py-3 text-sm font-semibold tracking-wide transition uppercase neon-glow-purple">
              Discord
            </a>
            <a href="https://www.tiktok.com/@uniquerp_live21" className="border-2 border-neon-blue hover:bg-gradient-to-r hover:from-neon-blue hover:to-neon-purple text-white px-8 py-3 text-sm font-semibold tracking-wide transition uppercase neon-glow-blue">
              Tiktok
            </a>
          </div>
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-neon-blue transition-colors duration-300 z-10 group"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className="group-hover:drop-shadow-[0_0_8px_rgba(65,105,225,0.8)]"></path>
            </svg>
          </button>
          
          <div className="relative max-w-7xl max-h-full w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] md:max-h-[90vh] w-auto h-auto object-contain rounded-lg border-2 border-neon-blue/50 shadow-[0_0_50px_rgba(65,105,225,0.3)]"
              />
            </div>
            
            {selectedImage.title && (
              <div className="mt-4 md:mt-6 text-center px-4">
                <h3 className="text-xl md:text-3xl font-bold text-white neon-text-blue mb-2">
                  {selectedImage.title}
                </h3>
                {selectedImage.description && (
                  <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                    {selectedImage.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}

export default Gallery
