import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 md:px-36 py-5 shadow-xl fixed w-full z-10 bg-white top-0">
      {/* Logo */}
      <div className="text-xl font-semibold">
        Link<span className="text-[#2acfcf]">Cut</span>
      </div>

      {/* Menu Icon for Mobile */}
      <CiMenuBurger
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      />

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-20`}
      >
        {/* Links */}
        <ul className="flex flex-col md:flex-row gap-5 md:gap-10 p-5 md:p-0">
         <a href="#main"> <li className="hover:text-[#2acfcf] cursor-pointer">Features</li></a>
         <a href="#main">  <li className="hover:text-[#2acfcf] cursor-pointer">Pricing</li></a>
         <a href="#main">   <li className="hover:text-[#2acfcf] cursor-pointer">Resources</li></a>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:px-4 gap-4 p-5 md:p-0">
          <button className="hover:text-[#2acfcf]">Login</button>
          <button className="bg-[#2acfcf] px-4 py-1 rounded-2xl hover:text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
