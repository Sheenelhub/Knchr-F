// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Edit3, FileText, BookOpen, CalendarCheck } from 'lucide-react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import FlipCard from '../components/FlipCard';

const Home = () => {
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
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

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
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setText(currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  const flipCards = [
    { id: 1, title: "Make A Complaint", icon: Edit3, desc: "Submit your grievances securely through our online portal." },
    { id: 2, title: "Access To Information", icon: FileText, desc: "Request and access official public documentation." },
    { id: 3, title: "Library", icon: BookOpen, desc: "Browse our extensive human rights resources and archives." },
    { id: 4, title: "Register", icon: CalendarCheck, desc: "Sign up for upcoming public participation events." },
  ];

  return (
    <div className="min-h-screen bg-knchr-light flex flex-col font-sans">
      <TopBar />
      <Navbar />

      {/* HERO SECTION WITH SLIDER */}
      <div className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentBg ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
            <img src={img} alt="Hero Background" className="w-full h-full object-cover" />
          </div>
        ))}

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center h-full text-center pb-20">
          {/* Logo Placeholders */}
          <div className="absolute left-4 top-1/4 hidden lg:flex flex-col items-center opacity-80">
            <div className="w-32 h-32 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white text-xs text-center p-2">
              [Harambee Logo Placeholder]
            </div>
          </div>
          
          <div className="absolute right-4 top-1/4 hidden lg:flex flex-col items-center opacity-80">
            <div className="w-32 h-32 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white text-xs text-center p-2">
              [KNCHR Logo Placeholder]
            </div>
          </div>

          {/* Typing Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 min-h-[80px]">
            {text}
            <span className="animate-pulse text-knchr-gold">|</span>
          </h1>

          {/* Contact Details */}
          <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm md:text-base text-slate-200 bg-slate-950/40 backdrop-blur-md px-8 py-4 rounded-full border border-white/10">
            <p><span className="text-knchr-gold font-semibold">Email:</span> reparations@knchr.org</p>
            <p><span className="text-knchr-gold font-semibold">Toll Free:</span> 0800 720 627</p>
            <p><span className="text-knchr-gold font-semibold">SMS:</span> 22359</p>
          </div>
        </div>
      </div>

      {/* OVERLAPPING FLIP CARDS CONTAINER */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 w-full -mt-24 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flipCards.map((card) => (
            <FlipCard 
              key={card.id}
              title={card.title}
              icon={card.icon}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;