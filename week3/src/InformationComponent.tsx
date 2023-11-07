import React, { useState } from "react";
import { Icons } from "./Icons";
import Modal from "react-modal";

const InformationComponent: React.FC<{}> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
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
    gap: "10px",
  };
  // TODO: 모달위치
  const style_modal: ReactModal.Styles = {
    overlay: {
      background: "0, 0, 0, 0",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      padding: "0px",
      border: "0px",
      backgroundColor: "#202123",
      color: "#ECECF1",
      width: "235px",
      height: "88px",
      left: 0,
    },
  };
  const style_setting = {
    display: "flex",
    flex: 1,
    fontSize: "14px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "4px",
    cursor: "pointer",
    alignItems: "center",
    paddingLeft: "10px",
    gap: "10px",
  };
  const style_logout = {
    display: "flex",
    flex: 1,
    fontSize: "14px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "4px",
    cursor: "pointer",
    alignItems: "center",
    paddingLeft: "10px",
    gap: "10px",
  };
  const style_profile_name = {
    display: "flex",
    flex: 1,
    paddingLeft: "10px",
  };
  const style_more = {
    display: "flex",
    flex: 0,
    paddingRight: "10px",
  };
  // TODO: profileIcon
  // TODO: Modal
  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={style_modal}
      >
        <span style={style_setting}>{Icons.setting}설정</span>
        <span style={style_logout}>{Icons.logout}로그아웃</span>
      </Modal>
      <span style={style_button} onClick={openModal}>
        <span style={style_profile_name}>
          <img src="profileIcon.jpg" alt=""></img>이민규
        </span>
        <div style={style_more}>{Icons.more}</div>
      </span>
    </div>
  );
};

export default InformationComponent;
