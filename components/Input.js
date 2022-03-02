import React, { useState } from "react";

function Input() {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInput = (e) => {
    setInput(e.target.value);
    // console.log(input);
  };
  return (
    <div className={`boder-b border-gray-600 p-3 flex space-x-2 `}>
      <img
        src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
        alt="user-img"
        className="h-8 w-8 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-600">
        <div className={``}>
          <textarea
            value={input}
            name=""
            rows="2"
            className="bg-transparent w-full outline-none text-white placeholder-gray-500 tracking-wide no-scrollbar overflow-y-auto min-h-[48px]"
            placeholder="What's on your mind?"
            onChange={handleInput}
          />
          <div className="relative">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
