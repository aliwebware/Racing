"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimationWrapper from "./animation-wrapper";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Como funciona o processo de gestão de marketing e redes sociais?",
    answer: "Nosso processo de gestão começa com uma análise detalhada do seu negócio, definição de objetivos e criação de estratégias personalizadas. Em seguida, produzimos conteúdos criativos, fazemos o agendamento das publicações e monitoramos os resultados, ajustando as ações conforme necessário para garantir engajamento e crescimento contínuo."
  },
  {
    question: "Qual é o prazo para personalização de materiais gráficos e roupas?",
    answer: "O prazo varia de acordo com o tipo e a complexidade do material. Em geral, os materiais gráficos são entregues em até 3 dias úteis após a aprovação do briefing. Já as roupas personalizadas podem levar de 5 a 10 dias úteis, considerando o processo de criação, produção e acabamento."
  },
  {
    question: "O serviço de reboque está disponível 24 horas e em qual região?",
    answer: "Sim, nosso serviço de reboque funciona 24 horas por dia, 7 dias por semana. Atendemos principalmente na região de Luanda e arredores, garantindo rapidez e segurança no transporte do seu veículo em qualquer horário."
  },
  {
    question: "Posso contratar mais de um serviço ao mesmo tempo?",
    answer: "Com certeza! Nossos serviços são integrados justamente para facilitar a vida do cliente. Você pode, por exemplo, contratar o gerenciamento de redes sociais junto com a criação de materiais gráficos e até mesmo utilizar nosso serviço de reboque, tudo em um só pacote personalizado conforme suas necessidades."
  }
];


export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimationWrapper delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
            Perguntas Frequentes
          </h2>
        </AnimationWrapper>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimationWrapper key={index} delay={0.1 + index * 0.1}>
              <div className="border-b border-gray-200 py-5">
                <button
                  className="flex w-full justify-between items-center text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-xl font-medium text-slate-800">{faq.question}</h3>
                  <ChevronDown
                    className={`flex-shrink-0 w-5 h-5 text-slate-500 transition-transform duration-300 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`mt-3 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-slate-600 pb-4">{faq.answer}</p>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}