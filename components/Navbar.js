"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">


        <Link href="/" className="text-xl font-semibold text-orange-500 tracking-tight">
       Property Listings
        </Link>


        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 font-medium">
          <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <Link href="/explore" className="hover:text-orange-500 transition-colors">Explore</Link>
          <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
        </div>


        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-gray-600 font-medium px-4 py-2 rounded-full border border-gray-200 hover:border-orange-400 hover:text-orange-500 transition-all"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-sm text-white font-medium px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-all"
          >
            Sign Up
          </Link>
        </div>


        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>


      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm text-gray-600 font-medium border-t border-gray-100">
          <Link href="/" className="pt-3 hover:text-orange-500 transition-colors">Home</Link>
          <Link href="/explore" className="hover:text-orange-500 transition-colors">Explore</Link>
          <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
          <div className="flex gap-3 mt-2">
            <Link href="/login" className="flex-1 text-center py-2 rounded-full border border-gray-200 hover:border-orange-400 hover:text-orange-500 transition-all">
              Login
            </Link>
            <Link href="/signup" className="flex-1 text-center py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}