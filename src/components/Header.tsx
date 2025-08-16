"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import icons for menu toggle

const languages = [
  { code: "PT", label: "PT", flag: "https://flagcdn.com/pt.svg" },
  { code: "ENG", label: "ENG", flag: "https://flagcdn.com/gb.svg" },
  { code: "FR", label: "FR", flag: "https://flagcdn.com/fr.svg" },
];

export default function Header() {
  const [currentLang, setCurrentLang] = useState("PT");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  return (
    <nav className="absolute top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="flex items-center mt-10">
          <Link href="/" className="text-white hover:text-white/80">
            <Image
              src="/Logo.png"
              alt="Racing Team Logo"
              width={200}
              height={200}
              style={{ marginTop: "50px" }}
            />
          </Link>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <div className="bg-red-600/80 rounded-tl-[48px] rounded-br-[48px] px-28 py-4 flex items-center space-x-4">
            <div className="w-px h-4 bg-white/30"></div>
            <Link href="/AboutUs" className="text-white hover:text-white/80">
              Sobre Nós
            </Link>
            <div className="w-px h-4 bg-white/30"></div>
            <Link href="/Services" className="text-white hover:text-white/80">
              Serviços
            </Link>
            <div className="w-px h-4 bg-white/30"></div>
            <Link href="/Contactos" className="text-white hover:text-white/80">
              Contactos
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-red-600/90 text-white flex flex-col items-center space-y-4 py-6 md:hidden">
            <Link
              href="/Services"
              className="hover:text-white/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="/AboutUs"
              className="hover:text-white/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              href="/Contactos"
              className="hover:text-white/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactos
            </Link>
          </div>
        )}

        <div className="relative">
          <button
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="flex items-center space-x-2 bg-white hover:bg-white/80 px-3 py-1.5 rounded-lg text-black transition-colors"
          >
            {currentLanguage?.flag && (
              <Image
                src={currentLanguage.flag}
                alt={currentLanguage.code}
                width={16}
                height={16}
                className="w-4 h-4 rounded-sm object-cover"
                style={{ objectFit: "cover" }}
              />
            )}
            <span className="text-sm font-medium">{currentLang}</span>
          </button>
          {isLangMenuOpen && (
            <div className="absolute right-0 mt-2 py-1 w-28 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl border border-white/10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setCurrentLang(lang.code);
                    setIsLangMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 w-full px-3 py-2 text-sm transition-colors ${
                    currentLang === lang.code
                      ? "bg-white/10 text-white"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <Image
                    src={lang.flag}
                    alt={lang.code}
                    width={16}
                    height={16}
                    className="w-4 h-4 rounded-sm object-cover"
                    style={{ objectFit: "cover" }}
                  />
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
