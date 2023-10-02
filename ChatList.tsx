import React from 'react';

const ChatList: React.FC<{ chatItems: { title: string; chatId: string; lastChat: number }[] }> = ({ chatItems }) => {
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
        <div style={{ textAlign: 'left', marginLeft: '350px' }}>
            {groupByDate.lastDay && (
                <>
                    <h2 style={{ marginLeft: '20px' }}>지난 1일</h2>

                    {groupByDate.lastDay.map((chat) => (
                        <li key={chat.chatId}>{chat.title}</li>
                    ))}
                </>
            )}
            {groupByDate.lastWeek && (
                <>
                    <h2 style={{ marginLeft: '20px' }}>지난 7일</h2>

                    {groupByDate.lastWeek.map((chat) => (
                        <li key={chat.chatId}>{chat.title}</li>
                    ))}
                </>
            )}
            {groupByDate.lastMonth && (
                <>
                    <h2 style={{ marginLeft: '20px' }}>지난 30일</h2>

                    {groupByDate.lastMonth.map((chat) => (
                        <li key={chat.chatId}>{chat.title}</li>
                    ))}
                </>
            )}
        </div>
    );
};

export default ChatList;
