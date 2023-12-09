import React from 'react';

const Profile2 = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
    <div className="w-80 bg-gradient-to-b from-red-600 to-red-800 rounded-3xl shadow-lg overflow-hidden">
      <div className="flex flex-col items-center p-5">
        {/* Profile Image */}
        <div className="w-24 h-24 bg-orange-300 rounded-full flex items-center justify-center">
          <span className="text-2xl font-semibold text-white">N</span>
        </div>
        <div className="mt-5 text-center">
          <p className="text-xl font-semibold text-white">Nikhil Verma</p>
          <p className="text-md text-yellow-300">Full Stack Blockchain Developer</p>
        
          <div className="h-24 overflow-hidden text-white text-sm">
            {/* Placeholder for bio content */}
            Your bio information goes here. You can add a brief description about yourself or your page.
          </div>
        
        </div>
      </div>
      <div className="px-6 py-4">
        {/* Action Buttons */}
        <button className="w-full bg-yellow-500 text-white font-semibold py-3 my-2 rounded-full">Twitter</button>
        <button className="w-full bg-yellow-500 text-white font-semibold py-3 my-2 rounded-full">Telegram</button>
        <button className="w-full bg-yellow-500 text-white font-semibold py-3 my-2 rounded-full">Linkdin</button>
        <button className="w-full bg-yellow-500 text-white font-semibold py-3 my-2 rounded-full">Lens Handle</button>
      </div>
    </div>
  </div>
  );
};

export default Profile2;
