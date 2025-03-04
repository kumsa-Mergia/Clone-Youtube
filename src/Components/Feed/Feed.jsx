import React from "react";
import myimage from "../../assets/img/1.jpg"
import { Link } from "react-router-dom";

const Feed = () => {
  return (
  <>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-7">
    {/* Card 1 */}
    <Link to={`video/20/25`}>
    <img src={myimage} alt="" className="h-[240px] w-full object-cover"/>
    <h2 className="text-xl font-semibold">Introduction to Information Security | Essential Concepts and
    Practices</h2>
    <h3 className="text-gray-500">Channel Name</h3>
    <p className="text-gray-500">17K views &bull; 4 days ago</p>
    </Link>
    

  </div>
  </>
  )
};

export default Feed;
