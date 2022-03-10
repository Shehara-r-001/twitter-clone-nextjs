import React from "react";
import {
  DotsHorizontalIcon,
  HeartIcon,
  TrashIcon,
  UploadIcon,
  AnnotationIcon,
  SwitchHorizontalIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";
import Moment from "react-moment";

function Comment({ comment, id }) {
  return (
    <div className="flex p-2 border-b border-gray-600 ">
      <img
        src={comment?.userImg}
        alt=""
        className="h-9 w-9 rounded-full ml-1.5 mr-4"
      />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
          <div className="text-[#e6e6e6]">
            <div className="inline-block group">
              <h4 className="text-[#e6e6e6] text-[15px] sm:text-base inline-block group-hover:underline">
                {comment?.username}
              </h4>
              <span className="ml-1.5 text-[12px] text-[#999999] sm:text-[15px]">
                @{comment?.tag} .{" "}
              </span>
            </div>
            <span className="hover:underline text-[12px] text-[#999999] sm:text-[15px] ml-1">
              <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
            </span>
            <p className="text-[#e6e6e6] mt-0.5 max-w-lg no-scrollbar overflow-auto text-sm sm:text-base">
              {comment?.comment}
            </p>
          </div>
          <div className="icon group flex-shrink-0">
            <DotsHorizontalIcon className="h-5 text-[#e6e6e6] group-hover:text-[#999999] mr-3" />
          </div>
        </div>
        <div className="text-[#999999] flex justify-between w-10/12 -ml-3">
          <div className="icon-blue group">
            <AnnotationIcon className="h-5 group-hover:text-[#0099ff]" />
          </div>

          <div className="icon-blue group">
            <ChartBarIcon className="h-5 group-hover:text-[#0099ff]" />
          </div>
          <div className="flex items-center space-x-1 group">
            <div className="icon-blue group-hover:bg-pink-600/10">
              <HeartIcon className="h-5 group-hover:text-pink-600" />
            </div>
            <span className="group-hover:text-pink-600 text-sm"></span>
          </div>
          <div className="icon-blue group">
            <UploadIcon className="h-5 group-hover:text-[#0099ff]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
