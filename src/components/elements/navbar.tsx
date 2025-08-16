"use client";

import { useState, useEffect } from 'react';
import { MenuIcon, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl text-slate-800 flex items-center">
          <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">Agência</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#social-media" className="text-slate-700 hover:text-blue-600 transition">
            Redes Sociais
          </Link>
          <Link href="#graphic-design" className="text-slate-700 hover:text-blue-600 transition">
            Design Gráfico
          </Link>
          <Link href="#towing" className="text-slate-700 hover:text-blue-600 transition">
            Reboque
          </Link>
          <Link href="#faq" className="text-slate-700 hover:text-blue-600 transition">
            FAQ
          </Link>
        </nav>

        <a
          href="#contato"
          className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition items-center justify-center"
        >
          Contato
        </a>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="#social-media" 
              className="text-slate-800 hover:text-blue-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Redes Sociais
            </Link>
            <Link 
              href="#graphic-design" 
              className="text-slate-800 hover:text-blue-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Design Gráfico
            </Link>
            <Link 
              href="#towing" 
              className="text-slate-800 hover:text-blue-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Reboque
            </Link>
            <Link 
              href="#faq" 
              className="text-slate-800 hover:text-blue-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <a
              href="#contato"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}