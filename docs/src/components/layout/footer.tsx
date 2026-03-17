import { Instagram, MapPin, Phone, MessageSquare } from "lucide-react";
import { BOOKING_URL } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
                <span className="text-black font-display font-bold text-xl leading-none -ml-[1px]">К</span>
              </div>
              <span className="font-display font-black text-2xl tracking-[0.2em] text-white">
                КОНТУР
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-8">
              Точный фейд. Чистый контур. Премиальный мужской зал, где создают безупречный стиль и ценят ваше время.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-black transition-all">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider">Навигация</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги и цены</a></li>
              <li><a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Мастера</a></li>
              <li><a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider">Контакты</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>г. Москва, ул. Примерная, д. 1</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+7 (999) 000-00-00</span>
              </li>
            </ul>
            <button 
              onClick={() => window.open(BOOKING_URL, "_blank")}
              className="mt-8 text-primary font-bold uppercase tracking-widest text-sm hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="w-8 h-[1px] bg-primary"></span>
              Записаться
            </button>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Барбершоп «КОНТУР». Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
