"use client";
import { Palette, Printer } from "lucide-react";
import Image from "next/image";
import AnimationWrapper from "./animation-wrapper";

export default function GraphicDesignSection() {
  return (
    <section
      id="graphic-design"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden p-10"
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          <AnimationWrapper className="w-full lg:w-1/2" delay={0.3} direction="left">
            <div className="relative group w-full">
              <div className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <Image 
                  src="/redesimg.webp"
                  alt="Design Gráfico e Serigrafia"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                  priority
                />
                {/* Container blur com hover effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-red-500/40 backdrop-blur-[2px] rounded-b-xl transition-all duration-500 ease-out group-hover:h-full group-hover:bg-black/50 group-hover:backdrop-blur-[4px] group-hover:rounded-xl">
                  <div className="h-full flex items-center justify-start group-hover:justify-center transition-all duration-300">
                    {/* Título sempre visível */}
                    <div className="text-left group-hover:text-center text-white px-6 transition-all duration-300">
                      <h3 className="text-xl -mb-36 md:text-2xl font-bold group-hover:text-2xl group-hover:md:text-3xl group-hover:mb-4 transition-all duration-300">
                        Design Criativo
                      </h3>
                      
                      {/* Descrição que aparece no hover */}
                      <div className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-200">
                        <p className="text-white/90 text-lg leading-relaxed max-w-md mx-auto">
                          Desenvolvemos identidade visual única, criamos materiais 
                          gráficos impactantes e produzimos peças personalizadas 
                          que destacam sua marca no mercado.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-4">
                          <div className="flex items-center gap-2 text-white/80">
                            <Palette size={20} />
                            <span className="text-sm">Design</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/80">
                            <Printer size={20} />
                            <span className="text-sm">Serigrafia</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Palette className="text-red-500" size={24} />
                  <div>
                    <span className="block text-2xl font-bold text-red-500">500+</span>
                    <span className="text-sm text-slate-500">Projetos</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Design Icons */}
              <div className="absolute top-10 -left-4 bg-white p-3 rounded-full shadow-lg animate-bounce-slow">
                <Palette className="text-red-500" size={28} />
              </div>
              <div className="absolute top-32 -right-4 bg-white p-3 rounded-full shadow-lg animate-float">
                <Printer className="text-blue-600" size={28} />
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
          
          <AnimationWrapper className="w-full lg:w-1/2" delay={0.1}>
            <div className="max-w-xl w-full">
              <p className="text-slate-800 text-2xl font-normal mb-2">Serigrafia</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Produção e Personalização Gráfica
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Criamos e personalizamos materiais gráficos exclusivos para
                fortalecer a identidade da sua marca, desde impressos até peças
                digitais, garantindo impacto visual e profissionalismo.
              </p>
              <div className="bg-[#f9f9f9] p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-slate-800 font-bold text-xl mb-4">
                  Criamos qualquer material gráfico
                </h3>
                <p className="text-slate-600 mb-6">
                  Desenvolvemos os melhores designs personalizados com base nos
                  nossos pacotes que servem para qualquer bolso.
                </p>
                <button
                  onClick={() => window.location.href = "/Services"}
                  className="bg-red-500 hover:bg-red-600 text-white w-full sm:w-auto px-8 py-2 rounded font-semibold transition-colors duration-200"
                >
                  Consulte os Pacotes
                </button>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
      {/* Imagens de pessoas/identidade visual */}
      <div className="container mx-auto px-2 sm:px-4 mt-12">
        <div className="flex flex-row flex-wrap items-center justify-center gap-8 md:gap-8 sm:gap-6">
          <Image src="/pers1.webp" alt="Pessoa 1" width={320} height={320} className="rounded-xl object-cover shadow w-[320px] h-[320px] sm:w-[200px] sm:h-[200px] xs:w-[140px] xs:h-[140px]" />
          <Image src="/pers2.webp" alt="Pessoa 2" width={320} height={320} className="rounded-xl object-cover shadow w-[320px] h-[320px] sm:w-[200px] sm:h-[200px] xs:w-[140px] xs:h-[140px]" />
          <Image src="/pers3.webp" alt="Pessoa 3" width={320} height={320} className="rounded-xl object-cover shadow w-[320px] h-[320px] sm:w-[200px] sm:h-[200px] xs:w-[140px] xs:h-[140px]" />
          <Image src="/pers4.webp" alt="Pessoa 4" width={320} height={320} className="rounded-xl object-cover shadow w-[320px] h-[320px] sm:w-[200px] sm:h-[200px] xs:w-[140px] xs:h-[140px]" />
        </div>
      </div>
    </section>
  );
}