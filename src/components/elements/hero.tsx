"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.2,
              },
            },
          }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Soluções completas para o seu negócio
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Oferecemos serviços especializados para impulsionar seu negócio com qualidade e profissionalismo.
            Desde gestão de redes sociais até serviços de reboque, temos tudo que você precisa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#servicos"
              className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto text-white px-8 py-6 text-lg rounded-md text-center transition-colors duration-200"
            >
              Ver Serviços
            </a>
            <a
              href="#contato"
              className="border border-slate-300 w-full sm:w-auto px-8 py-6 text-lg rounded-md text-center hover:bg-slate-100 transition-colors duration-200"
            >
              Contato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}