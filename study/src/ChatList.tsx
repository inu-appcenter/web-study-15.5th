import React from 'react';
import { Icons } from './Icons';
import styled from 'styled-components';

const ChatItem = styled.div`
    margin-left: 20px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    &: hover {
        background-color: #343540;
    }
    margin-botton: 3px;
`;

const ChatList: React.FC<{ chatItems: { title: string; chatId: string; lastChat: number }[] }> = ({ chatItems }) => {
    const chatIcon = Icons.chat;
    const lastDay = new Date().getTime();

    const groupByDate: {
        lastDay?: { title: string; chatId: string; lastChat: number }[];
        lastWeek?: { title: string; chatId: string; lastChat: number }[];
        lastMonth?: { title: string; chatId: string; lastChat: number }[];
    } = {};

    chatItems.forEach((item) => {
        const diff = Math.floor((lastDay - item.lastChat) / (1000 * 3600 * 24));
        const groupKey = diff <= 1 ? 'lastDay' : diff <= 7 ? 'lastWeek' : 'lastMonth';

        if (!groupByDate[groupKey]) {
            groupByDate[groupKey] = [];
        }

        groupByDate[groupKey]?.push(item);
    });

    return (
        <div style={{ textAlign: 'left' }}>
            {groupByDate.lastDay && (
                <>
                    <p style={{ marginLeft: '20px', color: '#8282A0' }}>지난 1일</p>

                    {groupByDate.lastDay.map((chat) => (
                        <ChatItem style={{ marginLeft: '20px', cursor: 'pointer' }} key={chat.chatId}>
                            {chatIcon} &nbsp;
                            {chat.title}
                        </ChatItem>
                    ))}
                </>
            )}
            {groupByDate.lastWeek && (
                <>
                    <p style={{ marginLeft: '20px', color: '#8282A0' }}>지난 7일</p>

                    {groupByDate.lastWeek.map((chat) => (
                        <ChatItem style={{ marginLeft: '20px', cursor: 'pointer' }} key={chat.chatId}>
                            {chatIcon} &nbsp;
                            {chat.title}
                        </ChatItem>
                    ))}
                </>
            )}
            {groupByDate.lastMonth && (
                <>
                    <p style={{ marginLeft: '20px', color: '#8282A0' }}>지난 30일</p>

                    {groupByDate.lastMonth.map((chat) => (
                        <ChatItem key={chat.chatId}>
                            {chatIcon} &nbsp;
                            {chat.title}
                        </ChatItem>
                    ))}
                </>
            )}
        </div>
    );
};

export default ChatList;
