'use client';

import { useEffect, useRef } from 'react';
import { useCountAnimation } from '@/hooks/useCountAnimation';

const stats = [
  { number: 3000, label: 'projetos entregues' },
  { number: 2000, label: 'clientes atendidos' },
  { number: 4, label: 'anos de experiência no mercado' },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const counters = stats.map(stat => useCountAnimation(stat.number, 2000)); // Adjust the duration to slow down the count

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach(counter => counter.setIsAnimating(true));
          }
        });
      },
      { threshold: 0.1 } // Lowered threshold to ensure it triggers on smaller screens
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[600px] flex items-center justify-center py-20"
    >
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: 'url("/fundoSection.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por que nos escolher?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Com mais de uma década de experiência, nossa equipe está comprometida em entregar
            soluções excepcionais que impulsionam o sucesso dos nossos clientes.
          </p>
        </div>

        <div className="h-1 w-32 bg-primary mx-auto mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 border-2 border-b-blue-600 backdrop-blur-sm rounded-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number > 100 ? '+' : ''} {counters[index].count}
                {stat.number <= 100 ? '+' : ''}
              </div>
              <div className="text-gray-300 text-lg capitalize">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}