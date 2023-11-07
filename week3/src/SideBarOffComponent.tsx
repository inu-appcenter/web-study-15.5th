import React from "react";
import { Icons } from "./Icons";

const SideBarOffComponent: React.FC<{}> = () => {
  const sideBarOff = () => {
    window.alert("// TODO: 사이드바 닫기 기능");
    // TODO: 사이드바 닫기 기능
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
    justifyContent: "center",
  };

  return (
    <span style={style_button} onClick={sideBarOff}>
      {Icons.sidebar}
    </span>
  );
};
export default SideBarOffComponent;
