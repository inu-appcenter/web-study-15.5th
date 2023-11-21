import './App.css';
import logo from './logo.svg';
import Sidebar from './Components/Sidebar';
import { Icons } from './Icons';
import { useState } from 'react';
import profileImg from './profile_image.jpg';
import Chat from './ChatList';

const chatList={
  
}



const App = () => {

  const [chatContent,setchatContent ] =useState('chatList'); 

  return (
    <div className='App'>
    <aside className="sidemenu">
      <Sidebar />
    </aside>  

    <section className='ChatBox'>
      <div className='chat-input-box'>
        <textarea className='textInputArea'name="textarea" id="request" placeholder='Message ChatGPT...'></textarea>
      </div>
      
      </section>  
     
      </div>
  );
};
export default App;