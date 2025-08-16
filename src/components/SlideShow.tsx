import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Slide from './Slide';
import SlideIndicator from './SlideIndicator';
import QuoteModal from './QuoteModal';
import { slides } from '../data/slides';
import Image from 'next/image';

const SlideShow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Função única para avançar slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Efeito principal - loop infinito contínuo
  useEffect(() => {
    // Limpa qualquer intervalo existente
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Sempre roda o slideshow - loop infinito
    intervalRef.current = setInterval(goToNextSlide, 5000);

    // Cleanup na desmontagem
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Array vazio - roda apenas uma vez e nunca para

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Slides Container */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <AnimatePresence mode="popLayout" initial={false}>
            <Slide
              key={`slide-${currentSlide}`}
              slide={slides[currentSlide]}
              currentIndex={currentSlide}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 z-30 pointer-events-none">
        <button
          onClick={goToPrevSlide}
          className="w-14 h-14 rounded-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center 
                   hover:bg-white/20 transition-all duration-300 transform hover:scale-105 pointer-events-auto
                   border border-white/20 hover:border-white/40"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={goToNextSlide}
          className="w-14 h-14 rounded-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center 
                   hover:bg-white/20 transition-all duration-300 transform hover:scale-105 pointer-events-auto
                   border border-white/20 hover:border-white/40"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Quote Button and Third Service Card */}
      <div className="absolute inset-x-0 bottom-10 md:bottom-20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 z-30 px-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative overflow-hidden bg-black/20 backdrop-blur-sm text-white px-8 py-3 md:px-16 md:py-5
                    border-2 border-white/80 hover:border-white transition-all duration-500 ease-out
                    rounded-tl-3xl rounded-br-3xl shadow-lg hover:shadow-xl text-base md:text-xl tracking-wide"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600/40 to-blue-500/40 opacity-0 
                         group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
          <span className="relative font-medium">PEDIR ORÇAMENTO</span>
        </button>

        {/* Card do terceiro serviço */}
        <div className="bg-white/10 backdrop-blur-lg text-white px-6 py-4 md:px-8 md:py-6 rounded-lg shadow-lg text-center md:text-left">
          <h3 className="text-lg md:text-xl font-bold mb-2">Serviços que Movem o Seu Negócio</h3>
          <p className="text-sm md:text-base text-gray-300">
            Reboque 24h, design gráfico e gestão de redes sociais — soluções ágeis para destacar e apoiar o seu negócio.
          </p>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <SlideIndicator
            key={index}
            isActive={currentSlide === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Blue Figure */}
      <div className="absolute -bottom-28 -left-20 z-20 opacity-70 md:opacity-90 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
        <Image
          src="/figuraAzul.png"
          alt="Figura Azul"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
          priority
        />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && <QuoteModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default SlideShow;