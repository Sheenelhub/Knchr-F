import { 
  Calendar, User, Eye, FileText, Download, 
  Printer, ArrowLeft, Share2, AlertTriangle, Shield 
} from 'lucide-react';

const NewsArticleUtumishi = () => {

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
            <ArrowLeft size={16} />
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
              Condolence Message following the Tragic Fire at Utumishi Girls Academy, Gilgil
            </h1>

            {/* META STRIP OVERVIEW */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pb-6 border-b border-slate-100 text-sm text-slate-500 mb-8 hide-on-print">
              <span className="flex items-center gap-2">
                <Calendar className="text-knchr-gold" size={16} /> May 29, 2026
              </span>
              <span className="flex items-center gap-2">
                <User className="text-knchr-gold" size={16} /> Author: Daniel Mule
              </span>
              <span className="flex items-center gap-2">
                <Eye className="text-knchr-gold" size={16} /> 6,133 Views
              </span>
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 ml-auto text-slate-700 hover:text-knchr-gold font-semibold transition-colors bg-slate-100 px-3 py-1.5 rounded-md"
              >
                <Printer size={16} /> Print Document
              </button>
            </div>

            {/* MAIN SPEECH BODY TEXT MARKUP */}
            <div className="prose max-w-none text-slate-800 text-base md:text-lg leading-relaxed space-y-6 font-normal">
              
              <p className="font-bold text-slate-900">
                28th May, 2026
              </p>

              <p>
                <span className="text-5xl font-extrabold text-slate-900 float-left mr-3 line-height-0 mt-2">T</span>
                he Kenya National Commission on Human Rights (KNCHR) extends its deepest sympathies and heartfelt condolences following the tragic fire at Utumishi Girls Academy, which claimed the lives of at least sixteen innocent students. Our hearts and prayers are with the bereaved families, friends, and the entire school community during this devastating time. We stand in solidarity with all those affected by this profound national loss, including survivors enduring profound psychological trauma.
              </p>

              <p>
                This tragedy is a stark reminder of the critical importance of ensuring safe learning environments. The Commission reiterates that the Right to Education is intrinsically linked to the Right to Life and Safety and calls upon all relevant duty bearers to conduct a swift, thorough, impartial, and transparent investigation, and to ensure accountability for any acts of negligence or systemic failure.
              </p>

              <p>
                The recurring cases of fires in boarding schools raise grave human rights concerns and demand urgent national reflection and action. Schools are not merely centres of learning, they are spaces where children are entrusted to the care and protection of the State and society. The loss of young lives through preventable tragedies points to gaps in compliance, preparedness, infrastructure, supervision, and emergency response systems. It is unacceptable that children continue to face life-threatening risks in spaces meant to nurture their growth and future.
              </p>

              {/* SPECIAL HISTORICAL CONTEXT BLOCKQUOTE */}
              <div className="relative bg-slate-50 p-6 md:p-8 my-8 rounded-xl border-l-4 border-slate-800 print:border-none print:bg-transparent">
                <AlertTriangle className="absolute top-6 right-6 text-slate-200 pointer-events-none hide-on-print" size={48} />
                <p className="relative z-10 text-slate-800 font-medium print:border-l-4 print:border-slate-300 print:pl-4">
                  This tragedy bears disturbing similarities to the 1998 Bombolulu and 2001 Kyanguli (67 deaths) school fires. Reports of locked emergency exits, students jumping from upper floors, and inadequate night supervision mirror failures criticised by previous commissions. 
                  <br/><br/>
                  Following Kyanguli, a taskforce made recommendations; in 2008, the Safety Standards Manual was developed; the 2016 Omolo Task Force and 2020 audit again found safety standards poorly understood or ignored. Following the September 2024 Hillside Endarasha fire (21 deaths), a nationwide assessment identified 348 schools failing minimum safety standards.
                </p>
              </div>

              <p className="font-bold text-slate-900 text-xl">
                The tragedy today is not a lack of knowledge about what needs to be done, but the systemic failure to translate known recommendations into sustained action and accountability.
              </p>

              <p>
                The KNCHR wishes to remind all schools and the Ministry of Education that these safety measures and recommendations are expected to be implemented consistently, in the interest of protecting learners and preventing avoidable tragedies. This tragedy calls for comprehensive rethinking of safety within Kenya's boarding school system. Beyond reactive responses, there is need for sustained investment in prevention, preparedness, accountability, and child-centred protection measures. This includes:
              </p>

              {/* STYLED RECOMMENDATIONS LIST */}
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl my-8 shadow-lg print:bg-white print:text-black print:shadow-none print:border print:border-slate-300">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-knchr-gold print:text-black">
                  <Shield className="hide-on-print" size={24} /> Key Safety Recommendations
                </h3>
                <ul className="space-y-4 m-0 p-0 list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-knchr-gold font-bold mt-1 print:text-black">•</span>
                    <span>Regular and independent safety audits of all boarding schools;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-knchr-gold font-bold mt-1 print:text-black">•</span>
                    <span>Enforcement of fire safety standards and building compliance regulations;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-knchr-gold font-bold mt-1 print:text-black">•</span>
                    <span>Installation and maintenance of functional firefighting equipment and emergency exits;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-knchr-gold font-bold mt-1 print:text-black">•</span>
                    <span>Adequate training of teachers, staff, and students on emergency preparedness and evacuation procedures;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-knchr-gold font-bold mt-1 print:text-black">•</span>
                    <span>Strengthening psychosocial support systems for learners;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-knchr-gold font-bold mt-1 print:text-black">•</span>
                    <span>Enhanced oversight by education authorities and school management boards; and</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-knchr-gold font-bold mt-1 print:text-black">•</span>
                    <span>Meaningful participation of students in reporting safety concerns affecting their welfare.</span>
                  </li>
                </ul>
              </div>

              <p>
                The Commission urges the Government, school administrators, parents, and all education stakeholders to place the safety, dignity, and welfare of learners at the centre of educational policy and governance. The safety of children can never be treated as secondary to academic performance, institutional reputation, or administrative convenience.
              </p>

              <p>
                As a nation, we must collectively confront the painful reality that every preventable school fire represents not only a tragedy but also a failure in our duty of care to children. Kenya must move decisively from mourning recurring disasters to building a culture of prevention, accountability, and protection in all learning institutions.
              </p>

              <p className="italic font-medium">
                The KNCHR stands ready to support all efforts aimed at strengthening child protection and school safety across the country.
              </p>
              
              <p className="text-sm border-l-2 border-slate-200 pl-4 text-slate-500 mt-8 mb-8 print:border-none print:p-0">
                The Kenya National Commission on Human Rights (KNCHR) is an Independent National Human Rights Institution (NHRI) established under Article 59 of the Constitution of Kenya, 2010 and the KNCHR Act, 2011. The Commission’s mandate is the promotion and protection of human rights in Kenya.
              </p>

              {/* DOWNLOADABLE ATTACHMENT ACTION BOX */}
              <div className="mt-12 bg-white border-2 border-slate-200 text-slate-900 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hide-on-print">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 p-4 rounded-xl text-red-500">
                    <FileText size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Official KNCHR Presser Document</h4>
                    <p className="text-slate-500 text-xs">PDF Format • 164.11 KB • 57 Recent Downloads</p>
                  </div>
                </div>
                <a 
                  href="/downloads/KNCHR_Presser_Utumishi_Fire_Tragedy_2026.pdf"
                  download
                  className="bg-slate-900 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-knchr-gold hover:text-slate-900 transition-colors shrink-0 text-sm no-underline"
                >
                  <Download size={16} /> Download PDF
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
                  href="/downloads/KNCHR Presser - UTUMISHI GIRLS FIRE TRAGEDY - 28th May 2026.pdf" 
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 group border border-slate-100 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="text-red-500 shrink-0" size={18} />
                    <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 truncate max-w-[180px]">
                      Presser_Utumishi_Fire.pdf
                    </span>
                  </div>
                  <Download size={16} className="text-slate-400 group-hover:text-slate-900" />
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
                  <span className="text-[11px] font-bold text-knchr-gold block mb-1">May 29, 2026</span>
                  <p className="text-sm font-bold text-slate-900 line-clamp-2">
                    Condolence Message following the Tragic Fire at Utumishi Girls Academy, Gilgil
                  </p>
                </a>

              </div>
            </div>

            {/* ITEM 3: QUICK SHARE PANEL */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm text-center">
              <Share2 className="text-knchr-gold mx-auto mb-3" size={24} />
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

export default NewsArticleUtumishi;