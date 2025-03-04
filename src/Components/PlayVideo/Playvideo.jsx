import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine, RiDownloadLine } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";
import profile from "../../assets/kum-AI.jpg";
import videoFile from "../../assets/video/INE.mp4"; // Corrected typo
import { MdSort } from "react-icons/md";

import one from "../../assets/prof/1.jpg";
import two from "../../assets/prof/2.jpg";
import three from "../../assets/prof/3.jpg";
import four from "../../assets/prof/4.jpg";

const Comment = ({ comment }) => {
  return (
    <div className="flex items-start gap-3">
      <img
        src={comment.image}
        alt="Profile"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">{comment.username}</p>
          <span className="text-xs text-gray-500">{comment.timeAgo}</span>
        </div>
        <p className="text-sm mt-1">{comment.text}</p>
        <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
          <button className="flex items-center gap-1">
            <AiOutlineLike /> {comment.likes}
          </button>
          <button className="flex items-center gap-1">
            <AiOutlineDislike />
          </button>
          <button className="text-blue-500">Reply</button>
          <HiDotsHorizontal className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const Playvideo = () => {
  const comments = [
    {
      id: 1,
      username: "@abebe",
      image: one,
      timeAgo: "2 days ago",
      text: "I love how you broke down the topic into easy-to-understand points.",
      likes: 3,
    },
    {
      id: 2,
      username: "@kebede",
      image: two,
      timeAgo: "2 days ago",
      text: "learned a lot, especially the part about [insert topic]",
      likes: 98,
    },
    {
      id: 3,
      username: "@tola",
      image: three,
      timeAgo: "2 days ago",
      text: "Looking forward to more videos like this! Keep up the awesome work!",
      likes: 56,
    },
    {
      id: 4,
      username: "@sebsibe",
      image: four,
      timeAgo: "2 days ago",
      text: "Great content!",
      likes: 82,
    },
  ];

  return (
    <div className="p-5 text-1xl">
      <div className="text">
        <video
          src={videoFile}
          controls
          autoPlay
          muted
          className="w-full rounded-lg"
        ></video>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">
            Introduction to Information Security | Essential Concepts and
            Practices
          </h3>

          <div className="flex flex-wrap justify-between items-center mt-2">
            {/* Channel Info Section */}
            <div className="flex items-center gap-3">
              <img
                className="rounded-full h-10 w-10"
                src={profile}
                alt="Profile"
              />
              <div>
                <p className="font-medium">Channel Name</p>
                <span className="text-sm text-gray-600">2M subscribers</span>
              </div>
              <button className="bg-black text-white rounded-full py-2 px-4 text-sm font-semibold">
                Subscribe
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-2 sm:mt-0">
              <span className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                <AiOutlineLike className="text-xl" /> 1.3K
                <AiOutlineDislike className="text-xl" />
              </span>
              <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-full">
                <RiShareForwardLine className="text-xl" />
                Share
              </button>
              <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-full">
                <RiDownloadLine className="text-xl" />
                Download
              </button>
              <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-full">
                <HiDotsHorizontal className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="p-5 bg-gray-100 rounded-lg">
            <div className="font-bold flex">
              <h3 className="text-gray-800 mr-2">6.9K Views</h3>
              <span className="text-gray-500 text-sm">1 day ago</span>
            </div>

            <p className="text-gray-700">
              Welcome to our Channel, where we dive deep into the world of
              Information Security! In this video, we cover the foundational
              concepts and best practices that every security professional
              should know. Whether you're a beginner or an experienced
              practitioner, this video will help you understand the importance
              of protecting data and systems in today's digital world.
            </p>
          </div>

          <div className="mt-4">
            {/* Comments Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">58 Comments</h3>
              <button className="text-gray-600">
                <MdSort className="text-xl" />
              </button>
            </div>

            {/* Add Comment Section */}
            <div className="flex items-center gap-3 mt-4">
              <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-white">
                <img className="rounded-full h-10 w-10" src={profile} />
              </div>
              <input
                type="text"
                placeholder="Add a comment..."
                className="flex-1 border-b outline-none py-2"
              />
            </div>

            {/* Comments List */}
            <div className="mt-4 space-y-4">
              {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playvideo;
