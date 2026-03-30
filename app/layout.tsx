import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white min-h-screen relative">

        {/* 🌈 CLEAN PREMIUM BACKGROUND */}
        <div className="fixed inset-0 -z-10">

          {/* Base */}
          <div className="absolute inset-0 bg-[#0F0F14]" />

          {/* Soft gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />

        </div>

        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-6 md:px-16 py-6 border-b border-gray-800 backdrop-blur-md">
          <h1 className="text-2xl font-bold tracking-widest text-white">
  ESPAR
</h1>

          <div className="hidden md:flex gap-8 text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <Link href="/contact">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              Get Started
            </button>
          </Link>
        </nav>

        {children}

      </body>
    </html>
  );
}