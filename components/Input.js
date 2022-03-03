import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { getDownloadURL, uploadString, ref } from "firebase/storage";
import { useSession } from "next-auth/react";

function Input() {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const handleInput = (e) => {
    setInput(e.target.value);
    // console.log(input);
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const postToFb = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "tweets"), {
      id: session.user.uid,
      username: session.user.name,
      userImg: session.user.image,
      tag: session.user.tag,
      text: input,
      timestamp: serverTimestamp(),
    });

    const imgRef = ref(storage, `tweets/${docRef.id}/image`);

    if (selectedFile) {
      await uploadString(imgRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imgRef);
        await updateDoc(doc(db, "tweets", docRef.id), {
          image: downloadURL,
        });
      });
    }

    setLoading(false);
    setInput("");
    setSelectedFile(null);
    setShowEmojis(false);
  };

  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <div
      className={`border-b border-gray-600 p-3 flex space-x-2 ${
        loading && "opacity-50"
      }`}
    >
      <img
        src={session.user.image}
        alt="user-img"
        className="h-8 w-8 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-600">
        <div className={`${selectedFile && "pb-7"} &{input && "space-y-2"}`}>
          <textarea
            value={input}
            name=""
            rows="2"
            className="bg-transparent w-full outline-none text-white placeholder-gray-500 tracking-wide no-scrollbar overflow-y-auto min-h-[48px]"
            placeholder="What's on your mind?"
            onChange={handleInput}
          />

          {selectedFile && (
            <div className="relative">
              <div className="absolute w-7 h-7 hover:bg-[#404040] bg-opacity-70 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer">
                <XIcon
                  className="text-white h-5"
                  onClick={() => setSelectedFile(null)}
                />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>

        {!loading && (
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center">
              <div
                className="icon-blue"
                onClick={() => filePickerRef.current.click()}
              >
                <PhotographIcon className="h-[20px] text-[#0099ff]" />
                <input
                  type="file"
                  onChange={addImage}
                  ref={filePickerRef}
                  hidden
                />
              </div>
              <div className="icon-blue">
                <ChartBarIcon className="h-[20px] text-[#0099ff]" />
              </div>
              <div
                className="icon-blue"
                onClick={() => setShowEmojis(!showEmojis)}
              >
                <EmojiHappyIcon className="h-[20px] text-[#0099ff]" />
              </div>
              <div className="icon-blue">
                <CalendarIcon className="h-[20px] text-[#0099ff]" />
              </div>

              {showEmojis && (
                <Picker
                  theme="dark"
                  onSelect={addEmoji}
                  style={{
                    position: "absolute",
                    marginTop: "470px",
                    // marginLeft: "40px",
                    maxWidth: "300px",
                    borderRadius: "10px",
                  }}
                />
              )}
            </div>
            <button
              className="bg-[#00ace6] text-white rounded-full px-4 py-1 font-bold hover:bg-[#66c2ff] disabled:opacity-80 desabled:cursor-default"
              disabled={!input.trim() && !selectedFile}
              onClick={postToFb}
            >
              Tweet
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
