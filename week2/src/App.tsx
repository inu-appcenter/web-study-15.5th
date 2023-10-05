import ChatComponent from "./ChatComponent";

const chatItems = [
  {
    title: "react에서 list 렌더링하는법",
    chatId: "3",
    lastChat: new Date().getTime(),
  },
  {
    title: "react 장점",
    chatId: "2",
    lastChat: new Date().getTime() - 3600 * 24 * 3,
  },
  {
    title: "react JSX",
    chatId: "1",
    lastChat: new Date().getTime() - 3600 * 24 * 8,
  },
  {
    title: "react 프레임워크",
    chatId: "0",
    lastChat: new Date().getTime() - 3600 * 24 * 9,
  },
];

function App() {
  return (
    <div>
      <h1>채팅</h1>
      <ChatComponent chatItems={chatItems} />
    </div>
  );
}

export default App;
