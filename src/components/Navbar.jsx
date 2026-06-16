// eslint-disable-next-line no-unused-vars
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full z-40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Left Spacer (Balances the layout so center links stay perfectly centered) */}
          <div className="hidden lg:flex w-48"></div>

          {/* Center Nav Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 justify-center text-sm font-bold text-slate-800">
            <a href="#" className="text-knchr-gold border-b-2 border-knchr-gold pb-1">HOME</a>
            <a href="#" className="hover:text-knchr-gold transition-colors">OUR WORK</a>
            <a href="#" className="hover:text-knchr-gold transition-colors">PUBLICATIONS</a>
            <a href="#" className="hover:text-knchr-gold transition-colors">OFFICES</a>
            <a href="#" className="hover:text-knchr-gold transition-colors">NEWS ROOM</a>
            <a href="#" className="hover:text-knchr-gold transition-colors">ABOUT US</a>
            <a href="#" className="hover:text-knchr-gold transition-colors">CAREERS</a>
            <a href="#" className="hover:text-knchr-gold transition-colors">CONTACT US</a>
          </div>

          {/* Right Auth Buttons */}
          <div className="hidden md:flex w-48 justify-end items-center space-x-4 shrink-0">
            <a href="#" className="text-sm font-bold text-slate-700 hover:text-knchr-gold transition-colors">Login</a>
            <a href="#" className="bg-knchr-gold text-black px-4 py-2 rounded font-extrabold text-sm shadow hover:bg-amber-500 transition-colors">
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center w-full justify-end">
            <button className="text-gray-800 focus:outline-none">
              <Menu size={28} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;