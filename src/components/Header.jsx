"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll === 0) {
        setIsVisible(true);
        setHasScrolled(false);
      } else if (currentScroll > prevScroll) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScroll(currentScroll);
      setHasScrolled(currentScroll > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 transition-all duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${hasScrolled ? "bg-black shadow-lg" : "bg-transparent"}`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/images/logo.png" alt="Vehicle Title Record" width={140} height={40} />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-lg uppercase text-white font-semibold tracking-wide">
        <Link href="/" className="hover:text-red-500">Home Page</Link>
        <Link href="/pricing" className="hover:text-red-500">Pricing</Link>
        <Link href="/faqs" className="hover:text-red-500">FAQ’s</Link>
        <Link href="/privacypolicy" className="hover:text-red-500">Policies</Link>
        <Link href="/contact" className="hover:text-red-500">Contact</Link>
      </nav>

      {/* CTA Button */}
      <Link href="/pricing">
        <button className="hidden md:block bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition">
          Get Vin Report Now
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white ml-auto" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-black/90 p-6 flex flex-col gap-4 md:hidden text-white uppercase font-semibold">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-red-500">Home Page</Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)} className="hover:text-red-500">Pricing</Link>
          <Link href="/faqs" onClick={() => setIsOpen(false)} className="hover:text-red-500">FAQ’s</Link>
          <Link href="/privacypolicy" onClick={() => setIsOpen(false)} className="hover:text-red-500">Policies</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-red-500">Contact</Link>
          <Link href="/get-vin-report">
            <button className="bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 w-full transition">
              Get Vin Report Now
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
