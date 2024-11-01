import Link from "next/link";
import Search from "./Search";
import "@fontsource/righteous";

const Header: React.FC = () => {
  return (
    <header className="fixed inset-0  h-20 bg-gray-50 shadow-sm  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
      <div className="flex h-full w-full items-center justify-between gap-8  ">
        <Link href="/">
          <h1 className="font-righteous text-gray-700 text-sm sm:text-xl md:text-3xl font-bold ">
            Hamza Dashboard
          </h1>
        </Link>
        <div className=" w-2/3">
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
