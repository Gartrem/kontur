import { motion } from "framer-motion";
import { Scissors, Target, UserCheck, Coffee, Calendar, Zap, Star, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/utils";

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const handleBook = () => window.open(BOOKING_URL, "_blank");

  return (
    <div className="bg-noise min-h-screen">
      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Kontur Barbershop Interior" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-16 h-16 md:w-20 md:h-20 bg-primary flex items-center justify-center rounded-sm mb-8 transform rotate-45"
          >
            <span className="text-black font-display font-bold text-4xl leading-none -rotate-45 -ml-[2px]">К</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white tracking-[0.1em] mb-6"
          >
            КОНТУР
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 font-light tracking-widest uppercase mb-12 max-w-2xl"
          >
            Точный фейд. <span className="text-primary font-medium">Чистый контур.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button variant="gold" size="lg" onClick={handleBook} className="gold-glow">
              ЗАПИСАТЬСЯ ОНЛАЙН
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Вниз</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="absolute -inset-4 border border-primary/20 rounded-sm transform -rotate-3 z-0 hidden md:block"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/about-tools.png`} 
                alt="Barber Tools" 
                className="w-full h-auto aspect-square object-cover rounded-sm relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-primary"></div>
                <h2 className="text-primary font-bold uppercase tracking-widest">О нас</h2>
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                ПРЕМИАЛЬНЫЙ <br/><span className="text-gradient-gold">МУЖСКОЙ ЗАЛ</span>
              </h3>
              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                <p>
                  КОНТУР — это не просто парикмахерская. Это мужской клуб, где классические традиции встречаются с современными техниками. Мы создали пространство для тех, кто ценит безупречный стиль и сервис высочайшего уровня.
                </p>
                <p>
                  Каждая деталь в нашей работе подчинена одному правилу: <strong className="text-white font-medium">никаких компромиссов в качестве.</strong> Строгая геометрия, идеальные фейды, выверенные формы бороды.
                </p>
              </div>
              <Button variant="outline" className="mt-10" onClick={handleBook}>
                Узнать больше
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES & PRICES */}
      <section id="services" className="py-24 lg:py-32 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-primary"></div>
              <h2 className="text-primary font-bold uppercase tracking-widest">Прайс-лист</h2>
              <div className="w-8 h-[2px] bg-primary"></div>
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-bold">УСЛУГИ И ЦЕНЫ</h3>
          </motion.div>

          <motion.div 
            className="grid gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: "Мужская стрижка", price: "от 1500 ₽", desc: "Мытье головы, стрижка, укладка премиальной косметикой" },
              { name: "Стрижка машинкой", price: "от 1200 ₽", desc: "Стрижка под 1-2 насадки, мытье головы" },
              { name: "Оформление бороды", price: "от 800 ₽", desc: "Придание формы, распаривание, опасная бритва" },
              { name: "Стрижка + борода", price: "от 2000 ₽", desc: "Комплексный уход за волосами и бородой" },
              { name: "Детская стрижка", price: "от 1000 ₽", desc: "Для джентльменов от 5 до 12 лет" },
              { name: "Укладка", price: "от 500 ₽", desc: "Мытье головы и стайлинг" },
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="group relative flex flex-col sm:flex-row sm:items-end justify-between p-6 bg-card border border-border/50 hover:border-primary/50 transition-colors rounded-sm"
              >
                <div className="mb-4 sm:mb-0">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{service.name}</h4>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
                <div className="hidden sm:block flex-grow border-b border-dashed border-border/50 mx-6 mb-2 relative top-[-10px]"></div>
                <div className="text-2xl font-display font-bold text-gradient-gold shrink-0">
                  {service.price}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Button variant="gold" size="lg" onClick={handleBook}>
              ЗАПИСАТЬСЯ НА УСЛУГУ
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="advantages" className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">ПОЧЕМУ ВЫБИРАЮТ НАС</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">Мы заботимся о каждой детали, чтобы вы получали безупречный результат.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: UserCheck, title: "Опытные мастера", desc: "Профессионалы с многолетним стажем и чувством стиля." },
              { icon: Target, title: "Точная работа", desc: "Идеальные линии, плавные переходы и внимание к мелочам." },
              { icon: Scissors, title: "Индивидуальный подход", desc: "Подбираем форму, учитывая анатомию лица и структуру волос." },
              { icon: Coffee, title: "Комфортная атмосфера", desc: "Отличный кофе, хорошая музыка и мужская территория." },
              { icon: Calendar, title: "Удобная запись", desc: "Записывайтесь онлайн в пару кликов в любое время." },
              { icon: Zap, title: "Современные техники", desc: "Постоянно обучаемся и следим за мировыми трендами." },
            ].map((adv, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="p-8 bg-card/50 border border-border hover:bg-card hover:border-primary/30 transition-all group rounded-sm"
              >
                <div className="w-14 h-14 bg-secondary flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary group-hover:text-black text-primary transition-colors">
                  <adv.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{adv.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 lg:py-32 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-primary"></div>
                <h2 className="text-primary font-bold uppercase tracking-widest">Команда</h2>
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-bold">НАШИ МАСТЕРА</h3>
            </div>
            <Button variant="outline" onClick={handleBook}>Все мастера</Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Артём", role: "Top Barber", img: "barber-1.png" },
              { name: "Денис", role: "Senior Barber", img: "barber-2.png" },
              { name: "Максим", role: "Barber", img: "barber-3.png" },
            ].map((barber, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="group"
              >
                <div className="relative overflow-hidden mb-6 aspect-[3/4] rounded-sm bg-secondary">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${barber.img}`} 
                    alt={barber.name} 
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Actions */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Button variant="gold" size="sm" onClick={handleBook}>К МАСТЕРУ</Button>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-white mb-1 font-display">{barber.name}</h4>
                  <p className="text-primary uppercase tracking-widest text-sm font-medium">{barber.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">ОТЗЫВЫ</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Отличное место! Мастер Артём сделал идеальный фейд. Атмосфера настоящая мужская, предложили кофе. Теперь стригусь только здесь.",
                author: "Михаил В.",
                date: "2 недели назад"
              },
              {
                text: "Искал хорошего барбера для оформления бороды, Денис справился на 5+. Очень аккуратная работа опасной бритвой. Рекомендую.",
                author: "Александр С.",
                date: "1 месяц назад"
              },
              {
                text: "Стрижемся здесь вместе с сыном. Максим нашел подход к ребенку, а мне сделал отличную классическую стрижку. Уровень сервиса топ.",
                author: "Дмитрий К.",
                date: "3 дня назад"
              }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="bg-card p-8 border border-border relative rounded-sm"
              >
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  «{review.text}»
                </p>
                <div className="flex justify-between items-center border-t border-border/50 pt-4 mt-auto">
                  <span className="font-bold text-white">{review.author}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contact" className="py-24 lg:py-32 relative bg-secondary/20 border-t border-border overflow-hidden">
        {/* Decorative background logo */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[30rem] font-display font-black text-white/[0.02] leading-none select-none pointer-events-none">
          К
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-primary"></div>
                <h2 className="text-primary font-bold uppercase tracking-widest">Контакты</h2>
              </div>
              <h3 className="font-display text-4xl md:text-6xl font-bold mb-10">ЖДЕМ ВАС</h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-card border border-border flex items-center justify-center rounded-sm shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-1">Адрес</h5>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1<br/>Вход со двора</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-card border border-border flex items-center justify-center rounded-sm shrink-0">
                    <Clock className="text-primary" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-1">Режим работы</h5>
                    <p className="text-muted-foreground">Ежедневно<br/>10:00 – 21:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-card border border-border flex items-center justify-center rounded-sm shrink-0">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-1">Телефон</h5>
                    <p className="text-muted-foreground text-xl font-light">+7 (999) 000-00-00</p>
                  </div>
                </div>
              </div>

              <Button variant="gold" size="lg" className="w-full sm:w-auto" onClick={handleBook}>
                ЗАПИСАТЬСЯ СЕЙЧАС
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card border border-border p-2 rounded-sm h-[400px] lg:h-auto min-h-[400px]"
            >
              {/* Maps Placeholder - in real app replace with Yandex/Google iframe */}
              <div className="w-full h-full bg-secondary flex flex-col items-center justify-center rounded-sm border border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6bTAgOGMtNS41MiAwLTEwLTQuNDgtMTAtMTBzNC40OC0xMCAxMC0xMCAxMCA0LjQ4IDEwIDEwLTQuNDggMTAtMTAgMTB6IiBmaWxsPSIjYzkxZDMyIiBmaWxsLW9wYWNpdHk9IjAuNCIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==')]"></div>
                <MapPin size={48} className="text-primary mb-4 relative z-10" />
                <p className="text-muted-foreground font-medium relative z-10">Карта загружается...</p>
                <Button variant="outline" size="sm" className="mt-4 relative z-10" onClick={() => window.open('https://yandex.ru/maps', '_blank')}>
                  Открыть в Яндекс Картах
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
