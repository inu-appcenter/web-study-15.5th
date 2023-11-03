import React, { EventHandler } from 'react';
import logo from './logo.svg';
import './App.css';
import { Icons } from './Icons';
import styled from 'styled-components';
import ChatList from './ChatList';
import { useState } from 'react';

const Side = styled.div`
    width: 23vh;
    height: 100vh;
    background-color: #202123;
    color: #ececf1;
    border-color: rgba(255, 255, 255, 0.2);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: nowrap;
`;
const ChatItemContainer = styled.div`
    -webkit-mask-image: linear-gradient(90deg, #000 85%, transparent);
    mask-image: linear-gradient(90deg, #000 90%, transparent);
    cursor: pointer;
`;
const NewChat = styled.button`
    width: 150px;
    height: 40px;
    background-color: #202123;
    color: #ececf1;
    border-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    cursor: pointer;
    &: hover {
        background-color: #343540;
    }
`;
const Sidebar = styled.button`
    width: 40px;
    height: 40px;
    background-color: #202123;
    color: #ececf1;
    border-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    cursor: pointer;
    &: hover {
        background-color: #343540;
    }
`;
const Profile = styled.div<{ isClick: boolean }>`
    height: 60px;
    background-color: ${(props) => (props.isClick ? '#343540' : 'black')};
    color: #ececf1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    &: hover {
        background-color: #343540;
    }
    border-radius: 10px;
`;
const More = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    margin-left: auto;
    margin-right: 30px;
    color: #8282a0;
`;
const Detail = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    color: #ececf1;
    align-items: start;
    height: 75px;
    justify-content: space-evenly;
    width: 20vh;
    border-radius: 5px;
    margin-left: 8px;
    padding: 5px;
    flex-grow: 1;
`;
const DetailItem = styled.div`
    width: 100%;
    height: 50%
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items : center;
    flex:1;
    &:hover {
        background-color: #343540;
    }
`;

function App() {
    const Image = '/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg';
    const setting = Icons.setting;
    const sidebar = Icons.sidebar;
    const add = Icons.add;
    const logout = Icons.logout;
    const more = Icons.more;

    const [isClick, setIsClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [chatItems, setChatItems] = useState([
        {
            title: 'react에서 list 렌더링 하는 법',
            chatId: '3',
            lastChat: new Date().getTime(),
        },
        {
            title: 'react 장점',
            chatId: '2',
            lastChat: new Date().getTime() - 3600 * 24 * 3 * 1000,
        },
        {
            title: 'react JSX',
            chatId: '1',
            lastChat: new Date().getTime() - 3600 * 24 * 8 * 1000,
        },
        {
            title: 'react 프레임워크',
            chatId: '0',
            lastChat: new Date().getTime() - 3600 * 24 * 9 * 1000,
        },
    ]);
    const handleAddchat = () => {
        const newchat = {
            title: '새로운 채팅',
            chatId: chatItems.length.toString(),
            lastChat: new Date().getTime(),
        };
        setChatItems((prevchatItems) => [newchat, ...prevchatItems]);
    };
    const handleDetail = () => {
        setIsClick((prevIsClick) => !prevIsClick);
    };
    const handleSidebar = () => {
        setIsOpen((prevIsOpne) => !prevIsOpne);
    };
    return (
        <div className="App">
            {isOpen && (
                <Side>
                    <div>
                        <h3 style={{ textAlign: 'start', marginLeft: '15px' }}>채팅</h3>
                        <div>
                            <NewChat onClick={handleAddchat}>{add} 새로운 채팅</NewChat>
                            <Sidebar onClick={handleSidebar}>{sidebar}</Sidebar>
                        </div>
                        <br />
                        <ChatItemContainer>
                            <ChatList chatItems={chatItems} />
                        </ChatItemContainer>
                    </div>
                    <div>
                        {isClick && (
                            <Detail>
                                <DetailItem>&nbsp;{setting} 설정</DetailItem>
                                <DetailItem>&nbsp;{logout} 로그아웃</DetailItem>
                            </Detail>
                        )}
                        <hr style={{ border: '1px solid #8282A0' }} />
                        <Profile onClick={handleDetail} isClick={isClick}>
                            <br />
                            <img src={Image} alt="Profile" style={{ width: '30px' }} />
                            &nbsp;고재현
                            <More>{more}</More>
                        </Profile>
                    </div>
                </Side>
            )}
            {!isOpen && (
                <div>
                    <Sidebar onClick={handleSidebar} style={{ float: 'left', marginLeft: '20px' }}>
                        {sidebar}
                    </Sidebar>
                </div>
            )}
        </div>
    );
}

export default App;
