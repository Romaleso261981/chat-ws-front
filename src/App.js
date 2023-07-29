import React, { useEffect } from 'react';
import { useState } from 'react';

import './App.css';
// import { ChatPage } from './pages/Chat/ChatPage';

const wsChanel = new WebSocket('wss://localhost:8080');

export type ChatMessageType = {
   text: string,
   url: string,
   id: number,
};

const messages = [
   { id: 1, text: 'Hello, world!', url: 'https://picsum.photos/400/500' },
   { id: 2, text: 'How are you?', url: 'https://picsum.photos/400/500' },
   { id: 3, text: 'I am fine', url: 'https://picsum.photos/400/500' },
   { id: 4, text: 'How about you?', url: 'https://picsum.photos/400/500' },
];

function App() {
   return (
      <div className='chatWrapper'>
         <Messages messages={messages} />
         <AddMessage />
      </div>
   );
}

function Messages() {
   const [messages, setMessages] = useState([]);

   useEffect(() => {
      wsChanel.addEventListener('message', e => {
         setMessages(prevMessages => [...prevMessages, ...JSON.parse(e.data)]);
      });
   }, [messages]);

   return (
      <div className='messagesWrapper'>
         {messages.map(message => (
            <div key={message.id}>
               <img src={message.url} alt={message.text} width='30' />
               <div key={message.id}>{message.text}</div>
            </div>
         ))}
      </div>
   );
}

function AddMessage() {
   const [message, setMessage] = useState('');

   const sendMessage = () => {
    if(!message) return;
      wsChanel.send(message);
      setMessage('');
   };
   return (
      <>
         <div>
            <textarea
               onChange={e => {
                  setMessage(e.currentTarget.value);
               }}
               value={message}
            ></textarea>
         </div>
         <div>
            <button onClick={sendMessage}>Send</button>
         </div>
      </>
   );
}

export default App;
