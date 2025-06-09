import { useState } from "react";
import logo from '../images/LogoDangKy.png'; 
import DienThoai from '../images/DienThoai.png';
import MatKhau from '../images/MatKhau.png';
import { Link } from 'react-router-dom';
import { useEffect } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const [error, setError] = useState(""); // ✅ Thêm state lưu lỗi

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^(0|\+84)[0-9]{9}$/;

    if (!phoneRegex.test(formData.phoneNumber)) {
      setError("Số điện thoại không hợp lệ");
      return;
    }

    if (formData.password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }

    setError(""); // ✅ Xóa lỗi cũ nếu hợp lệ
    console.log("Thông tin đăng nhập hợp lệ", formData);
  };

  useEffect(() => {
    document.body.classList.add("login-body");

    // Khi rời khỏi trang, gỡ class ra
    return () => {
      document.body.classList.remove("login-body");
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center mt-[2%] mb-[3%]">
      <div className="bg-white p-12 rounded-3xl w-full max-w-lg">
        <div className="flex flex-col items-center mb-3 ">
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

          {error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg mt-4 text-center text-lg font-semibold">
              {error}
            </div>
          )}
        </form>

        <div className="flex justify-between py-4 text-lg">
          <Link to="/forgot-password" className="text-[#2054B2] hover:underline">
            Quên mật khẩu?
          </Link>
          <Link to="/register" className="text-[#2054B2] hover:underline">
            Đăng ký tài khoản
          </Link>
        </div>
      </div>
    </div>
  );
}

