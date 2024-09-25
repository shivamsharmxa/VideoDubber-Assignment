// src/app/page.tsx
'use client';

import React from 'react';
import MainContent from './components/MainContent';
import Footer from './components/Footer';



const Home = () => {
  return (
    <div className="app">
     
      <main className="content">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
