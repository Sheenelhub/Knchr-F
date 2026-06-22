import { FaCalendarAlt, FaUser, FaEye, FaFilePdf, FaDownload, FaPrint, FaArrowLeft, FaShareAlt, FaQuoteLeft } from 'react-icons/fa';

const NewsArticleOgangah = () => {

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
          {/* LEFT AREA: MAIN ARTICLE READOUT (Spans 8 Columns)   */}
          {/* ==================================================== */}
          <article className="lg:col-span-8 bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100 print:shadow-none print:border-none print:p-0">
            
            {/* CATEGORY TAG */}
            <span className="inline-block bg-amber-50 text-knchr-gold font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 hide-on-print">
              Press Statements
            </span>

            {/* MAIN MAIN HEADER TITLE */}
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Remarks by Ms. Claris Ogangah, Chairperson, Kenya National Commission on Human Rights (KNCHR), During the Presentation of the National Reparations Framework and Report to the President
            </h1>

            {/* META STRIP OVERVIEW */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pb-6 border-b border-slate-100 text-sm text-slate-500 mb-8 hide-on-print">
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-knchr-gold" /> June 15, 2026
              </span>
              <span className="flex items-center gap-2">
                <FaUser className="text-knchr-gold" /> Author: Daniel Mule
              </span>
              <span className="flex items-center gap-2">
                <FaEye className="text-knchr-gold" /> 106 Views
              </span>
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 ml-auto text-slate-700 hover:text-knchr-gold font-semibold transition-colors bg-slate-100 px-3 py-1.5 rounded-md"
              >
                <FaPrint /> Print Document
              </button>
            </div>

            {/* FORMAL SALUTATIONS BLOCK */}
            <div className="bg-slate-50 border-l-4 border-knchr-gold p-6 rounded-r-xl mb-8 font-medium text-slate-700 leading-relaxed text-sm md:text-base print:bg-white print:border-l-2 print:border-black">
              <p className="font-bold text-slate-900 mb-2">CHAIRPERSON’S ADDRESS — NAIROBI STATE HOUSE</p>
              <p className="mb-1">Your Excellency, Dr. William Samoei Ruto, the President of the Republic of Kenya and Commander-in-Chief of the Defence Forces,</p>
              <p className="mb-1">The Chief of Staff and Head of Public Service, Mr. Felix Koskei,</p>
              <p className="mb-1">The Attorney-General of the Republic of Kenya, Hon. Dorcas Oduor,</p>
              <p className="mb-1">The Cabinet Secretary for Interior and National Administration, Hon. Kipchumba Murkomen,</p>
              <p className="mb-1">The Principal Secretary for Interior and National Administration, Dr. Raymond Omollo,</p>
              <p className="mb-1">The Principal Secretary, State Department for Justice, Human Rights and Constitutional Affairs, Hon. Judith Pareno,</p>
              <p className="mb-1">The Chief Registrar of the Judiciary, Hon. Winfridah Mokaya,</p>
              <p className="mb-1">Senior Advisor of Constitutional Affairs in the Executive Office of the President, Prof. Makau Mutua,</p>
              <p>Members of the Panel of Experts, My fellow Commissioners, Staff, and Distinguished Guests...</p>
            </div>

            {/* MAIN SPEECH BODY TEXT MARKUP */}
            <div className="prose max-w-none text-slate-800 text-base md:text-lg leading-relaxed space-y-6 font-normal">
              
              <p>
                <span className="text-5xl font-extrabold text-slate-900 float-left mr-3 line-height-0 mt-2">T</span>
                oday marks a historic and significant milestone in Kenya’s continuing journey towards justice, accountability, and national reconciliation. Today opens up a critical, long-overdue national conversation on the question of human rights violations, alongside structural frameworks regarding the meaningful compensation of persons who have suffered.
              </p>

              <p>
                We gather here not merely to present a formal data index, but to reaffirm the State’s constitutional obligation to recognize individuals harmed while exercising their civic rights. From the onset, the Commission extends sincere acknowledgement to Your Excellency for demonstrating the decisive leadership required to establish this National Reparations and Compensation Framework.
              </p>

              {/* SPECIAL TRANSITIONAL LEGACY BLOCKQUOTE */}
              <div className="relative bg-amber-50/50 p-6 my-8 rounded-xl border border-amber-100 print:border-none print:bg-transparent">
                <FaQuoteLeft className="absolute top-4 left-4 text-amber-200 text-4xl pointer-events-none hide-on-print" />
                <p className="relative z-10 text-slate-800 italic font-medium pl-6 print:pl-4 print:border-l-4 print:border-slate-300">
                  "As a Country, we cannot have a structural conversation about human rights and reparations without honoring the enduring and courageous role played by the Late Rt. Hon. Raila Odinga, whose consistent advocacy for the respect of human rights significantly contributed to sustaining this path. Implementing these recommendations serves as a profound posthumous tribute to his legacy."
                </p>
              </div>

              <p>
                Successive administrations have received numerous historical records detailing systematic grievances, including the extensive findings from the Truth, Justice, and Reconciliation Commission (TJRC). Regrettably, many of those findings remained unacted upon, leaving thousands of citizens to bear burdens without access to formal administrative remedies. By turning these testimonies into structured framework policies, we shift from mere documentation directly into accountability.
              </p>

              <p>
                While our transformative Bill of Rights establishes absolute protection for expression, public assembly, and picketing, recent demonstrations throughout 2024 and 2025 have showcased the pressing urgency of bridging statutory guarantees with lived realities.
              </p>

              {/* SECTION: ECONOMIC IMPACT SUMMARY */}
              <h3 className="text-xl font-bold text-slate-900 pt-4 flex items-center gap-2">
                <div className="w-2.5 h-5 bg-knchr-gold rounded-sm hide-on-print"></div>
                The Economic Impact & Fiscal Context
              </h3>
              
              <p>
                A core missing element within our national discourse is the explicit conversation surrounding civic responsibilities. While rights remain absolute, they must not infringe upon the livelihoods of others, nor cause destruction to precious public assets meant to serve generations. 
              </p>

              <p>
                Data from the Ministry of Interior outlines that violent clashes occurring over just a single month between June and July of 2025 resulted in a staggering direct economic shock of approximately <strong>KSh 3 Billion</strong>. For an economy managing public debt ceilings and seeking to maximize social service funding, every shilling diverted to reconstruct infrastructure represents a shilling lost for local schools, modern medical facilities, and robust safety nets.
              </p>

              <p>
                Consequently, the Commission recommends the operationalization of Article 37 through advanced legislative definitions. We have initiated technical frameworks to deploy cutting-edge digital tracking tools during public assemblies. This will preserve peaceful civic expression while instantly detecting bad actors seeking to disrupt demonstrations.
              </p>

              {/* DOWNLOADABLE ATTACHMENT ACTION BOX */}
              <div className="mt-12 bg-slate-900 text-white p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg hide-on-print">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-4 rounded-xl text-knchr-gold">
                    <FaFilePdf size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Official Handover Statement Document</h4>
                    <p className="text-slate-400 text-xs">PDF Format • 830.66 KB • 38 Recent Downloads</p>
                  </div>
                </div>
                <a 
                  href="/downloads/KNCHR-Chairperson's-Remarks- Monday-15thJune2026 - Release (4).pdf"
                  download
                  className="bg-knchr-gold text-slate-900 px-5 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-amber-400 transition-colors shrink-0 text-sm no-underline"
                >
                  <FaDownload size={14} /> Download File
                </a>
              </div>

              {/* FOOTER SIGN OFF */}
              <div className="pt-8 border-t border-slate-100 text-sm font-bold text-slate-700">
                <p>Claris Ogangah,</p>
                <p className="text-knchr-gold uppercase tracking-wider text-xs font-black print:text-black">Chairperson, KNCHR</p>
                <p className="italic text-slate-400 font-normal mt-2">"Haki kwa Wote, Kila Wakati!"</p>
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
                  href="/downloads/KNCHR_Chairperson_Remarks_2026.pdf" 
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-amber-50 group border border-slate-100 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <FaFilePdf className="text-red-500 shrink-0" size={18} />
                    <span className="text-xs font-bold text-slate-700 group-hover:text-knchr-gold truncate max-w-[180px]">
                      KNCHR_Chairperson_Remarks_2026.pdf
                    </span>
                  </div>
                  <FaDownload size={12} className="text-slate-400 group-hover:text-knchr-gold" />
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
                  <span className="text-[11px] font-bold text-knchr-gold block mb-1">June 15, 2026</span>
                  <p className="text-sm font-bold text-slate-900 line-clamp-2">
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

                <a href="#" className="block group">
                  <span className="text-[11px] font-bold text-slate-400 block mb-1">May 29, 2026</span>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-knchr-gold transition-colors line-clamp-2">
                    Condolence Message following the Tragic Fire at Utumishi Girls Academy, Gilgil
                  </p>
                </a>

              </div>
            </div>

            {/* ITEM 3: QUICK SHARE PANEL */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm text-center">
              <FaShareAlt className="text-knchr-gold mx-auto mb-3" size={24} />
              <h4 className="font-bold mb-1 text-sm">Share This Article</h4>
              <p className="text-slate-400 text-xs mb-4">Distribute accurate statements across legal platforms</p>
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

export default NewsArticleOgangah;