import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4 font-sans">
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/254798849871" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-[#1ebe57] transition-all duration-300 ease-in-out"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
        {/* Hidden text that expands on hover */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 ease-in-out font-bold text-sm">
          WhatsApp (Text Only)
        </span>
      </a>

      {/* Toll-Free Phone Button */}
      <a 
        href="tel:0800720627" 
        className="group flex items-center bg-slate-900 text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-slate-800 transition-all duration-300 ease-in-out border border-slate-700"
        aria-label="Call Toll Free"
      >
        <FaPhoneAlt size={22} className="text-knchr-gold" />
        {/* Hidden text that expands on hover */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 ease-in-out font-bold text-sm">
          Toll Free: 0800 720 627
        </span>
      </a>

    </div>
  );
};

export default FloatingContact;