import React from 'react';
import Home from './pages/Home'; // Import Home
import BangXepHang from './pages/BangXepHang';
import Register  from './pages/DangKy';
import Login from './pages/DangNhap';
import QuenMatKhau from './pages/QuenMatKhau';
import DangKyKhoaHoc from './pages/DangKyKhoaHoc';
import TaiLieu from './pages/TaiLieu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tailieu" element={<TaiLieu />} />
        <Route path="/dangkykhoahoc" element={<DangKyKhoaHoc />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quenmatkhau" element={<QuenMatKhau />} />
      </Routes>
    </Router>
  );
}

export default App;
