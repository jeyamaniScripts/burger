import React, { useState } from "react";
import { FaBars, FaMoon, FaTimes } from "react-icons/fa";

const Header = () => {
  const list = ["Home", "About Us", "Menu", "Review", "Contact"];
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className=" bg-primaryColor w-full fixed top-0 left-0 z-50">
      <nav className=" container relative h-14 flex justify-between items-center">
        <div>
          <p className=" text-2xl uppercase font-oswald">
            BUR<span className=" text-secondaryColor ">GER</span>
          </p>
        </div>
        <div
          className={`${
            menu ? "display" : "hidden"
          } absolute top-0 left-0 w-full py-14 bg-primaryColor border-b border-secondaryColor md:block md:static md:border-none md:py-0 md:w-auto md:ml-auto`}
        >
          <ul className=" flex flex-col justify-center gap-5 items-center md:flex-row ">
            {list.map((items, index) => {
              return (
                <li key={index}>
                  <p className=" cursor-pointer hover:text-secondaryColor ease-in duration-150">
                    {items}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className=" absolute top-[0.7rem] right-4 md:hidden">
            <i onClick={toggleMenu} className=" text-xl cursor-pointer ">
              <FaTimes className=" border " />
            </i>
          </div>
        </div>
        <div className=" flex items-center gap-5">
          <i className=" text-xl cursor-pointer ml-4">
            <FaMoon />
          </i>
          <i className=" text-xl cursor-pointer md:hidden" onClick={toggleMenu}>
            <FaBars />
          </i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
