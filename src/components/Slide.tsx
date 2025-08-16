import React from 'react';
import { motion } from 'framer-motion';
import { SlideType } from '../data/slides';
import Image from 'next/image';

interface SlideProps {
  slide: SlideType;
  currentIndex: number;
}

const Slide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Background Image with Optimized Animation */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
        className="absolute inset-0 z-10"
      >
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Enhanced Gradients & Overlays */}
      <div className="absolute inset-0 z-20">
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* Content with Improved Typography and Spacing */}
      <div className="relative z-30 flex flex-col items-center justify-center w-full h-full px-8 md:px-16 lg:px-24">
        <div className="relative max-w-4xl w-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="h-1.5 bg-gradient-to-r from-red-600 to-blue-500 mb-8"
          />
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1], delay: 0.1 }}
              className="text-3xl md:text-7xl lg:text-7xl max-w-4xl font-bold mb-6 text-white leading-[1.1] tracking-wide"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1], delay: 0.2 }}
              className="text-sm md:text-10 lg:text-lg text-white/90 leading-relaxed max-w-3xl font-thin tracking-wide"
            >
              {slide.subtitle}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;