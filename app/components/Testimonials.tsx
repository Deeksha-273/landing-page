import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="text-center text-3xl font-extrabold text-gray-800 sm:text-4xl mb-12">
          Love Notes 💌
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Review 1 - Pink Theme */}
          <div className="bg-pink-50 p-8 rounded-3xl border border-pink-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-pink-200 flex items-center justify-center text-2xl">
                👩‍🎨
              </div>
              <div>
                <p className="font-bold text-gray-900">Sarah Jenkins</p>
                <p className="text-sm text-pink-500 font-medium">Bakery Owner</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "My customers keep telling me how cute my website is! It matches my cupcakes perfectly."
            </p>
          </div>

          {/* Review 2 - Purple Theme */}
          <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-purple-200 flex items-center justify-center text-2xl">
                🚀
              </div>
              <div>
                <p className="font-bold text-gray-900">Mark Davis</p>
                <p className="text-sm text-purple-500 font-medium">App Founder</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Fast, friendly, and super talented. The best developer I've worked with."
            </p>
          </div>

          {/* Review 3 - Yellow Theme */}
          <div className="bg-yellow-50 p-8 rounded-3xl border border-yellow-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-yellow-200 flex items-center justify-center text-2xl">
                🧘‍♀️
              </div>
              <div>
                <p className="font-bold text-gray-900">Emma Wilson</p>
                <p className="text-sm text-yellow-600 font-medium">Yoga Instructor</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "I love the soft colors and the calm vibe. It feels exactly like my studio."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;