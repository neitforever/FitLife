import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Heart, MessageCircle, Share2, ChevronRight, UserPlus, Trophy, Users, MessageSquare } from 'lucide-react';

interface CommunityPageProps {
  onNavigate: (page: string) => void;
}

export function CommunityPage({ onNavigate }: CommunityPageProps) {
  const posts = [
    {
      avatar: 'АП',
      name: 'Анна Петрова',
      username: '@anna_fitlife',
      time: '2 часа назад',
      text: 'Завершила 30-дневный челлендж похудения! -6 кг, чувствую себя невероятно! 🔥💪 Спасибо FitLife и всем за поддержку!',
      hasImage: true,
      imageUrl: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 245,
      comments: 32
    },
    {
      avatar: 'ДВ',
      name: 'Дмитрий Волков',
      username: '@dmitry_coach',
      time: '5 часов назад',
      badge: 'Тренер',
      text: 'Совет дня: не пропускайте разминку! 5-10 минут разогрева снижают риск травм на 70%. Берегите себя! 💪',
      hasVideo: false,
      likes: 512,
      comments: 67
    },
    {
      avatar: 'МИ',
      name: 'Мария Иванова',
      username: '@maria_health',
      time: 'вчера',
      text: 'День 12 программы "Тренировки дома". Сегодня была full body тренировка, выжала по максимуму! Кто ещё на этой программе?',
      hasImage: true,
      imageUrl: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 178,
      comments: 24
    },
    {
      avatar: 'FL',
      name: 'FitLife Official',
      username: '@fitlife_belarus',
      time: '2 дня назад',
      badge: 'Официальный',
      text: '🎉 Новый челлендж! "100 приседаний каждый день" стартует через 3 дня! Присоединяйтесь! Призы лучшим участникам! 🏆',
      hasImage: true,
      imageUrl: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 845,
      comments: 156
    }
  ];

  const challenges = [
    {
      title: '30 дней планки',
      participants: 2453,
      startDate: '1 декабря',
      duration: '30 дней',
      goal: 'Удерживать планку каждый день, увеличивая время',
      progress: 'День 1 - 30 сек, День 30 - 5 минут',
      prize: 'Сертификат + badge + скидка 20% на подписку',
      status: 'Идёт (день 15/30)',
      image: 'https://images.pexels.com/photos/4162489/pexels-photo-4162489.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Беги 5 км',
      participants: 1876,
      startDate: '5 ноября',
      duration: '10 недель',
      goal: 'Пробежать 5 км без остановок',
      progress: 'Программа: Couch to 5K',
      prize: 'Медаль + футболка FitLife',
      status: 'Идёт (неделя 6/10)',
      image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: '100 приседаний каждый день',
      participants: 3124,
      startDate: 'через 3 дня',
      duration: '30 дней',
      goal: 'Выполнять 100 приседаний ежедневно',
      progress: 'Можно разбивать на подходы',
      prize: 'Badge + доступ к премиум-курсу',
      status: 'Скоро старт',
      image: 'https://images.pexels.com/photos/1552248/pexels-photo-1552248.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Сброс веса до Нового года',
      participants: 5678,
      startDate: '1 ноября',
      duration: '8 недель',
      goal: 'Сбросить 5-10 кг к 31 декабря',
      progress: 'Еженедельные взвешивания',
      prize: 'Главный приз - годовая подписка Premium',
      status: 'Идёт (неделя 4/8)',
      image: 'https://images.pexels.com/photos/53404/scale-diet-fat-health-53404.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const leaderboards = [
    {
      title: 'По тренировкам (за месяц)',
      entries: [
        { rank: 1, username: '@alex_strong', value: '62 тренировки', medal: '🥇' },
        { rank: 2, username: '@maria_fit', value: '58 тренировок', medal: '🥈' },
        { rank: 3, username: '@dmitry_power', value: '54 тренировки', medal: '🥉' },
        { rank: 4, username: '@anna_health', value: '52 тренировки' },
        { rank: 5, username: '@ivan_athlete', value: '50 тренировок' }
      ],
      userRank: '145-е место (28 тренировок)'
    },
    {
      title: 'По челленджам',
      entries: [
        { rank: 1, username: '@olga_champion', value: '12 челленджей', medal: '🥇' },
        { rank: 2, username: '@pavel_winner', value: '10 челленджей', medal: '🥈' },
        { rank: 3, username: '@svetlana_fit', value: '9 челленджей', medal: '🥉' },
        { rank: 4, username: '@igor_strong', value: '8 челленджей' },
        { rank: 5, username: '@natalia_health', value: '7 челленджей' }
      ],
      userRank: '520-е место (3 челленджа)'
    },
    {
      title: 'По трансформациям',
      entries: [
        { rank: 1, username: '@anna_transformation', value: '18 кг сброшено', medal: '🥇' },
        { rank: 2, username: '@dmitry_gains', value: '12 кг набрано', medal: '🥈' },
        { rank: 3, username: '@maria_journey', value: '15 кг сброшено', medal: '🥉' },
        { rank: 4, username: '@alex_progress', value: '10 кг набрано' },
        { rank: 5, username: '@olga_change', value: '14 кг сброшено' }
      ],
      userRank: null
    }
  ];

  const forumCategories = [
    {
      title: 'Вопросы новичков',
      topics: 1234,
      lastTopic: 'С чего начать похудение?',
      lastReplies: 34,
      lastTime: '2 часа назад'
    },
    {
      title: 'Тренировки',
      topics: 2567,
      lastTopic: 'Лучшие упражнения на бицепс?',
      lastReplies: 67,
      lastTime: '1 час назад'
    },
    {
      title: 'Питание и рецепты',
      topics: 1890,
      lastTopic: 'ПП-рецепты десертов',
      lastReplies: 45,
      lastTime: '3 часа назад'
    },
    {
      title: 'Мотивация и успехи',
      topics: 3456,
      lastTopic: 'Сбросила 20 кг! Моя история',
      lastReplies: 128,
      lastTime: '5 часов назад'
    },
    {
      title: 'Вопросы тренерам',
      topics: 987,
      lastTopic: 'Как убрать живот?',
      lastReplies: 89,
      lastTime: '4 часа назад'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF006B] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm mb-4 text-white/80">
            <span className="cursor-pointer hover:text-white" onClick={() => onNavigate('home')}>Главная</span>
            <ChevronRight className="w-4 h-4" />
            <span>Сообщество</span>
          </div>
          <h1 className="mb-4 text-white text-3xl sm:text-4xl md:text-5xl font-bold">Сообщество FitLife</h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">Общайся, соревнуйся, мотивируй других! Найди единомышленников и достигай целей вместе.</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="feed" className="w-full">
            <TabsList className="inline-flex w-full h-auto p-1 bg-gray-100 rounded-xl mb-8 overflow-x-auto scrollbar-hide gap-1">
              <TabsTrigger value="feed" className="flex-1 min-w-[120px] whitespace-nowrap px-4 py-3 text-sm font-medium rounded-lg transition-all">
                Лента новостей
              </TabsTrigger>
              <TabsTrigger value="challenges" className="flex-1 min-w-[120px] whitespace-nowrap px-4 py-3 text-sm font-medium rounded-lg transition-all">
                Челленджи
              </TabsTrigger>
              <TabsTrigger value="leaderboard" className="flex-1 min-w-[120px] whitespace-nowrap px-4 py-3 text-sm font-medium rounded-lg transition-all">
                Рейтинги
              </TabsTrigger>
              <TabsTrigger value="forum" className="flex-1 min-w-[120px] whitespace-nowrap px-4 py-3 text-sm font-medium rounded-lg transition-all">
                Форум
              </TabsTrigger>
            </TabsList>

            {/* Feed Tab */}
            <TabsContent value="feed" className="animate-fade-in">
              <div className="max-w-2xl mx-auto space-y-6">
                {/* Create Post Input Placeholder */}
                <Card className="mb-6">
                    <CardContent className="p-4 flex gap-4 items-center">
                        <Avatar>
                            <AvatarFallback className="bg-gray-200 text-gray-500">Я</AvatarFallback>
                        </Avatar>
                        <input 
                            type="text" 
                            placeholder="Поделитесь своими успехами..." 
                            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50"
                        />
                    </CardContent>
                </Card>

                {posts.map((post, index) => (
                  <div key={index}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white shadow-sm">
                            <AvatarFallback className="bg-gradient-to-r from-[#FF6B35] to-[#FF006B] text-white text-sm">
                              {post.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="font-bold text-gray-900">{post.name}</span>
                              {post.badge && (
                                <Badge className="bg-[#FF6B35] text-[10px] px-2 py-0.5 h-5">{post.badge}</Badge>
                              )}
                              <span className="text-sm text-gray-500 ml-auto sm:ml-0">{post.time}</span>
                            </div>
                            <div className="text-sm text-gray-500 mb-3">
                              {post.username}
                            </div>
                            <p className="mb-4 text-gray-800 leading-relaxed">{post.text}</p>
                            {post.hasImage && (
                              <div className="bg-gray-100 rounded-xl h-64 sm:h-80 mb-4 overflow-hidden shadow-inner">
                                <img
                                  src={post.imageUrl}
                                  alt="Пост в сообществе"
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            )}
                            <div className="flex items-center justify-between sm:justify-start gap-6 border-t pt-4 mt-2">
                              <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors group">
                                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium">{post.likes}</span>
                              </button>
                              <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors group">
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium">{post.comments}</span>
                              </button>
                              <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors group">
                                <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium hidden sm:inline">Поделиться</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
                <Button variant="outline" className="w-full py-6 text-gray-500 hover:text-[#FF6B35]">
                    Загрузить еще
                </Button>
              </div>
            </TabsContent>

            {/* Challenges Tab */}
            <TabsContent value="challenges">
              <div className="animate-fade-in">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <h2 className="text-2xl font-bold text-gray-900">Актуальные челленджи</h2>
                    <Button variant="outline" size="sm" className="hidden sm:flex">Посмотреть завершенные</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {challenges.map((challenge, index) => (
                    <div key={index}>
                      <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 border-none shadow-md">
                        <div className="relative h-48 overflow-hidden">
                            <img
                            src={challenge.image}
                            alt={challenge.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                                <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm shadow-sm hover:bg-white">{challenge.status}</Badge>
                            </div>
                        </div>
                        <CardContent className="p-6 flex flex-col flex-grow">
                          <h3 className="mb-4 text-xl font-bold">{challenge.title}</h3>
                          
                          <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                <span>{challenge.participants.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Trophy className="w-4 h-4" />
                                <span>Призовой фонд</span>
                            </div>
                          </div>

                          <div className="space-y-3 text-sm mb-6 bg-gray-50 p-4 rounded-xl">
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                              <span className="text-gray-500">Цель:</span>
                              <span className="font-medium text-right ml-4">{challenge.goal}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                              <span className="text-gray-500">Прогресс:</span>
                              <span className="font-medium text-right ml-4">{challenge.progress}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Приз:</span>
                              <span className="font-medium text-[#D97706] text-right ml-4">{challenge.prize}</span>
                            </div>
                          </div>
                          
                          <div className="mt-auto">
                              <Button
                                variant="gradient"
                                className="w-full font-bold shadow-md hover:shadow-lg"
                                onClick={() => alert(`Вы присоединились к челленджу "${challenge.title}"!`)}
                              >
                                Участвовать
                              </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Leaderboard Tab */}
            <TabsContent value="leaderboard">
              <div className="animate-fade-in">
                <h2 className="mb-8 text-2xl font-bold">Топ пользователей</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  {leaderboards.map((board, index) => (
                    <Card key={index} className="h-full border-none shadow-lg bg-white overflow-hidden">
                      <div className="bg-gray-50 p-4 border-b">
                        <h3 className="font-bold text-center text-gray-800">{board.title}</h3>
                      </div>
                      <CardContent className="p-0">
                        <div className="divide-y divide-gray-100">
                          {board.entries.map((entry, i) => (
                            <div
                              key={entry.rank}
                              className={`flex items-center justify-between py-4 px-4 sm:px-6 hover:bg-gray-50 transition-colors ${i < 3 ? 'bg-gradient-to-r from-yellow-50/50 to-transparent' : ''}`}
                            >
                              <div className="flex items-center gap-4 min-w-0 flex-1">
                                <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
                                    entry.rank === 1 ? 'bg-yellow-100 text-yellow-600' :
                                    entry.rank === 2 ? 'bg-gray-200 text-gray-600' :
                                    entry.rank === 3 ? 'bg-orange-100 text-orange-600' :
                                    'text-gray-400'
                                }`}>
                                    {entry.rank}
                                </div>
                                <span className="font-medium text-gray-900 truncate flex-1">{entry.username}</span>
                              </div>
                              <span className="text-sm font-semibold text-[#FF6B35] whitespace-nowrap ml-2">{entry.value}</span>
                            </div>
                          ))}
                        </div>
                        {board.userRank && (
                          <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
                            <span className="text-sm font-medium text-gray-600">Ваше место: <span className="text-gray-900">{board.userRank}</span></span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Forum Tab */}
            <TabsContent value="forum">
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Обсуждения</h2>
                    <Button variant="gradient" size="sm">Создать тему</Button>
                </div>
                <div className="space-y-4">
                  {forumCategories.map((category, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-[#FF6B35] group">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors">{category.title}</h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-3">
                              <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4"/> {category.topics.toLocaleString()} тем</span>
                              <span className="hidden sm:inline">•</span>
                              <span className="text-gray-400">Последняя активность {category.lastTime}</span>
                            </div>
                            <div className="text-sm bg-gray-50 p-3 rounded-lg inline-block w-full sm:w-auto">
                              <span className="font-medium text-gray-700">Топ тема:</span> "{category.lastTopic}" 
                              <span className="text-gray-400 ml-2">({category.lastReplies} ответов)</span>
                            </div>
                          </div>
                          <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-[#FF6B35] transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#FF6B35] to-[#FF006B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold">Присоединяйся к сообществу</h2>
          <p className="text-xl mb-8 text-white/90">
            15,000+ человек уже тренируются вместе с нами!
          </p>
          <Button
            size="lg"
            variant="accent"
            onClick={() => onNavigate('profile')}
            className="bg-white text-[#FF6B35] hover:bg-gray-100 font-bold px-8 shadow-xl hover:shadow-2xl"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Начать тренировки
          </Button>
        </div>
      </section>
    </div>
  );
}
