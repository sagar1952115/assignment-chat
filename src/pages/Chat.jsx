import React, { useContext, useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import { ThemeContext, UserContext } from "../App";
import ProfilePictureModal from "../components/ProfilePictureModal";
import ChatBubble from "../components/ChatBubble";
import { chatData } from "../data";

const Chat = () => {
  const { theme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue]=useState("")
  const [count, setCount] = useState(0);

  useEffect(() => {
    setChats([...chats, chatData[count]]);
  }, [count]);


  const handleUserInput=(e)=>{
      e.preventDefault();
      
      if (inputValue.trim() === "") return;
      let temp = [
        ...chats,
        { user: "user2", message: inputValue, type: "text" },
      ];
      setChats(temp);
      setInputValue("");
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => {
        if (prev >= chatData.length - 1) {
          clearInterval(intervalId);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
    

    return () => {
      clearInterval(intervalId);
      setLoading(false);
    };
  }, []); // passing dependency of userChat and chatDelay

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(239.26deg,${theme.color1} 63.17%,${theme.color2} 94.92%)`,
      }}
      className="flex flex-col h-screen overflow-hidden"
    >
      <Navbar setIsOpen={setIsOpen} />
      <div className="flex flex-col flex-1 overflow-hidden ">
        <div className="flex-col w-full max-w-[1000px] m-auto flex-1 max-h-full overflow-auto p-2 py-4 ">
          {chats.map((chat, i) => {
            return (
              <ChatBubble
                key={i}
                message={chat.message}
                isOwnMessage={chat.user === "user2"}
                image={chat.imgUrl}
              />
            );
          })}
        </div>
        <div className="w-full max-w-[1000px] mx-auto p-1   lg:p-2 lg:px-10">
          <form action="" onSubmit={handleUserInput}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-3 px-8 mx-auto text-gray-700 bg-white rounded-full shadow-lg outline-none "
              placeholder="Type your message..."
            />
          </form>
        </div>
      </div>

      <ProfilePictureModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Chat;

