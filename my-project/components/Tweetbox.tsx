import React, { useState } from "react";
import {
  CalendarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { StringifyOptions } from "querystring";

function Tweetbox() {
    const [input , setInput] = useState<String>('');
    
  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-14 w-14 object-cover rounded-full mt-4"
        src="https://links.papareact.com/gll"
        alt=""
      />

      <div className="flex flex-1 items-center pl-2">
        <form action="" className="flex flex-1 flex-col">
          <input type="text" placeholder="what's happening ?"className="h-24 w-full text-xl outline-none placeholder:text-xl bg-black"
          onChange={(e)=> setInput(e.target.value)} />
          <div className="flex items-center">
            <div className="flex space-x-2 flex-1">
              <MapPinIcon className="h-5 w-5 text-twitter cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <CalendarIcon className="h-5 w-5 text-twitter cursor-pointer transition-transform duration-150 ease-out hover:scale-150 " />
              <FaceSmileIcon className="h-5 w-5 text-twitter cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <PhotoIcon className="h-5 w-5 text-twitter cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <ArrowRightCircleIcon className="h-5 w-5 text-twitter cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            </div>
            <button disabled =  {!input} className="bg-twitter px-5 py-2 text-white font-bold rounded-full disabled:opacity-40">
              tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tweetbox;
