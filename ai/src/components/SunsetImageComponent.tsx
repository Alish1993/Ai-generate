import React from 'react';
import { usePollinationsImage } from '@pollinations/react';

const SunsetImageComponent = () => {
  const imageUrl = usePollinationsImage('A beautiful sunset over the ocean', {
    width: 800,
    height: 600,
    seed: 42,
    model: 'turbo',
    nologo: true,
    enhance: false
  });

  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt="Generated sunset" /> : <p>Loading...</p>}
    </div>
  );
};

export default SunsetImageComponent;