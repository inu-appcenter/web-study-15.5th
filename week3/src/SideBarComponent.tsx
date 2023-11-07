import React from "react";
import NewChatComponent from "./NewChatComponent";
import SideBarOffComponent from "./SideBarOffComponent";
import ChatListComponent from "./ChatListComponent";
import InformationComponent from "./InformationComponent";

const chatItems = [
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
const SideBarComponent: React.FC<{}> = () => {
  const style_Container1 = {
    display: "flex",
    "flex-direction": "column",
    backgroundColor: "#202123",
    color: "#ECECF1",
    padding: "10px",
    height: "100vh",
  };

  const style_Container2 = {
    display: "flex",
    "flex-direction": "row",
    "flex-basis": "40px",
    gap: "10px",
  };

  const style_NewChatComponent = {
    display: "flex",
    flex: "1",
  };

  const style_SideBarrOffComponent = {
    display: "flex",
    "flex-basis": "40px",
  };

  const style_ChatListComponent = {
    display: "flex",
    flex: 1,
  };

  const style_InformationComponent = {
    display: "flex",
    "flex-basis": "40px",
  };
  return (
    <div style={style_Container1}>
      <h3>채팅</h3>
      <div style={style_Container2}>
        <div style={style_NewChatComponent}>
          <NewChatComponent />
        </div>
        <div style={style_SideBarrOffComponent}>
          <SideBarOffComponent />
        </div>
      </div>
      <div style={style_ChatListComponent}>
        <ChatListComponent chatItems={chatItems} />
      </div>
      <div style={style_InformationComponent}>
        <InformationComponent />
      </div>
    </div>
  );
};

export default SideBarComponent;
