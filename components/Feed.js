import React from "react";
import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";

function Feed() {
  return (
    <div className="text-white flex-grow border-l border-gray-600 border-r">
      <div className="text-white flex items-center justify-between py-2 px-3 sticky top-0 z-20 border-b border-gray-600">
        <h2 className="font-bold">Home</h2>
        <div className="hoverAnim w-9 h-9 flex items-center justify-center xl:p-0">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>

      <Input />
    </div>
  );
}

export default Feed;
