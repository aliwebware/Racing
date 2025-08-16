import React from 'react';
import { motion } from 'framer-motion';

interface QuoteModalProps {
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ onClose }) => {
const handleServiceSelection = () => {
  onClose(); // Fecha modal ou algo semelhante
  window.location.href = '/Services'; // Navega para a rota "/services"
};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative bg-white/95 backdrop-blur-sm rounded-lg p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-blue-500 to-red-600 rounded-t-lg" />
        
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Escolha um Serviço
        </h2>
        
        <p className="text-gray-600 mb-6">
          Para pedir um orçamento personalizado, você precisa escolher um serviço 
          primeiro. Nossos especialistas entrarão em contato rapidamente.
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Cancelar
          </button>
          
          <button
            onClick={handleServiceSelection}
            className="px-6 py-2 bg-gradient-to-r from-red-600 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center"
          >
            <span>Ver Todos Serviços</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuoteModal;