import React from 'react';
import Image from 'next/image';
import JoinerImage from '../assets/joiner.png'; // Adjust the path as needed

const Joiner: React.FC = () => {
    return (
      <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <Image 
          src={JoinerImage} 
          alt="Recorder" 
          layout="fill" // This will cover the entire parent element
          objectFit="cover" // This maintains the aspect ratio
        />
      </div>
    );
};

export default Joiner;