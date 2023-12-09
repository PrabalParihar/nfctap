import React from 'react';
import prabal from "./prabal.jpeg"

const Profile3 = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
    <div className="w-80 bg-gradient-to-b from-red-600 to-red-800 rounded-3xl shadow-lg overflow-hidden">
      <div className="flex flex-col items-center p-5">
        {/* Profile Image */}
        <div className="w-24 h-24 bg-orange-300 rounded-full flex items-center justify-center">
        <img className='rounded-full' src={prabal} alt="Logo" />
        </div>
        <div className="mt-5 text-center">
          <p className="text-xl font-semibold text-white">Prabal Pratap Singh</p>
          <p className="text-md text-yellow-300">Full Stack Blockchain Developer</p>
        
          <div className="h-24 overflow-hidden text-white text-sm">
            {/* Placeholder for bio content */}
            Lead @ Polygon Guild Lucknow | Blockchain Architecture, Full-Stack Blockchain Developer
          </div>
        
        </div>
      </div>
      <div className="px-6 py-4">
        {/* Action Buttons */}
        <a href="https://twitter.com/0xPrabalParihar" target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-yellow-500 text-white font-semibold py-3 my-2 rounded-full">
            Twitter
          </button>
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-yellow-500 text-white font-semibold py-3 my-2 rounded-full">
            Telegram
          </button>
        </a>
        <a href="https://www.linkedin.com/in/prabal-pratap-singh-0xprabal-eth-00578718a/" target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-yellow-500 text-white font-semibold py-3 my-2 rounded-full">
            LinkedIn
          </button>
        </a>
        <a href="https://lens.com" target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-yellow-500 text-white font-semibold py-3 my-2 rounded-full">
            Lens Handle
          </button>
        </a>
      </div>
    </div>
  </div>
  );
};

export default Profile3;
