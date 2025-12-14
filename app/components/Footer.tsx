import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-violet-900 text-white mt-20">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          
          <h3 className="text-2xl font-bold tracking-tight text-pink-200">
            ✨ GlowUp Agency
          </h3>
          
          <p className="mt-4 max-w-sm text-violet-200">
            Building the cutest corners of the internet, one pixel at a time.
          </p>

          <div className="mt-8 flex gap-6">
            <a href="#" className="text-violet-300 hover:text-white transition">Instagram</a>
            <a href="#" className="text-violet-300 hover:text-white transition">Twitter</a>
            <a href="#" className="text-violet-300 hover:text-white transition">LinkedIn</a>
          </div>

          <p className="mt-12 text-sm text-violet-400">
            © 2024 GlowUp Agency. Made with 💜 and Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;