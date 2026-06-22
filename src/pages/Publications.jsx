import { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

// Imports
import topBanner from '../assets/cvs.webp'; 
import { publicationsData } from '../data/publicationsData';
import PublicationCard from '../components/PublicationCard';

// ==========================================
// CUSTOM ANIMATION COMPONENTS
// ==========================================
const FadeInSection = ({ children, className, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out h-full ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const TypewriterHeading = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !isTyping && displayedText === '') {
        setIsTyping(true);
      }
    }, { threshold: 0.5 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [isTyping, displayedText]);

  useEffect(() => {
    if (isTyping && displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 30); 
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isTyping, text]);

  return (
    <h2 ref={domRef} className={className}>
      {displayedText}
      <span className="animate-pulse text-knchr-gold ml-1">|</span>
    </h2>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories dynamically from your data file
  const categories = ["All", ...new Set(publicationsData.map(pub => pub.category))];

  // Filter logic
  const filteredPublications = publicationsData.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pub.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || pub.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-24 overflow-x-hidden">
      
      {/* 1. HERO HEADER */}
      <section className="relative h-[45vh] min-h-[350px] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${topBanner})`, backgroundColor: '#1e293b' }}
        >
          <div className="absolute inset-0 bg-slate-900/85 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <span className="inline-block bg-knchr-gold text-slate-900 font-extrabold text-sm px-4 py-2 rounded-full uppercase tracking-widest mb-6 shadow-xl">
            Knowledge Hub
          </span>
          <TypewriterHeading 
            text="Our Publications" 
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg" 
          />
          <p className="text-lg text-slate-300 font-medium mt-4 max-w-2xl mx-auto">
            Access our latest research, thematic reports, strategic plans, and policy briefs driving human rights advocacy in Kenya.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & FILTER TOOLBAR */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 w-full lg:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  activeCategory === category 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-96 relative shrink-0">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-knchr-gold focus:border-transparent transition-all outline-none font-medium"
            />
          </div>

        </div>
      </section>

      {/* 3. PUBLICATIONS GRID */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredPublications.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-slate-500">No publications found matching your search.</h3>
            <button onClick={() => {setSearchTerm(''); setActiveCategory('All');}} className="mt-4 text-knchr-gold font-bold hover:underline">Clear Filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr">
            {filteredPublications.map((pub, index) => (
              <FadeInSection key={pub.id} delay={(index % 4) * 100}>
                {/* We pass the individual publication data to our new reusable component */}
                <PublicationCard pub={pub} />
              </FadeInSection>
            ))}
          </div>
        )}

      </section>
    </div>
  );
};

export default Publications;