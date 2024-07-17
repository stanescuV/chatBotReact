import React from 'react'
import Input from '../components/Input';
import ChatMessage from '../components/ChatMessage';
import "./mainPage.css"


function MainPage() {
  return (
    <div className='main-page' >
        <ChatMessage/>
        <Input />
    </div>
  )
}

export default MainPage