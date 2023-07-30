// import React from 'react'

// const ws = new WebSocket('ws://localhost:8080')

// ws.onmessage = (message) => {
// 	const messages = JSON.parse(message.data);
// 	messages.forEach((val) => {
// 		console.log(val);
// 	})
// }


// const send = (event) => {
// 	event.preventDefault();
// 	const avatar = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
// 	const name = 'John'
// 	const message = 'Hello'
// 	ws.send(JSON.stringify({
// 		 name, message, avatar,
// 	}))
// 	return false;
// } 


// function ChatPage(): JSX.Element{
//   return (
// 	 <div>
// 		<AddMessage/>
// 	 </div>
//   )
// }


// function AddMessage(): JSX.Element {
//   return (
// 	 <>
// 	 <div>
// <input type="text" name="name" id="name" />
//         <input type="text" name="message" id="message" />
// 		<textarea></textarea>
// 		</div>
// 		<div>
// 		<button onClick={send}>Send</button>
// 		</div>
// 	 </>

//   )
	
// }

// module.exports = {
// 	  ChatPage,
// 	  AddMessage
// }
