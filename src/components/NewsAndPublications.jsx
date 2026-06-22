import { useState, useEffect, useRef } from 'react';
import { FaChevronRight, FaBook } from 'react-icons/fa';

const TypewriterHeader = ({ title, highlight }) => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const headerRef = useRef(null);
  const fullText = title;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTyping && text === "") {
          setIsTyping(true);
        }
      },
      { threshold: 0.5 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, [isTyping, text]);

  useEffect(() => {
    if (isTyping && text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 50); 
      return () => clearTimeout(timeout);
    }
  }, [text, isTyping, fullText]);

  return (
    <h2 ref={headerRef} className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 min-h-[40px]">
      {text}
      {text.length === fullText.length && highlight && (
        <span className="text-knchr-gold ml-2 animate-fade-in">{highlight}</span>
      )}
      <span className="animate-pulse text-knchr-gold ml-1">|</span>
    </h2>
  );
};

const NewsAndPublications = () => {
  // --- FULLY LINKED FEATURED NEWS ---
  const featuredNews = [
    { 
      id: 1, 
      size: 'large', 
      title: "REMARKS BY MS. CLARIS OGANGAH, CHAIRPERSON, KENYA NATIONAL COMMISSION...", 
      img: "https://images.unsplash.com/photo-1541872516-6878b2d1d07c?auto=format&fit=crop&w=800&q=80",
      link: "#news-remarks-claris" 
    },
    { 
      id: 2, 
      size: 'large', 
      title: "Report: Reparations for Victims of Violations of Human Rights including...", 
      img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
      link: "#news-reparations-report"
    },
    { 
      id: 3, 
      size: 'small', 
      title: "Condolence Message following the Tragic Fire at Utumishi Girls Academy...", 
      img: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=400&q=80",
      link: "#news-utumishi-fire"
    },
    { 
      id: 4, 
      size: 'small', 
      title: "Statement on Human Rights Concerns During Today's Fuel Strike", 
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=80",
      link: "#news-fuel-strike"
    },
    { 
      id: 5, 
      size: 'small', 
      title: "KNCHR Advisory on Fraudulent Compensation and Reparations Claims", 
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80",
      link: "#news-fraud-advisory"
    },
    { 
      id: 6, 
      size: 'small', 
      title: "Update on the Development of a Framework for Compensation and...", 
      img: "https://images.unsplash.com/photo-1505664177922-9818b14e9f78?auto=format&fit=crop&w=400&q=80",
      link: "#news-framework-update"
    },
  ];

  // --- FULLY LINKED SIDEBAR NEWS ---
  const sidebarNews = [
    { 
      id: 7, 
      title: "REMARKS BY MS. CLARIS OGANGAH, CHAIRPERSON...", 
      date: "Monday, June 15, 2026",
      link: "#news-remarks-claris" 
    },
    { 
      id: 8, 
      title: "Report: Reparations for Victims of Violations of Human Rights...", 
      date: "Monday, June 15, 2026",
      link: "#news-reparations-report" 
    },
    { 
      id: 9, 
      title: "Condolence Message following the Tragic Fire at Utumishi...", 
      date: "Friday, May 29, 2026",
      link: "#news-utumishi-fire" 
    },
    { 
      id: 10, 
      title: "Statement on Human Rights Concerns During Today's Fuel Strike", 
      date: "Monday, May 18, 2026",
      link: "#news-fuel-strike" 
    },
    { 
      id: 11, 
      title: "KNCHR Advisory on Fraudulent Compensation and Reparations...", 
      date: "Thursday, May 14, 2026",
      link: "#news-fraud-advisory" 
    },
  ];

  const publications = [
    { id: 1, title: "STRATEGIC PLAN", subtitle: "Publication", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80", link: "#pub-strategic-plan" },
    { id: 2, title: "REFUGEE POLICY", subtitle: "Publication", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80", link: "#pub-refugee-policy" },
    { id: 3, title: "MENTAL HEALTH", subtitle: "Assessment", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=400&q=80", link: "#pub-mental-health" },
    { id: 4, title: "ALBINISM MAPPING", subtitle: "Publication", img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=400&q=80", link: "#pub-albinism" },
  ];

  return (
    <section className="py-20 bg-slate-50 relative font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mb-20">
          
          {/* Left Side: Bento News Grid */}
          <div className="xl:col-span-8">
            <TypewriterHeader title="Latest" highlight="News" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
              {featuredNews.map((news) => (
                <a 
                  key={news.id} 
                  href={news.link} 
                  className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 block ${
                    news.size === 'large' ? 'col-span-2 row-span-2' : 'col-span-2 md:col-span-1 row-span-1'
                  }`}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${news.img})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 p-5 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className={`text-white font-bold leading-tight drop-shadow-md ${news.size === 'large' ? 'text-xl md:text-2xl' : 'text-sm'}`}>
                      {news.title}
                    </h3>
                    {/* Visual Hover Hint */}
                    <div className="mt-3 flex items-center text-knchr-gold text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Read Article <FaChevronRight className="ml-2 text-xs" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Sidebar List */}
          <div className="xl:col-span-4 flex flex-col">
            <div className="border-b-2 border-slate-200 pb-3 mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-light text-slate-800">Recent <span className="font-extrabold text-knchr-gold">Updates</span></h3>
            </div>
            
            <div className="flex flex-col space-y-5 flex-1 justify-between">
              {sidebarNews.map((item) => (
                <a 
                  key={item.id} 
                  href={item.link} 
                  className="group block border-b border-slate-200 pb-4 last:border-0 hover:pl-2 transition-all duration-300"
                >
                  <h4 className="text-sm font-bold text-slate-700 group-hover:text-knchr-gold leading-snug mb-1 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium text-slate-400">{item.date}</p>
                </a>
              ))}
              <a href="#all-news" className="inline-flex items-center justify-center w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-knchr-gold hover:text-black transition-colors shadow-lg mt-4">
                View All News
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: LATEST PUBLICATIONS */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <TypewriterHeader title="Latest" highlight="Publications" />
            <div className="w-24 h-1 bg-knchr-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {publications.map((pub) => (
              <a key={pub.id} href={pub.link} className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 transform hover:-translate-y-2">
                <div className="h-64 w-full relative overflow-hidden bg-slate-100 p-4 flex items-center justify-center">
                   <div 
                    className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-105 opacity-90"
                    style={{ backgroundImage: `url(${pub.img})` }}
                  ></div>
                </div>

                <div className="bg-knchr-gold p-4 text-center text-white relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10 group-hover:bg-amber-600 transition-colors">
                    <FaBook size={18} />
                  </div>
                  <h3 className="font-extrabold text-sm md:text-base mt-4 tracking-wide uppercase drop-shadow-sm">{pub.title}</h3>
                  <p className="text-xs font-medium text-amber-100 mt-1">{pub.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewsAndPublications;