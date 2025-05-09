import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="pricing">
      {/* Star field background enhancement */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => {
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const size = Math.random() * 3 + 1;
          const opacity = Math.random() * 0.5 + 0.3;

          return (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-200"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                boxShadow: `0 0 ${size * 2}px ${size / 2}px rgba(254, 240, 138, ${opacity})`,
              }}
            />
          );
        })}
      </div>

      {/* Galaxy swirl effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-900/30 via-yellow-800/20 to-transparent animate-spin-slow"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-l from-yellow-600/20 via-indigo-500/10 to-transparent animate-spin-slow-reverse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Начните свой путь к осознанности сегодня
            </h2>
            <p className="text-white/80 text-lg mb-8 font-sans">
              Всего 10 минут в день могут изменить вашу жизнь к лучшему
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="bg-black/40 rounded-xl p-6 flex-1 border border-white/10 backdrop-blur-sm">
                <div className="text-yellow-300 font-medium mb-2 font-sans">
                  Стартовый план
                </div>
                <div className="font-heading font-bold text-3xl text-white mb-4">
                  Бесплатно
                </div>
                <ul className="text-white/70 space-y-2 mb-6 font-sans">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    5 базовых медитаций
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Базовые дыхательные техники
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Отслеживание прогресса
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 font-sans"
                >
                  Начать бесплатно
                </Button>
              </div>

              <div className="bg-indigo-900/30 rounded-xl p-6 flex-1 border border-yellow-400/20 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-500 text-black px-4 py-1 text-sm font-medium rounded-bl-lg font-sans">
                  Популярный
                </div>
                <div className="text-yellow-200 font-medium mb-2 font-sans">
                  Премиум
                </div>
                <div className="font-heading font-bold text-3xl text-white mb-1">
                  ₽299
                </div>
                <div className="text-white/70 text-sm mb-4 font-sans">
                  за месяц
                </div>
                <ul className="text-white/80 space-y-2 mb-6 font-sans">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Неограниченный доступ к медитациям
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Специальные курсы для сна
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Расширенная аналитика
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Без рекламы
                  </li>
                </ul>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-sans">
                  7 дней бесплатно
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
