
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Icon from '@/components/ui/icon';

const TESTIMONIALS = [
  {
    name: "Елена Смирнова",
    role: "Менеджер проекта",
    avatar: "https://source.unsplash.com/random/100x100?woman,portrait,1",
    quote: "Это приложение полностью изменило мою жизнь. Я стала спокойнее реагировать на стресс, а качество сна значительно улучшилось. Рекомендую всем, кто работает в напряженном графике.",
    rating: 5
  },
  {
    name: "Александр Петров",
    role: "Программист",
    avatar: "https://source.unsplash.com/random/100x100?man,portrait,2",
    quote: "Начал медитировать с этим приложением всего 5 минут в день, и уже через неделю заметил, что стал более сосредоточенным и менее раздражительным. Интерфейс очень интуитивный и приятный.",
    rating: 5
  },
  {
    name: "Мария Козлова",
    role: "Студентка",
    avatar: "https://source.unsplash.com/random/100x100?woman,portrait,3",
    quote: "Истории для сна - это просто нечто! Раньше у меня были проблемы с засыпанием, особенно перед экзаменами, а теперь я засыпаю буквально за 10-15 минут. Благодаря этому высыпаюсь и лучше справляюсь с учебой.",
    rating: 4
  },
  {
    name: "Дмитрий Иванов",
    role: "Предприниматель",
    avatar: "https://source.unsplash.com/random/100x100?man,portrait,4",
    quote: "Как человек, который раньше скептически относился к медитации, могу сказать, что это приложение заставило меня изменить свое мнение. Теперь это часть моей утренней рутины, которая помогает мне лучше фокусироваться на важных задачах.",
    rating: 5
  },
  {
    name: "Ольга Николаева",
    role: "Врач",
    avatar: "https://source.unsplash.com/random/100x100?woman,portrait,5",
    quote: "Рекомендую это приложение своим пациентам с тревожными расстройствами. Многие отмечают значительное улучшение после регулярных практик. Особенно ценны дыхательные упражнения, которые можно выполнять где угодно.",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 h-full flex flex-col">
    <div className="flex mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon 
          key={i}
          name="Star" 
          size={16} 
          className={i < testimonial.rating ? "text-yellow-400" : "text-gray-400"}
          fill={i < testimonial.rating ? "currentColor" : "none"}
        />
      ))}
    </div>
    
    <p className="text-white/80 italic mb-6 flex-grow">"{testimonial.quote}"</p>
    
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-purple-300">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="w-full h-full object-cover" 
        />
      </div>
      <div>
        <h4 className="font-medium text-white">{testimonial.name}</h4>
        <p className="text-white/60 text-sm">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 relative" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
            Что говорят наши пользователи
          </h2>
          <p className="text-white/80 text-lg">
            Тысячи людей уже изменили свою жизнь к лучшему с помощью нашего приложения
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-5xl mx-auto"
        >
          <CarouselContent>
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-auto">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2 bg-white/10 hover:bg-white/20 border-none text-white" />
            <CarouselNext className="relative static ml-2 bg-white/10 hover:bg-white/20 border-none text-white" />
          </div>
        </Carousel>
      </div>
      
      {/* Background decorative elements */}
      <div 
        className="absolute left-0 top-1/4 w-64 h-64 bg-purple-600/30 rounded-full filter blur-3xl opacity-20"
        style={{ transform: 'translate(-30%, -30%)' }}
      />
      <div 
        className="absolute right-0 bottom-1/4 w-80 h-80 bg-indigo-900/30 rounded-full filter blur-3xl opacity-20"
        style={{ transform: 'translate(30%, 30%)' }}
      />
    </section>
  );
};

export default TestimonialsSection;
