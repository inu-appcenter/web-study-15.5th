import React from "react";
import { Icons } from "./Icons";

const currentTime = new Date().getTime();
const Chat = ({ chatItems }: { chatItems: Array<any> }) => {
  chatItems.forEach((ele) => {
    const diff = currentTime - ele.lastChat;
    const dayDiff = Math.floor(diff / (24 * 60 * 60));
    const key = dayDiff <= 1 ? 1 : dayDiff <= 7 ? 7 : 30;
    ele["key"] = key;
  });

  return (
    <div className="Chat">
      <span className="day-before">1일 전</span>
      <ul>
        {chatItems
          .filter((item) => item.key === 1)
          .map((item) => (
            <li key={item.chatId}>
              <span className="chat-icon">{Icons.chat}</span>
              {item.title}
            </li>
          ))}
      </ul>
      <br />
      <span className="day-before">7일 전</span>
      <ul>
        {chatItems
          .filter((item) => item.key === 7)
          .map((item) => (
            <li key={item.chatId}>
              <span className="chat-icon">{Icons.chat}</span>
              {item.title}
            </li>
          ))}
      </ul>
      <br />
      <span className="day-before">30일 전</span>
      <ul>
        {chatItems
          .filter((item) => item.key === 30)
          .map((item) => (
            <li key={item.chatId}>
              <span className="chat-icon">{Icons.chat}</span>
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Chat;
