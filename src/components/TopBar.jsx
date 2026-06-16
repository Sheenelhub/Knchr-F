import { useState, useEffect } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const TopBar = () => {
  // --- NEWS HEADLINES ARRAY ---
  const headlines = [
    "COMPENSATION AND REPARATIONS PANEL REGISTRATION IS NOW OPEN",
    "#REPARATIONSFORALL — ENSURING JUSTICE FOR EVERY CITIZEN",
    "NEW REGIONAL OFFICES OPENED IN MOMBASA AND KISUMU",
    "SUBMIT YOUR CLAIMS FREE OF CHARGE VIA OUR SMS PORTAL 22359"
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade out
      setFade(false);
      
      setTimeout(() => {
        // Change text while hidden, then trigger fade in
        setCurrentIdx((prev) => (prev + 1) % headlines.length);
        setFade(true);
      }, 300); // Matches the transition duration

    }, 4000); // Changes headline every 4 seconds

    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <div className="bg-black text-white py-2 px-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm z-50 relative border-b border-zinc-800">
      
      {/* News Headline Slideshow Container */}
      <div className="flex items-center gap-3 overflow-hidden h-6 w-full md:w-auto mb-2 md:mb-0">
        <span className="bg-knchr-gold text-black font-extrabold px-2 py-0.5 rounded text-[10px] tracking-wider shrink-0 animate-pulse">
          LATEST NEWS
        </span>
        <div 
          className={`font-semibold tracking-wide transition-all duration-300 ease-in-out select-none transform ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          }`}
        >
          <span className="text-knchr-gold">{headlines[currentIdx]}</span>
        </div>
      </div>

      {/* Social Links Side */}
      <div className="flex items-center gap-4 shrink-0">
        <span className="text-zinc-400 font-medium hidden sm:inline">Follow Us:</span>
        <a href="#" className="hover:text-knchr-gold transition-colors" aria-label="Twitter"><FaTwitter size={14} /></a>
        <a href="#" className="hover:text-knchr-gold transition-colors" aria-label="Facebook"><FaFacebook size={14} /></a>
        <a href="#" className="hover:text-knchr-gold transition-colors" aria-label="Instagram"><FaInstagram size={14} /></a>
        <a href="#" className="hover:text-knchr-gold transition-colors" aria-label="Youtube"><FaYoutube size={14} /></a>
      </div>
    </div>
  );
};

export default TopBar;