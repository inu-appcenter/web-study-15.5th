import React, { useState } from "react";
import Chat from "./Chat";
import { Icons } from "./Icons";
import profilImg from "./default-profile-icon.jpg";
import "./App.css";

const chatList = [
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

function App() {
  const [chatItems, setChatItems] = useState(chatList);
  const [isOnClick, setisOnClick] = useState(false);

  const handleNewChat = () => {
    const chatId = chatItems.length;
    const newChatItem = {
      title: "새로운 채팅",
      chatId: chatId.toString(),
      lastChat: new Date().getTime(),
    };

    setChatItems([newChatItem, ...chatItems]);
  };

  const isPopup = () => {
    setisOnClick(!isOnClick);
  };

  return (
    <div className="App">
      <section className="sidebar">
        <div className="top-side">
          <h2>채팅</h2>
          <div className="side-menu-btn">
            <button className="new-chat-btn" onClick={handleNewChat}>
              <span>{Icons.add}</span>
              새로운 채팅
            </button>
            <button className="close-sidebar-btn">{Icons.sidebar}</button>
          </div>
        </div>
        <div className="mid-side">
          <Chat chatItems={chatItems} />
        </div>
        <div
          className="popup"
          style={{
            // visibility: isOnClick ? "visible" : "hidden",
            display: isOnClick ? "block" : "none",
            // opacity: isOnClick ? 1 : 0,
          }}
        >
          <div className="setting">{Icons.setting} 설정</div>
          <div className="logout">{Icons.logout} 로그아웃</div>
        </div>
        <div className="low-side">
          <div className="profil" onClick={isPopup}>
            <img className="profil-img" alt="profil" src={profilImg} />
            <span className="user-name">길은결</span>
            <div className="more-btn">{Icons.more}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
