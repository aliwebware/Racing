"use client";

import Image from "next/image";
import AnimationWrapper from "./animation-wrapper";

export default function TowingSection() {
  return (
    <section id="towing" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          <AnimationWrapper delay={0.1}>
            <div className="relative h-[450px] md:h-[500px] rounded-xl overflow-hidden">
              <Image 
                src="/reboque.webp" 
                alt="Serviço de Reboque" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl brightness-75"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16">
              <p className="text-white text-2xl font-normal mb-2">Apoio de Reboque</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl">
                  Reboque de Automóveis
                </h2>
                <div className="backdrop-blur-md bg-white/20 rounded-lg mb-8 max-w-xl">
                  <p className="text-white/90 p-6 text-lg">
                    Serviço de reboque confiável e seguro para veículos, disponível 24/7 
                    para atender emergências e necessidades de transporte com rapidez e 
                    profissionalismo.
                  </p>
                </div>
                <button
                  onClick={() => window.location.href = "/Services"}
                  className="bg-orange-500/80 hover:bg-orange-600 text-white w-fit px-8 py-4 text-lg rounded-md"
                >
                  Ver Mais
                </button>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}