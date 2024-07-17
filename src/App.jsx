// src/App.jsx
import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import ChatMessage from './components/ChatMessage';

function App() {

  return (
    <>
      <ChatMessage></ChatMessage>
      <Input />
    </>
  );
}

export default App;
