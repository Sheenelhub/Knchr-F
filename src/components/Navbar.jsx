import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// ==========================================
// IMPORT YOUR MAIN LOGO HERE
// ==========================================
import knchrLogo from '../assets/knchr-logo.webp'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  // Listen for hash changes to update active menu item dynamically
  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Helper function to close mobile menu on click
  const closeMenu = () => setIsOpen(false);

  // Smart active state logic (highlights "News Room" even if reading a specific article)
  const isActive = (path) => {
    if (path === '#news' && currentHash.startsWith('#news')) return true;
    if (path === '#reparations' && currentHash.startsWith('#reparations')) return true;
    return currentHash === path;
  };

  // Dynamic CSS classes for active vs inactive links
  const desktopClass = (path) => isActive(path)
    ? "text-knchr-gold border-b-2 border-knchr-gold pb-1 whitespace-nowrap"
    : "text-slate-800 hover:text-knchr-gold transition-colors whitespace-nowrap";

  const mobileClass = (path) => isActive(path)
    ? "text-knchr-gold font-bold border-b border-gray-50 pb-3 block"
    : "text-slate-700 font-bold hover:text-knchr-gold transition-colors border-b border-gray-50 pb-3 block";

  return (
    <nav className="bg-white w-full relative font-sans transition-all duration-300">
      
      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between h-20 items-center w-full">
          
          {/* 1. Left Side: Brand Logo */}
          <div className="flex-1 flex justify-start items-center">
            <a href="#home" className="flex items-center gap-2 lg:gap-3 transition-transform hover:scale-105 shrink-0">
              <img 
                src={knchrLogo} 
                alt="KNCHR Icon" 
                className="h-10 sm:h-12 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col justify-center shrink-0">
                <span className="text-knchr-gold font-extrabold text-[11px] sm:text-[13px] leading-tight tracking-wide whitespace-nowrap">
                  Kenya National Commission
                </span>
                <span className="text-knchr-gold font-bold text-[10px] sm:text-[12px] leading-tight whitespace-nowrap">
                  on Human Rights
                </span>
              </div>
            </a>
          </div>

          {/* 2. Center Nav Links (Desktop) */}
          <div className="hidden xl:flex shrink-0 space-x-6 justify-center text-sm font-bold px-4">
            <a href="#home" className={desktopClass('#home')}>HOME</a>
            <a href="#reparations" className={desktopClass('#reparations')}>OUR WORK</a>
            <a href="#publications" className={desktopClass('#publications')}>PUBLICATIONS</a>
            <a href="#offices" className={desktopClass('#offices')}>OFFICES</a>
            <a href="#news" className={desktopClass('#news')}>NEWS ROOM</a>
            <a href="#about" className={desktopClass('#about')}>ABOUT US</a>
            <a href="#careers" className={desktopClass('#careers')}>CAREERS</a>
          </div>

          {/* 3. Right Side Container */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            
            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-4 shrink-0">
              <a href="#login" className="text-sm font-bold text-slate-700 hover:text-knchr-gold transition-colors">Login</a>
              <a href="#register" className="bg-knchr-gold text-black px-4 py-2 rounded font-extrabold text-sm shadow hover:bg-amber-500 transition-colors whitespace-nowrap">
                Register
              </a>
            </div>

            {/* Mobile/Tablet Hamburger Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden text-gray-800 focus:outline-none hover:text-knchr-gold transition-colors shrink-0 p-2"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            
          </div>
        </div>
      </div>

      {/* 4. THE RESPONSIVE MOBILE MENU DROPDOWN */}
      <div 
        className={`xl:hidden absolute top-20 left-0 w-full bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 ease-in-out z-50 overflow-hidden ${
          isOpen ? "max-h-[600px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-4">
          <a href="#home" onClick={closeMenu} className={mobileClass('#home')}>HOME</a>
          <a href="#reparations" onClick={closeMenu} className={mobileClass('#reparations')}>OUR WORK</a>
          <a href="#publications" onClick={closeMenu} className={mobileClass('#publications')}>PUBLICATIONS</a>
          <a href="#offices" onClick={closeMenu} className={mobileClass('#offices')}>OFFICES</a>
          <a href="#news" onClick={closeMenu} className={mobileClass('#news')}>NEWS ROOM</a>
          <a href="#about" onClick={closeMenu} className={mobileClass('#about')}>ABOUT US</a>
          <a href="#careers" onClick={closeMenu} className={mobileClass('#careers')}>CAREERS</a>

          <div className="sm:hidden flex flex-col space-y-3 pt-2">
            <a href="#login" onClick={closeMenu} className="text-center text-slate-700 font-bold border border-gray-200 py-3 rounded hover:bg-gray-50 transition-colors">
              Login
            </a>
            <a href="#register" onClick={closeMenu} className="text-center bg-knchr-gold text-black font-extrabold py-3 rounded shadow hover:bg-amber-500 transition-colors">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;