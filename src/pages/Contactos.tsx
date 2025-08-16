import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
function Contactos() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
  
      <section
        className="relative text-white py-46"
        style={{
          backgroundImage: "url('Contactos.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
                <div className="absolute inset-0 bg-black/55 mix-blend-multiply" />

        <div className="container mx-auto px-2 sm:px-4 relative z-10 flex flex-col items-center justify-center top-10 sm:top-28">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 sm:mt-20 w-full flex flex-col items-center justify-center"
          >
            <h1
              className="text-2xl sm:text-4xl md:text-6xl font-semibold text-center mx-auto max-w-full sm:max-w-4xl mb-6 break-words"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Nossa Equipa Está Sempre Pronta para Você!
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl font-light max-w-full sm:max-w-4xl text-center mx-auto break-words"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Entre em contato conosco para qualquer dúvida, sugestão ou<br />
              solicitação. Estamos aqui para ajudar!
            </p>
          </motion.div>
        </div>
      </section>
      

      <div className="container mx-auto px-6 py-20">
        {/* Main Title */}
        <div className="mb-16 text-center">
          <p className="text-slate-800 text-2xl font-normal mb-2">Contactos</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
            Fale Conosco
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Phone Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Telefone</h3>
                <p className="text-slate-600 mb-2">Ligue para nós diretamente</p>
                <p className="text-xl font-bold text-slate-800">+244 944978142</p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-red-50 text-red-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Email</h3>
                <p className="text-slate-600 mb-2">Envie-nos uma mensagem</p>
                <p className="text-lg font-bold text-slate-800 break-all">racingraphicsteam@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Endereço</h3>
                <p className="text-slate-600 mb-2">Visite nosso escritório</p>
                <p className="text-lg font-bold text-slate-800">Largo das Ingombotas</p>
                <p className="text-slate-600">Luanda, Angola</p>
              </div>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-red-50 text-red-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Horário de Atendimento</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Segunda - Sexta:</span>
                    <span className="font-medium text-slate-800">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sábado:</span>
                    <span className="font-medium text-slate-800">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Domingo:</span>
                    <span className="font-medium text-red-600">Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <div className="p-8 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Nossa Localização</h3>
            <p className="text-slate-600">Encontre-nos no centro de Luanda</p>
          </div>
          <div className="h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.6619920223357!2d13.233051072456158!3d-8.817789790206046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f24cf7c72637%3A0x742de13d5c267fd3!2sLargo%20da%20Ingombota%2C%20Luanda!5e0!3m2!1spt-PT!2sao!4v1744711894776!5m2!1spt-PT!2sao"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default Contactos;