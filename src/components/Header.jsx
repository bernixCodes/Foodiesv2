import React from "react";
import logo from "../img/logo.jpg";
import user from "../img/avatar.png";
import { MdShoppingBasket } from "react-icons/md";

function Header() {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-1 cursor-pointer">
          <img src={logo} alt="" className="h-10 object-contain" />
          <p className="text-headingColor text-xl font-bold">Foodie</p>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Contact
            </li>
          </ul>
          <div className="flex items-center justify-center relative">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className=" absolute -top-1.5 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <img
            src={user}
            alt=""
            className="h-8 object-contain drop-shadow-xl"
          />
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
}

export default Header;