import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 md:px-16 py-20">

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between">

        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
            Scale your brand with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              content, design, and performance marketing
            </span>{" "}
            that converts.
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            We help e-commerce brands and creators turn attention into real revenue through strategy, creative content, and high-performing ads.
          </p>

          <div className="flex gap-4">
            <Link href="/contact">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:scale-105 transition">
                Get Free Strategy Call
              </button>
            </Link>

            <Link href="/services">
              <button className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 hover:border-white transition">
  View Services
</button>
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            Trusted by growing brands • 10+ Projects Delivered
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="mt-10 md:mt-0 relative w-full md:w-1/2 h-[400px]">

          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-2xl"></div>

          <div className="absolute top-10 left-10 bg-[#111] p-4 rounded-xl border border-gray-800">
            <p className="text-sm text-gray-300">Instagram Growth</p>
            <p className="text-green-400 font-bold">+120%</p>
          </div>

          <div className="absolute bottom-10 right-10 bg-[#111] p-4 rounded-xl border border-gray-800">
            <p className="text-sm text-gray-300">Ad Conversion</p>
            <p className="text-blue-400 font-bold">3.5x ROI</p>
          </div>

          <div className="absolute top-1/2 left-1/3 bg-[#111] p-4 rounded-xl border border-gray-800">
            <p className="text-sm text-gray-300">Brand Reach</p>
            <p className="text-purple-400 font-bold">+80%</p>
          </div>

        </div>

      </section>

      <div className="border-t border-gray-800 my-16"></div>

      {/* SERVICES */}
      <section>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white">
          What we help you achieve
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Increase Sales</h3>
            <p className="text-gray-400">Performance ads that convert.</p>
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Build Brand</h3>
            <p className="text-gray-400">Creative design & identity.</p>
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Grow Presence</h3>
            <p className="text-gray-400">Content & audience growth.</p>
          </div>

        </div>
      </section>

    </main>
  );
}