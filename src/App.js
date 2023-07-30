import React from 'react';
import { useState } from 'react';

import './App.css';
// import { ChatPage } from './pages/Chat/ChatPage';

const wsChanel = new WebSocket('ws://localhost:8080');

export type ChatMessageType = {
   text: string,
   url: string,
   id: number,
};

// export const messages = [
//    { id: 1, text: 'Hello, world!', url: 'https://picsum.photos/400/500' },
// ];

function App() {
   const [status, setStatus] = useState('close');
   const [messages, setMessages] = useState([]);

   wsChanel.onopen = () => {
      setStatus('open');
   };
   wsChanel.onclose = () => {
      setStatus('close');
   };
   wsChanel.onmessage = e => {
      const parsedNewMessages = JSON.parse(e.data);
      const {type} = parsedNewMessages; 
      if(type !== 'connection'){
        setMessages(prevMessage => [...prevMessage, ...parsedNewMessages]);
      }
   };
   return (
      <div className='chatWrapper'>
         <div>{status}</div>
         <Messages messages={messages} />
         <AddMessage />
      </div>
   );
}

function Messages({ messages }) {
   return (
      <div className='messagesWrapper'>
         {messages.map((message) => {
            return (
               <div key={message.id}>
                  <img src={message.url} alt={message.message} width='30' />
                  <div>{message.message}</div>
                  <button className='btn'>delete</button>
               </div>
            );
         })}
      </div>
   );
}

function AddMessage() {
   const [message, setMessage] = useState('');

   const sendMessage = () => {
      if (!message) return;

      const arr = {
         message: message,
         url: 'https://picsum.photos/400/500',
         id: Date.now(),
         name: 'User',
      };
      const messageJSON = JSON.stringify(arr);

      wsChanel.send(messageJSON);
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
