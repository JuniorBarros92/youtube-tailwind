const Main = () => {
  return (
    <main className="flex ml-60 p-6">
      <div className="flex gap-3 mb-6 overflow-x-auto pb-4">
        <button className="px-3 py-1 bg-gray-900 text-white rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-gray-800">
          Tudo
        </button>
        <button className="px-3 py-1 bg-gray-100 text-black rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-gray-200">
          Musica
        </button>
        <button className="px-3 py-1 bg-gray-100 text-black rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-gray-200">
          Jogos
        </button>
        <button className="px-3 py-1 bg-gray-100 text-black rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-gray-200">
          Filmes
        </button>
        <button className="px-3 py-1 bg-gray-100 text-black rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-gray-200">
          Podcasts
        </button>
        <button className="px-3 py-1 bg-gray-100 text-black rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-gray-200">
          Culinaria
        </button>
        <button className="px-3 py-1 bg-gray-100 text-black rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-gray-200">
          Aventuras
        </button>
        <button className="px-3 py-1 bg-gray-100 text-black rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-gray-200">
          Lazer
        </button>
      </div>
    </main>
  );
};

export default Main;
