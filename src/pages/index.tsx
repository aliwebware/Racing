"use client";
//import Image from "next/image";
import SlideShow from "@/components/SlideShow";
import Header from "@/components/Header";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialMediaSection from "@/components/elements/social-media-section";
import GraphicDesignSection from "@/components/elements/graphic-design-section";
import TowingSection from "@/components/elements/towing-section";
import CEOmessage from "@/components/elements/CEOmessage";
import FaqSection from "@/components/elements/faq-section";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
//import { useRouter } from "next/router";

export default function Home() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  //const router = useRouter();

  useEffect(() => {
    const handleFocus = () => {
      controlsLeft.start({ opacity: 1, x: 0 });
      controlsRight.start({ opacity: 1, x: 0 });
    };

    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, [controlsLeft, controlsRight]);

  return (
    <main className="min-h-screen bg-[#FFF]">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <SlideShow />
      </section>

      {/* Packages Section */}
      <section className="py-2">
        <CEOmessage />
        <div className="container mx-auto px-4 py-4 md:py-8 text-center align-text-center">
        <p className="text-slate-800 text-2xl font-normal mb-2">Serviços Diversos</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800">
            CONFIRA OS NOSSOS SERVIÇOS
          </h2>
        </div>
        <SocialMediaSection />
        <GraphicDesignSection />
        <TowingSection />
        <FaqSection />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <WhyChooseUs />
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}
