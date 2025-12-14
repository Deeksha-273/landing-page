import React from 'react';

const Contact = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      
      {/* Background Blobs for the Glass Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-rose-200 to-purple-200 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="mx-auto max-w-lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Let's Chat! ☕
          </h2>
          <p className="mt-4 text-gray-600">
            Have a project in mind? Drop me a message.
          </p>
        </div>

        {/* The Glass Card */}
        <div className="relative rounded-3xl bg-white/30 backdrop-blur-md border border-white/50 p-8 shadow-xl">
          <form className="space-y-6">
            
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                placeholder="What's your name?"
                className="w-full rounded-2xl border-none bg-white/50 px-6 py-4 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-rose-300 focus:bg-white transition-all outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-2xl border-none bg-white/50 px-6 py-4 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-rose-300 focus:bg-white transition-all outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full rounded-2xl border-none bg-white/50 px-6 py-4 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-rose-300 focus:bg-white transition-all outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-rose-400 to-purple-500 py-4 font-bold text-white shadow-lg shadow-rose-200 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;