import React from 'react';
import Image from 'next/image';
import keyImage from '../assets/key.png'; // Adjust the path as needed

const Key: React.FC = () => {
    return (
      <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <Image 
          src={keyImage} 
          alt="Recorder" 
          layout="fill" // This will cover the entire parent element
          objectFit="cover" // This maintains the aspect ratio
        />
      </div>
    );
};

export default Key;