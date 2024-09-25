import React from 'react';
import Image from 'next/image';
import pitcherImage from '../assets/pitcherImage.png'; // Adjust the path as needed

const Pitcher: React.FC = () => {
    return (
      <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <Image 
          src={pitcherImage} 
          alt="Recorder" 
          layout="fill" // This will cover the entire parent element
          objectFit="cover" // This maintains the aspect ratio
        />
      </div>
    );
};

export default Pitcher;