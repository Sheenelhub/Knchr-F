import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaBus } from 'react-icons/fa';

// ==========================================
// IMPORT YOUR BUILDING IMAGES HERE
// ==========================================
import buildingMain from '../assets/cvs.webp'; 
import buildingOverlap from '../assets/lenana-road.webp'; 

const HeadOffice = () => {
  return (
    <section className="py-20 bg-white relative">
      {/* BACKGROUND GRAPHIC */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER BLOCK */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-extrabold text-knchr-gold tracking-widest uppercase mb-2">Find Us</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Head Office Location</h3>
          <div className="w-20 h-1 bg-knchr-gold mx-auto mt-6 rounded-full"></div>
        </div>

        {/* SECTION CONTENT: 12-Column Split Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* ========================================== */}
          {/* LEFT COLUMN (Spans 5 cols): Contact Card */}
          {/* ========================================== */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-center h-full">
            {/* Design Element Blob */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-knchr-gold opacity-20 rounded-full blur-3xl pointer-events-none"></div>
            
            <h4 className="text-2xl font-bold mb-8 text-knchr-gold relative z-10">Nairobi HQ</h4>
            
            <div className="space-y-6 relative z-10">
              {/* Row 1: Address */}
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg shrink-0">
                  <FaMapMarkerAlt className="text-knchr-gold" size={20} />
                </div>
                <div>
                  <p className="font-bold text-base md:text-lg mb-1">CVS Plaza, 1st Floor</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Kasuku Lane, Off Lenana Road<br/>Nairobi, Kenya
                  </p>
                </div>
              </div>

              {/* Row 2: Public Transport */}
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg shrink-0">
                  <FaBus className="text-knchr-gold" size={20} />
                </div>
                <div>
                  <p className="font-bold text-base md:text-lg mb-1">Public Transport</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Use <strong className="text-slate-300">City Shuttle</strong> or <strong className="text-slate-300">Metrotrans</strong> (Route 46).<br/>
                    Drop off at <strong className="text-slate-300">Chaka Place</strong>.
                  </p>
                </div>
              </div>

              {/* Row 3: Call Us */}
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg shrink-0">
                  <FaPhoneAlt className="text-knchr-gold" size={20} />
                </div>
                <div>
                  <p className="font-bold text-base md:text-lg mb-1">Call Us</p>
                  <p className="text-slate-400 text-sm">Telephone: +254-020-3969000</p>
                  <p className="text-slate-400 text-sm">Toll Free: 0800 720 627</p>
                </div>
              </div>

              {/* Row 4: Digital Channels */}
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg shrink-0">
                  <FaEnvelope className="text-knchr-gold" size={20} />
                </div>
                <div>
                  <p className="font-bold text-base md:text-lg mb-1">Digital Channels</p>
                  <p className="text-slate-400 text-sm">reparations@knchr.org</p>
                  <p className="text-slate-400 text-sm mt-1 flex items-center gap-2">
                    <FaWhatsapp className="text-[#25D366]" /> +254 798 849871 (Text Only)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================== */}
          {/* RIGHT COLUMN (Spans 7 cols): Images + Map */}
          {/* ========================================== */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full mt-10 lg:mt-0 h-full justify-between">
             
             {/* TOP HALF: Overlapping Images Block */}
             <div className="relative h-[300px] md:h-[380px] w-full">
               {/* 1. Main Background Image */}
               <div className="absolute top-0 left-0 w-[75%] h-[80%] rounded-2xl overflow-hidden shadow-xl group bg-slate-200">
                 <img 
                   src={buildingMain} 
                   alt="KNCHR Main Building" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
               </div>

               {/* 2. Overlapping Foreground Image */}
               <div className="absolute bottom-0 right-0 w-[55%] h-[65%] rounded-2xl overflow-hidden shadow-2xl border-8 border-white group z-20 bg-slate-300">
                 <img 
                   src={buildingOverlap} 
                   alt="KNCHR Office Entrance" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
               </div>
             </div>

             {/* BOTTOM HALF: The Map Block */}
             <div className="relative h-[180px] md:h-[220px] w-full rounded-2xl overflow-hidden shadow-md group border border-slate-200 flex items-center justify-center bg-slate-100">
               {/* Map graphic placeholder (Can be replaced with actual iframe if needed) */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 grayscale group-hover:grayscale-0"></div>
               <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/40 transition-colors"></div>
               
               <a 
                 href="https://maps.google.com/?q=CVS+Plaza+Nairobi" 
                 target="_blank" 
                 rel="noreferrer"
                 className="relative z-10 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full font-bold text-slate-800 shadow-xl flex items-center gap-2 hover:bg-knchr-gold hover:text-white transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
               >
                 <FaMapMarkerAlt className="text-current" size={18} />
                 View on Google Maps
               </a>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeadOffice;