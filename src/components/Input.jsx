import React, { useState } from 'react';

export function Input() {
  const [inputValue, setInputValue] = useState("");
  const [messageArr, setMessageArr] = useState([]);
  
  const sendInputServer = (inputValue) =>{
    fetch(`http://localhost:3000/query`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({ message: inputValue })
    })
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const createOwnMessage = (inputValue) => {
    if (inputValue !== null && inputValue !== "") {
      let messageObject = {
        "userText": `${inputValue}`
      };

      setMessageArr(prevMessages => [...prevMessages, messageObject]);
    }
  };

  const displayMessages = (messageArr) => {
    return messageArr.map((msg, index) => (
      <div key={index} style={{textAlign: 'right', margin: '10px 0'}}>
        <div style={{display: 'inline-block', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '10px'}}>
          <strong>User:</strong> {msg.userText}
        </div>
      </div>
    ));
  };

  const handleSendClick = () => {
    createOwnMessage(inputValue);
    sendInputServer(inputValue);
    setInputValue("");  // Clear the input field after sending the message
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendClick();
    }
  };

  return (
    <div className='input'>
      {messageArr.length > 0 && displayMessages(messageArr)}
      <div style={{marginTop: '20px'}}>
        <textarea
          placeholder="Type here..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{width: '100%', padding: '10px', boxSizing: 'border-box'}}
        />
        <button onClick={handleSendClick} style={{marginTop: '10px', padding: '10px 20px'}}>Send</button>
      </div>
    </div>
  );
}

export default Input;
