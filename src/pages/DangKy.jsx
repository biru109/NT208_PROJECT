import { Link } from 'react-router-dom';
import logo from '../images/LogoDangKy.png'; 
import DienThoai from '../images/DienThoai.png'
import HoTen from '../images/HoVaTen.png'
import MatKhau from '../images/MatKhau.png'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Register() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (location.state && location.state.contact) {
      setFormData(prevData => ({
        ...prevData,
        phoneNumber: location.state.contact,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Xử lý đăng ký tại đây
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f9ff] py-8">
      <div className="bg-white p-12 rounded-3xl w-full max-w-lg">
        <div className="flex flex-col items-center mb-3">
            <img src={logo}  />
          <h1 className="text-4xl font-extrabold text-[#295F98] font-baloo py-2">HiStudy</h1>
        </div>

        <h2 className="text-center text-4xl font-semibold mb-16 font-noto">Đăng ký tài khoản</h2>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div>
            <label className="block text-2xl font-noto font-semibold mb-2">Họ và tên</label>
            <div className="relative">
              <input
                type="text"
                name="fullName"
                placeholder="Nhập họ tên..."
                value={formData.fullName}
                onChange={handleChange}
                className=" text-lg w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <img src={HoTen} alt="HoTen" className="absolute right-2 top-1 w-8 h-8 "/>
            </div>
          </div>

          <div>
            <label className="block text-2xl font-noto font-semibold mb-2">Số điện thoại</label>
            <div className="relative">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Nhập số điện thoại..."
                value={formData.phoneNumber}
                onChange={handleChange}
                className="text-lg w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <img src={DienThoai} alt="Dien Thoai" className="absolute right-3 top-2 w-7 h-7 "/>
            </div>
          </div>

          <div>
            <label className="block text-2xl font-noto font-semibold mb-2">Mật khẩu</label>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)..."
                value={formData.password}
                onChange={handleChange}
                className=" text-lg w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <img src={MatKhau} alt="Mat Khau" className="absolute right-3 top-2 w-6 h-6 "/>
            </div>
          </div>

          <div>
            <label className="block text-2xl font-noto font-semibold mb-2">Nhập lại mật khẩu</label>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu..."
                value={formData.confirmPassword}
                onChange={handleChange}
                className="text-lg w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <img src={MatKhau} alt="Mat Khau" className="absolute right-3 top-2 w-6 h-6 "/>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#2054B2] text-white text-xl font-noto font-bold py-2 w-full rounded-xl hover:bg-blue-500 transition-colors"
          >
            Đăng ký
          </button>
        </form>

        <p className="text-center text-[#808080] text-lg mt-6">
          Đã có tài khoản?{" "}
          <Link to="/login" className="text-[#2054B2] hover:underline">
          Đăng nhập ngay
          </Link>

        </p>
      </div>
    </div>
  );
}
