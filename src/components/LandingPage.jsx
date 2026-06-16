// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Edit3, 
  FileText, 
  BookOpen, 
  CalendarCheck,
  Menu
} from 'lucide-react';

const LandingPage = () => {
  // --- BACKGROUND SLIDER LOGIC ---
  const backgroundImages = [
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1529156069898-49953eb1b5e4?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1920"
  ];
  
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Slides every 5 seconds
    return () => clearInterval(timer);
  }, []);

  // --- TYPING EFFECT LOGIC ---
  const phrases = [
    "RESTORING DIGNITY.", 
    "UPHOLDING HUMAN RIGHTS.", 
    "ENSURING ACCOUNTABILITY."
  ];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end of phrase
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setText(currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  // --- FLIP CARD DATA ---
  const flipCards = [
    { id: 1, title: "Make A Complaint", icon: Edit3, desc: "Submit your grievances securely through our online portal." },
    { id: 2, title: "Access To Information", icon: FileText, desc: "Request and access official public documentation." },
    { id: 3, title: "Library", icon: BookOpen, desc: "Browse our extensive human rights resources and archives." },
    { id: 4, title: "Register", icon: CalendarCheck, desc: "Sign up for upcoming public participation events." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* 1. BLACK HEADLINE TOP BAR */}
      <div className="bg-black text-white py-2 px-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm z-50 relative">
        <div className="flex gap-4 font-semibold tracking-wide mb-2 md:mb-0 text-amber-500">
          <span>COMPENSATION AND REPARATIONS</span>
          <span className="hidden md:inline text-gray-400">|</span>
          <span className="text-white hidden md:inline">#ReparationsForAll #NoVictimLeftBehind</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 mr-2">Follow Us:</span>
          <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={16} /></a>
          <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={16} /></a>
          <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={16} /></a>
          <a href="#" className="hover:text-amber-500 transition-colors"><Youtube size={16} /></a>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white shadow-md w-full z-40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Nav Links (F-Pattern: horizontal layout) */}
            <div className="hidden md:flex space-x-8 w-full justify-center text-sm font-bold text-gray-800">
              <a href="#" className="text-amber-500 border-b-2 border-amber-500 pb-1">HOME</a>
              <a href="#" className="hover:text-amber-500 transition-colors">OUR WORK</a>
              <a href="#" className="hover:text-amber-500 transition-colors">PUBLICATIONS</a>
              <a href="#" className="hover:text-amber-500 transition-colors">OFFICES</a>
              <a href="#" className="hover:text-amber-500 transition-colors">NEWS ROOM</a>
              <a href="#" className="hover:text-amber-500 transition-colors">ABOUT US</a>
              <a href="#" className="hover:text-amber-500 transition-colors">CAREERS</a>
              <a href="#" className="hover:text-amber-500 transition-colors">CONTACT US</a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center w-full justify-end">
              <button className="text-gray-800 focus:outline-none">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION WITH SLIDER */}
      <div className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentBg ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-slate-900/70 z-10"></div> {/* Dark Overlay */}
            <img src={img} alt="Hero Background" className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Hero Content container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center h-full text-center pb-20">
          
          {/* Logo Placeholders (Left & Right) */}
          <div className="absolute left-4 top-1/4 hidden lg:flex flex-col items-center opacity-80">
            <div className="w-32 h-32 bg-gray-200/20 backdrop-blur-sm border border-white/30 rounded-lg flex items-center justify-center text-white text-sm text-center p-2 mb-2">
              [Harambee Logo Placeholder]
            </div>
          </div>
          
          <div className="absolute right-4 top-1/4 hidden lg:flex flex-col items-center opacity-80">
            <div className="w-32 h-32 bg-gray-200/20 backdrop-blur-sm border border-white/30 rounded-lg flex items-center justify-center text-white text-sm text-center p-2 mb-2">
              [KNCHR Logo Placeholder]
            </div>
          </div>

          {/* Typing Effect Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 min-h-[80px]">
            {text}
            <span className="animate-pulse text-amber-500">|</span>
          </h1>

          {/* Contact Details floating in hero */}
          <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm md:text-base text-gray-200 bg-black/40 backdrop-blur-md px-8 py-4 rounded-full border border-white/10">
            <p><span className="text-amber-500 font-semibold">Email:</span> reparations@knchr.org</p>
            <p><span className="text-amber-500 font-semibold">Toll Free:</span> 0800 720 627</p>
            <p><span className="text-amber-500 font-semibold">SMS:</span> 22359</p>
          </div>
        </div>
      </div>

      {/* 4. OVERLAPPING FLIP CARDS */}
      {/* We use negative margin (-mt-24) to pull the cards up over the hero section */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 w-full -mt-24 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flipCards.map((card) => (
            <div key={card.id} className="group h-64 [perspective:1000px] cursor-pointer">
              {/* Inner wrapper handling the 3D flip */}
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-xl">
                
                {/* FRONT OF CARD */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white border-b-4 border-amber-500 flex flex-col items-center justify-center p-6 rounded-xl">
                  <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <card.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center">{card.title}</h3>
                </div>

                {/* BACK OF CARD */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-amber-500 to-orange-600 flex flex-col items-center justify-center p-6 rounded-xl text-white text-center">
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-sm font-medium leading-relaxed">{card.desc}</p>
                  <button className="mt-4 px-6 py-2 bg-white text-amber-600 font-bold text-sm rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    Click Here
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LandingPage;