import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo_test.png'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const isActive = (path) => {
    return location.pathname === path
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Content', path: '/content' },
    { name: 'Content Creators', path: '/content-creators' },
    { name: 'Server', path: '/server' },
    { name: 'Staff', path: '/staff' }
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md shadow-lg shadow-neon-purple/20' : 'backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <img src={logo} alt="Unique Logo" className="w-10 h-10"/>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wider transition-all duration-300 group uppercase overflow-hidden ${
                  isActive(item.path) ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink transition-all duration-300 ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="relative px-6 py-2.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-bold text-sm tracking-wider overflow-hidden group transition-all duration-300"
            >
              <span className="relative z-10">KONTAKTIRAJ NAS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative w-10 h-10 text-white focus:outline-none group z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative flex flex-col items-center justify-center w-full h-full space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="relative rounded-2xl bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl border border-neon-purple/30 shadow-2xl shadow-neon-purple/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 pointer-events-none"></div>
            
            <div className="relative space-y-1 p-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-5 py-3.5 text-base font-bold tracking-wider transition-all duration-300 rounded-xl uppercase border relative overflow-hidden group ${
                    isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border-neon-purple/50'
                      : 'text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-neon-blue/20 hover:to-neon-purple/20 border-transparent hover:border-neon-purple/50'
                  }`}
                  style={{ 
                    animation: isOpen ? `slideIn 0.3s ease-out ${index * 50}ms both` : 'none'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    {item.name}
                    <span className="text-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-purple/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Link>
              ))}
              
              <div className="pt-3 mt-3 border-t border-neon-purple/20">
                <a 
                  href="https://discord.com/channels/1203469999575015484/1203749626512150589" 
                  className="block px-5 py-4 text-center bg-gradient-to-r from-neon-blue via-purple-600 to-neon-purple rounded-xl font-bold text-base tracking-wider hover:shadow-2xl hover:shadow-neon-blue/60 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-white relative overflow-hidden group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">KONTAKTIRAJ NAS</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-purple-600 to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
