import React from 'react';
import '../App.css';
import { useState } from 'react';
import profileImg from '../profile_image.jpg';
import { Icons } from '../Icons';
import ChatList from '../ChatList';



const Sidebar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <div className='top-sidebar'>
        <h1>채팅</h1>
        <div className='top-sidebar-btn'>
          <button className='newchat-btn'>
            <span>{Icons.add}</span>
            새로운 채팅
          </button>
          <button
            className='close-btn'
            onClick={() => console.log('Close button clicked')}
          >
            {Icons.sidebar}
          </button>
        </div>
      </div>

      <div className='past-content'>
      {/* <ChatList />*/}
      </div>
        
      <div className='profile-menu' onClick={handleButtonClick}>
        <div className='profile'>
          <img className='profile-image' src={profileImg} alt='profile-image' />
          <span className='userName'>황소정</span>
        </div>
      </div>

      {isPopupVisible && (
        <div className='popup'>
          <div className='menu-setting'>{Icons.setting}설정</div>
          <div className='menu-logout'>{Icons.logout}로그아웃</div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
