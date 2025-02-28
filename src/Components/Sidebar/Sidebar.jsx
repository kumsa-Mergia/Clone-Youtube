import React from "react";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";

import { FaMusic } from "react-icons/fa";
import { MdOnlinePrediction } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";

import { FaRegNewspaper } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { BsLightbulb } from "react-icons/bs";
import { FaBasketShopping } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

import Image1 from "../../assets/img/Kana.jpg";
import Image2 from "../../assets/img/MrBeast.jpg";

const Sidebar = ({sidebar}) => {
  return (
    <>
      <div className="p-5 bg-gray-100 font-sans text-1xl w-54 min-h-screen bg-white"> 
      
        {/* First  */}
        <div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <MdHome className="h-5 w-5 mr-3"/>
            <p  className={` ${sidebar?"":"hidden"}`}>Home</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <SiYoutubeshorts className="h-5 w-5 mr-3" />
            <p  className={` ${sidebar?"":"hidden"}`}>Shorts</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <MdOutlineSubscriptions className="h-5 w-5 mr-3" />
            <p  className={` ${sidebar?"":"hidden"}`}>Subscriptions</p>
          </div>
          <hr className="w-10"/>
        </div>
        {/* You */}
        <div>
          <h3 className="font-bold">You  </h3>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <FaHistory className="h-5 w-5 mr-3" />
            <p  className={` ${sidebar?"":"hidden"}`}>History</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <MdOutlinePlaylistPlay className="h-5 w-5 mr-3" />
            <p  className={` ${sidebar?"":"hidden"}`}>Playlists</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <CiYoutube className="h-5 w-5 mr-3" />
            <p  className={` ${sidebar?"":"hidden"}`}>Your Videos</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <MdOutlineWatchLater className="h-5 w-5 mr-3" />
            <p  className={` ${sidebar?"":"hidden"}`}>Watch later</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <BiLike className="h-5 w-5 mr-3" />
            <p  className={` ${sidebar?"":"hidden"}`}>Liked Videos</p>
          </div>
          <hr className="w-10"/>
        </div>
        {/* Subscription */}
        <div>
          <h3 className="font-bold">Subscriptions</h3>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <img src={Image1} alt="" className="rounded-full h-5 w-5"/>
            <p className={` ${sidebar?"":"hidden"}`}>Kana Television</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <img src={Image2} alt="" className="rounded-full h-5 w-5"/>
            <p className={` ${sidebar?"":"hidden"}`}>MrBeast</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <img src={Image2} alt="" className="rounded-full h-5 w-5"/>
            <p className={` ${sidebar?"":"hidden"}`}>Abel Birhanu</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
          <RiArrowDropDownLine /> 
          <h3 className={` ${sidebar?"":"text-sm"}`}>Show more</h3>
          </div>
          <hr className="w-10"/>

        </div>
        {/* Explore */}
        <div>
          <h3 className="font-bold">Explore</h3>

          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <FaMusic className="h-5 w-5 mr-3" />
            <p className={` ${sidebar?"":"hidden"}`}>Music</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <MdOnlinePrediction className="h-5 w-5 mr-3" />
            <p className={` ${sidebar?"":"hidden"}`}>Live</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <SiYoutubegaming className="h-5 w-5 mr-3" />
            <p className={` ${sidebar?"":"hidden"}`}>Gaming</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <FaRegNewspaper className="h-5 w-5 mr-3" />
            <p className={` ${sidebar?"":"hidden"}`}>News</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <GiTrophyCup className="h-5 w-5 mr-3" />
            <p className={` ${sidebar?"":"hidden"}`}>Sports</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <BsLightbulb className="h-5 w-5 mr-3" />
            <p className={` ${sidebar?"":"hidden"}`}>Learning</p>
          </div>
          <div className="flex items-center mb-2 p-2 rounded hover:bg-gray-200">
            <FaBasketShopping className="h-5 w-5 mr-3" />
            <p className={` ${sidebar?"":"hidden"}`}>Fashion & Beauty</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
