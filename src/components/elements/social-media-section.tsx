"use client";
import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import AnimationWrapper from "./animation-wrapper";

export default function SocialMediaSection() {
  return (
    <section
      id="social-media"
      className="py-16 md:py-24 overflow-hidden px-2 sm:px-4 md:px-16 bg-[url('/FUndoSocialMedia.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <AnimationWrapper className="w-full lg:w-1/2" delay={0.1}>
            <div className="max-w-xl w-full">
            <p className="text-white text-2xl font-normal mb-2">Medias Sociais</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Gestão de Redes Sociais
              </h2>
              <p className="text-white mb-6 leading-relaxed">
                Gerenciamos suas redes sociais com estratégia e criatividade, 
                produzindo conteúdos envolventes, interagindo com seu público 
                e analisando resultados para fortalecer sua marca.
              </p>
              <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-slate-800 font-bold text-xl mb-4">Gerenciamos qualquer rede social</h3>
                <p className="text-slate-600 mb-6">
                  Acordamos os melhores métodos de gerenciamos 
                  com base nos nossos pacotes que servem para 
                  qualquer bolso.
                </p>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto px-8 py-2 rounded transition-colors duration-200"
                  onClick={() => window.location.href = "/Services"}
                >
                  Consulte os Pacotes
                </button>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper className="w-full lg:w-1/2" delay={0.3} direction="left">
            <div className="relative group w-full">
              <div className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <Image 
                  src="/redesS.webp" 
                  alt="Gestão de Redes Sociais" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                  priority
                />
                
                {/* Container blur com hover effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-[#0096dd]/40 backdrop-blur-[2px] rounded-b-xl transition-all duration-500 ease-out group-hover:h-full group-hover:bg-black/50 group-hover:backdrop-blur-[4px] group-hover:rounded-xl">
                  <div className="h-full flex items-center justify-start group-hover:justify-center transition-all duration-300">
                    {/* Título sempre visível */}
                    <div className="text-left group-hover:text-center text-white px-2 sm:px-6 transition-all duration-300">
                      <h3 className="text-xl -mb-24 sm:-mb-36 md:text-2xl font-bold group-hover:text-2xl group-hover:md:text-3xl group-hover:mb-4 transition-all duration-300">
                        Estratégia Digital
                      </h3>
                      {/* Descrição que aparece no hover */}
                      <div className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-200">
                        <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-xs sm:max-w-md mx-auto">
                          Criamos conteúdo autêntico, gerenciamos sua presença online 
                          e construímos relacionamentos genuínos com sua audiência 
                          através de estratégias personalizadas.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-4">
                          <div className="flex items-center gap-2 text-white/80">
                            <Instagram size={20} />
                            <span className="text-sm">Instagram</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/80">
                            <Facebook size={20} />
                            <span className="text-sm">Facebook</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Instagram className="text-pink-500" size={24} />
                  <div>
                    <span className="block text-2xl font-bold text-pink-500">89,5M</span>
                    <span className="text-sm text-slate-500">Seguidores</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Social Icons */}
              <div className="absolute top-10 -left-4 bg-white p-3 rounded-full shadow-lg animate-bounce-slow">
                <Instagram className="text-pink-500" size={28} />
              </div>
              <div className="absolute top-32 -right-4 bg-white p-3 rounded-full shadow-lg animate-float">
                <Facebook className="text-blue-600" size={28} />
              </div>
              
              {/* Floating Animations */}
              <style jsx global>{`
                @keyframes bounce-slow {
                  0%, 100% { transform: translateY(0);}
                  50% { transform: translateY(-18px);}
                }
                .animate-bounce-slow {
                  animation: bounce-slow 2.5s infinite;
                }
                @keyframes float {
                  0%, 100% { transform: translateY(0);}
                  50% { transform: translateY(14px);}
                }
                .animate-float {
                  animation: float 3s ease-in-out infinite;
                }
              `}</style>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}