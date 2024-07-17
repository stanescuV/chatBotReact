import React from 'react';
import { MessageBox } from "react-chat-elements"

export function ChatMessage(){
    return (
        <MessageBox
        styles={{color:'black'}}
        position={"left"}
        type={"text"}
        title={"ChatGPT"}
        text="How can I help you today :) ? "/>)
}



export default ChatMessage;