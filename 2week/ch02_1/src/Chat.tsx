import React from "react";

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
      1일 전
      <ul>
        {chatItems
          .filter((item) => item.key === 1)
          .map((item) => (
            <li key={item.chatId}>{item.title}</li>
          ))}
      </ul>
      <br />
      7일 전
      <ul>
        {chatItems
          .filter((item) => item.key === 7)
          .map((item) => (
            <li key={item.chatId}>{item.title}</li>
          ))}
      </ul>
      <br />
      30일 전
      <ul>
        {chatItems
          .filter((item) => item.key === 30)
          .map((item) => (
            <li key={item.chatId}>{item.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default Chat;
