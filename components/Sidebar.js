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
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-3 h-screen">
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
      <div className="flex align-center justify-center mx-auto hoverAnim mt-auto">
        <img
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          alt="user-img"
          className="h-8 w-8 rounded-full xl:mr-2"
        />
        <div className="hidden xl:inline text-[#a6a6a6] leading-4 text-sm ml-1">
          <h4 className="font-bold text-[#bfbfbf]">Strider</h4>
          <p>@something</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10 text-[#bfbfbf] my-auto" />
      </div>
    </div>
  );
}

export default Sidebar;
