import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";
function Widgets() {
  return (
    <div className="mt-2 px-2 col-span-2 hidden lg:inline">
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
        <MagnifyingGlassIcon className="h-5 w-5 text-twitter" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent text-twitter flex-1 outline-none"
        />
      </div>
      
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="rudransh190204"
        options={{ height: 1000 }}
      />
      
      
    </div>
  );
}

export default Widgets;
