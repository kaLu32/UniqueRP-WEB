import { useState } from 'react'

// Import video fajlova
import shaciVideo from '../assets/videos/shaci.mp4'
import vnmVideo from '../assets/videos/vnm_vristanje_od_smeha.mp4'
import swatVideo from '../assets/videos/Swat_Leti.mp4'
import lukaVideo from '../assets/videos/Luka_sofer_.mp4'

function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  
  const videos = [
    {
      title: "Oces da ubijem taoca?!?!?",
      videoUrl: shaciVideo
    },
    {
      title: "Inspektor Ilic kraj telefona.",
      videoUrl: vnmVideo
    },
    {
      title: "Ko kaze da blinda ne leti?",
      videoUrl: swatVideo
    },
    {
      title: "Autobus na dva kola",
      videoUrl: lukaVideo
    }
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide bg-gradient-to-r from-neon-purple via-neon-blue to-neon-purple bg-clip-text text-transparent neon-text-blue">VIDEO SADRŽAJ</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Pogledajte naše najnovije trailere, ture servera i najbolje roleplay momente
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="group relative aspect-video bg-black cursor-pointer overflow-hidden border-2 border-neon-purple/30 hover:border-neon-blue/60 transition-all duration-300 hover:scale-105 rounded-lg"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Video preview */}
              {video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be') ? (
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              ) : (
                <video
                  src={video.videoUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                />
              )}
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                <div className="w-20 h-20 rounded-full group-hover:scale-110 flex items-center justify-center transition-all">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-xl font-bold tracking-wide group-hover:text-neon-blue transition-colors">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for video player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-neon-blue transition-colors duration-300 z-10 group"
            onClick={() => setSelectedVideo(null)}
          >
            <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className="group-hover:drop-shadow-[0_0_8px_rgba(65,105,225,0.8)]"></path>
            </svg>
          </button>
          
          <div className="relative max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full aspect-video">
              {selectedVideo.videoUrl.includes('youtube.com') || selectedVideo.videoUrl.includes('youtu.be') ? (
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full rounded-lg border-2 border-neon-blue/50 shadow-[0_0_50px_rgba(65,105,225,0.3)]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  src={selectedVideo.videoUrl}
                  className="w-full h-full rounded-lg border-2 border-neon-blue/50 shadow-[0_0_50px_rgba(65,105,225,0.3)]"
                  controls
                  autoPlay
                  playsInline
                  onLoadedData={(e) => e.target.play()}
                />
              )}
            </div>
            
            <div className="mt-4 md:mt-6 text-center px-4">
              <h3 className="text-xl md:text-3xl font-bold text-white neon-text-blue">
                {selectedVideo.title}
              </h3>
            </div>
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

export default VideoSection
