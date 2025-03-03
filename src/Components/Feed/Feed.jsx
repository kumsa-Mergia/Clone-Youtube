import React from "react";
import myimage from "../../assets/img/1.jpg"

const Feed = () => {
  return (
  <>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-7">
    {/* Card 1 */}
    <div>
    <img src={myimage} alt="" className="h-[240px] w-full object-cover"/>
    <h2 className="text-xl font-semibold">Best Channel to learn coding that help you to a front end</h2>
    <h3 className="text-gray-500">Greatstack</h3>
    <p className="text-gray-500">17K views &bull; 4 days ago</p>
    </div>
    {/* Card 2 */}
    <div>
    <img src={myimage} alt="" className="h-[240px] w-full object-cover"/>
    <h2 className="text-xl font-semibold">Best Channel to learn coding that help you to a front end</h2>
    <h3 className="text-gray-500">Greatstack</h3>
    <p className="text-gray-500">17K views &bull; 4 days ago</p>
    </div>
        {/* Card 1 */}
        <div>
    <img src={myimage} alt="" className="h-[240px] w-full object-cover"/>
    <h2 className="text-xl font-semibold">Best Channel to learn coding that help you to a front end</h2>
    <h3 className="text-gray-500">Greatstack</h3>
    <p className="text-gray-500">17K views &bull; 4 days ago</p>
    </div>
    {/* Card 2 */}
    <div>
    <img src={myimage} alt="" className="h-[240px] w-full object-cover"/>
    <h2 className="text-xl font-semibold">Best Channel to learn coding that help you to a front end</h2>
    <h3 className="text-gray-500">Greatstack</h3>
    <p className="text-gray-500">17K views &bull; 4 days ago</p>
    </div>
    {/* Card 2 */}

    <div>
    <img src={myimage} alt="" className="h-[240px] w-full object-cover"/>
    <h2 className="text-xl font-semibold">Best Channel to learn coding that help you to a front end</h2>
    <h3 className="text-gray-500">Greatstack</h3>
    <p className="text-gray-500">17K views &bull; 4 days ago</p>
    </div>
    {/* Card 2 */}

    <div>
    <img src={myimage} alt="" className="h-[240px] w-full object-cover"/>
    <h2 className="text-xl font-semibold">Best Channel to learn coding that help you to a front end</h2>
    <h3 className="text-gray-500">Greatstack</h3>
    <p className="text-gray-500">17K views &bull; 4 days ago</p>
    </div>

  </div>
  </>
  )
};

export default Feed;
