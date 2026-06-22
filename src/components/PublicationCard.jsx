import { FaCalendarAlt, FaArrowRight, FaDownload } from 'react-icons/fa';

const PublicationCard = ({ pub }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden flex flex-col h-full group">
      
      {/* Image Cover Container */}
      <div className="relative w-full aspect-[1/1.2] bg-slate-100 overflow-hidden shrink-0">
        <img 
          src={pub.coverImage} 
          alt={pub.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          onError={(e) => {
            // Fallback gradient if the image is missing
            e.target.style.display = 'none';
            e.target.parentNode.classList.add('bg-gradient-to-br', 'from-slate-800', 'to-slate-900');
            e.target.parentNode.innerHTML = `
              <div class="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                <div class="text-knchr-gold mb-4">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="48px" width="48px" xmlns="http://www.w3.org/2000/svg"><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-11.487 3.029-22.257 8.286-31.547l-47.531-47.532-15.08 15.081c-8.913 8.913-23.757 8.914-32.671 0l-15.081-15.081c-8.913-8.913-8.914-23.757 0-32.671l15.081-15.081c8.914-8.913 23.758-8.914 32.671 0l15.08 15.081 47.532-47.531C162.257 186.971 159.228 176.201 159.228 164.714c0-35.346 28.654-64 64-64s64 28.654 64 64c0 11.487-3.029 22.257-8.286 31.547l47.531 47.532 15.08-15.081c8.913-8.913 23.757-8.914 32.671 0l15.081 15.081c8.913 8.913 8.914 23.757 0 32.671l-15.081 15.081c-8.914 8.913-23.758 8.914-32.671 0l-15.08-15.081-47.532 47.531c6.544 11.464 10.315 24.582 10.315 38.486 0 35.346-28.654 64-64 64zm0-224c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm0 160c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z"></path></svg>
                </div>
                <p class="font-bold text-sm tracking-widest uppercase opacity-70 px-4">${pub.title}</p>
              </div>`;
          }}
        />
        
        {/* Category Tag overlaid on image */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-black px-3 py-1.5 rounded-lg shadow-lg uppercase tracking-wider">
          {pub.category}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-3">
          <FaCalendarAlt /> {pub.date}
        </div>
        
        <h3 className="text-xl font-extrabold text-slate-900 leading-tight mb-3 group-hover:text-knchr-gold transition-colors line-clamp-2">
          {pub.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {pub.summary}
        </p>

        {/* Action Buttons (Pushed to bottom) */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <a 
            href={pub.readMoreUrl}
            className="text-slate-900 font-bold text-sm flex items-center gap-2 hover:text-knchr-gold transition-colors"
          >
            Read Summary <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href={pub.downloadUrl}
            download
            className="bg-knchr-gold text-slate-900 p-3 rounded-xl font-extrabold flex items-center gap-2 hover:bg-amber-400 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            title="Download PDF Report"
          >
            <FaDownload size={14} />
          </a>
        </div>
      </div>

    </div>
  );
};

export default PublicationCard;