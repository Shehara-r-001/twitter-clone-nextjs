import Image from "next/image";
import React from "react";
import SidebarLinks from "./SidebarLinks";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-3 fixed h-full">
      <div className=" flex items-center justify-center w-14 h-14 p-0 xl:ml-24 hoverAnim">
        <Image
          src="https://rb.gy/ogau5a"
          height={30}
          width={30}
          alt="logo-twitter"
        />
      </div>
      <div className="space-y-2.5 mt-4 mb-2 xl:ml-24">
        <SidebarLinks text="Home" Icon={HomeIcon} active />
        <SidebarLinks text="Explore" Icon={HashtagIcon} />
        <SidebarLinks text="Notifications" Icon={BellIcon} />
        <SidebarLinks text="Messages" Icon={InboxIcon} />
        <SidebarLinks text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLinks text="Lists" Icon={ClipboardListIcon} />
        <SidebarLinks text="Profile" Icon={UserIcon} />
        <SidebarLinks text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline bg-[#00ace6] text-white ml-auto rounded-full w-3/5 h-12 text-lg font-bold hover:bg-opacity-90 tracking-wide mt-4 mx-auto">
        Tweet
      </button>
    </div>
  );
}

export default Sidebar;
