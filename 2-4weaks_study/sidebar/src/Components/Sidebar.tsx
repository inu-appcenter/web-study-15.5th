import React, { useCallback } from 'react';
import '../App.css';
import { useState } from 'react';
import profileImg from '../profile_image.jpg';
import { Icons } from '../Icons';
import ChatList from '../ChatList';

const defaultChatItems = [
  {
    title: 'react에서 list 렌더링하는법',
    chatId: '3',
    lastChat: new Date().getTime() - 0,
  },
  {
    title: 'react 장점',
    chatId: '2',
    lastChat: new Date().getTime() - 3600 * 24 * 3,
  },
  {
    title: 'react JSX',
    chatId: '1',
    lastChat: new Date().getTime() - 3600 * 24 * 8,
  },
  {
    title: 'react 프레임워크',
    chatId: '0',
    lastChat: new Date().getTime() - 3600 * 24 * 9,
  },
];

const Sidebar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(!isPopupVisible);
  };

  // 변하는 값에 대해서 값에 따라 컴포넌트를 리렌더하기 위해 이용한다.
  // 상세한 useState 동작 방식에 대해선 "클로저" 라는 개념을 이해하면 된다.
  const [chatItems, setChatItems] = useState(defaultChatItems);

  // const chatItems = chatState[0]
  // const setChatItems = chatState[1]
  const onCreateChat = useCallback(() => {
    setChatItems((prev) => [
      {
        title: '새로운 채팅',
        chatId: prev.length.toString(),
        lastChat: new Date().getTime() - 0,
      },
      ...prev,
    ]);
  }, []);

  return (
    <div>
      <div className='top-sidebar'>
        <h1>채팅</h1>
        <div className='top-sidebar-btn'>
          <button className='newchat-btn' onClick={onCreateChat}>
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
        <ChatList chatItems={chatItems} />
      </div>

      <div className='profile-menu' onClick={handleButtonClick}>
        <div className='popup-wrapper'>
          {isPopupVisible && (
            <div className='popup'>
              <div className='menu-setting'>{Icons.setting}설정</div>
              <div className='menu-logout'>{Icons.logout}로그아웃</div>
            </div>
          )}
        </div>
        <div className='profile'>
          <img className='profile-image' src={profileImg} alt='profile-image' />
          <span className='userName'>황소정</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
