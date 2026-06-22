import { 
  FaCalendarAlt, FaUser, FaEye, FaPrint, FaArrowLeft, 
  FaShareAlt, FaFileDownload, FaInfoCircle, FaComments, 
  FaFileAlt, FaCheckCircle 
} from 'react-icons/fa';

// ==========================================
// IMPORT YOUR IMAGES HERE
// ==========================================
import reportImage1 from '../assets/report-image1.png'; // The Yellow Report Cover
import reportImage2 from '../assets/report-image2.jpeg'; // The Public Participation Flyer

const NewsArticleReport = () => {

  // Triggers the browser's native print dialog
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BACK NAVIGATION */}
        <div className="mb-8 hide-on-print">
          <a 
            href="#home" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-knchr-gold transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200"
          >
            <FaArrowLeft size={14} />
            Back to Newsroom
          </a>
        </div>

        {/* MAIN LAYOUT SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ==================================================== */}
          {/* LEFT AREA: MAIN CONTENT (Spans 8 Columns)            */}
          {/* ==================================================== */}
          <article className="lg:col-span-8 space-y-12 print:space-y-6">
            
            {/* --- HEADER SECTION --- */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100 print:shadow-none print:border-none print:p-0">
              <span className="inline-block bg-amber-50 text-knchr-gold font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 hide-on-print">
                Official Report & Framework
              </span>

              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                Reparations Framework for Victims of Human Rights Violations
              </h1>

              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-4 border-t border-slate-100 text-sm text-slate-500 hide-on-print">
                <span className="flex items-center gap-2"><FaCalendarAlt className="text-knchr-gold" /> June 15, 2026</span>
                <span className="flex items-center gap-2"><FaUser className="text-knchr-gold" /> KNCHR Secretariat</span>
                <span className="flex items-center gap-2"><FaEye className="text-knchr-gold" /> 542 Views</span>
                
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-2 ml-auto text-slate-700 hover:text-knchr-gold font-bold transition-colors bg-slate-100 hover:bg-amber-50 px-4 py-2 rounded-lg"
                >
                  <FaPrint /> Print Page
                </button>
              </div>
            </div>

            {/* --- SECTION 1: THE MAIN REPORT (Split Layout) --- */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100 print:shadow-none print:border-none print:p-0">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                
                {/* Text Content */}
                <div className="flex-1 space-y-5 text-slate-700 text-lg leading-relaxed">
                  <div className="flex items-center gap-3 text-knchr-gold mb-2">
                    <FaFileAlt size={24} />
                    <h2 className="text-2xl font-bold text-slate-900 m-0">The Official Report</h2>
                  </div>
                  
                  <p>
                    Submitted to His Excellency, Hon. William Samoei Ruto, pursuant to Presidential Proclamation No. 1 of 2026 and High Court Constitutional Petitions (E10, E11, E14 of 2025).
                  </p>
                  
                  <p className="text-base text-slate-600 bg-slate-50 p-4 rounded-xl border-l-4 border-knchr-gold">
                    <strong>Objective:</strong> This comprehensive framework operationalizes the right to an effective remedy by establishing clear modalities for restitution, compensation, rehabilitation, satisfaction, and guarantees of non-repetition.
                  </p>

                  {/* Mega Download Button */}
                  <a href="/downloads/Main-Reparations-Report-2026.pdf" download className="mt-6 inline-flex items-center justify-between w-full bg-slate-900 text-white p-4 rounded-xl hover:bg-knchr-gold hover:text-slate-900 transition-all shadow-lg group hide-on-print">
                    <div className="flex items-center gap-4">
                      <FaFileDownload size={24} className="text-knchr-gold group-hover:text-slate-900" />
                      <div className="text-left">
                        <span className="block font-bold text-lg">Download Full Report</span>
                        <span className="block text-xs text-slate-400 group-hover:text-slate-800">PDF Document • 2.4 MB</span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Cover Image styled like a physical book/document */}
                <div className="w-full md:w-1/3 shrink-0 group perspective-1000">
                  <img 
                    src={reportImage1} 
                    alt="Cover of the Reparations Report" 
                    className="w-full h-auto object-cover rounded-md shadow-[5px_5px_15px_rgba(0,0,0,0.15)] border border-slate-200 transition-transform duration-500 group-hover:-rotate-y-6 group-hover:shadow-2xl"
                  />
                  <p className="text-center text-xs text-slate-400 mt-3 hide-on-print">Right-click to save image</p>
                </div>
              </div>
            </div>

            {/* --- SECTION 2: DRAFT GUIDELINES & PUBLIC PARTICIPATION --- */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100 print:shadow-none print:border-none print:p-0">
              <div className="flex items-center gap-3 text-knchr-gold mb-6">
                <FaComments size={24} />
                <h2 className="text-2xl font-bold text-slate-900 m-0">KNCHR Draft Guidelines</h2>
              </div>

              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <p>
                  As part of its reforms agenda, KNCHR has developed the <strong>Draft Reparations Guidelines</strong> for strengthening our Redress mandate, ensuring victims of human rights violations have accessible, effective, and timely remedies.
                </p>

                {/* Highlight Box for Actionable Info */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4 shadow-inner">
                  <FaCheckCircle className="text-knchr-gold text-2xl shrink-0 mt-1" />
                  <div>
                    <h3 className="font-extrabold text-slate-900 mb-2">Call for Public Participation</h3>
                    <p className="text-sm text-slate-700">
                      In accordance with Article 10(2)(a) of the Constitution, stakeholders and members of the public are invited to provide memoranda, comments, and input. Submit your feedback via email to: <a href="mailto:reparations@knchr.org" className="text-knchr-gold font-bold hover:underline">reparations@knchr.org</a>.
                    </p>
                  </div>
                </div>

                {/* Flyer Image neatly contained */}
                <div className="my-8 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-50">
                   <img 
                    src={reportImage2} 
                    alt="Public Participation Invitation Flyer" 
                    className="w-full h-auto object-contain max-h-[400px]"
                  />
                </div>

                {/* Submission Templates (Side-by-side Grid) */}
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Download Submission Templates</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 hide-on-print">
                  <a href="/downloads/Template-English.pdf" download className="flex items-center justify-between bg-white border-2 border-slate-100 p-5 rounded-xl hover:border-knchr-gold hover:shadow-md transition-all group">
                    <div>
                      <span className="block font-bold text-slate-800 text-base group-hover:text-knchr-gold">English Version</span>
                      <span className="block text-xs text-slate-500 mt-1">Submission Template</span>
                    </div>
                    <FaFileDownload size={20} className="text-slate-300 group-hover:text-knchr-gold" />
                  </a>
                  
                  <a href="/downloads/Template-Swahili.pdf" download className="flex items-center justify-between bg-white border-2 border-slate-100 p-5 rounded-xl hover:border-knchr-gold hover:shadow-md transition-all group">
                    <div>
                      <span className="block font-bold text-slate-800 text-base group-hover:text-knchr-gold">Swahili Version</span>
                      <span className="block text-xs text-slate-500 mt-1">Submission Template</span>
                    </div>
                    <FaFileDownload size={20} className="text-slate-300 group-hover:text-knchr-gold" />
                  </a>
                </div>
              </div>
            </div>

            {/* --- SECTION 3: FAQS (Clean CSS layout replacing the redundant banner) --- */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              {/* Decorative Background Blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-knchr-gold opacity-10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3 text-knchr-gold">
                    <FaInfoCircle size={24} />
                    <h2 className="text-2xl font-bold text-white m-0">Frequently Asked Questions</h2>
                  </div>
                  <p className="text-slate-300 text-base">
                    This document addresses key questions from stakeholders regarding KNCHR's role and assignment in developing the compensation and reparations framework.
                  </p>
                </div>

                <a href="/downloads/KNCHR-Reparations-FAQs.pdf" download className="shrink-0 bg-knchr-gold text-slate-900 px-8 py-4 rounded-xl font-extrabold flex items-center gap-3 hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20 hide-on-print hover:-translate-y-1">
                  <FaFileDownload size={20} />
                  Download FAQs
                </a>
              </div>
            </div>

          </article>

          {/* ==================================================== */}
          {/* RIGHT AREA: STICKY SIDEBAR DETAILS                   */}
          {/* ==================================================== */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 hide-on-print">
            
            {/* Quick Links Hub */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-black text-slate-900 tracking-wider uppercase border-b border-slate-100 pb-3 mb-4">
                Document Center
              </h3>
              <div className="space-y-3">
                <a href="/downloads/Reparations-Report-2026.pdf" download className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-amber-50 group transition-all text-sm border border-transparent hover:border-amber-100">
                  <span className="font-bold text-slate-700 group-hover:text-knchr-gold truncate pr-4">Main Reparations Report</span>
                  <FaFileDownload className="shrink-0 text-slate-400 group-hover:text-knchr-gold" />
                </a>
                <a href="/downloads/KNCHR-Draft-ReparationGuidelines.pdf" download className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-amber-50 group transition-all text-sm border border-transparent hover:border-amber-100">
                  <span className="font-bold text-slate-700 group-hover:text-knchr-gold truncate pr-4">Draft Guidelines</span>
                  <FaFileDownload className="shrink-0 text-slate-400 group-hover:text-knchr-gold" />
                </a>
                <a href="/downloads/Template-for-receipt-of-Memoranda.doc" download className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-amber-50 group transition-all text-sm border border-transparent hover:border-amber-100">
                  <span className="font-bold text-slate-700 group-hover:text-knchr-gold truncate pr-4">Memo Template (ENG)</span>
                  <FaFileDownload className="shrink-0 text-slate-400 group-hover:text-knchr-gold" />
                </a>
                <a href="/downloads/FAQs-knchr.pdf" download className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-amber-50 group transition-all text-sm border border-transparent hover:border-amber-100">
                  <span className="font-bold text-slate-700 group-hover:text-knchr-gold truncate pr-4">Official FAQs</span>
                  <FaFileDownload className="shrink-0 text-slate-400 group-hover:text-knchr-gold" />
                </a>
              </div>
            </div>

            {/* Share Tool */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm text-center">
              <FaShareAlt className="text-knchr-gold mx-auto mb-3" size={24} />
              <h4 className="font-bold mb-1 text-sm">Share This Page</h4>
              <p className="text-slate-400 text-xs mb-4">Help distribute these public participation documents.</p>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!"); // Simple fallback notification
                }}
                className="bg-white/10 px-4 py-3 rounded-xl text-sm font-bold hover:bg-white/20 transition-all w-full flex items-center justify-center gap-2"
              >
                Copy Page Link
              </button>
            </div>

          </aside>
        </div>
      </div>

      {/* PRINT-SPECIFIC CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          .hide-on-print { display: none !important; }
          body { background-color: white !important; }
          article { max-width: 100% !important; }
        }
      `}} />
    </div>
  );
};

export default NewsArticleReport;