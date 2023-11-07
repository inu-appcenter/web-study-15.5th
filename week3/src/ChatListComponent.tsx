import React from "react";
import { Icons } from "./Icons";

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
  const style_Container = {
    display: "flex",
    "flex-direction": "column",
    width: "100%",
  };
  const style_date = {
    color: "#8282A0",
    fontSize: "14px",
  };

  const style_chatItem = {
    display: "flex",
    "flex-basis": "40px",
    fontSize: "14px",
    borderRadius: "4px",
    width: "95%",
    height: "100%",
    cursor: "pointer",
    alignItems: "center",
    gap: "10px",
    paddingLeft: "10px",
  };
  return (
    <div style={style_Container}>
      <h3 style={style_date}>지난 1일</h3>
      {last1day.map((item, index) => (
        <div style={style_chatItem} key={item.chatId}>
          {Icons.chat}
          {item.title}
        </div>
      ))}
      <h3 style={style_date}>지난 7일</h3>
      {last7day.map((item, index) => (
        <div style={style_chatItem} key={item.chatId}>
          {Icons.chat}
          {item.title}
        </div>
      ))}
      <h3 style={style_date}>지난 30일</h3>
      {last30day.map((item, index) => (
        <div style={style_chatItem} key={item.chatId}>
          {Icons.chat}
          {item.title}
        </div>
      ))}
    </div>
  );
};
export default ChatComponent;
