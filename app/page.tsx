export default function Home() {
  return (
    <main className="bg-[#0B0B0F] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-6">
        <h1 className="text-2xl font-bold tracking-widest">ESPAR</h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">Contact</a>
        </div>

        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-sm">
          Get Started
        </button>
      </nav>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">

        {/* LEFT */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Scale your brand with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              content, design, and performance marketing
            </span>{" "}
            that converts.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            We help e-commerce brands and creators turn attention into real revenue through strategy, creative content, and high-performing ads.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:scale-105 transition duration-300">
              Get Free Strategy Call
            </button>

            <button className="px-6 py-3 rounded-xl border border-gray-600">
              View Our Work
            </button>
          </div>

          <p className="text-sm text-gray-500">
            Trusted by growing brands • 10+ Projects Delivered
          </p>
        </div>

        {/* RIGHT */}
        <div className="mt-10 md:mt-0 relative w-full md:w-1/2 h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>

          <div className="absolute top-10 left-10 bg-[#111] p-4 rounded-xl shadow-lg border border-gray-800 backdrop-blur-md">
            <p className="text-sm">Instagram Growth</p>
            <p className="text-green-400 font-bold">+120%</p>
          </div>

          <div className="absolute bottom-10 right-10 bg-[#111] p-4 rounded-xl shadow-lg border border-gray-800 backdrop-blur-md">
            <p className="text-sm">Ad Conversion</p>
            <p className="text-blue-400 font-bold">3.5x ROI</p>
          </div>

          <div className="absolute top-1/2 left-1/3 bg-[#111] p-4 rounded-xl shadow-lg border border-gray-800 backdrop-blur-md">
            <p className="text-sm">Brand Reach</p>
            <p className="text-purple-400 font-bold">+80%</p>
          </div>
        </div>

      </section>

    </main>
  );
}