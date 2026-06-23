import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaAngleDoubleRight } from 'react-icons/fa';
//import knchrLogo from '../assets/knchr-logo.webp'; // Optional: You can include the logo in the footer if you like

const Footer = () => {
  const quickLinks = [
    { title: "File Complaint", url: "#" },
    { title: "Admissibility Criteria", url: "#" },
    { title: "Press Briefs", url: "#" },
    { title: "Trainings", url: "#" },
    { title: "Strategic Plan", url: "#" },
    { title: "Annual Reports", url: "#" },
    { title: "Establishment", url: "#" },
    { title: "Google Map", url: "#" },
    { title: "Legal Services", url: "#" },
    { title: "Gallery", url: "#" }
  ];

  const keyReports = [
    { title: "KNCHR Act 2011", url: "#" },
    { title: "Brink of the Precipice", url: "#" },
    { title: "Kriegler Report", url: "#" },
    { title: "Waki Report", url: "#" },
    { title: "Fallacious Vote", url: "#" },
    { title: "Mirage at Dusk", url: "#" },
    { title: "Still a Mirage", url: "#" }
  ];

  const externalPartners = [
    { title: "Commission on Administrative Justice", url: "#" },
    { title: "Network of African National Human Rights Institutions", url: "#" },
    { title: "United Nations Human Rights Council", url: "#" },
    { title: "African Commission on Human and Peoples' Rights (ACHPR)", url: "#" },
    { title: "International Criminal Court (ICC)", url: "#" },
    { title: "Office of the High Commissioner for Human Rights (OHCHR)", url: "#" }
  ];

  return (
    <footer className="bg-[#1c1c1c] text-slate-300 font-sans border-t-[6px] border-knchr-gold pt-16 mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* COLUMN 1: Contact Info (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-extrabold mb-6 uppercase tracking-wider text-sm border-b border-slate-700 pb-3 inline-block">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm font-medium text-slate-400">
              <p className="text-slate-200 font-bold">Kenya National Commission on Human Rights</p>
              
              <div className="flex items-start gap-3 mt-4">
                <FaMapMarkerAlt className="mt-1 text-knchr-gold shrink-0 text-base" />
                <p>
                  1st Floor, CVS Plaza, Lenana Road<br />
                  P.O Box 74359-00200<br />
                  Nairobi, Kenya
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <FaPhoneAlt className="text-knchr-gold shrink-0 text-base" />
                <a href="tel:+2540203969000" className="hover:text-knchr-gold transition-colors">+254 020-39-69-000</a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-knchr-gold shrink-0 text-base" />
                <a href="mailto:haki@knchr.org" className="hover:text-knchr-gold transition-colors">haki@knchr.org</a>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <a href="#" className="inline-block text-knchr-gold font-bold hover:text-white transition-colors text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-knchr-gold hover:text-black">
                Staff Mail: Web Mail Access
              </a>
              <a href="#" className="block text-slate-500 hover:text-white transition-colors text-xs font-medium pl-1">
                Cookie Settings
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-extrabold mb-6 uppercase tracking-wider text-sm border-b border-slate-700 pb-3 inline-block">
              Quick Links
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-3 gap-x-4">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="group flex items-start gap-2 text-sm text-slate-400 hover:text-knchr-gold transition-all duration-300">
                    <FaAngleDoubleRight className="text-slate-600 group-hover:text-knchr-gold mt-1 shrink-0 text-[10px] transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Key Reports (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-extrabold mb-6 uppercase tracking-wider text-sm border-b border-slate-700 pb-3 inline-block">
              Key Reports
            </h4>
            <ul className="space-y-3">
              {keyReports.map((report, idx) => (
                <li key={idx}>
                  <a href={report.url} className="group flex items-start gap-2 text-sm text-slate-400 hover:text-knchr-gold transition-all duration-300">
                    <FaAngleDoubleRight className="text-slate-600 group-hover:text-knchr-gold mt-1 shrink-0 text-[10px] transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{report.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Partners & Portals (Spans 4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-extrabold mb-6 uppercase tracking-wider text-sm border-b border-slate-700 pb-3 inline-block">
              Portals & Institutions
            </h4>
            <ul className="space-y-3">
              {externalPartners.map((partner, idx) => (
                <li key={idx}>
                  <a href={partner.url} className="group flex items-start gap-2 text-sm text-slate-400 hover:text-knchr-gold transition-all duration-300">
                    <FaAngleDoubleRight className="text-slate-600 group-hover:text-knchr-gold mt-1 shrink-0 text-[10px] transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300 leading-snug">{partner.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* COPYRIGHT BOTTOM BAR */}
        <div className="border-t border-slate-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium">
            Copyright {new Date().getFullYear()} By KNCHR ICT
          </p>
          <div className="flex gap-4 text-slate-500 text-sm font-medium">
            <a href="#terms" className="hover:text-knchr-gold transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-knchr-gold transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;