import React from 'react';
import { usePollinationsText } from '@pollinations/react';

const HaikuComponent = () => {
  const text = usePollinationsText('Write a short haiku about Pollinations.AI', {
    seed: 42,
    model: 'mistral',
    systemPrompt: 'You are a poetic AI assistant.',
  });

  return <div>{text ? <p>{text}</p> : <p>Loading...</p>}</div>;
};

export default HaikuComponent;
