import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-48 pb-32 px-4 text-center overflow-hidden">
      
      {/* Background Blobs (The "Cute" Factor) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-pink-50 border border-pink-100 text-pink-500 text-xs font-bold uppercase tracking-wider mb-4">
          👋 Open for collaborations
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 tracking-tight leading-tight">
          Make the web <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">
            sweet & simple.
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
          I build cozy, charming digital experiences that your customers will fall in love with.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-8 py-4 rounded-full bg-gray-900 text-white font-bold shadow-lg shadow-gray-300/50 hover:shadow-xl hover:-translate-y-1 transition-all">
            See My Work
          </button>
          <button className="px-8 py-4 rounded-full bg-white text-gray-900 border border-gray-200 font-bold shadow-sm hover:bg-gray-50 transition-all">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;