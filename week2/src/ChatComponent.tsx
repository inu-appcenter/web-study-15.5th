import React from "react";

export type ChatComponentProps = {
  chatItems: {
    title: string;
    chatId: string;
    lastChat: number;
  }[];
};

const ChatComponent: React.FC<ChatComponentProps> = ({ chatItems }) => {
  const last1day: { title: string; chatId: string; lastChat: number }[] = [];
  const last7day: { title: string; chatId: string; lastChat: number }[] = [];
  const last30day: { title: string; chatId: string; lastChat: number }[] = [];
  const now = new Date().getTime();
  for (const chatItem of chatItems) {
    const diff = now - chatItem.lastChat;
    if (diff < 3600 * 24) last1day.push(chatItem);
    else if (diff < 3600 * 24 * 7) last7day.push(chatItem);
    else if (diff < 3600 * 24 * 30) last30day.push(chatItem);
  }
  return (
    <ul>
      <h2>지난 1일</h2>
      {last1day.map((item, index) => (
        <li key={item.chatId}>{item.title}</li>
      ))}
      <h2>지난 7일</h2>
      {last7day.map((item, index) => (
        <li key={item.chatId}>{item.title}</li>
      ))}
      <h2>지난 30일</h2>
      {last30day.map((item, index) => (
        <li key={item.chatId}>{item.title}</li>
      ))}
    </ul>
  );
};
export default ChatComponent;
