import React from 'react'

function ChatPage(): JSX.Element{
  return (
	 <div>
		<AddMessage/>
	 </div>
  )
}


function AddMessage(): JSX.Element {
  return (
	 <>
	 <div>
		<textarea></textarea>
		</div>
		<div>
		<button>Send</button>
		</div>
	 </>

  )
	
}

module.exports = {
	  ChatPage,
	  AddMessage
}
