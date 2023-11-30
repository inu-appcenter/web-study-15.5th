import React, { useState } from 'react';
import { Icons } from './Icons';

const ChatList = ({ chatItems }: { chatItems: Array<any> }) => {
  const currentTime = new Date().getTime();

  chatItems.forEach((ele) => {
    const diff = currentTime - ele.lastChat;
    const dayDiff = Math.floor(diff / (24 * 60 * 60));
    const key = dayDiff <= 1 
    ? 1 
    : dayDiff <= 7 ?
     7 
     : 30;
    ele['key'] = key;
  });

  const dateGroups = [
    { label: '어제', day: 1 },
    { label: '지난 7일', day: 7 },
    { label: '지난 30일', day: 30 },
  ];

  return (
    <div className='chatlist'>
      {dateGroups.map((group) => (
        <div>
          <span>{group.label}</span>
          <ul>
            {chatItems
              .filter((item) => item.key === group.day)
              .map((chat) => (
                <li key={chat.chatId}>{chat.title}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default ChatList;
