export default function Contact() {
  return (
    <main className="px-6 md:px-16 py-20">

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
        Contact Us
      </h1>

      <div className="max-w-xl space-y-6">

        <input 
          type="text" 
          placeholder="Your Name"
          className="w-full p-3 rounded-xl bg-[#111] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-purple-500"
        />

        <input 
          type="email" 
          placeholder="Your Email"
          className="w-full p-3 rounded-xl bg-[#111] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-purple-500"
        />

        <textarea 
          placeholder="Your Message"
          className="w-full p-3 rounded-xl bg-[#111] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-purple-500"
        ></textarea>

        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500">
          Send Message
        </button>

      </div>

    </main>
  );
}