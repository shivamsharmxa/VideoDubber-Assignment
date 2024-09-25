import React from 'react';
import Image from 'next/image';
import audioImage from '../assets/audio.png'; // Adjust the path as needed

const Audio: React.FC = () => {
    return (
      <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <Image 
          src={audioImage} 
          alt="Recorder" 
          layout="fill" // This will cover the entire parent element
          objectFit="cover" // This maintains the aspect ratio
        />
      </div>
    );
};

export default Audio;