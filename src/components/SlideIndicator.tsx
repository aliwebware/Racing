import React from 'react';
import { motion } from 'framer-motion';

interface SlideIndicatorProps {
  isActive: boolean;
  onClick: () => void;
}

const SlideIndicator: React.FC<SlideIndicatorProps> = ({ isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative h-2.5 flex items-center justify-center focus:outline-none"
      aria-label={isActive ? "Current slide" : "Go to slide"}
    >
      <div className={`relative w-8 h-2 rounded-full transition-all duration-300 ease-out ${
        isActive ? "bg-white/80" : "bg-white/30 group-hover:bg-white/50"
      }`}>
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
    </button>
  );
};

export default SlideIndicator;