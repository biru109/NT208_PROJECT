import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../images/Logo.png";
import kinhlup from "../images/TimKiem.png";
import axios from "axios";

export default function Header() {
  const menuItems = [
    { id: "home", label: "Trang chủ", to: "/" },
    { id: "khoahoc", label: "Khóa học", to: "/courses" },
    { id: "thithu", label: "Thi thử", to: "/exams" },
    { id: "tailieu", label: "Tài liệu", to: "/docs" },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");

    if (accessToken && userId) {
      axios
        .get(`http://localhost:8080/v1/users/${userId}`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          setUser(response.data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error("User authentication failed", error);
          setIsLoggedIn(false);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <header className="header fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="header-top">
        <div className="header-left">
          <img src={logo} alt="HiStudy Logo" className="logo" />
          <span className="brand-name">HiStudy</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm khóa học, bài học..." />
          <button className="search-btn">
            <img src={kinhlup} alt="Tìm kiếm" />
          </button>
        </div>

        <div className="auth-buttons">
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button className="login-btn">Đăng nhập</button>
              </Link>
              <Link to="/register">
                <button className="register-btn">Đăng ký</button>
              </Link>
            </>
          ) : (
            <div className="user-info">
              <span className="username">Hi, {user.name}</span>
              <button onClick={handleLogout} className="logout-btn">
                Đăng xuất
              </button>
            </div>
          )}
        </div>
      </div>

      <nav className="menu flex gap-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.id}
              to={item.to}
              className={`your-classnames ${isActive ? "active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
