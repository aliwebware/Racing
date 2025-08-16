import { motion } from "framer-motion";
import Image from "next/image";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/+244944978142?text=Olá! Gostaria de mais informações.", "_blank"); // Ensure the country code is included
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-4 right-4 text-white p-4 rounded-full z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
        style={{
          animation: "float 2s infinite",
        }}
      >
        <Image
          src="/whatsapp.png" // ou .svg se for SVG
          alt="WhatsApp"
          width={70} // Adjust width as needed
          height={70} // Adjust height as needed
        />
    </motion.button>
  );
};

export default WhatsAppButton;
