"use client";
import Image from "next/image";
import AnimationWrapper from "./animation-wrapper";

export default function CEOmessage() {
  return (
    <section
      id="graphic-design"
      className="py-2 md:py-4 bg-gradient-to-b from-white to-red-500/10 overflow-hidden"
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <AnimationWrapper className="w-full lg:w-1/2" delay={0.3} direction="right">
              <div className="relative w-full flex justify-center items-center mb-4 lg:mb-0">
              <Image
                src="/ceoimg.webp"
                alt="CEO Message"
                width={600}
                height={600}
                className="w-[380px] sm:w-[480px] md:w-[600px] h-auto object-contain rounded-xl"
                priority
              />
              </div>
            </AnimationWrapper>

          <AnimationWrapper className="w-full lg:w-1/2" delay={0.1}>
            <div className="max-w-xl w-full">
              <p className="text-slate-800 text-2xl font-normal">Racing Team</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 mt-2">
                MENSAGEM DO CEO
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Bem-vindo à Racing Team! Desde o início, a nossa missão tem sido
                simples: acelerar o sucesso dos nossos clientes. Seja através da
                personalização gráfica que transforma veículos em verdadeiras
                máquinas de expressão, da gestão estratégica de redes sociais
                que projeta marcas para novos públicos, ou dos serviços de
                reboque rápidos e confiáveis — estamos aqui para entregar
                soluções com performance, criatividade e confiança. Na Racing
                Team, unimos paixão por motores, design e inovação. Acreditamos
                que cada cliente tem uma história única para contar, e é nosso
                compromisso dar forma, voz e mobilidade a essa jornada. Obrigado
                por fazer parte desta corrida connosco.
              </p>
              <div className="bg-[#f9f9f948] p-6 rounded-lg shadow-sm mb-8 flex flex-col items-center">
                <Image
                  src="/assinatura.png"
                  alt="Assinatura do CEO"
                  width={200}
                  height={200}
                  className="w-[120px] h-[60px] sm:w-[180px] sm:h-[90px] md:w-[200px] md:h-[100px] object-contain"
                  priority
                />
                <p className="text-slate-600 italic">
                  Quem anda com estilo, acelera com confiança e nunca fica
                  parado.
                </p>

                <p className="text-slate-500 mb-6">Diretor Executivo</p>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
