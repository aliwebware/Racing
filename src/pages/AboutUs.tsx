import React from "react";
import {
  Trophy,
  Users,
  Target,
  Rocket,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

function AboutUs() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #f4f4f4 0%, #e8f0ff 25%, #f4f4f4 50%, #ffe8e8 75%, #f4f4f4 100%)",
      }}
    >
      <Header />
      <section
        className="-top-20 relative text-white py-36 sm:py-58"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.4, 0.0, 0.2, 1], // ease-in-out cubic bezier
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/FundoSobre.webp"
            alt="Fundo Sobre"
            fill
            priority
            className="object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/55 mix-blend-multiply z-10" />
        </motion.div>
        <div className="container mx-auto px-2 sm:px-4 relative z-10 top-20 sm:top-38 -ml-0 sm:-ml-8">
          <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-28 text-center flex flex-col items-center"
          >
        <h1
          className="text-4xl md:text-7xl font-bold mx-auto max-w-4xl mb-6 text-center"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Do Gráfico ao Asfalto
        </h1>
        <p
          className="text-base md:text-xl max-w-4xl mx-auto text-center"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Conheça mais sobre a nossa missão, visão e os valores que orientam
          o nosso trabalho diário. Estamos comprometidos em transformar
          vidas por meio da educação de excelência.
        </p>
          </motion.div>
        </div>
      </section>

  <div className="container mx-auto px-2 sm:px-4 py-10 sm:py-16 -mt-10 sm:-mt-20">
        <p className="text-slate-800 text-2xl text-center mb-2 font-normal">Trajetória</p>
        <h1 className="text-3xl md:text-6xl font-bold text-black text-center mb-16">
          Nossa História
        </h1>

        {/* História Section */}
        <section className="bg-gray-100 shadow-lg rounded-2xl p-4 sm:p-8 mb-8 sm:mb-12 border border-gray-200">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-6xl h-[260px] sm:h-[320px] md:h-[400px] relative rounded-xl overflow-hidden mb-6 md:mb-0">
              <Image
                src="/we.jpg"
                alt="Equipe Race Team"
                fill
                className="object-contain rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="space-y-6 w-full">
              <h2 className="text-3xl font-bold text-black mb-4">
                Nossa Jornada
              </h2>
              <p className="text-gray-800 leading-relaxed">
                Desde 2020, a Race Team tem revolucionado o mercado digital,
                trazendo soluções inovadoras para empresas que buscam se
                destacar no ambiente online. Nossa história começou com um sonho
                de transformar a maneira como as marcas se comunicam com seu
                público, e hoje somos referência em gestão de redes sociais e
                produção gráfica.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <Trophy className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="text-black font-semibold mb-2 text-4xl">
                    +3000
                  </h3>
                  <p className="text-gray-600 text-sm">Projetos Entregues</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <Users className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="text-black font-semibold mb-2 text-4xl">
                    +2000
                  </h3>
                  <p className="text-gray-600 text-sm">Clientes Satisfeitos</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <Target className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="text-black font-semibold mb-2 text-4xl">
                    100%
                  </h3>
                  <p className="text-gray-600 text-sm">Foco em Resultados</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O Que Fazemos Section */}
  <section className="bg-gray-100 shadow-lg rounded-2xl p-4 sm:p-8 mb-8 sm:mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">
            O Que Fazemos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">
          Gestão de Redes Sociais
              </h3>
              <p className="text-gray-800 mb-4">
          Desenvolvemos estratégias personalizadas para cada cliente,
          garantindo presença digital efetiva e engajamento real com seu
          público-alvo.
              </p>
              <ul className="space-y-2">
          {[
            "Planejamento estratégico de conteúdo",
            "Criação de posts engajadores",
            "Análise de métricas e resultados",
            "Gestão de comunidade",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-gray-700"
            >
              <ChevronRight className="w-4 h-4 text-blue-600" />
              {item}
            </li>
          ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">
          Produção Gráfica
              </h3>
              <p className="text-gray-800 mb-4">
          Criamos identidades visuais marcantes e materiais gráficos que
          comunicam a essência da sua marca.
              </p>
              <ul className="space-y-2">
          {[
            "Design de identidade visual",
            "Criação de materiais para mídias sociais",
            "Desenvolvimento de materiais impressos",
            "Projetos personalizados",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-gray-700"
            >
              <ChevronRight className="w-4 h-4 text-blue-600" />
              {item}
            </li>
          ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">
          Apoio de Reboque de Veículos
              </h3>
              <p className="text-gray-800 mb-4">
          Oferecemos suporte especializado para reboque de veículos em eventos, competições e situações emergenciais, garantindo segurança e agilidade no transporte.
              </p>
              <ul className="space-y-2">
          {[
            "Equipe treinada para operações de reboque",
            "Equipamentos modernos e seguros",
            "Atendimento rápido em pista e fora dela",
            "Suporte logístico para equipes e veículos",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-gray-700"
            >
              <ChevronRight className="w-4 h-4 text-blue-600" />
              {item}
            </li>
          ))}
              </ul>
            </div>
          </div>
        </section>

      </div>

    {/* Parceiros Section */}
  <section className="container mx-auto px-2 sm:px-6 py-10 sm:py-20 -mt-10 sm:-mt-20">
        <p className="text-slate-800 text-2xl text-center mb-2 font-normal">Sempre Connosco</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Nossos Parceiros
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* InforJob */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8 border border-gray-100">
                <Image
                  src="/parcImg1.webp"
                  alt="InforJob Logo"
                  width={400}
                  height={224}
                  className="w-full h-[120px] sm:h-56 object-contain hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-800">InforJob</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A InforJob é referência em soluções de informática e redes, atuando há mais de 15 anos 
                  no mercado nacional. Especializada em montagem de redes corporativas, estudo e desenvolvimento 
                  de projetos tecnológicos, além de fiscalização de obras de infraestrutura.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Com uma equipe técnica altamente qualificada, a empresa oferece consultoria personalizada 
                  e suporte contínuo para empresas de todos os portes, garantindo inovação, segurança e 
                  eficiência operacional.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["Informática", "Redes", "Projetos", "Fiscalização"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* ODAJA */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8 border border-gray-100">
                <Image
                  src="/parcImg2.webp"
                  alt="ODAJA Logo"
                  width={400}
                  height={224}
                  className="w-full h-[120px] sm:h-56 object-contain hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-800">ODAJA</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A ODAJA destaca-se pela prestação de serviços integrados e comércio geral, atendendo 
                  clientes dos mais diversos segmentos. Com foco em excelência operacional, oferece 
                  soluções em logística, gestão de processos e fornecimento de produtos.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Sua atuação é marcada pela transparência, compromisso com resultados e agilidade no 
                  atendimento, tornando-se parceira estratégica para negócios que buscam crescimento 
                  sustentável e inovação no mercado competitivo.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["Serviços", "Comércio", "Logística", "Gestão"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </section>

              {/* Por Que Escolher a Race Team */}
        <section className="bg-gradient-to-r from-blue-600 to-red-500 rounded-2xl p-4 sm:p-8 shadow-lg">
          {/* ...existing code... */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              É Melhor com a Racing Team
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Combinamos expertise técnica, criatividade e estratégia para
              entregar resultados excepcionais
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Rocket className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Resultados Comprovados
              </h3>
              <p className="text-white/80">
                Histórico de sucesso com centenas de clientes satisfeitos e
                cases de sucesso
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Users className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Equipe Especializada
              </h3>
              <p className="text-white/80">
                Profissionais altamente qualificados e em constante atualização
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Target className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Metodologia Única
              </h3>
              <p className="text-white/80">
                Processos otimizados e personalizados para cada cliente
              </p>
            </div>
          </div>
        </section>
        <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default AboutUs;