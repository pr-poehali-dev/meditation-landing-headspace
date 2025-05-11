import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="pricing">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(45deg, rgba(79, 70, 229, 0.2) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(167, 139, 250, 0.2) 100%)",
          backgroundSize: "200% 200%",
          animation: "gradientBackground 15s ease infinite",
        }}
      />

      {/* Gentle wave effect */}
      <div className="absolute bottom-0 left-0 w-full h-40 z-0">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M0,0 V46.29c47.79,22.2 103.59,32.17 158,28 70.36,-5.37 136.33,-33.31 206.8,-37.5 73.84,-4.36 147.54,16.88 218.2,35.26 69.27,18.48 138.3,24.88 209.4,13.08 36.15,-6 69.85,-17.84 104.45,-29.34 C989.49,25 1113,-14.29 1200,52.47 V0 Z"
            fill="rgba(139, 92, 246, 0.15)"
            opacity="0.5"
          />
          <path
            d="M0,0 V15.81c13,21.11 27.64,41.05 47.69,56.24 47.79,22.2 103.59,32.17 158,28 70.36,-5.37 136.33,-33.31 206.8,-37.5 73.84,-4.36 147.54,16.88 218.2,35.26 69.27,18.48 138.3,24.88 209.4,13.08 36.15,-6 69.85,-17.84 104.45,-29.34 C989.49,25 1113,-14.29 1200,52.47 V0 Z"
            fill="rgba(167, 139, 250, 0.1)"
            opacity="0.5"
          />
        </svg>
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
                <div className="text-purple-300 font-medium mb-2 font-sans">
                  Стартовый план
                </div>
                <div className="font-heading font-bold text-3xl text-white mb-4">
                  Бесплатно
                </div>
                <ul className="text-white/70 space-y-2 mb-6 font-sans">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-400"
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
                      className="w-5 h-5 mr-2 text-purple-400"
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
                      className="w-5 h-5 mr-2 text-purple-400"
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

              <div className="bg-indigo-900/30 rounded-xl p-6 flex-1 border border-purple-400/20 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg font-sans">
                  Популярный
                </div>
                <div className="text-purple-200 font-medium mb-2 font-sans">
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
                      className="w-5 h-5 mr-2 text-purple-300"
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
                      className="w-5 h-5 mr-2 text-purple-300"
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
                      className="w-5 h-5 mr-2 text-purple-300"
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
                      className="w-5 h-5 mr-2 text-purple-300"
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
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-sans">
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
