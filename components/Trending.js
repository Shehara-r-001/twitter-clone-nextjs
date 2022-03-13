import { DotsCircleHorizontalIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

const Trending = ({ result }) => {
  return (
    <div className="hover:bg-white hover:bg-opacity-5 py-2 px-4 cursor-pointer transition ease-in duration-200">
      <div className="space-y-1">
        <p className="text-[#999999] text-sm font-medium ">{result.heading}</p>
        <h6 className="font-bold text-sm max-w-[250px]">
          {result.description}
        </h6>
        <p className="text-[#999999] text-sm font-medium ">
          Trending with{" "}
          {result.tags.map((tag, index) => (
            <span
              key={index}
              className="text-[#00ace6] hover:underline cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </p>
      </div>
      {/* {result.img ? (
        <Image
          src={result.img}
          width={70}
          height={70}
          objectFit="cover"
          className="rounded-xl"
        />
      ) : (
        <div className="icon-blue group">
          <DotsCircleHorizontalIcon className="h-5 text-[#999999] group-hover:text-[#00ace6]" />
        </div>
      )} */}
    </div>
  );
};

export default Trending;
