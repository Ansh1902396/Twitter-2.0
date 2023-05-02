import { Comment, Tweet } from "@/typings";
import React, { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import { TwitterTweetEmbed } from "react-twitter-embed";
import {
  HeartIcon,
  ArrowUpOnSquareIcon, 
  ChatBubbleLeftIcon, 
  ArrowsRightLeftIcon
} from "@heroicons/react/24/outline"
import { fetchComments } from "@/utils/fetchComments";

interface Props {
  tweet: Tweet;
}

function Tweet({ tweet }: Props) {
  
  const [comments ,  setComments] =  useState<Comment[]>([]); 

  const refreshComments = async () =>{
    const comments : Comment[] = await fetchComments(tweet._id)
    setComments(comments); 
  }

  useEffect(
    ()=>{
      refreshComments()
    },[]
  )

  console.log(comments);

  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
      <div className="flex space-x-3">
        <img className="h-10 w-10 rounded-full object-cover" src= {tweet.profileImg} alt="" />

        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            
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
        <p>{comments.length}</p>
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
      {/* comment box */}

      {comments?.length > 0 && (
        <div className="my-2 mt-5 overflow-y-scroll border-t border-gray-100 p-5">
          {comments.map((comment) => (
            <div key={comment._id} className = 'relative flex space-x-2'>
              <hr className="absolute left-5 top-10 h-8 border-x border-twitter" />
              <img src= {comment.profileimg} className =  "mt-2 h-7 w-7 rounded-full object-cover" alt="pp" />

              <div>
                <div className="flex items-center space-x-1">
                  <p className="mr-1 font-bold">{comment.username}</p>
                  <TimeAgo className = 'text-sm text-gray-500' date =  {comment._createdAt} />
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tweet;
