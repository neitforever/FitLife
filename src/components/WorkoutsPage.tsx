import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select } from './ui/select';
import { Star, ChevronRight, Clock, Users, MapPin } from 'lucide-react';

interface WorkoutsPageProps {
  onNavigate: (page: string) => void;
}

export function WorkoutsPage({ onNavigate }: WorkoutsPageProps) {
  const [goalFilter, setGoalFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const [placeFilter, setPlaceFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');

  // State for calculator
  const [age, setAge] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [gender, setGender] = useState<'m' | 'f' | ''>('');
  const [activity, setActivity] = useState<number | ''>('');
  const [goal, setGoal] = useState<number | ''>('');
  const [calculatedCalories, setCalculatedCalories] = useState<{
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  } | null>(null);

  const calculateCalories = () => {
    if (!age || !height || !weight || !gender || !activity || !goal) {
      alert('Пожалуйста, заполните все поля калькулятора.');
      return;
    }

    let bmr: number;
    // Mifflin-St Jeor Equation
    if (gender === 'm') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = bmr * activity;
    const finalCalories = tdee * (1 + goal);

    // Macronutrient distribution (example: 30% protein, 30% fat, 40% carbs)
    const proteinCals = finalCalories * 0.3;
    const fatCals = finalCalories * 0.3;
    const carbsCals = finalCalories * 0.4;

    setCalculatedCalories({
      calories: Math.round(finalCalories),
      protein: Math.round(proteinCals / 4), // 4 calories per gram of protein
      fat: Math.round(fatCals / 9), // 9 calories per gram of fat
      carbs: Math.round(carbsCals / 4), // 4 calories per gram of carbs
    });
  };

  const programs = [
    {
      id: 1,
      title: 'Жиросжигание за 30 дней',
      badge: 'Бестселлер',
      rating: 4.9,
      reviews: 1245,
      goal: 'weight-loss',
      level: 'beginner',
      place: 'home',
      duration: '30-45',
      programLength: '30 дней',
      workouts: 20,
      frequency: '4-5 в неделю',
      time: '30-40 мин',
      trainer: 'Анна Сидорова',
      description: 'Интенсивные кардио и силовые для максимального жиросжигания',
      results: 'В среднем -5 кг за месяц',
      image: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Рельефное тело за 12 недель',
      badge: 'Популярная',
      rating: 4.8,
      reviews: 892,
      goal: 'definition',
      level: 'intermediate',
      place: 'gym',
      duration: '45-60',
      programLength: '12 недель',
      workouts: 48,
      frequency: '4 в неделю',
      time: '45-60 мин',
      trainer: 'Дмитрий Волков',
      description: 'Сплит-тренировки для прорисовки мышц',
      results: 'Рельефное тело, -8% жира',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Full Body дома',
      badge: 'Для дома',
      rating: 4.7,
      reviews: 756,
      goal: 'tone',
      level: 'any',
      place: 'home',
      duration: '30-45',
      programLength: '8 недель',
      workouts: 24,
      frequency: '3 в неделю',
      time: '40 мин',
      trainer: 'Елена Петрова',
      description: 'Тренировки всего тела без оборудования',
      results: 'Подтянутое тело',
      image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Масса и сила',
      badge: 'Продвинутая',
      rating: 4.9,
      reviews: 623,
      goal: 'muscle-gain',
      level: 'advanced',
      place: 'gym',
      duration: '60+',
      programLength: '16 недель',
      workouts: 64,
      frequency: '4 в неделю',
      time: '60-75 мин',
      trainer: 'Максим Иванов',
      description: 'Прогрессивная перегрузка для роста',
      results: '+6-8 кг мышц',
      image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Йога для начинающих',
      rating: 4.8,
      reviews: 534,
      goal: 'health',
      level: 'beginner',
      place: 'home',
      duration: '30-45',
      programLength: '6 недель',
      workouts: 18,
      frequency: '3 в неделю',
      time: '30-40 мин',
      trainer: 'Ольга Смирнова',
      description: 'Базовые асаны для гибкости и спокойствия',
      results: 'Гибкость, снижение стресса',
      image: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Функциональный фитнес',
      badge: 'Интенсивная',
      rating: 4.7,
      reviews: 498,
      goal: 'endurance',
      level: 'intermediate',
      place: 'gym',
      duration: '45-60',
      programLength: '10 недель',
      workouts: 40,
      frequency: '4 в неделю',
      time: '45 мин',
      trainer: 'Андрей Козлов',
      description: 'Круговые тренировки для функционалки',
      results: 'Выносливость +50%',
      image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      title: 'Пилатес для осанки',
      rating: 4.9,
      reviews: 445,
      goal: 'health',
      level: 'beginner',
      place: 'home',
      duration: 'under-30',
      programLength: '4 недели',
      workouts: 12,
      frequency: '3 в неделю',
      time: '25-30 мин',
      trainer: 'Мария Лебедева',
      description: 'Укрепление кора и улучшение осанки',
      results: 'Здоровая спина, осанка',
      image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      title: 'HIIT для жиросжигания',
      badge: 'Интенсив',
      rating: 4.8,
      reviews: 687,
      goal: 'weight-loss',
      level: 'intermediate',
      place: 'home',
      duration: 'under-30',
      programLength: '6 недель',
      workouts: 24,
      frequency: '4 в неделю',
      time: '20-30 мин',
      trainer: 'Виктор Морозов',
      description: 'Короткие интенсивные интервалы',
      results: '-7 кг, взрывная сила',
      image: 'https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 9,
      title: 'Растяжка и гибкость',
      rating: 4.7,
      reviews: 412,
      goal: 'health',
      level: 'any',
      place: 'home',
      duration: 'under-30',
      programLength: '8 недель',
      workouts: 24,
      frequency: '3 в неделю',
      time: '20-25 мин',
      trainer: 'Светлана Волкова',
      description: 'Развитие гибкости и подвижности',
      results: 'Гибкость, снятие напряжения',
      image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 10,
      title: 'Кроссфит для начинающих',
      badge: 'Новинка',
      rating: 4.8,
      reviews: 298,
      goal: 'endurance',
      level: 'intermediate',
      place: 'gym',
      duration: '45-60',
      programLength: '12 недель',
      workouts: 36,
      frequency: '3 в неделю',
      time: '45-60 мин',
      trainer: 'Игорь Попов',
      description: 'Комплексные WOD для всего тела',
      results: 'Сила, выносливость, рельеф',
      image: 'https://images.pexels.com/photos/949132/pexels-photo-949132.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 11,
      title: 'Бег для похудения',
      rating: 4.6,
      reviews: 523,
      goal: 'weight-loss',
      level: 'beginner',
      place: 'outdoor',
      duration: '30-45',
      programLength: '10 недель',
      workouts: 30,
      frequency: '3 в неделю',
      time: '30-45 мин',
      trainer: 'Павел Сидоров',
      description: 'От ходьбы до бега 5 км',
      results: '-6 кг, выносливость',
      image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 12,
      title: 'Тренировки для женщин',
      badge: 'Для девушек',
      rating: 4.9,
      reviews: 1134,
      goal: 'tone',
      level: 'beginner',
      place: 'home',
      duration: '30-45',
      programLength: '12 недель',
      workouts: 36,
      frequency: '3 в неделю',
      time: '40-50 мин',
      trainer: 'Юлия Кузнецова',
      description: 'Проработка проблемных зон',
      results: 'Подтянутая фигура',
      image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filteredPrograms = programs.filter(program => {
    if (goalFilter !== 'all' && program.goal !== goalFilter) return false;
    if (levelFilter !== 'all' && program.level !== levelFilter && program.level !== 'any') return false;
    if (placeFilter !== 'all' && program.place !== placeFilter) return false;
    if (durationFilter !== 'all' && program.duration !== durationFilter) return false;
    return true;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF006B] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm mb-4 text-white/80">
            <span className="cursor-pointer hover:text-white" onClick={() => onNavigate('home')}>Главная</span>
            <ChevronRight className="w-4 h-4" />
            <span>Тренировки</span>
          </div>
          <h1 className="mb-4 text-white text-3xl sm:text-4xl md:text-5xl font-bold">Программы тренировок</h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
            Найди идеальную программу для своей цели. Более 100 программ для любого уровня.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b sticky top-16 sm:top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs sm:text-sm font-medium block text-gray-700">Цель</Label>
              <Select value={goalFilter} onValueChange={setGoalFilter} className="w-full text-sm">
                <option value="all">Все программы</option>
                <option value="weight-loss">Похудение</option>
                <option value="muscle-gain">Набор массы</option>
                <option value="definition">Рельеф</option>
                <option value="endurance">Выносливость</option>
                <option value="health">Здоровье</option>
                <option value="tone">Тонус</option>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs sm:text-sm font-medium block text-gray-700">Уровень</Label>
              <Select value={levelFilter} onValueChange={setLevelFilter} className="w-full text-sm">
                <option value="all">Все уровни</option>
                <option value="beginner">Новичок</option>
                <option value="intermediate">Средний</option>
                <option value="advanced">Продвинутый</option>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs sm:text-sm font-medium block text-gray-700">Место</Label>
              <Select value={placeFilter} onValueChange={setPlaceFilter} className="w-full text-sm">
                <option value="all">Везде</option>
                <option value="home">Дома</option>
                <option value="gym">В зале</option>
                <option value="outdoor">На улице</option>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs sm:text-sm font-medium block text-gray-700">Длительность</Label>
              <Select value={durationFilter} onValueChange={setDurationFilter} className="w-full text-sm">
                <option value="all">Любая</option>
                <option value="under-30">До 30 мин</option>
                <option value="30-45">30-45 мин</option>
                <option value="45-60">45-60 мин</option>
                <option value="60+">60+ мин</option>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPrograms.map((program) => (
              <div key={program.id}>
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 flex flex-col group border-none shadow-md">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {program.badge && (
                      <Badge className="absolute top-4 right-4 bg-[#FF6B35] shadow-md text-sm px-3 py-1">
                        {program.badge}
                      </Badge>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                            <Star className="w-4 h-4 fill-current" />
                            <span>{program.rating}</span>
                            <span className="text-white/80 font-normal ml-1">({program.reviews})</span>
                        </div>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h4 className="mb-4 text-xl font-bold leading-tight group-hover:text-[#FF6B35] transition-colors">{program.title}</h4>
                    <div className="space-y-3 text-sm text-gray-600 mb-6 bg-gray-50 p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 flex items-center gap-2"><Users className="w-4 h-4"/> Уровень:</span>
                        <span className="font-medium text-gray-900">{program.level === 'beginner' ? 'Новичок' : program.level === 'intermediate' ? 'Средний' : program.level === 'advanced' ? 'Продвинутый' : 'Любой'}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 flex items-center gap-2"><MapPin className="w-4 h-4"/> Место:</span>
                        <span className="font-medium text-gray-900">{program.place === 'home' ? 'Дома' : program.place === 'gym' ? 'В зале' : 'На улице'}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 flex items-center gap-2"><Clock className="w-4 h-4"/> Время:</span>
                        <span className="font-medium text-gray-900">{program.time}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{program.description}</p>
                    <div className="flex items-center gap-2 text-sm text-[#10B981] font-semibold mb-4 bg-green-50 p-2 rounded-lg w-fit px-3">
                        <span>🎯 {program.results}</span>
                    </div>
                    <div className="mt-auto">
                        <Button
                        variant="gradient"
                        className="w-full font-bold shadow-md hover:shadow-lg transition-all"
                        onClick={() => alert(`Программа "${program.title}" начата! Переход к тренировкам...`)}
                        >
                        Начать программу
                        </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Widget */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <CardContent className="p-8">
              <h3 className="mb-6 text-2xl font-bold text-center">Калькулятор калорий</h3>
              <p className="text-center text-gray-300 mb-8">Узнай свою норму для достижения цели</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                    <div>
                        <Label className="text-gray-300">Пол</Label>
                        <Select value={gender} onValueChange={(value: 'm' | 'f') => setGender(value)} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400">
                            <option value="" className="text-gray-900">Выберите</option>
                            <option value="m" className="text-gray-900">Мужской</option>
                            <option value="f" className="text-gray-900">Женский</option>
                        </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label className="text-gray-300">Возраст</Label>
                            <Input
                                type="number"
                                placeholder="25"
                                value={age}
                                onChange={(e) => setAge(Number(e.target.value))}
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            />
                        </div>
                        <div>
                            <Label className="text-gray-300">Вес (кг)</Label>
                            <Input
                                type="number"
                                placeholder="70"
                                value={weight}
                                onChange={(e) => setWeight(Number(e.target.value))}
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <Label className="text-gray-300">Рост (см)</Label>
                        <Input
                            type="number"
                            placeholder="170"
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                    </div>
                    <div>
                        <Label className="text-gray-300">Активность</Label>
                        <Select value={String(activity)} onValueChange={(value) => setActivity(Number(value))} className="bg-white/10 border-white/20 text-white">
                            <option value="" className="text-gray-900">Выберите уровень</option>
                            <option value="1.2" className="text-gray-900">Сидячий</option>
                            <option value="1.375" className="text-gray-900">Лёгкая</option>
                            <option value="1.55" className="text-gray-900">Средняя</option>
                            <option value="1.725" className="text-gray-900">Высокая</option>
                            <option value="1.9" className="text-gray-900">Экстремальная</option>
                        </Select>
                    </div>
                </div>
              </div>
              
              <div className="mb-8">
                  <Label className="text-gray-300 mb-2 block">Цель</Label>
                  <Select value={String(goal)} onValueChange={(value) => setGoal(Number(value))} className="bg-white/10 border-white/20 text-white">
                    <option value="" className="text-gray-900">Выберите цель</option>
                    <option value="-0.2" className="text-gray-900">Похудение (-20%)</option>
                    <option value="0" className="text-gray-900">Поддержание (0%)</option>
                    <option value="0.15" className="text-gray-900">Набор массы (+15%)</option>
                  </Select>
              </div>

              <Button
                variant="gradient"
                className="w-full h-12 text-lg font-bold"
                onClick={calculateCalories}
              >
                Рассчитать результат
              </Button>

              {calculatedCalories && (
                <div className="bg-white/10 rounded-xl p-6 mt-8 animate-fade-in border border-white/20">
                  <h4 className="text-xl font-bold mb-4 text-center">Ваша норма:</h4>
                  <div className="flex justify-center mb-6">
                      <span className="text-5xl font-extrabold bg-gradient-to-r from-[#FF6B35] to-[#FF006B] bg-clip-text text-transparent">
                        {calculatedCalories.calories} <span className="text-2xl text-white font-normal">ккал</span>
                      </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <div className="text-gray-300 text-xs mb-1">Белки</div>
                      <div className="font-bold text-lg">{calculatedCalories.protein} г</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <div className="text-gray-300 text-xs mb-1">Жиры</div>
                      <div className="font-bold text-lg">{calculatedCalories.fat} г</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <div className="text-gray-300 text-xs mb-1">Углеводы</div>
                      <div className="font-bold text-lg">{calculatedCalories.carbs} г</div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#FF6B35] to-[#FF006B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold">Не знаешь с чего начать?</h2>
          <p className="text-xl mb-8 text-white/90">
            Пройди короткий тест и мы подберем идеальную программу для тебя
          </p>
          <Button
            size="lg"
            variant="accent"
            className="bg-white text-[#FF6B35] hover:bg-gray-100 font-bold px-8"
          >
            Пройти тест за 2 минуты
          </Button>
        </div>
      </section>
    </div>
  );
}
