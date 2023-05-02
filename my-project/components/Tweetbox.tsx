import React, { useRef, useState } from "react";
import {
  CalendarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { StringifyOptions } from "querystring";
import { useSession } from "next-auth/react";
import { Tweet, TweetBody } from "@/typings";
import { fetchTweets } from "@/utils/fetchTweets";
import toast from "react-hot-toast";
interface Props {
  setTweets: React.Dispatch<React.SetStateAction<Tweet[]>>;
}

function Tweetbox({ setTweets }: Props) {
  const [input, setInput] = useState<String>("");
  const [image, setImage] = useState<String>("");
  const { data: session } = useSession();
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState(false);

  const imageInputReference = useRef<HTMLInputElement>(null);

  const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!imageInputReference.current?.value) return;

    setImage(imageInputReference.current.value);
  };

  const postTweet = async () => {
    const tweetInfo: TweetBody = {
      Text: input,
      username: session?.user?.name || "Rudransh",
      profileimg:
        session?.user?.image ||
        "https://pbs.twimg.com/profile_images/1622253557415284742/6ctU3L2f_400x400.jpg",
      image: image,
    };

    const result = await fetch(`/api/addTweet`, {
      body: JSON.stringify(tweetInfo),
      method: "POST",
    });

    const json = await result.json();

    const newTweets = await fetchTweets();
    setTweets(newTweets);

    toast("tweet posted", {
      icon: "😁",
    });

    return json;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    postTweet();

    setInput("");
    setImage("");
    setImageUrlBoxIsOpen(false);
  };

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-14 w-14 object-cover rounded-full mt-4"
        src={
          session?.user?.image ||
          "https://pbs.twimg.com/profile_images/1622253557415284742/6ctU3L2f_400x400.jpg"
        }
        alt=""
      />

      <div className="flex flex-1 items-center pl-2">
        <form action="" className="flex flex-1 flex-col">
          <input
            type="text"
            placeholder="what's happening ?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl bg-black"
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex items-center">
            <div className="flex space-x-2 flex-1">
              <MapPinIcon className="h-5 w-5 text-twitter cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <CalendarIcon className="h-5 w-5 text-twitter cursor-pointer transition-transform duration-150 ease-out hover:scale-150 " />
              <FaceSmileIcon className="h-5 w-5 text-twitter cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <PhotoIcon
                onClick={() => {
                  setImageUrlBoxIsOpen(!imageUrlBoxIsOpen);
                }}
                className="h-5 w-5 text-twitter cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
              />
              <ArrowRightCircleIcon className="h-5 w-5 text-twitter cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!input}
              className="bg-twitter px-5 py-2 text-white font-bold rounded-full disabled:opacity-40"
            >
              tweet
            </button>
          </div>

          {imageUrlBoxIsOpen && (
            <form className="rounded-lg mt-5 flex bg-twitter/80 py-2 px-4">
              <input
                ref={imageInputReference}
                type="text"
                placeholder="enter image url"
                className="flex-1 bg-transparent p-2 text-white outline-none placeholder: text-white"
              />
              <button
                onClick={addImageToTweet}
                className="font-bold text-white"
              >
                Add Image
              </button>
            </form>
          )}

          {image && (
            <img
              className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
              src={image}
              alt=""
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default Tweetbox;
