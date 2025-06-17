// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Import CSS cho header

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <h1>HiStudy</h1> {/* Logo của ứng dụng */}
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/managecourse">Sửa Khóa Học</Link>
          </li>
          <li>
            <Link to="/edit-exam">Sửa Bài Tập</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
