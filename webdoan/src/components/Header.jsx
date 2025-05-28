import React from 'react';
import './Header.css'; // Import file CSS
import logo from '../images/Logo.png'; // import ảnh vào trước
import kinhlup from '../images/TimKiem.png'; 
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className=" header fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        {/* Logo và tên HiStudy */}
      <div className="header-top">
          <div className="header-left">
            <img src={logo} alt="HiStudy Logo" className="logo" />
            <span className="brand-name">  HiStudy</span>
          </div>

          {/* Ô tìm kiếm */}
          <div className="search-bar">
            <input type="text" placeholder="Tìm kiếm khóa học, bài học..." />
            <button className="search-btn"><img src={kinhlup}></img></button>
          </div>

          {/* Nút đăng nhập và đăng ký */}
          <div className="auth-buttons">
            <Link to="/login">
              <button className="login-btn">Đăng nhập</button>
            </Link>
            <Link to="/register">
              <button className="register-btn">Đăng ký</button>
            </Link>
            
          </div> 

      </div>

      {/* Menu điều hướng */}
      <nav className="menu">
        <a href="/" className="active">Trang chủ</a>
        <a href="#">Khóa học</a>
        <a href="#">Thi thử</a>
        <a href="#">Tài liệu</a>
      </nav>
    </header>
  );
}

export default Header;
