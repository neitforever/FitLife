import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Play, Dumbbell, Apple, Users, Flame, Star } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const stats = [
    { icon: Users, number: '15,000+', label: 'Активных пользователей' },
    { icon: Flame, number: '500,000+', label: 'Завершённых тренировок' },
    { icon: Star, number: '4.8', label: 'Рейтинг приложения' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FF6B35] via-[#FF3366] to-[#FF006B] text-white relative overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-32 left-20 w-3 h-3 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute bottom-20 right-10 w-5 h-5 bg-white/25 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-60 left-1/3 w-2 h-2 bg-white/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 right-1/4 w-3 h-3 bg-white/35 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
        </div>
        
        {/* Interactive Mouse Follower */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full blur-2xl transition-all duration-300 ease-out"
               style={{
                 left: '50%',
                 top: '50%',
                 transform: 'translate(-50%, -50%)',
                 animation: 'float 6s ease-in-out infinite'
               }}>
          </div>
        </div>

        <div className="text-center px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in tracking-tight leading-tight">
            Достигай своих фитнес-целей с <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x">FitLife</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-white/90 max-w-3xl mx-auto">
            Персональные тренировки и планы питания, адаптированные под твой ритм жизни
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="accent"
              onClick={() => onNavigate('profile')}
              className="w-full sm:w-auto min-w-[200px] h-14 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white text-[#FF6B35] hover:bg-gray-100"
            >
              Бесплатная неделя
            </Button>
            <Button
              size="lg"
              variant="gradient-outline"
              className="w-full sm:w-auto min-w-[200px] h-14 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-white hover:text-gray-800 border-2"
            >
              <Play className="w-5 h-5 mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
                    <stat.icon className="w-8 h-8 text-[#FF6B35]" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold mb-2 text-gray-900">{stat.number}</div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Всё для твоих тренировок</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Мы объединили лучшие методики и технологии для твоего результата</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-none shadow-lg">
              <CardContent className="p-8 sm:p-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Dumbbell className="w-10 h-10 text-[#FF6B35]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FF6B35] transition-colors">Персональные тренировки</h3>
                <p className="text-gray-600 mb-8 text-lg">Программы тренировок от сертифицированных тренеров, адаптированные под твой уровень подготовки.</p>
                <Button variant="gradient" className="hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
                  Выбрать программу
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-none shadow-lg">
              <CardContent className="p-8 sm:p-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Apple className="w-10 h-10 text-[#10B981]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#10B981] transition-colors">Планы питания</h3>
                <p className="text-gray-600 mb-8 text-lg">Индивидуальные планы питания с рецептами и расчетом КБЖУ для достижения твоих целей.</p>
                <Button variant="gradient" className="hover:scale-105 transition-transform duration-300 w-full sm:w-auto bg-gradient-to-r from-[#10B981] to-[#059669]">
                  Составить план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Популярные программы</h2>
            <p className="text-xl text-gray-600">Выбери программу под свою цель</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                    src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Похудение" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <Badge className="absolute top-4 right-4 bg-[#FF6B35] text-base px-3 py-1">Хит сезона</Badge>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h4 className="text-white text-2xl font-bold">Похудение для начинающих</h4>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6 flex items-center gap-4 text-sm font-medium">
                    <span>⏱ 8 недель</span>
                    <span>•</span>
                    <span>🏃‍♂️ Новичок</span>
                </p>
                <Button variant="gradient" className="w-full" onClick={() => onNavigate('workouts')}>
                  Начать программу
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                    src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Масса" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <Badge className="absolute top-4 right-4 bg-[#FF6B35] text-base px-3 py-1">Для зала</Badge>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h4 className="text-white text-2xl font-bold">Набор мышечной массы</h4>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6 flex items-center gap-4 text-sm font-medium">
                    <span>⏱ 12 недель</span>
                    <span>•</span>
                    <span>💪 Средний</span>
                </p>
                <Button variant="gradient" className="w-full" onClick={() => onNavigate('workouts')}>
                  Начать программу
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-r from-[#FF6B35] to-[#FF006B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">Начни меняться уже сегодня</h2>
          <p className="text-xl sm:text-2xl mb-10 text-white/90">Первая неделя бесплатно. Без привязки карты.</p>
          <Button 
            size="lg" 
            variant="gradient-outline" 
            onClick={() => onNavigate('profile')}
            className="bg-white text-[#FF6B35] hover:bg-gray-100 hover:text-[#FF6B35] border-none text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Попробовать бесплатно
          </Button>
        </div>
      </section>
    </div>
  );
}
