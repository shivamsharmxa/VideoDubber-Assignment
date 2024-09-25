// src/app/components/Recorder.tsx
import React from 'react';
import Image from 'next/image';
import RecorderImage from '../assets/Recorder.png'; // Adjust the path as needed

const Recorder: React.FC = () => {
    return (
      <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <Image 
          src={RecorderImage} 
          alt="Recorder" 
          layout="fill" // This will cover the entire parent element
          objectFit="cover" // This maintains the aspect ratio
        />
      </div>
    );
};

export default Recorder;
