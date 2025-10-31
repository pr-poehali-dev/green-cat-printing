import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Полиграфия',
      items: ['Визитки', 'Календари', 'Буклеты', 'Листовки и флаеры', 'Печать авторефератов'],
      icon: 'FileText'
    },
    {
      title: 'Широкоформатная печать',
      items: ['Баннеры', 'Афиши и постеры', 'Печать фотографий', 'Холсты'],
      icon: 'Image'
    },
    {
      title: 'Сувениры',
      items: ['Печать на кружках', 'Печать на футболках', 'Значки', 'Магниты', 'Брелоки'],
      icon: 'Gift'
    },
    {
      title: 'Рекламные конструкции',
      items: ['Ростовые фигуры', 'Вывески и таблички', 'Штендеры', 'Roll-up и X-banner'],
      icon: 'Megaphone'
    }
  ];

  const portfolio = [
    { name: 'Визитки премиум', category: 'Полиграфия' },
    { name: 'Баннер 3x6м', category: 'Широкоформат' },
    { name: 'Брендированные кружки', category: 'Сувениры' },
    { name: 'Вывеска для кафе', category: 'Реклама' },
    { name: 'Буклеты А4', category: 'Полиграфия' },
    { name: 'Roll-up стенд', category: 'Реклама' }
  ];

  const prices = [
    { service: 'Визитки (500 шт)', price: 'от 1 200 ₽' },
    { service: 'Печать А4 цветная', price: 'от 15 ₽/лист' },
    { service: 'Баннер 3x6м', price: 'от 3 500 ₽' },
    { service: 'Печать на кружке', price: 'от 350 ₽' },
    { service: 'Футболка с принтом', price: 'от 800 ₽' },
    { service: 'Roll-up стенд', price: 'от 2 500 ₽' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl">🐱</span>
              </div>
              <div>
                <h1 className="font-heading font-bold text-xl">Green Cat</h1>
                <p className="text-xs text-muted-foreground">Типография</p>
              </div>
            </div>
            
            <nav className="hidden md:flex gap-6">
              {['Главная', 'Услуги', 'Прайс', 'О нас', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      <section id="главная" className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Типография полного цикла
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Полиграфия, широкоформатная печать, сувениры и рекламные конструкции. 
              Высокое качество и быстрые сроки выполнения.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('прайс')}>
                <Icon name="FileText" size={20} className="mr-2" />
                Посмотреть цены
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      </section>

      <section id="услуги" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный спектр полиграфических услуг для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Примеры работ</h2>
            <p className="text-muted-foreground">Наше портфолио выполненных проектов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Icon name="Image" size={48} className="text-primary/40" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="прайс" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Прайс-лист</h2>
            <p className="text-muted-foreground">Популярные услуги и их стоимость</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="divide-y">
              {prices.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span className="font-medium">{item.service}</span>
                  </div>
                  <span className="font-heading font-bold text-lg text-primary">{item.price}</span>
                </div>
              ))}
            </Card>
            <p className="text-center text-sm text-muted-foreground mt-6">
              * Точную стоимость уточняйте по телефону
            </p>
          </div>
        </div>
      </section>

      <section id="о нас" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center">О типографии</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: 'Zap', title: 'Быстро', text: 'Срочные заказы за 24 часа' },
                { icon: 'Award', title: 'Качественно', text: 'Современное оборудование' },
                { icon: 'Percent', title: 'Выгодно', text: 'Скидки на большие тиражи' }
              ].map((feature, idx) => (
                <Card key={idx} className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Контакты</h2>
            <p className="text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-6">Контактная информация</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">Колхозный переулок, д. 2</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <a href="tel:89608156036" className="text-primary hover:underline">
                      8 (960) 815-60-36
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@greencat.su" className="text-primary hover:underline">
                      info@greencat.su
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: выходной</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-6">Напишите нам</h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Ваше сообщение"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl">🐱</span>
              </div>
              <div>
                <h3 className="font-heading font-bold">Green Cat</h3>
                <p className="text-sm opacity-80">Типография полного цикла</p>
              </div>
            </div>
            
            <p className="text-sm opacity-80">
              © 2024 Green Cat. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
