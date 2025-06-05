import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../images/Logo.png';
import kinhlup from '../images/TimKiem.png';

export default function Header() {
  const menuItems = [
    { id: 'home', label: 'Trang chủ', to: '/' },
    { id: 'khoahoc', label: 'Khóa học', to: '/courses' },
    { id: 'thithu', label: 'Thi thử', to: '/exams' },
    { id: 'tailieu', label: 'Tài liệu', to: '/docs' },
  ];

  // Dùng useLocation để biết trang hiện tại, auto active link đúng
  const location = useLocation();

  return (
    <header className="header fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="header-top">
        <div className="header-left">
          <img src={logo} alt="HiStudy Logo" className="logo" />
          <span className="brand-name">HiStudy</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm khóa học, bài học..." />
          <button className="search-btn"><img src={kinhlup} alt="Tìm kiếm" /></button>
        </div>

        <div className="auth-buttons">
          <Link to="/login">
            <button className="login-btn">Đăng nhập</button>
          </Link>
          <Link to="/register">
            <button className="register-btn">Đăng ký</button>
          </Link>
        </div>
      </div>

      <nav className="menu flex gap-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.id}
              to={item.to}
              className={`your-classnames ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
