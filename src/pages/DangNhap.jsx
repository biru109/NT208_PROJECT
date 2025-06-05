import { useState } from "react";
import logo from '../images/LogoDangKy.png'; 
import DienThoai from '../images/DienThoai.png'
import HoTen from '../images/HoVaTen.png'
import MatKhau from '../images/MatKhau.png'
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Xử lý logic đăng nhập tại đây
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f9ff] py-8">
      <div className="bg-white p-12 rounded-3xl w-full max-w-lg">
        <div className="flex flex-col items-center mb-3">
          <img src={logo} alt="Logo" />
          <h1 className="text-4xl font-extrabold text-[#295F98] font-baloo py-2">HiStudy</h1>
        </div>

        <h2 className="text-center text-4xl font-semibold mb-12 font-noto">Đăng nhập</h2>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div>
            <label className="block text-2xl font-noto font-semibold mb-2">Số điện thoại</label>
            <div className="relative">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Nhập số điện thoại..."
                value={formData.phoneNumber}
                onChange={handleChange}
                className="text-xl w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-2xl font-noto font-semibold mb-2">Mật khẩu</label>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Nhập mật khẩu..."
                value={formData.password}
                onChange={handleChange}
                className="text-xl w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <img src={MatKhau} alt="Mat Khau" className="absolute right-3 top-3 w-6 h-6" />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#2054B2] text-white text-xl font-noto font-bold py-2 w-full rounded-xl hover:bg-blue-500 transition-colors"
          >
            Đăng nhập
          </button>
        </form>
        <div className="flex justify-between py-4 text-lg">
            <a href="/quenmatkhau" className="text-[#2054B2] hover:underline">
            Quên mật khẩu?
            </a>
            <a href="/register" className="text-[#2054B2] hover:underline">
            Đăng ký tài khoản
            </a>
        </div>
      </div>
    </div>
  );
}