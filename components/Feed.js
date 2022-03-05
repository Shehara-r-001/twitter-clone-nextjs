import React, { useEffect, useState } from "react";
import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Tweet from "./Tweet";
import { useSession } from "next-auth/react";

function Feed() {
  const [tweets, setTweets] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "tweets"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setTweets(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="text-white flex-grow border-l border-gray-600 border-r sm:ml-[73px] xl:ml-[370px]">
      <div className="text-white flex items-center justify-between py-2 px-3 sticky top-0 z-20 border-b border-gray-600 bg-black">
        <h2 className="font-bold">Home</h2>
        <div className="hoverAnim w-9 h-9 flex items-center justify-center xl:p-0">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>

      <Input />
      <div className="pb-72">
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet.data()} id={tweet.id} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
