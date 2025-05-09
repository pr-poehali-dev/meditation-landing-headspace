
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 relative" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="relative w-10 h-10 mr-3">
                <div className="absolute inset-0 bg-purple-400 rounded-full opacity-70"></div>
                <div className="absolute inset-1 bg-indigo-600 rounded-full"></div>
              </div>
              <span className="text-white text-xl font-playfair font-bold">Поток</span>
            </div>
            <p className="text-white/70 mb-6">
              Мы помогаем вам сохранять спокойствие и осознанность в современном мире.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500/20 transition-colors duration-200 text-white">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500/20 transition-colors duration-200 text-white">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500/20 transition-colors duration-200 text-white">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500/20 transition-colors duration-200 text-white">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">Приложение</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors duration-200">Возможности</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-white transition-colors duration-200">Отзывы</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-white transition-colors duration-200">Тарифы</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Скачать</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">О нас</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Карьера</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Блог</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Контакты</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Помощь</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Условия использования</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Поток. Все права защищены.
          </p>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Icon name="SmartphoneNfc" size={20} className="text-white/50 mr-2" />
              <span className="text-white/50 text-sm">Доступно в App Store</span>
            </div>
            <div className="flex items-center">
              <Icon name="Smartphone" size={20} className="text-white/50 mr-2" />
              <span className="text-white/50 text-sm">Доступно в Google Play</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
