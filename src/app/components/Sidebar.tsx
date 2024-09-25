'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaMusic, FaMicrophone, FaCut, FaSlidersH, FaHeadphones, FaQuestionCircle, FaHome, FaChartBar, FaLanguage, FaBars } from 'react-icons/fa';
import '../styles/Sidebar.css'; // Adjust the path as necessary

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
      {isOpen && (
        <nav>
          <Link href="/splitter" className="sidebar-link">
            <FaHome />
          </Link>
          <Link href="/splitter" className="sidebar-link">
            <FaCut />
          </Link>
          <Link href="/pitcher" className="sidebar-link">
            <FaMusic />
          </Link>
          <Link href="/key-bpm-finder" className="sidebar-link">
            <FaSlidersH />
          </Link>
          <Link href="/recorder" className="sidebar-link">
            <FaMicrophone />
          </Link>
          <Link href="/joiner" className="sidebar-link">
            <FaHeadphones />
          </Link>
          <Link href="/audio" className="sidebar-link">
            <FaChartBar />
          </Link>
          <Link href="/help" className="sidebar-link">
            <FaQuestionCircle />
          </Link>
          {/* Language Icons */}
          <div className="language-icons">
            <Link href="/language/english" className="sidebar-link">
              <FaLanguage />
            </Link>
            <Link href="/language/spanish" className="sidebar-link">
              <FaLanguage />
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
