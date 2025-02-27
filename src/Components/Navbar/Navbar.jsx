import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import youtubeLogo from "../../assets/Youtube-logo.jpg";
import profile from "../../assets/kum-AI.jpg";

const Navbar = () => {
  return (
    <nav className="p-5 flex flex-wrap justify-between items-center">
      <div className="flex text-2xl items-center gap-2 font-bold mb-2 sm:mb-0"> {/* Adjusted margin for mobile */}
        <MdOutlineMenu />
        <img className="h-5 w-7" src={youtubeLogo} alt="Youtube" />
        <h1 className="font-bold">YouTube</h1>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto"> {/* Adjusted width for mobile */}
        <div className="flex border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-500 w-full sm:w-auto mb-2 sm:mb-0"> {/* Adjusted width for mobile */}
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full sm:w-auto" // Adjusted width for mobile
          />
          <CiSearch className="h-7 w-7 text-gray-600" />
        </div>
        <FaMicrophone className="border border-gray-100 bg-gray-100 rounded-full p-3 h-11 w-11 text-gray-600" />
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
        <button className="bg-gray-100 rounded-full py-2 px-4 text-sm font-semibold hidden sm:block"> {/* Hidden on mobile */}
          + Create
        </button>
        <button className="relative">
          <IoMdNotificationsOutline className="h-7 w-7 text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
            9+
          </span>
        </button>

        <img className="rounded-full h-8 w-8" src={profile} alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;