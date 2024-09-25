import React from 'react';
import Image from 'next/image';
import SplitterImage from '../assets/splitter.png'; // Adjust the path as needed

const Splitter: React.FC = () => {
    return (
      <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <Image 
          src={SplitterImage} 
          alt="Recorder" 
          layout="fill" // This will cover the entire parent element
          objectFit="cover" // This maintains the aspect ratio
        />
      </div>
    );
};

export default Splitter;