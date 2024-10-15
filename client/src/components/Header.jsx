import { Navbar, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 rounded-lg text-white">
          RoboGene
        </span>
        Blog
      </Link>
      <form className="relative hidden lg:inline-block">
        <input
          type="text"
          placeholder="Search..."
          className="pr-10 pl-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 w-full"
        />
        <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
      </form>
      <button className="w-12 h-10 lg:hidden bg-gray-200 text-gray rounded-full flex items-center justify-center">
        <AiOutlineSearch />
      </button>
      <div className="flex gap-2 md:order-2">
        <button className="w-12 h-10 hidden sm:inline-flex bg-gray-200 rounded-full items-center justify-center">
          <FaMoon />
        </button>
        <Link to="/sign-in">
          <button className="px-4 py-2 bg-transparent border-2 border-gradient-to-r from-blue-600 to-emerald-500 rounded-lg text-blue-600 font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-emerald-500 hover:text-white transition duration-300 ease-in-out">
            Sign In
          </button>
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
