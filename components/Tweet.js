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
        <div className={`flex ${!tweetPage && "justify-between"}`}>
          {tweetPage && (
            <img
              src={tweet?.userImg}
              alt=""
              className="h-10 w-10 rounded-full mr-2"
            />
          )}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
