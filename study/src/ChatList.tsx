import React from 'react';

const ChatList: React.FC<{ chatItems: { title: string; chatId: string; lastChat: number }[] }> = ({ chatItems }) => {
    const today = new Date().getTime();

    const groupByDate: {
        today?: { title: string; chatId: string; lastChat: number }[];
        lastWeek?: { title: string; chatId: string; lastChat: number }[];
        lastMonth?: { title: string; chatId: string; lastChat: number }[];
    } = {};

    chatItems.forEach((item) => {
        const diff = Math.floor((today - item.lastChat) / (1000 * 3600 * 24));
        const groupKey = diff <= 1 ? 'today' : diff <= 7 ? 'lastWeek' : 'lastMonth';

        groupByDate[groupKey] = [];
        groupByDate[groupKey]?.push(item);
    });

    return (
        <div>
            {groupByDate.today && (
                <>
                    <h2>지난 1일</h2>

                    {groupByDate.today.map((chat) => (
                        <li key={chat.chatId}>{chat.title}</li>
                    ))}
                </>
            )}
            {groupByDate.lastWeek && (
                <>
                    <h2>지난 7일</h2>

                    {groupByDate.lastWeek.map((chat) => (
                        <li key={chat.chatId}>{chat.title}</li>
                    ))}
                </>
            )}
            {groupByDate.lastMonth && (
                <>
                    <h2>지난 30일</h2>

                    {groupByDate.lastMonth.map((chat) => (
                        <li key={chat.chatId}>{chat.title}</li>
                    ))}
                </>
            )}
        </div>
    );
};

export default ChatList;
