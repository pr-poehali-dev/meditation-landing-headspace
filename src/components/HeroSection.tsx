import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import AnimatedCircles from "./AnimatedCircles";

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (waveRef.current) {
      waveRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
    }
  }, [scrollY]);

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden">
      {/* Фоновые волнистые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${500 + i * 200}px`,
              height: `${500 + i * 200}px`,
              top: `${30 + i * 20}%`,
              left: `${20 + i * 20}%`,
              backgroundColor:
                i % 2 === 0
                  ? "rgba(129, 140, 248, 0.3)"
                  : "rgba(167, 139, 250, 0.3)",
              filter: "blur(80px)",
              transform: `translateY(${Math.sin(i) * 10}px)`,
              animation: `float ${10 + i * 5}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <div
        ref={waveRef}
        className="absolute bottom-0 left-0 w-full h-64 z-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%238b5cf6' fill-opacity='1' d='M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,202.7C672,213,768,203,864,186.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Найдите свой{" "}
              <span className="text-purple-300">внутренний покой</span> в
              повседневной суете
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg font-sans">
              Медитации, техники дыхания и истории для сна, которые помогут вам
              расслабиться, снять стресс и обрести гармонию.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg py-6 font-sans">
                Начать бесплатно
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg py-6 font-sans"
              >
                Узнать больше
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img
                      src={`https://source.unsplash.com/random/100x100?face&${i}`}
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-white font-medium font-sans">
                  Более 100,000+ человек
                </p>
                <p className="text-white/70 text-sm font-sans">
                  уже обрели душевное спокойствие
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <AnimatedCircles />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
