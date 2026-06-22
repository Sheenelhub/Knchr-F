import { useState } from 'react';

// ==========================================
// PARTNERS DATA
// Ensure your image filenames in the public/partners/ folder match these exactly!
// ==========================================
const partnersData = [
  { id: 1, name: "Open Society Initiative for Eastern Africa", file: "osiea.png" },
  { id: 2, name: "Kenya School of Government", file: "KSoG.png" },
  { id: 3, name: "Kenya National Bureau of Statistics", file: "knbs.png" },
  { id: 4, name: "International Organization for Migration", file: "IOM-Logo.png" },
  { id: 5, name: "Office of the Director of Public Prosecutions", file: "odpp-kenya-.png" },
  { id: 6, name: "Witness Protection Agency", file: "WPA-.png" },
  { id: 7, name: "Independent Policing Oversight Authority", file: "IPOA.png" },
  { id: 8, name: "National Council on the Administration of Justice", file: "NCAJ.png" },
  { id: 9, name: "National Cohesion and Integration Commission", file: "NCIC-.png" },
  { id: 10, name: "Media Council of Kenya", file: "media-council.png" },
  { id: 11, name: "Kisii University", file: "Kisii-University-Logo1.png" },
  { id: 12, name: "Government of Kenya", file: "GoK.png" },
  { id: 13, name: "United Nations Development Programme", file: "UNDP.png" },
  { id: 14, name: "Norwegian Embassy", file: "Norwegian-Embassy-Logo.png" },
  { id: 15, name: "Royal Netherlands Embassy", file: "royal-netherlands-2.png" },
  { id: 16, name: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)", file: "giz-logo.png" },
  { id: 17, name: "Embassy of Denmark", file: "embassy-denmark.png" },
  { id: 18, name: "European Union", file: "European-Union.png" }, // Renamed to avoid spaces
  { id: 19, name: "Embassy of The Federal Republic of Germany", file: "german-embassy-logo.png" },
  { id: 20, name: "Office of the UN High Commissioner for Human Rights", file: "UN-forHr.png" },
  { id: 21, name: "University of Nairobi", file: "UON.gif" }, // Using the .gif as requested
  { id: 22, name: "Laikipia University", file: "laikipia-logo.png" },
  { id: 23, name: "UN High Commissioner for Refugees", file: "UN-forRefugees.png" },
  { id: 24, name: "Freedom House", file: "Freedom-house-logo.png" }
];

const OurPartners = () => {
  const [activePartner, setActivePartner] = useState("Hover over a partner to view details");

  return (
    // We use a warm amber/gold background similar to your screenshot reference
    <section className="bg-[#f09a1a] py-16 overflow-hidden relative font-sans">
      
      {/* Dynamic CSS for the Infinite Seamless Marquee Scroll */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-track {
          display: flex;
          width: max-content;
          animation: scroll 60s linear infinite;
        }
        .animate-scroll-track:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Our Partners</h2>
        <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative w-full overflow-hidden flex items-center h-40">
        
        {/* Fading Edges for smooth entry/exit effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#f09a1a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#f09a1a] to-transparent z-10 pointer-events-none"></div>

        {/* SCROLLING TRACK */}
        <div className="animate-scroll-track gap-8 md:gap-12 px-8 items-center">
          {/* We map the array TWICE to create a seamless infinite loop */}
          {[...partnersData, ...partnersData].map((partner, index) => (
            <div 
              key={index} 
              className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-white rounded-xl shadow-md p-4 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:z-20"
              onMouseEnter={() => setActivePartner(partner.name)}
              onMouseLeave={() => setActivePartner("Hover over a partner to view details")}
            >
              <img 
                src={`/partners/${partner.file}`} 
                alt={partner.name}
                className="max-w-full max-h-full object-contain mix-blend-multiply"
                onError={(e) => {
                  // Fallback in case a filename doesn't match perfectly
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `<span class="text-xs font-bold text-slate-400 text-center">${partner.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* DYNAMIC CAPTION DISPLAY */}
      <div className="max-w-[1000px] mx-auto px-4 text-center mt-12 h-16 flex items-center justify-center">
        <h3 className={`text-xl md:text-3xl font-medium text-slate-900 transition-opacity duration-300 ${
          activePartner === "Hover over a partner to view details" ? "opacity-60 text-lg" : "opacity-100"
        }`}>
          {activePartner}
        </h3>
      </div>

    </section>
  );
};

export default OurPartners;