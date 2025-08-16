import React, { useState } from 'react';
import { Facebook, Instagram, Mail, ChevronUp, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 transform hover:translate-y-[-4px] transition-transform duration-300">
            <div className="flex items-center space-x-2">
              <div style={{borderTopLeftRadius: "5px", borderBottomRightRadius: "5px"}} className="w-8 h-8 bg-[#0095DA] animate-pulse"></div>
              <div style={{borderTopLeftRadius: "5px", borderBottomRightRadius: "5px"}} className="w-8 h-8 bg-[#E31837] animate-pulse [animation-delay:0.5s]"></div>
            </div>
            <p className="mt-4">Transformando ideias em realidade digital.</p>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li className="transform transition-transform duration-300 group-hover:translate-x-1">
                <a href="#" className="hover:text-[#0095DA] transition-colors">Início</a>
              </li>
              <li className="transform transition-transform duration-300 group-hover:translate-x-1 delay-[50ms]">
                <a href="#" className="hover:text-[#0095DA] transition-colors">Sobre</a>
              </li>
              <li className="transform transition-transform duration-300 group-hover:translate-x-1 delay-100">
                <a href="#" className="hover:text-[#0095DA] transition-colors">Serviços</a>
              </li>
              <li className="transform transition-transform duration-300 group-hover:translate-x-1 delay-150">
                <a href="#" className="hover:text-[#0095DA] transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
                <Phone className="mr-2" size={16} /> +244 944978142
              </li>
              <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
                <Mail className="mr-2" size={16} /> racingraphicsteam@gmail.com
              </li>
              <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
                <MapPin className="mr-2" size={16} /> Largo das Ingombotas
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61552683862927" className="hover:text-[#0095DA] transition-all duration-300 hover:scale-110">
                <Facebook size={30} />
              </a>
              <a href="https://www.instagram.com/racingraphicsteam/" className="hover:text-[#0095DA] transition-all duration-300 hover:scale-110">
                <Instagram size={30} />
              </a>
              <a href="mailto:racingraphicsteam@gmail.com" className="hover:text-[#0095DA] transition-all duration-300 hover:scale-110">
                <Mail size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center mb-4">
            <button 
              onClick={() => setShowPrivacy(!showPrivacy)}
              className="flex items-center gap-2 mx-auto text-gray-400 hover:text-white transition-colors"
            >
              Políticas e Termos
              <ChevronUp className={`transition-transform duration-300 ${showPrivacy ? 'rotate-180' : ''}`} size={16} />
            </button>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden transition-all duration-500 ease-in-out ${showPrivacy ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-2">
              <h4 className="text-white font-semibold">Política de Privacidade</h4>
              <p className="text-sm">Nossa política de privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.</p>
              <a href="#" className="text-[#0095DA] hover:underline text-sm">Ler mais</a>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-white font-semibold">Termos de Uso</h4>
              <p className="text-sm">Nossos termos de uso estabelecem as regras e condições para utilização dos nossos serviços.</p>
              <a href="#" className="text-[#0095DA] hover:underline text-sm">Ler mais</a>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-white font-semibold">Cookies</h4>
              <p className="text-sm">Utilizamos cookies para melhorar sua experiência em nosso site.</p>
              <a href="#" className="text-[#0095DA] hover:underline text-sm">Configurar preferências</a>
            </div>
          </div>

          <p className="text-center text-sm mt-8">
            © {new Date().getFullYear()} Racing Team. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;