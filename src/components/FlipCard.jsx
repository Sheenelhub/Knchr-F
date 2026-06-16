// eslint-disable-next-line no-unused-vars
import React from 'react';

const FlipCard = ({ title, icon: Icon, desc }) => {
  return (
    <div className="group h-64 [perspective:1000px] cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-xl">
        
        {/* FRONT OF CARD */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white border-b-4 border-amber-500 flex flex-col items-center justify-center p-6 rounded-xl">
          <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icon size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 text-center">{title}</h3>
        </div>

        {/* BACK OF CARD */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-amber-500 to-orange-600 flex flex-col items-center justify-center p-6 rounded-xl text-white text-center">
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-sm font-medium leading-relaxed">{desc}</p>
          <button className="mt-4 px-6 py-2 bg-white text-amber-600 font-bold text-sm rounded-full shadow-md hover:bg-gray-100 transition-colors">
            Click Here
          </button>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;