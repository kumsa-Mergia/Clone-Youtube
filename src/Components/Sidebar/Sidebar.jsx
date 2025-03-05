import React from "react";
import { MdHome, MdOutlineSubscriptions, MdOutlinePlaylistPlay, MdOutlineWatchLater, MdOnlinePrediction } from "react-icons/md";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { FaMusic, FaRegNewspaper } from "react-icons/fa6";
import { VscHistory } from "react-icons/vsc";
import { BiLike } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import { BsLightbulb } from "react-icons/bs";
import { FaBasketShopping } from "react-icons/fa6";
import { RiArrowDropDownLine, RiDownloadLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import Image1 from "../../assets/img/Kana.jpg";
import Image2 from "../../assets/img/MrBeast.jpg";

const Sidebar = ({ sidebar }) => {
  const menuItems = [
    { icon: <MdHome />, label: "Home" },
    { icon: <SiYoutubeshorts />, label: "Shorts" },
    { icon: <MdOutlineSubscriptions />, label: "Subscriptions" },
    { icon: <RiDownloadLine />, label: "Downloads" },
  ];

  const userMenu = [
    { icon: <VscHistory />, label: "History" },
    { icon: <MdOutlinePlaylistPlay />, label: "Playlists" },
    { icon: <CiYoutube />, label: "Your Videos" },
    { icon: <MdOutlineWatchLater />, label: "Watch later" },
    { icon: <BiLike />, label: "Liked Videos" },
  ];

  const exploreMenu = [
    { icon: <FaMusic />, label: "Music" },
    { icon: <MdOnlinePrediction />, label: "Live" },
    { icon: <SiYoutubegaming />, label: "Gaming" },
    { icon: <FaRegNewspaper />, label: "News" },
    { icon: <GiTrophyCup />, label: "Sports" },
    { icon: <BsLightbulb />, label: "Learning" },
    { icon: <FaBasketShopping />, label: "Fashion & Beauty" },
  ];

  return (
    <div className={`bg-white font-sans ${sidebar ? "w-54 p-5" : "w-24 p-3"}`}> 
      {/* Main Menu */}
      {menuItems.map((item, index) => (
        <div key={index} className={`flex items-center p-2 rounded hover:bg-gray-200 ${sidebar ? "" : "grid justify-center items-center"}`}>
          <span className={`${sidebar ? "h-5 w-5" : "h-full w-full m-4  text-3xl"}`}>{item.icon}</span>
          <p className={`${sidebar ? "ml-3" : "hidden"}`}>{item.label}</p>
        </div>
      ))}
      <hr className="my-2 border-gray-300" />
      
      {/* User Menu */}
      {sidebar && <h3 className="font-bold">You</h3>}
      {userMenu.map((item, index) => (
        <div key={index} className={`flex items-center p-2 rounded hover:bg-gray-200 ${sidebar ? "" : "hidden "}`}>
          <span className="h-5 w-5 mr-3">{item.icon}</span>
          <p>{item.label}</p>

        </div>
      ))}
      <hr className="my-2 border-gray-300" />
      
     

      {/* Subscriptions */}
      {sidebar && <h3 className="font-bold">Subscriptions</h3>}
      {[Image1, Image2].map((image, index) => (
        <div key={index} className={`flex items-center p-2 rounded hover:bg-gray-200 ${sidebar ? "" : "hidden"}`}>
          <img src={image} alt="Subscribed Channel" className="rounded-full h-5 w-5" />
          <p className="ml-3">{index === 0 ? "Kana Television" : "MrBeast"}</p>
        </div>
      ))}
      <div className={`${sidebar ? "flex items-center p-2 rounded hover:bg-gray-200" : "hidden"}`}>
        <RiArrowDropDownLine />
        <p>Show more</p>
        <hr className="my-2 border-gray-300" />
      </div>
      
      {/* Explore Menu */}
      {sidebar && <h3 className="font-bold">Explore</h3>}
      {exploreMenu.map((item, index) => (
        <div key={index} className={`flex items-center p-2 rounded hover:bg-gray-200 ${sidebar ? "" : "hidden"}`}>
          <span className="h-5 w-5 mr-3">{item.icon}</span>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
