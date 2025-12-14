import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between rounded-full bg-white/70 px-8 py-4 shadow-xl shadow-pink-100/50 backdrop-blur-md border border-white/50 w-full max-w-3xl">
        
        {/* Logo - Cute & Round */}
        <Link className="text-xl font-extrabold text-rose-500 tracking-tight" href="/">
          ✨ GlowUp
        </Link>

        {/* Links - Hidden on mobile, visible on tablet+ */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link className="hover:text-rose-500 transition" href="/">Work</Link>
          <Link className="hover:text-rose-500 transition" href="/">About</Link>
          <Link className="hover:text-rose-500 transition" href="/">Contact</Link>
        </div>

        {/* Call to Action Button - Fully Rounded */}
        <Link
          className="rounded-full bg-rose-500 px-6 py-2 text-sm font-bold text-white shadow-lg shadow-rose-200 transition transform hover:scale-105 hover:bg-rose-600"
          href="/"
        >
          Let's Talk
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

