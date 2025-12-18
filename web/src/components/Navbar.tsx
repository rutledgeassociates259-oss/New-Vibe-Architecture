"use client";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "./CTAButton";
import { useState } from "react";

export default function Navbar() {

  
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-5 z-20">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className=" flex items-center justify-between px-4 ">
          {/* Brand */}
          <div className="flex items-center">
            <Image
              src="/navbar/logos.png"
              alt="Vibe Architects"
              width={250}
              height={30}
              priority
            />
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-8 text-lg opacity-90">
            <Link href="#hero" className="font-semibold">Home</Link>
            <Link href="#pricing" className="hover:opacity-100 opacity-80">Pricing</Link>
            <Link href="#about" className="hover:opacity-100 opacity-80">About</Link>
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus:outline-none"
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
                  <path d="M6 6l12 12M18 6l-12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <CTAButton href="#contact">Free SignUp</CTAButton>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="md:hidden absolute inset-x-0 top-full mx-4 mt-2 rounded-lg bg-zinc-900/90 backdrop-blur border border-white/10 shadow-xl z-50">
            <nav className="flex flex-col items-stretch p-4 gap-4 text-lg">
              <Link href="#hero" className="font-semibold" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="#pricing" className="opacity-80 hover:opacity-100" onClick={() => setMobileOpen(false)}>Pricing</Link>
              <Link href="#about" className="opacity-80 hover:opacity-100" onClick={() => setMobileOpen(false)}>About</Link>
              <CTAButton href="#contact">Contact Us</CTAButton>
            </nav>
          </div>
        )}

        {/* Bottom line graphic */}
        <div className="relative mt-1 mb-5 w-full">
          <img
            src="/navbar/bottomline.png"
            alt="Navbar underline"
            className="object-contain w-full"
          />
        </div>
      </div>
    </header>
  );
}