import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import Trending from "./Trending";

function Widgets({ trendingResults, followResults }) {
  //   console.log(trendingResults);
  //   console.log(followResults);

  return (
    <div className="hidden md:hidden lg:inline ml-4 xl:w-[450px] py-1 space-y-3">
      <div className="sticky top-0 py-2  px-2 bg-[#262626] w-5/6 xl:w-11/12 z-20 rounded-lg ">
        <SearchIcon className="text-gray-600 h-5 z-20" />
        <input
          type="text"
          className="bg-transparent outline-none text-[#e6e6e6] placeholder-gray-500 absolute inset-0 pl-7 border border-transparent rounded-lg w-full text-sm focus:border-[#00ace6] focus:bg-black"
          placeholder="Search Twitter.."
        />
      </div>
      <div className="text-[#e6e6e6] space-y-3 bg-slate-500 bg-opacity-50 pt-2 rounded-md w-11/12 xl:3/4 ">
        <h4 className="font-bold text-xl px-4">Whats Happening.!</h4>
        {trendingResults.map((result, index) => (
          <Trending key={index} result={result} />
        ))}
        <button className="px-4 py-3 cursor-pointer hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in flex items-center justify-between w-full text-[#00ace6] font-semibold">
          See more..
        </button>
      </div>

      <div className="text-[#e6e6e6] space-y-3 bg-slate-500 bg-opacity-50 pt-2 rounded-md w-11/12 xl:3/4 ">
        <h4 className="font-bold text-xl px-4">Who to follow..</h4>
        {followResults.map((result, index) => (
          <div
            key={index}
            className="hover:bg-white hover:bg-opacity-5 px-3 py-2 cursor-pointer transition duration-200 ease-in flex items-center"
          >
            <Image
              src={result.userImg}
              width={50}
              height={50}
              objectFit="cover"
              className="rounded-full"
            />
            <div className="ml-4 leading-5 group">
              <h4 className="font-semibold group-hover:underline">
                {result.username}
              </h4>
              <h5 className="text-[#999999] text-sm">{result.tag}</h5>
            </div>
            <button className="bg-white text-black rounded-full ml-auto px-3 text-sm font-bold py-1">
              Follow
            </button>
          </div>
        ))}
        <button className="px-4 py-3 cursor-pointer hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in flex items-center justify-between w-full text-[#00ace6] font-semibold">
          See more..
        </button>
      </div>
    </div>
  );
}

export default Widgets;
