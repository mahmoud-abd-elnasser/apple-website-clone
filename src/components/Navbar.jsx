import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 justify-between items-center">
      <nav className="flex screen-max-width">
        <img src={appleImg} alt="Apple logo" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists?.map((nav, index) => {
            return (
              <div
                key={index}
                className="px-5 text-sm text-gray-500 cursor-pointer hover:text-white transition-all"
              >
                {nav}
              </div>
            );
          })}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
