import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './maincomponents/Home'
import Content from './maincomponents/Content'
import ContentCreators from './maincomponents/ContentCreators'
import Server from './maincomponents/Server'
import Staff from './maincomponents/Staff'

function App() {
  return (
    <Router>
      <div className="fixed inset-0 bg-gradient-to-b from-black via-black to-black pointer-events-none" style={{ zIndex: -1 }}>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(65, 105, 225, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            backgroundPosition: 'center center'
          }}
        ></div>
        
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(65, 105, 225, 0.2) 2px, transparent 2px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.2) 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px',
            backgroundPosition: 'center center',
            animation: 'gridMove 20s linear infinite'
          }}
        ></div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/30 via-neon-purple/5 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neon-blue/30 via-neon-blue/5 to-transparent animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-neon-cyan/25 via-transparent to-transparent animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                background: i % 3 === 0 ? '#4169E1' : i % 3 === 1 ? '#a855f7' : '#06b6d4',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: Math.random() * 5 + 's',
                opacity: Math.random() * 0.5 + 0.3,
                boxShadow: '0 0 10px currentColor'
              }}
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 100px;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/content-creators" element={<ContentCreators />} />
        <Route path="/server" element={<Server />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </Router>
  )
}

export default App
