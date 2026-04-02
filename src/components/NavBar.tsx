import { RiHome4Line } from '@remixicon/react';
import { RiCompass3Line } from '@remixicon/react';
import { RiMenuFold2Fill } from '@remixicon/react';
import { RiHistoryLine } from '@remixicon/react';
import { RiTimeLine } from '@remixicon/react';
import { RiThumbUpLine } from '@remixicon/react';
import { RiCircleFill } from '@remixicon/react';

const NavBar = () => {
  return (
    <div className="flex pt-16">
      <aside className="fixed left-0 top-14 w-60 px-2 bg-white overflow-y-auto py-4 ">
        <nav className="flex flex-col space-y-1">
          <a className="flex items-center gap-6 px-4 py-2 bg-gray-100 rounded-lg text-gray-900">
            <RiHome4Line />
            <span className="text-sm font-medium">Inicio</span>
          </a>
          <a className="flex items-center gap-6 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-900 cursor-pointer">
            <RiCompass3Line />
            <span className="text-sm font-medium">Explorar</span>
          </a>
          <a className="flex items-center gap-6 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-900 cursor-pointer">
            <RiMenuFold2Fill />
            <span className="text-sm font-medium">Incriçoes</span>
          </a>
          <hr className="mx-6 my-3 text-gray-200" />
          <a className="flex items-center gap-6 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-900 cursor-pointer">
            <RiHistoryLine />
            <span className="text-sm font-medium">Historico</span>
          </a>
          <a className="flex items-center gap-6 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-900 cursor-pointer">
            <RiTimeLine />
            <span className="text-sm font-medium">Assistir mais Tarde</span>
          </a>
          <a className="flex items-center gap-6 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-900 cursor-pointer">
            <RiThumbUpLine />
            <span className="text-sm font-medium">Videos com "Gostei"</span>
          </a>
          <hr className="mx-6 my-3 text-gray-200" />
          <h3 className="px-6 py-2 text-xl font-medium text-gray-900">
            Inscrições
          </h3>
          <a className="flex items-center gap-6 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-900 cursor-pointer">
            <RiCircleFill color="red" />
            <span className="text-sm font-medium">Tech Chanel</span>
          </a>
          <a className="flex items-center gap-6 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-900 cursor-pointer">
            <RiCircleFill color="blue" />
            <span className="text-sm font-medium">Games Chanel</span>
          </a>
          <a className="flex items-center gap-6 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-900 cursor-pointer">
            <RiCircleFill color="green" />
            <span className="text-sm font-medium">Cod Chanel</span>
          </a>
        </nav>
      </aside>
    </div>
  );
};
export default NavBar;
