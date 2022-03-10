import {
  DotsHorizontalIcon,
  HeartIcon,
  TrashIcon,
  UploadIcon,
  AnnotationIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Moment from "react-moment";
import { Snapshot, useRecoilState } from "recoil";
import { modalState, postIdState } from "../atoms/modalAtom";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "@firebase/firestore";
import { db } from "../firebase";

function Tweet({ tweet, id, tweetPage }) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const router = useRouter();

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "tweets", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          setComments(snapshot.docs);
        }
      ),
    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "tweets", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      setLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  const likePost = async () => {
    if (liked) {
      await deleteDoc(doc(db, "tweets", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "tweets", id, "likes", session.user.uid), {
        username: session.user.name,
      })
        .then(() => {
          console.log("liked...");
        })
        .catch((error) => {
          console.log(`error is ${error}`);
        });
    }
  };

  return (
    <div
      className="flex p-3 border-b border-gray-600"
      onClick={() => router.push(`/${id}`)}
    >
      {!tweetPage && (
        <img
          src={tweet?.userImg}
          alt=""
          className="rounded-full h-9 w-9 mr-2"
        />
      )}
      <div className="flex flex-col space-y-2 w-full">
        <div className={`flex flex-col ${!tweetPage && "justify-between"}`}>
          {tweetPage && (
            <img
              src={tweet?.userImg}
              alt=""
              className="h-9 w-9 rounded-full mr-2"
            />
          )}
          <div className="text-[#e6e6e6] ml-2">
            <div className="flex">
              <div className="flex flex-col">
                <div className="inline-block group">
                  <h4
                    className={`sm:text-base group-hover:underline ${
                      !tweetPage && "inline-block"
                    }`}
                  >
                    {tweet?.username}
                  </h4>
                  <span
                    className={`text-[#999999] text-[12px] sm:text-sm ${
                      !tweetPage && "ml-2"
                    }`}
                  >
                    @{tweet?.tag} <span> . </span>
                  </span>
                  <span className="text-[#999999] hover:underline text-[12px] sm:text-sm">
                    <Moment fromNow>{tweet?.timestamp?.toDate()}</Moment>
                  </span>
                </div>
                {!tweetPage && (
                  <p className="text-[#e6e6e6] text-[14px] sm:text-base pb-1">
                    {tweet?.text}
                  </p>
                )}
              </div>
              <div className="icon-blue group flex-shrink-0 ml-auto pl-2">
                <DotsHorizontalIcon className="text-[#e6e6e6] h-5 group-hover:text-[#66c2ff] mr-2 " />
              </div>
            </div>
          </div>
          <div className="">
            {tweetPage && (
              <p className="text-[#e6e6e6] text-[15px] sm:text-base ml-2">
                {tweet?.text}
              </p>
            )}
            <img
              src={tweet?.image}
              alt=""
              className="rounded-xl max-h-[700px] object-cover mr-2 mb-2"
            />
            <div
              className={`text-[#999999] flex justify-between w-10/12 ${
                tweetPage && "mx-auto"
              }`}
            >
              <div
                className="flex items-center space-x-1 group"
                onClick={(e) => {
                  e.stopPropagation();
                  setPostId(id);
                  setIsOpen(true);
                }}
              >
                <div className="icon-blue group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
                  <AnnotationIcon className="h-5 group-hover:text-[#0099ff]" />
                </div>
                {comments.length > 0 && (
                  <span className="group-hover:text-[#1d9bf0] text-sm">
                    {comments.length}
                  </span>
                )}
              </div>

              {session.user.uid === tweet?.id ? (
                <div
                  className="flex items-center space-x-1 group"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteDoc(doc(db, "tweets", id));
                    router.push("/");
                  }}
                >
                  <div className="icon-blue group-hover:bg-red-600/10">
                    <TrashIcon className="h-5 group-hover:text-red-600" />
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-1 group">
                  <div className="icon-blue group-hover:bg-green-500/10">
                    <SwitchHorizontalIcon className="h-5 group-hover:text-green-500" />
                  </div>
                </div>
              )}

              <div
                className="flex items-center space-x-1 group"
                onClick={(e) => {
                  e.stopPropagation();
                  likePost();
                }}
              >
                <div className="icon-blue group-hover:bg-pink-600/10">
                  {liked ? (
                    <HeartIconSolid className="h-5 text-pink-600" />
                  ) : (
                    <HeartIcon className="h-5 group-hover:text-pink-600" />
                  )}
                </div>
                {likes.length > 0 && (
                  <span
                    className={`group-hover:text-pink-600 text-sm ${
                      liked && "text-pink-600"
                    }`}
                  >
                    {likes.length}
                  </span>
                )}
              </div>
              <div className="icon-blue group">
                <UploadIcon className="h-5 group-hover:text-[#0099ff]" />
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
