import { DotsHorizontalIcon } from "@heroicons/react/outline";
import React from "react";

function Tweet({ tweet, id, tweetPage }) {
  return (
    <div className="flex p-3 border-b border-gray-600">
      {!tweetPage && (
        <img
          src={tweet?.userImg}
          alt=""
          className="rounded-full h-9 w-9 mr-2"
        />
      )}
      <div className="flex flex-col space-y-2 w-full">
        <div className={`flex flex-col ${!tweetPage && "justify-between"}`}>
          {tweetPage && (
            <img
              src={tweet?.userImg}
              alt=""
              className="h-10 w-10 rounded-full mr-2"
            />
          )}
          <div className="text-[#e6e6e6] ml-2">
            <div className="inline-block group">
              <h4
                className={`sm:text-base group-hover:underline ${
                  !tweetPage && "inline-block"
                }`}
              >
                {tweet?.username}
              </h4>
              <span
                className={`text-[#999999] text-[12px] sm:text-sm ${
                  !tweetPage && "ml-2"
                }`}
              >
                @{tweet?.tag}
              </span>
            </div>{" "}
            .{" "}
            <span className="hover:underline text-[12px] sm:text-sm">
              {/* <Moment fromNow>{tweet?.timestamp?.toDate()}</Moment> */}
            </span>
            {!tweetPage && (
              <p className="text-[#e6e6e6] text-[15px] sm:text-base">
                {tweet?.text}
              </p>
            )}
          </div>
          {/* <div className="icon-blue group flex-shrink-0 ml-auto">
            <DotsHorizontalIcon className="text-[#e6e6e6] h-5 group-hover:text-[#66c2ff] mr-2 " />
          </div> */}
          <div className="">
            {tweetPage && (
              <p className="text-[#e6e6e6] text-[15px] sm:text-base">
                {tweet?.text}
              </p>
            )}
            <img
              src={tweet?.image}
              alt=""
              className="rounded-xl max-h-[700px] object-cover mr-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
