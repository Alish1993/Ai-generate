import React, { JSX } from 'react';
import HaikuComponent from './components/HaikuComponent';
import SunsetImageComponent from './components/SunsetImageComponent';
import ChatComponent from './components/ChatComponent';

export default function App(): JSX.Element {
  return (
    <div>
      <h1>Генерация текста и изображений с Pollinations</h1>
      <HaikuComponent />
      <SunsetImageComponent />
      <ChatComponent />
    </div>
  );
}
