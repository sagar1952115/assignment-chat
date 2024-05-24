import React, {  useContext } from "react";
import { ThemeContext } from "../App";

const ChatBubble = ({image, message, isOwnMessage }) => {
    const {theme}=useContext(ThemeContext)
    console.log(isOwnMessage)
    
  return (
    <div
      className={`flex ${isOwnMessage ? "justify-end" : "justify-start"} mb-2 w-full`}
    >
      <div
        style={{
          backgroundColor: `${isOwnMessage ? "bg-blue-500" : theme.bubble}`,
          color: `${isOwnMessage ? "white" : theme.text}`,
        }}
        className={`max-w-[75%]  lg:max-w-[50%] px-4 py-2 rounded-lg ${
          isOwnMessage
            ? "bg-blue-500 text-white"
            : `bg-[${theme.bubble}]  text-black`
        } shadow-lg`}
      >
        {image && (
          <img src={image} alt="Chat image" className="mb-1 rounded-lg" />
        )}
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ChatBubble;
