import { Tweet } from "@/typings";
import React from "react";
import TimeAgo from "react-timeago";
import { TwitterTweetEmbed } from "react-twitter-embed";
import {
  HeartIcon,
  ArrowUpOnSquareIcon, 
  ChatBubbleLeftIcon, 
  ArrowsRightLeftIcon

} from "@heroicons/react/24/outline"

interface Props {
  tweet: Tweet;
}

function Tweet({ tweet }: Props) {
  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
      <div className="flex space-x-3">
        <img className="h-10 w-10 rounded-full object-cover" src= {tweet.profileImg} alt="" />

        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.UserName}</p>
            
            <TimeAgo className =  'text-sm text-gray-500' date = {tweet._createdAt}  />
          </div>

          <p>{tweet.Text}</p>
          {tweet.image && <img src ={tweet.image} alt="" className="mt-5 ml-0 mb-1 max-h-60
           rounded-lg object-cover shadow-xl"/>}
        </div>
      </div>

      <div className="flex mt-5 justify-between">
      <div className = 'flex cursor-pointer space-x-3 items-center text-gray-400'>
        <ChatBubbleLeftIcon className="h-5 w-5"/>
        <p>5</p>
      </div>

      <div className = 'flex cursor-pointer space-x-3 items-center text-gray-400'>
        <ArrowsRightLeftIcon className="h-5 w-5" />
      </div>

      <div className = 'flex cursor-pointer space-x-3 items-center text-gray-400'>
      <HeartIcon className="h-5 w-5" />
      </div>

      <div className = 'flex cursor-pointer space-x-3 items-center text-gray-400'>
      <ArrowUpOnSquareIcon className="h-5 w-5"  />
      </div>
      </div>
      
    </div>
  );
}

export default Tweet;
