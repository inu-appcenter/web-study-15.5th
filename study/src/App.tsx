import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatList from './ChatList';

function App() {
    const chatItems = [
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
    ];

    return (
        <div className="App">
            <h1>채팅</h1>
            <ChatList chatItems={chatItems} />
        </div>
    );
}

export default App;
