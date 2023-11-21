import React, { useState } from "react";
import { Icons } from "./Icons";

const chatItems=[
  {
    title: "react에서 list 렌더링하는법",
    chatId: "3",
    lastChat: new Date().getTime(),
  },
  {
    title: "react 장점",
    chatId: "2",
    lastChat: new Date().getTime() - 3600 * 24 * 3,
  },
  {
    title: "react JSX",
    chatId: "1",
    lastChat: new Date().getTime() - 3600 * 24 * 8,
  },
  {
    title: "react 프레임워크",
    chatId: "0",
    lastChat: new Date().getTime() - 3600 * 24 * 9,
  },
];


const ChatList = ({ chatItems }: { chatItems: Array<any> }) => {
  chatItems.forEach((ele) => {
    const diff = currentTime - ele.lastChat;
    const dayDiff = Math.floor(diff / (24 * 60 * 60));
    const key = dayDiff <= 1 ? 1 : dayDiff <= 7 ? 7 : 30;
    ele["key"] = key;
  });
  const currentTime = new Date(). getTime();

  return(
    <div className='chatlist'>
      <div className='yesterday'>
      <ul>
          {chatItems
            .filter((item) => item.key === 1)
            .map((chat) => (
              <li key={chat.chatId}>{chat.title}</li>
            ))}
        </ul>
      </div>
      <div className='previous7Days'>
        <span>지난 7일</span>
        <ul>
          {chatItems
            .filter((item) => item.key === 7)
            .map((chat) => (
              <li key={chat.chatId}>{chat.title}</li>
            ))}
        </ul>
      </div>
      <div className='previous30Days'>
        <span>지난 30일</span>
        <ul>
          {chatItems
            .filter((item) => item.key === 30)
            .map((chat) => (
              <li key={chat.chatId}>{chat.title}</li>
            ))}
        </ul>
      </div>
    </div>
    );
  }
export default ChatList;
