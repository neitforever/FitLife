import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Dumbbell, Heart, Menu, User, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const menuItems = [
    { id: 'home', label: 'Главная' },
    { id: 'workouts', label: 'Тренировки' },
    { id: 'nutrition', label: 'Питание' },
    { id: 'community', label: 'Сообщество' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 sm:gap-4 cursor-pointer flex-shrink-0 pr-4 select-none"
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <Dumbbell className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF6B35]" />
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF006B] absolute -top-1 -right-1" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF006B] bg-clip-text text-transparent">
              FitLife
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-shrink-0">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors text-sm lg:text-base font-medium whitespace-nowrap ${
                  currentPage === item.id
                    ? 'text-[#FF6B35]'
                    : 'text-gray-700 hover:text-[#FF6B35]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-3 lg:gap-4">
              <button
                onClick={() => onNavigate('profile')}
                className="text-gray-700 hover:text-[#FF6B35] font-medium transition-colors text-sm lg:text-base whitespace-nowrap"
              >
                Войти
              </button>
              <Button
                variant="gradient"
                className="text-sm lg:text-base px-3 lg:px-4 py-2 h-auto"
                onClick={() => onNavigate('profile')}
              >
                Начать бесплатно
              </Button>
              <button 
                onClick={() => onNavigate('profile')} 
                className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Profile"
              >
                <User className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 hover:text-[#FF6B35] transition-colors" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Mobile Menu Overlay */}
          <div 
            className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
                onClick={() => setIsOpen(false)} 
            />
            
            {/* Drawer */}
            <div 
                className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                    <span className="font-bold text-lg text-gray-900">Меню</span>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                
                <div className="flex flex-col gap-2 p-4 overflow-y-auto">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setIsOpen(false);
                      }}
                      className={`text-left px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                        currentPage === item.id
                          ? 'bg-orange-50 text-[#FF6B35]'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <div className="border-t my-2 pt-4 flex flex-col gap-3">
                      <button
                        onClick={() => {
                          onNavigate('profile');
                          setIsOpen(false);
                        }}
                        className="text-left px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Войти
                      </button>
                      <Button
                        variant="gradient"
                        className="w-full text-lg py-6"
                        onClick={() => {
                          onNavigate('profile');
                          setIsOpen(false);
                        }}
                      >
                        Начать бесплатно
                      </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
