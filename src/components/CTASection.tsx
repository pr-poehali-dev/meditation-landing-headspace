
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="pricing">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%239b87f5' fill-opacity='1' d='M0,96L40,117.3C80,139,160,181,240,181.3C320,181,400,139,480,149.3C560,160,640,224,720,224C800,224,880,160,960,138.7C1040,117,1120,139,1200,160C1280,181,1360,203,1400,213.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              Начните свой путь к осознанности сегодня
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Всего 10 минут в день могут изменить вашу жизнь к лучшему
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="bg-white/5 rounded-xl p-6 flex-1 border border-white/10 backdrop-blur-sm">
                <div className="text-purple-300 font-medium mb-2">Стартовый план</div>
                <div className="font-playfair font-bold text-3xl text-white mb-4">Бесплатно</div>
                <ul className="text-white/70 space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    5 базовых медитаций
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Базовые дыхательные техники
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Отслеживание прогресса
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  Начать бесплатно
                </Button>
              </div>
              
              <div className="bg-purple-600/40 rounded-xl p-6 flex-1 border border-purple-400/20 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Популярный
                </div>
                <div className="text-purple-200 font-medium mb-2">Премиум</div>
                <div className="font-playfair font-bold text-3xl text-white mb-1">₽299</div>
                <div className="text-white/70 text-sm mb-4">за месяц</div>
                <ul className="text-white/80 space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Неограниченный доступ к медитациям
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Специальные курсы для сна
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Расширенная аналитика
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Без рекламы
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
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
