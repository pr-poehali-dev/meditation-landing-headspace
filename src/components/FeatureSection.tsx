import React from "react";
import Icon from "@/components/ui/icon";

const FEATURES = [
  {
    icon: "Brain",
    title: "Осознанная медитация",
    description:
      "Различные техники медитации для осознанности, концентрации и расслабления",
  },
  {
    icon: "Moon",
    title: "Истории для сна",
    description:
      "Расслабляющие истории, которые помогут вам быстрее заснуть и улучшить качество сна",
  },
  {
    icon: "Wind",
    title: "Дыхательные практики",
    description:
      "Простые техники дыхания для снятия стресса и тревоги в любой ситуации",
  },
  {
    icon: "Music",
    title: "Успокаивающие звуки",
    description:
      "Коллекция звуков природы и расслабляющей музыки для создания спокойной атмосферы",
  },
  {
    icon: "CalendarCheck",
    title: "Ежедневные практики",
    description:
      "Короткие упражнения, которые помогут внедрить медитацию в вашу повседневную жизнь",
  },
  {
    icon: "BarChart",
    title: "Отслеживание прогресса",
    description:
      "Наглядная статистика для наблюдения за результатами ваших практик и достижениями",
  },
];

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:bg-white/10 group">
    <div className="mb-5 inline-block p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
      <Icon name={icon} size={28} className="text-purple-300" />
    </div>
    <h3 className="text-xl font-heading font-bold text-white mb-2">{title}</h3>
    <p className="text-white/70 font-sans">{description}</p>
  </div>
);

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 relative" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Особенности нашего приложения
          </h2>
          <p className="text-white/80 text-lg font-sans">
            Мы создали комплексное решение для улучшения вашего ментального
            здоровья и общего благополучия
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

      {/* Декоративные волнистые линии */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C150,90 350,0 500,100 C650,200 750,0 900,80 C1050,160 1200,40 1200,40 V120 H0 V0 Z"
            fill="url(#gradient1)"
            opacity="0.2"
          ></path>
          <path
            d="M0,40 C150,130 350,40 500,140 C650,240 750,40 900,120 C1050,200 1200,80 1200,80 V120 H0 V40 Z"
            fill="url(#gradient2)"
            opacity="0.2"
          ></path>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FeatureSection;
