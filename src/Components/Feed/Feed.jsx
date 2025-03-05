import React from "react";
import myimage from "../../assets/img/1.jpg";
import { Link } from "react-router-dom";
import imgOne from "../../assets/feed/1.jpg"
import imgtwo from "../../assets/feed/2.jpg"
import imgthree from "../../assets/feed/3.jpg"
import imgfour from "../../assets/feed/4.jpg"


const VideoFeed = [
  {
    thumbnail: imgOne,
    vidTitle:
      "Introduction to Information Security",
    ChanName: "Visit World",
    views: "197K vies",
    when: "1 min ago",
  },
  {
    thumbnail: imgtwo,
    vidTitle:
      " Essential Concepts and Practices",
    ChanName: "Ku Teach",
    views: "7M vies",
    when: "4 years ago",
  },
  {
    thumbnail: imgthree,
    vidTitle:
      "Test of nothing",
    ChanName: "World",
    views: "17K vies",
    when: "1 week ago",
  },
  {
    thumbnail: imgfour,
    vidTitle:
      "DevOps Essential Concepts and Practices",
    ChanName: "DevPol",
    views: "17K vies",
    when: "4 month ago",
  },
];

const Feed = () => {
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-7">
        {/* Card 1 */}
        {VideoFeed.map((video, index) => (
          <Link to={`video/20/25`}>
            <img
              src={video.thumbnail}
              alt=""
              className="h-[240px] w-full object-cover"
            />
            <h2 className="text-xl font-semibold">{video.vidTitle}</h2>
            <h3 className="text-gray-500">{video.ChanName}</h3>
            <p className="text-gray-500">
              {video.views} &bull; {video.when}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Feed;
