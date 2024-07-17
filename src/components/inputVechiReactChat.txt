import React, { useState } from 'react';
import { Input as ChatInput } from 'react-chat-elements';
import { MessageBox } from "react-chat-elements";

export function Input() {
  const [inputValue, setInputValue] = useState("");
  const [messageArr, setMessageArr] = useState([]);
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const createOwnMessage = (inputValue) => {
    if (inputValue !== null && inputValue !== "") {
      let compObject = {
        "component": <MessageBox
                        styles={{color: 'black'}}
                        position={"right"}
                        type={"text"}
                        title={"User"}
                        text={inputValue}/>,
        "userText": `${inputValue}`
      };

      setMessageArr(prevMessages => [...prevMessages, compObject]);
    }
  };

  const displayMessages = (messageArr) => {
    return messageArr.map((comp, index) => (
      <div key={index}>
        {comp.component}
      </div>
    ));
  };

  const handleSendClick = () => {
    createOwnMessage(inputValue);
    setInputValue("");  // Clear the input field after sending the message
  };

  return (
    <div className='input'>
      {messageArr.length > 0 && displayMessages(messageArr)}
      <ChatInput
        placeholder="Type here..."
        multiline={true}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
}

export default Input;
