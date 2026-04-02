type Video = {
  title: string;
  channel: string;
  views: string;
  time: string;
  duration: string;
  isLive: boolean;
};

const videos: Video[] = [
  {
    title: 'Curso Completo de Tailwind CSS - Do Zero ao Avançado',
    channel: 'Canal de Tecnologia',
    views: '125 mil',
    time: 'há 2 dias',
    duration: '10:25',
    isLive: true,
  },
  {
    title: 'Live Coding: Criando um Dashboard com React e TypeScript',
    channel: 'Academia de Código',
    views: '3,2 mil',
    time: 'agora',
    duration: '25:47',
    isLive: true,
  },
  {
    title: 'JavaScript ES6 - Novos Recursos e Boas Práticas',
    channel: 'Dev Mentorias',
    views: '89 mil',
    time: 'há 5 dias',
    duration: '18:30',
    isLive: false,
  },
  {
    title: 'React Hooks: useContext e Redux',
    channel: 'Código Master',
    views: '156 mil',
    time: 'há 1 dia',
    duration: '22:15',
    isLive: false,
  },
  {
    title: 'Web Design Responsivo com CSS Grid',
    channel: 'Design Ninja',
    views: '67 mil',
    time: 'há 3 dias',
    duration: '15:45',
    isLive: false,
  },
  {
    title: 'TypeScript Avançado - Tipos Genéricos',
    channel: 'Tech Talks',
    views: '98 mil',
    time: 'agora',
    duration: '19:20',
    isLive: false,
  },
  {
    title: 'Como Fazer Animações com Tailwind CSS',
    channel: 'Frontend Pro',
    views: '234 mil',
    time: 'há 4 dias',
    duration: '12:50',
    isLive: false,
  },
  {
    title: 'Deploy de Aplicações React na Vercel',
    channel: 'DevOps Labs',
    views: '45 mil',
    time: 'há 6 dias',
    duration: '16:40',
    isLive: false,
  },
  {
    title: 'Web Design Responsivo com CSS Grid',
    channel: 'Design Ninja',
    views: '67 mil',
    time: 'há 3 dias',
    duration: '15:45',
    isLive: false,
  },
  {
    title: 'TypeScript Avançado - Tipos Genéricos',
    channel: 'Tech Talks',
    views: '98 mil',
    time: 'agora',
    duration: '19:20',
    isLive: false,
  },
  {
    title: 'Como Fazer Animações com Tailwind CSS',
    channel: 'Frontend Pro',
    views: '234 mil',
    time: 'há 4 dias',
    duration: '12:50',
    isLive: false,
  },
  {
    title: 'Deploy de Aplicações React na Vercel',
    channel: 'DevOps Labs',
    views: '45 mil',
    time: 'há 6 dias',
    duration: '16:40',
    isLive: false,
  },
  {
    title: 'Web Design Responsivo com CSS Grid',
    channel: 'Design Ninja',
    views: '67 mil',
    time: 'há 3 dias',
    duration: '15:45',
    isLive: false,
  },
  {
    title: 'TypeScript Avançado - Tipos Genéricos',
    channel: 'Tech Talks',
    views: '98 mil',
    time: 'agora',
    duration: '19:20',
    isLive: false,
  },
  {
    title: 'Como Fazer Animações com Tailwind CSS',
    channel: 'Frontend Pro',
    views: '234 mil',
    time: 'há 4 dias',
    duration: '12:50',
    isLive: false,
  },
  {
    title: 'Deploy de Aplicações React na Vercel',
    channel: 'DevOps Labs',
    views: '45 mil',
    time: 'há 6 dias',
    duration: '16:40',
    isLive: false,
  },
  {
    title: 'Web Design Responsivo com CSS Grid',
    channel: 'Design Ninja',
    views: '67 mil',
    time: 'há 3 dias',
    duration: '15:45',
    isLive: false,
  },
  {
    title: 'TypeScript Avançado - Tipos Genéricos',
    channel: 'Tech Talks',
    views: '98 mil',
    time: 'agora',
    duration: '19:20',
    isLive: false,
  },
  {
    title: 'Como Fazer Animações com Tailwind CSS',
    channel: 'Frontend Pro',
    views: '234 mil',
    time: 'há 4 dias',
    duration: '12:50',
    isLive: false,
  },
  {
    title: 'Deploy de Aplicações React na Vercel',
    channel: 'DevOps Labs',
    views: '45 mil',
    time: 'há 6 dias',
    duration: '16:40',
    isLive: false,
  },
];

export function Card() {
  return (
    <div className="grid grid-cols-4 px-6 pl-4 ml-60 gap-4">
      {videos.map((video, index) => (
        <article key={index} className="cursor-pointer group">
          <div className="relative bg-gray-200 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img
              src={`https://picsum.photos/320/180?random=${index + 1}`}
              alt={video.title}
              className="w-full h-full object-cover"
            />

            <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded">
              {video.duration}
            </span>

            {video.isLive && (
              <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded uppercase font-semibold">
                Ao vivo
              </span>
            )}
          </div>

          <div className="flex gap-3 mt-3">
            <div>
              <h3 className="font-medium text-sm line-clamp-2">
                {video.title}
              </h3>

              <p className="text-sm text-gray-600 mt-1">{video.channel}</p>

              <p className="text-sm text-gray-600">
                {video.isLive
                  ? `${video.views} • ${video.time}`
                  : `${video.views} visualizações • ${video.time}`}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Card;
