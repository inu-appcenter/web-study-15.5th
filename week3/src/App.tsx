import SideBarComponent from "./SideBarComponent";

const containerStyle = {
  display: "flex",
  "flex-direction": "row",
};

const sideBarStyle = {
  minWidth: "235px",
  maxWidth: "235px",
  height: "100vh",
};

const chatStyle = {};

function App() {
  return (
    <div style={containerStyle}>
      <div style={sideBarStyle}>
        <SideBarComponent />
      </div>
      <div style={chatStyle}>
        <h1>TODO: 채팅화면</h1>
      </div>
    </div>
  );
}

export default App;
