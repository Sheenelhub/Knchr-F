import { 
  FaCalendarAlt, FaUser, FaEye, FaFilePdf, FaDownload, 
  FaPrint, FaArrowLeft, FaShareAlt, FaExclamationCircle, 
  FaPhoneAlt, FaEnvelope, FaWhatsapp 
} from 'react-icons/fa';

const NewsArticleFuelStrike = () => {

  // Function to trigger the browser's native print dialog
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BACK TO HOME NAVIGATION BAR */}
        <div className="mb-8 hide-on-print">
          <a 
            href="#home" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-knchr-gold transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200"
          >
            <FaArrowLeft size={14} />
            Back to Newsroom
          </a>
        </div>

        {/* MAIN LAYOUT SPLIT: 12-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ==================================================== */}
          {/* LEFT AREA: MAIN ARTICLE READOUT (Spans 8 Columns)    */}
          {/* ==================================================== */}
          <article className="lg:col-span-8 bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100 print:shadow-none print:border-none print:p-0">
            
            {/* CATEGORY TAG */}
            <span className="inline-block bg-slate-900 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 hide-on-print">
              Press Statements
            </span>

            {/* MAIN HEADER TITLE */}
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Statement on Human Rights Concerns During Today’s Fuel Strike
            </h1>

            {/* META STRIP OVERVIEW */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pb-6 border-b border-slate-100 text-sm text-slate-500 mb-8 hide-on-print">
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-knchr-gold" /> May 18, 2026
              </span>
              <span className="flex items-center gap-2">
                <FaUser className="text-knchr-gold" /> Author: Daniel Mule
              </span>
              <span className="flex items-center gap-2">
                <FaEye className="text-knchr-gold" /> 1,182 Views
              </span>
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 ml-auto text-slate-700 hover:text-knchr-gold font-semibold transition-colors bg-slate-100 px-3 py-1.5 rounded-md"
              >
                <FaPrint /> Print Document
              </button>
            </div>

            {/* MAIN SPEECH BODY TEXT MARKUP */}
            <div className="prose max-w-none text-slate-800 text-base md:text-lg leading-relaxed space-y-6 font-normal">
              
              <p className="font-bold text-slate-900">
                18th May, 2026
              </p>

              <p>
                <span className="text-5xl font-extrabold text-slate-900 float-left mr-3 line-height-0 mt-2">T</span>
                he Kenya National Commission on Human Rights (KNCHR) is deeply concerned by the chaotic scenes witnessed today during the Transport Sector Fuel Strike called by the Transport Sector Alliance. The Commission has received reports of at least four (4) fatalities, multiple injuries, arrests, looting, arson, and destruction of property of unknown value in various parts of the country. There have also been widespread school closures, which have significantly disrupted the right to education for many learners, particularly children and vulnerable groups.
              </p>

              <p>
                While the fuel strike commenced peacefully in the early morning hours, the situation quickly degenerated when the strike transformed into violent protests marked by road barricades using boulders and bonfires, burning tyres, and attacks by marauding gangs targeting innocent motorists and members of the public. Such acts not only undermine public order but also violate the rights to security, dignity, property, and freedom of movement of other citizens.
              </p>

              <p>
                The Commission acknowledges the efforts of the police in restoring order in several parts of the country. However, KNCHR is concerned by allegations of excessive use of force, including the use of lethal force, which reportedly resulted in fatalities and gunshot injuries. The use of force by law enforcement officers must at all times comply with the constitutional principles of legality, necessity, proportionality, accountability, and respect for the right to life and human dignity.
              </p>

              <p>
                As the Commission continues to monitor and document the situation, it reminds all persons in Kenya that the right to strike, protest, and demonstrate is constitutionally protected under Articles 37 and 41 of the Constitution of Kenya and must be exercised peacefully and responsibly. Legitimate industrial action or public demonstrations should not be used as a platform for violence, criminality, looting, or attacks against innocent civilians.
              </p>

              <p>
                The Commission calls for the immediate investigation, arrest, and prosecution of all individuals responsible for acts of violence, destruction of property, and violations of the rights of others during the protests. At the same time, the National Police Service is urged to exercise maximum restraint and ensure that any use of force is strictly lawful, necessary, and proportionate, with lethal force employed only as a measure of last resort in accordance with national and international human rights standards.
              </p>

              <p>
                The Commission conveys its sincere condolences to the families and friends of those who have lost their lives and wishes all those injured a speedy recovery. KNCHR reiterates its commitment to protecting and promoting human rights and calls upon all stakeholders to uphold peace, dialogue, accountability, and respect for the rule of law.
              </p>

              {/* SPECIAL EMERGENCY CONTACT REPORTING BLOCK */}
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl my-8 shadow-xl print:bg-white print:text-black print:border-2 print:border-black print:shadow-none">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-knchr-gold print:text-black">
                  <FaExclamationCircle className="hide-on-print text-2xl" /> Report Human Rights Concerns
                </h3>
                <p className="text-slate-300 mb-6 print:text-black">
                  The Commission further calls on anyone with information or any human rights concerns relating to today’s protests to share securely through our official channels:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg print:border print:border-slate-300">
                    <FaPhoneAlt className="text-knchr-gold shrink-0 print:text-black" /> 
                    <span className="font-bold">Toll-Free:</span> 0800 720 627
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg print:border print:border-slate-300">
                    <FaWhatsapp className="text-green-400 shrink-0 print:text-black text-lg" /> 
                    <span className="font-bold">WhatsApp:</span> 0798 849 871
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg print:border print:border-slate-300">
                    <FaEnvelope className="text-knchr-gold shrink-0 print:text-black" /> 
                    <span className="font-bold">SMS:</span> 22359
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg print:border print:border-slate-300">
                    <FaEnvelope className="text-knchr-gold shrink-0 print:text-black" /> 
                    <span className="font-bold">Email:</span> haki@knchr.org
                  </div>
                </div>
              </div>
              
              <p className="text-sm border-l-2 border-slate-200 pl-4 text-slate-500 mt-8 mb-8 print:border-none print:p-0">
                The Kenya National Commission on Human Rights (KNCHR) is an Independent National Human Rights Institution (NHRI) established under Article 59 of the Constitution of Kenya, 2010 and the KNCHR Act, 2011. The Commission’s mandate is the promotion and protection of human rights in Kenya.
              </p>

              {/* DOWNLOADABLE ATTACHMENT ACTION BOX */}
              <div className="mt-12 bg-white border-2 border-slate-200 text-slate-900 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hide-on-print">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 p-4 rounded-xl text-red-500">
                    <FaFilePdf size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">KNCHR Statement - Human Rights Concerns During Today’s Fuel Price Strike</h4>
                    <p className="text-slate-500 text-xs mt-1">PDF Format • 333.75 KB • 98 Recent Downloads</p>
                  </div>
                </div>
                <a 
                  href="/downloads/KNCHR_Statement_Fuel_Strike_May2026.pdf"
                  download
                  className="bg-slate-900 text-white px-5 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-knchr-gold hover:text-slate-900 transition-colors shrink-0 text-sm no-underline w-full md:w-auto"
                >
                  <FaDownload size={14} /> Download PDF
                </a>
              </div>

              {/* FOOTER SIGN OFF */}
              <div className="pt-8 border-t border-slate-100 text-sm font-bold text-slate-700">
                <p>Claris Ogangah,</p>
                <p className="text-slate-900 uppercase tracking-wider text-xs font-black print:text-black">Chairperson, KNCHR</p>
                <p className="italic text-slate-500 font-normal mt-2">"Haki kwa Wote, Kila Wakati!"</p>
              </div>

            </div>
          </article>

          {/* ==================================================== */}
          {/* RIGHT AREA: STICKY SIDEBAR DETAILS (Spans 4 Columns) */}
          {/* ==================================================== */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 hide-on-print">
            
            {/* ITEM 1: DOWNLOAD QUICK REFERENCE */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-black text-slate-900 tracking-wider uppercase border-b border-slate-100 pb-3 mb-4">
                Available Resources
              </h3>
              <div className="space-y-3">
                <a 
                  href="/downloads/KNCHR_Statement_Fuel_Strike_May2026.pdf" 
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 group border border-slate-100 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <FaFilePdf className="text-red-500 shrink-0" size={18} />
                    <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 truncate max-w-[180px]">
                      Statement_Fuel_Strike.pdf
                    </span>
                  </div>
                  <FaDownload size={12} className="text-slate-400 group-hover:text-slate-900" />
                </a>
              </div>
            </div>

            {/* ITEM 2: LATEST HEADLINES FEED */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-black text-slate-900 tracking-wider uppercase border-b border-slate-100 pb-3 mb-4">
                Latest Headlines
              </h3>
              <div className="space-y-4">
                
                <a href="#" className="block group">
                  <span className="text-[11px] font-bold text-slate-400 block mb-1">June 16, 2026</span>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-knchr-gold transition-colors line-clamp-2">
                    Attacks on Places of Worship is a Violation of Freedom of Worship and Assembly
                  </p>
                </a>
                
                <div className="h-px bg-slate-100"></div>

                <a href="#news-remarks-claris" className="block group">
                  <span className="text-[11px] font-bold text-slate-400 block mb-1">June 15, 2026</span>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-knchr-gold transition-colors line-clamp-2">
                    Presentation of the National Reparations Framework and Report to the President
                  </p>
                </a>

                <div className="h-px bg-slate-100"></div>

                <a href="#news-reparations-report" className="block group">
                  <span className="text-[11px] font-bold text-slate-400 block mb-1">June 15, 2026</span>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-knchr-gold transition-colors line-clamp-2">
                    Report: Reparations for Victims of Violations of Human Rights including Demonstrations & Public Protests
                  </p>
                </a>

                <div className="h-px bg-slate-100"></div>

                <a href="#news-utumishi-fire" className="block group">
                  <span className="text-[11px] font-bold text-slate-400 block mb-1">May 29, 2026</span>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-knchr-gold transition-colors line-clamp-2">
                    Condolence Message following the Tragic Fire at Utumishi Girls Academy, Gilgil
                  </p>
                </a>
                
                <div className="h-px bg-slate-100"></div>

                <a href="#news-fuel-strike" className="block group">
                  <span className="text-[11px] font-bold text-knchr-gold block mb-1">May 18, 2026</span>
                  <p className="text-sm font-bold text-slate-900 line-clamp-2">
                    Statement on Human Rights Concerns During Today’s Fuel Strike
                  </p>
                </a>

              </div>
            </div>

            {/* ITEM 3: QUICK SHARE PANEL */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm text-center">
              <FaShareAlt className="text-knchr-gold mx-auto mb-3" size={24} />
              <h4 className="font-bold mb-1 text-sm">Share This Article</h4>
              <p className="text-slate-400 text-xs mb-4">Help spread awareness regarding human rights reporting mechanisms.</p>
              <div className="flex justify-center gap-2">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Article link copied to clipboard!"); 
                  }}
                  className="bg-white/10 px-4 py-2 rounded-lg text-xs font-bold hover:bg-white/20 transition-all w-full"
                >
                  Copy Link
                </button>
              </div>
            </div>

          </aside>
        </div>

      </div>

      {/* PRINT-SPECIFIC CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          .hide-on-print { display: none !important; }
          body { background-color: white !important; }
          article { max-width: 100% !important; margin: 0 !important; padding: 0 !important; border: none !important; box-shadow: none !important; }
        }
      `}} />
    </div>
  );
};

export default NewsArticleFuelStrike;