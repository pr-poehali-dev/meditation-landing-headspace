
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative w-10 h-10 mr-3">
            <div className="absolute inset-0 bg-purple-400 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute inset-1 bg-indigo-600 rounded-full"></div>
          </div>
          <span className="text-white text-xl font-playfair font-bold">Поток</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors duration-200">
            Возможности
          </a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors duration-200">
            Отзывы
          </a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors duration-200">
            Тарифы
          </a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors duration-200">
            О нас
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Войти
          </Button>
          <Button className="bg-purple-500 hover:bg-purple-600 text-white">
            Попробовать бесплатно
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-indigo-900/95 text-white border-none">
            <div className="flex flex-col space-y-6 pt-10">
              <a href="#features" className="text-lg font-medium hover:text-purple-300 transition-colors">
                Возможности
              </a>
              <a href="#testimonials" className="text-lg font-medium hover:text-purple-300 transition-colors">
                Отзывы
              </a>
              <a href="#pricing" className="text-lg font-medium hover:text-purple-300 transition-colors">
                Тарифы
              </a>
              <a href="#about" className="text-lg font-medium hover:text-purple-300 transition-colors">
                О нас
              </a>
              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full">
                  Войти
                </Button>
                <Button className="bg-purple-500 hover:bg-purple-600 text-white w-full">
                  Попробовать бесплатно
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
