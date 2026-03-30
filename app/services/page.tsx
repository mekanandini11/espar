export default function Services() {
  return (
    <main className="px-6 md:px-16 py-20">

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition">
          <h2 className="text-xl font-semibold mb-2">Meta Ads</h2>
          <p className="text-gray-400">High-converting campaigns.</p>
        </div>

        <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition">
          <h2 className="text-xl font-semibold mb-2">Graphic Design</h2>
          <p className="text-gray-400">Logos & branding visuals.</p>
        </div>

        <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition">
          <h2 className="text-xl font-semibold mb-2">SEO</h2>
          <p className="text-gray-400">Boost search visibility.</p>
        </div>

      </div>

    </main>
  );
}