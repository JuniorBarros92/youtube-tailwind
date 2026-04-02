import { RiMenuFill } from '@remixicon/react';
import { RiYoutubeFill } from '@remixicon/react';
import { RiSearchLine } from '@remixicon/react';
import { RiMicLine } from '@remixicon/react';
import { RiVideoAddLine } from '@remixicon/react';
import { RiNotification2Line } from '@remixicon/react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-2 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer">
          <RiMenuFill size={20} color="black" />
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          <RiYoutubeFill size={30} color="red" />
          <span className="font-semibold">Youtube</span>
          <span className="text-[10px] text-gray-600">BR</span>
        </div>
      </div>
      <form className="flex-1 max-w-2xl mx-4 flex ">
        <input
          type="text"
          placeholder="
       pesquisar"
          className="flex-1 px-4  py-2 border border-gray-300 rounded-l-full rounded-r-0 focus:outline-none focus:ring-2 focus:ring-gray-300 "
        />
        <button className="px-6 py-2 bg-gray-50 border border-gray-300 rounded-l-none rounded-r-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer">
          <RiSearchLine size={20} color="black" />
        </button>
        <button className=" ml-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
          <RiMicLine size={20} />
        </button>
      </form>
      <div className="flex items-center gap-2">
        <button className="px-2 py-2 hover:bg-gray-100 rounded-full cursor-pointer">
          <RiVideoAddLine />
        </button>
        <button className="px-2 py-2 hover:bg-gray-100 rounded-full cursor-pointer">
          <RiNotification2Line />
        </button>
        <button className="ml-2 w-8 h-8 rounded-full bg-purple-600 hover:bg-gray-400 cursor-pointer flex items-center justify-center text-sm font-semibold text-white">
          J
        </button>
      </div>
    </header>
  );
};

export default Header;
