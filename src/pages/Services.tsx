import React, { useState, useEffect } from "react";
import {
  Instagram,
  ArrowRight,
  CheckCircle2,
  X,
  Truck,
  MessageCircle,
  Printer,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";

interface Package {
  name: string;
  features: string[];
  price?: string;
  popular?: boolean;
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  gradient: string;
  packages: Package[];
}

// Simple Navbar component

function App() {
  const [selectedPackage, setSelectedPackage] = useState<{
    serviceIndex: number;
    packageIndex: number;
  } | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services: Service[] = [
    {
      title: "Gestão de Redes Sociais",
      description:
        "Gerenciamento completo das suas redes sociais com estratégia personalizada, criação de conteúdo engajador e análise detalhada de métricas.",
      icon: <Instagram className="w-8 h-8" />,
      image:
        "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      packages: [
        {
          name: "Pacote Básico",
          price: "Kzs 20.000/mês",
          features: [
            "8 posts por mês (2 por semana)",
            "Criação de artes e legendas personalizadas",
            "Planejamento estratégico de conteúdo",
            "Agendamento e publicação automática",
            "Relatórios mensais de desempenho",
          ],
        },
        {
          name: "Pacote Intermediário",
          price: "Kzs 32.000/mês",
          popular: true,
          features: [
            "12 posts por mês (3 por semana)",
            "Criação de artes, legendas e hashtags estratégicas",
            "Interação com seguidores (curtidas e respostas)",
            "Stories personalizados (4 por semana)",
            "Monitoramento de métricas e ajustes na estratégia",
            "Relatórios quinzenais de desempenho",
          ],
        },
        {
          name: "Pacote Avançado",
          price: "Kzs 40.000/mês",
          features: [
            "20 posts por mês (5 por semana)",
            "Criação de reels e stories personalizados",
            "Edição profissional de vídeos curtos",
            "Gestão completa de interações e engajamento",
            "Campanhas de tráfego pago (budget incluso)",
            "Relatórios semanais e consultoria estratégica",
            "Suporte prioritário via WhatsApp",
          ],
        },
      ],
    },
    {
  title: "Produção & Personalização Gráfica",
  description:
    "Personalização de t-shirts, brindes e materiais promocionais com base no nosso catálogo oficial.",
  icon: <Printer className="w-8 h-8" />,
  image:
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  gradient: "from-blue-500 via-indigo-500 to-purple-500",
  packages: [
    {
      name: "Kit Start Promocional",
      price: "Kz 21.000",
      features: [
        "10 Lapiseiras Personalizadas (Kz 1.350/un)",
        "5 Sacolas TNT personalizadas (Kz 900/un)",
        "1 Chavena Normal com logotipo (Kz 3.000)"
      ]
    },
    {
      name: "Uniforme Básico",
      price: "Kz 26.500",
      popular: true,
      features: [
        "1 T-Shirt Polo personalizada (Kz 9.500)",
        "1 T-Shirt Algodão (Kz 7.000)",
        "1 Casaco Algodão personalizado (Kz 10.000)"
      ]
    },
    {
      name: "Brindes Corporativos",
      price: "Kz 15.700",
      features: [
        "1 Cantil Térmico com logo (Kz 5.200)",
        "2 Chavenas Normais personalizadas (Kz 3.000 cada)",
        "2 Fitas de Mosquetão (Kz 1.500 cada)",
        "1 Passe PVC (cada lado) (Kz 1.500)"
      ]
    }
  ],
},

    {
      title: "Serviço de Reboque 24/7",
      description:
        "Serviço de reboque profissional e confiável, disponível 24 horas por dia para atender emergências e necessidades de transporte automotivo.",
      icon: <Truck className="w-8 h-8" />,
      image:
        "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800",
  gradient: "from-blue-600 via-blue-500 to-blue-400",
      packages: [
        {
          name: "Reboque Local",
          price: "Kzs 2.000/km",
          features: [
            "Reboque de veículos leves até 15 km",
            "Atendimento emergencial 24/7",
            "Equipe especializada e treinada",
            "Equipamentos de segurança certificados",
            "Tempo médio de chegada: 30 minutos",
          ],
        },
        {
          name: "Reboque Regional",
          price: "Kzs 4.000/km",
          popular: true,
          features: [
            "Reboque de veículos leves até 50 km",
            "Atendimento emergencial 24/7",
            "Cobertura para veículos de médio porte",
            "Seguro básico incluso no serviço",
            "Guincho especializado para diferentes situações",
          ],
        },
        {
          name: "Reboque Premium",
          price: "Kzs 6.000/km",
          features: [
            "Reboque ilimitado de distância",
            "Atendimento VIP emergencial 24/7",
            "Cobertura para todos os tipos de veículos",
            "Seguro completo e proteção total",
            "Transporte para passageiros incluso",
            "Prioridade máxima no atendimento",
          ],
        },
      ],
    },
  ];

  const handleContactWhatsApp = (serviceName: string, packageName: string) => {
    let phone = "";
    const normalized = serviceName.toLowerCase();
    
    if (normalized.includes("redes sociais") || normalized.includes("gestão")) {
      phone = "244944978142";
    } else if (normalized.includes("produção") || normalized.includes("personalização") || normalized.includes("gráfica")) {
      phone = "244927903116";
    } else if (normalized.includes("reboque")) {
      phone = "244946141214";
    } else {
      phone = "244944978142";
    }
    
    const message = `Olá! Gostaria de mais informações sobre o serviço "${serviceName}" - ${packageName}. Pode me ajudar?`;
    
    // Garantir que a URL seja construída corretamente
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    // Log para debug
    console.log("Serviço:", serviceName);
    console.log("Telefone:", phone);
    console.log("URL completa:", whatsappURL);
    
    // Abrir em nova aba
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #f4f4f4 0%, #e8f0ff 25%, #f4f4f4 50%, #ffe8e8 75%, #f4f4f4 100%)",
      }}
    >
      {/* Hero Section */}
      <Header />
      <section
        className="relative text-white py-28"
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
        src="/FundoServ.webp"
        alt="Fundo Serviços"
        fill
        priority
        className="object-cover transition-all duration-1000 ease-out opacity-0 animate-fade-in"
        style={{ zIndex: 0 }}
          />
          <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s forwards;
        }
          `}</style>
        </div>
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
        <div className="container mx-auto px-2 sm:px-4 relative z-10">
          <div className="mt-20 flex flex-col items-center gap-8">
        <h1
          className="text-2xl sm:text-3xl md:text-6xl font-bold text-center max-w-full sm:max-w-4xl mb-6 drop-shadow-lg break-words"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Transformamos sua Visão em Presença Digital
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-8 w-full max-w-5xl">
          <div className="flex-1 min-w-0">
            <div className="max-w-xl mx-auto w-full">
          <div className="backdrop-blur-md bg-gradient-to-br from-black/30 via-black/20 to-black/10 rounded-xl p-4 sm:p-6 border border-white/10 shadow-lg">
            <p
              className="text-base md:text-xl text-center md:text-left text-white"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Soluções criativas para destacar sua marca! Gerimos redes
              sociais e personalizamos materiais gráficos com estratégia
              e qualidade.
            </p>
          </div>
            </div>
          </div>
          <div className="w-full max-w-md flex flex-col gap-4 md:items-end px-2 sm:px-4 md:px-8">
            <div className="bg-gradient-to-br from-blue-900/40 via-blue-700/20 to-blue-600/10 backdrop-blur-md rounded-xl p-3 border border-blue-400/20 shadow-lg">
          <h2 className="text-lg font-bold text-white mb-2 text-center tracking-wide">
            Como contratar um serviço?
          </h2>
          <div className="flex flex-row gap-4 items-stretch">
            {/* Passo 1 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white text-xl font-bold mb-2 shadow-md">
            1
              </div>
              <span className="text-white text-center text-sm font-light">
            Escolha o serviço
              </span>
            </div>
            {/* Passo 2 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white text-xl font-bold mb-2 shadow-md">
            2
              </div>
              <span className="text-white text-center text-sm font-light">
            Selecione o pacote
              </span>
            </div>
            {/* Passo 3 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white text-xl font-bold mb-2 shadow-md">
            3
              </div>
              <span className="text-white text-center text-sm font-light">
            Contrate pelo WhatsApp
              </span>
            </div>
          </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
  <div className="container mx-auto px-2 sm:px-6">
          <div
            className={`text-center mb-16 -mt-10 transition-all duration-1000 ${
              isClient
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <p className="text-slate-800 text-2xl font-normal mb-2">
              Do básico ao Premium
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Escolha o pacote ideal para impulsionar seu negócio com qualidade
              profissional e resultados comprovados
            </p>
          </div>

           <div className="flex flex-col items-center justify-center mb-12">
            <p className="text-lg text-slate-700 mb-4 text-center max-w-2xl">Confira nosso catálogo completo de serviços e encontre preços adequados para todos os bolsos. Soluções pensadas para pequenas, médias e grandes empresas, com qualidade e acessibilidade.</p>
            <a
              href="/arquivo/catalogo.pdf" download
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-2xl shadow transition-all duration-300 text-lg"
            >
              Consulte nosso catálogo
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {services.map((service, serviceIndex) => (
              <div
                key={serviceIndex}
                className={`group transform transition-all duration-700 hover:scale-[1.02] ${
                  isClient
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: isClient
                    ? `${(serviceIndex + 1) * 200}ms`
                    : "0ms",
                }}
              >
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
                  {/* Card Header with Image */}
                  <div className="relative h-[180px] sm:h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 640px) 100vw, 480px"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}
                    ></div>

                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 border border-white/30">
                        <div className="text-white">{service.icon}</div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Packages */}
                    <div className="space-y-3">
                      {service.packages.map((pkg, packageIndex) => (
                        <button
                          key={packageIndex}
                          onClick={() =>
                            setSelectedPackage({ serviceIndex, packageIndex })
                          }
                          className={`w-full p-3 sm:p-4 rounded-2xl border-2 text-left transition-all duration-300 group/btn hover:scale-[1.02] ${
                            pkg.popular
                              ? "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 hover:border-blue-300 hover:shadow-lg"
                              : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span
                                  className={`font-bold text-lg ${
                                    pkg.popular
                                      ? "text-blue-700"
                                      : "text-slate-700"
                                  }`}
                                >
                                  {pkg.name}
                                </span>
                                {pkg.popular && (
                                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                                    POPULAR
                                  </span>
                                )}
                              </div>
                              {pkg.price && (
                                <div
                                  className={`font-bold text-xl ${
                                    pkg.popular
                                      ? "text-blue-600"
                                      : "text-slate-600"
                                  }`}
                                >
                                  {pkg.price}
                                </div>
                              )}
                            </div>
                            <ArrowRight
                              className={`w-5 h-5 group-hover/btn:translate-x-1 transition-transform ${
                                pkg.popular ? "text-blue-500" : "text-slate-400"
                              }`}
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPackage && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white rounded-t-3xl border-b border-slate-100 p-4 sm:p-6 z-10">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-800">
                      {
                        services[selectedPackage.serviceIndex].packages[
                          selectedPackage.packageIndex
                        ].name
                      }
                    </h3>
                    {services[selectedPackage.serviceIndex].packages[
                      selectedPackage.packageIndex
                    ].popular && (
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 mb-2">
                    {services[selectedPackage.serviceIndex].title}
                  </p>
                  {services[selectedPackage.serviceIndex].packages[
                    selectedPackage.packageIndex
                  ].price && (
                    <div className="text-3xl font-bold text-blue-600">
                      {
                        services[selectedPackage.serviceIndex].packages[
                          selectedPackage.packageIndex
                        ].price
                      }
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="ml-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">
                O que está incluído:
              </h4>
              <div className="space-y-4 mb-8">
                {services[selectedPackage.serviceIndex].packages[
                  selectedPackage.packageIndex
                ].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  handleContactWhatsApp(
                    services[selectedPackage.serviceIndex].title,
                    services[selectedPackage.serviceIndex].packages[
                      selectedPackage.packageIndex
                    ].name
                  );
                  setSelectedPackage(null);
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-6 h-6" />
                Contratar via WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      <Footer />
    </div>
  );
}

export default App;