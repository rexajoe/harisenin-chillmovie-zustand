import LogoBrand from "./LogoBrand";
import { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import arrowDown from "../assets/arrowdown.png";
import profile from "../assets/profile.png";
import crown from "../assets/crown.svg";
import close from "../assets/close.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#181A1C] p-4 flex justify-between items-center">
      <ul
        className="flex justify-around gap-[5vw] items-center"
        style={{ fontFamily: "Lato" }}
      >
        <LogoBrand className="ml-[5vw]" />
        <li className="text-white">Series</li>
        <li className="text-white">Film</li>
        <li className="text-white"> <Link to='/daftar-saya'>Daftar Saya</Link></li>
      </ul>
      <ul className="flex justify-around gap-3 items-center mr-[5vw]">
        <li className="w-7 h-7 sm:w-10 sm:h-10">
          <img src={avatar} alt="avatar" className="rounded-full" />
        </li>
        <div className="w-7 h-7 cursor-pointer">
          <img
            src={arrowDown}
            alt="arrow-down"
            onClick={toggleOpen}
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
          {isOpen && (
            <div className="top-15 right-10 w-[160px] h-auto sm:top-16 md:right-19 lg:right-20 rounded-md px-3 py-3 text-sm absolute leading-7 text-white bg-[#181A1C] z-40">
              <li className="flex row-auto gap-2 items-center hover:text-blue-700 cursor-pointer group">
                <img
                  src={profile}
                  alt="profile"
                  width="20px"
                  height="20px"
                  className="filter invert group-hover:hidden"
                />
                Profil Saya
              </li>
              <li className="flex row-auto gap-2 items-center hover:text-blue-700 cursor-pointer group">
                <img
                  src={crown}
                  alt="crown"
                  width="20px"
                  height="20px"
                  className="filter invert group-hover:hidden"
                />
                Ubah Premium
              </li>
              <li className="flex row-auto gap-2 items-center hover:text-blue-700 cursor-pointer group">
                <img
                  src={close}
                  alt="close"
                  width="20px"
                  height="20px"
                  className="filter invert group-hover:hidden"
                />
                <Link to="/">Keluar</Link>
              </li>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
