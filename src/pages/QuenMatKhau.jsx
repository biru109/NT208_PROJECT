import { useState } from "react";
import logo from '../images/LogoDangKy.png'; 
import DienThoai from '../images/DienThoai.png'
import HoTen from '../images/HoVaTen.png'
import MatKhau from '../images/MatKhau.png'

export default function ForgotPassword() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Số điện thoại:", phoneNumber);
    // Xử lý logic gửi mã OTP tại đây
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f9ff] py-8">
      <div className="bg-white p-12 rounded-3xl w-full max-w-lg">
        <div className="flex flex-col items-center mb-2">
          <img src={logo} alt="HiStudy Logo" />
          <h1 className="text-4xl font-extrabold text-[#295F98] font-baloo py-1">HiStudy</h1>
        </div>

        <h2 className="text-center text-4xl font-semibold font-noto mb-2 ">Quên mật khẩu</h2>
        <p className="mb-16 text-center"> Nhập số điện thoại để nhận mã OTP đặt lại mật khẩu </p>

        <form onSubmit={handleSubmit} className="space-y-16">
          <div>
            <label className="block text-2xl font-noto font-semibold mb-2">Số điện thoại</label>
            <div className="relative">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Nhập số điện thoại..."
                value={phoneNumber}
                onChange={handleChange}
                className="text-lg w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#2054B2] text-white text-xl font-noto font-bold py-2 w-full rounded-xl hover:bg-blue-500 transition-colors"
          >
            Gửi mã OTP
          </button>
        </form>

        <p className="text-center text-[#808080] text-lg mt-6">
          <a href="/login" className="text-[#2054B2] hover:underline">
            Quay lại đăng nhập
          </a>
        </p>
      </div>
    </div>
  );
}