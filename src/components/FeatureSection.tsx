
import React from 'react';
import Icon from '@/components/ui/icon';

const FEATURES = [
  {
    icon: 'Brain',
    title: 'Осознанная медитация',
    description: 'Различные техники медитации для осознанности, концентрации и расслабления',
  },
  {
    icon: 'Moon',
    title: 'Истории для сна',
    description: 'Расслабляющие истории, которые помогут вам быстрее заснуть и улучшить качество сна',
  },
  {
    icon: 'Wind',
    title: 'Дыхательные практики',
    description: 'Простые техники дыхания для снятия стресса и тревоги в любой ситуации',
  },
  {
    icon: 'Music',
    title: 'Успокаивающие звуки',
    description: 'Коллекция звуков природы и расслабляющей музыки для создания спокойной атмосферы',
  },
  {
    icon: 'CalendarCheck',
    title: 'Ежедневные практики',
    description: 'Короткие упражнения, которые помогут внедрить медитацию в вашу повседневную жизнь',
  },
  {
    icon: 'BarChart',
    title: 'Отслеживание прогресса',
    description: 'Наглядная статистика для наблюдения за результатами ваших практик и достижениями',
  },
];

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-300/30 transition-all duration-300 hover:bg-white/10 group">
    <div className="mb-5 inline-block p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
      <Icon name={icon} size={28} className="text-purple-300" />
    </div>
    <h3 className="text-xl font-playfair font-bold text-white mb-2">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 relative" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
            Особенности нашего приложения
          </h2>
          <p className="text-white/80 text-lg">
            Мы создали комплексное решение для улучшения вашего ментального здоровья и общего благополучия
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div 
        className="absolute right-0 top-10 w-72 h-72 bg-purple-600/30 rounded-full filter blur-3xl opacity-20"
        style={{ transform: 'translate(20%, -20%)' }}
      />
      <div 
        className="absolute left-0 bottom-10 w-80 h-80 bg-indigo-900/30 rounded-full filter blur-3xl opacity-20"
        style={{ transform: 'translate(-20%, 20%)' }}
      />
    </section>
  );
};

export default FeatureSection;
