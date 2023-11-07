import React from "react";
import { Icons } from "./Icons";

const NewChatComponent: React.FC<{}> = () => {
  const newChat = () => {
    window.alert("// TODO: 새로운 채팅 기능");
    // TODO: 새로운 채팅 기능
  };

  const style_button = {
    display: "flex",
    backgroundColor: "#202123",
    color: "#ECECF1",
    fontSize: "14px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingLeft: "10px",
  };

  return (
    <span style={style_button} onClick={newChat}>
      {Icons.add}새로운 채팅
    </span>
  );
};
export default NewChatComponent;
