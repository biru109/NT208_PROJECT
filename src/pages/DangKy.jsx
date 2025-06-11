import { Link, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import logo from "../images/LogoDangKy.png";
import DienThoai from "../images/DienThoai.png";
import HoTen from "../images/HoVaTen.png";
import MatKhau from "../images/MatKhau.png";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"; // Import axios

export default function Register() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate for redirect

  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    confirmPassword: "",
    email: "", // Assuming you'll want an email field as well
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (location.state && location.state.contact) {
      setFormData((prevData) => ({
        ...prevData,
        phoneNumber: location.state.contact,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setError("Vui lòng nhập họ và tên");
      return;
    }

    if (formData.password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu không khớp");
      return;
    }

    setError(""); // Xóa lỗi cũ nếu hợp lệ

    // Prepare data for registration request
    const requestData = {
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
    };

    try {
      // Make the POST request to register the user
      const response = await axios.post(
        "http://103.130.219.194:8080/v1/auth/register",
        requestData,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      // If the response status is not 200, throw an error
      if (response.status !== 201) {
        setError("Đăng ký thất bại, vui lòng thử lại.");
        return;
      }

      // If successful, store the tokens in local storage
      localStorage.setItem("accessToken", response.data.tokens.access.token);
      localStorage.setItem("refreshToken", response.data.tokens.refresh.token);
      localStorage.setItem("userId", response.data.user.id);

      // Redirect to the home page
      navigate("/"); // Updated to use navigate
    } catch (error) {
      // Check if the error response exists and display the error message
      if (error.response) {
        setError(
          `Đăng ký thất bại: ${
            error.response.data.message || error.response.statusText
          }`
        );
      } else {
        setError("Đăng ký thất bại, vui lòng thử lại.");
      }
      console.error("Registration error:", error);
    }
  };

  useEffect(() => {
    document.body.classList.add("login-body");

    return () => {
      document.body.classList.remove("login-body");
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center mt-[2%] mb-[3%]">
      <div className="bg-white p-12 rounded-3xl w-full max-w-lg">
        <div className="flex flex-col items-center mb-3">
          <img src={logo} />
          <h1 className="text-4xl font-extrabold text-[#295F98] font-baloo py-2">
            HiStudy
          </h1>
        </div>

        <h2 className="text-center text-4xl font-semibold mb-16 font-noto">
          Đăng ký tài khoản
        </h2>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div>
            <label className="block text-2xl font-noto font-semibold mb-2">
              Họ và tên
            </label>
            <div className="relative">
              <input
                type="text"
                name="fullName"
                placeholder="Nhập họ tên..."
                value={formData.fullName}
                onChange={handleChange}
                className=" text-lg w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <img
                src={HoTen}
                alt="HoTen"
                className="absolute right-2 top-1 w-8 h-8 "
              />
            </div>
          </div>

          <div>
            <label className="block text-2xl font-noto font-semibold mb-2">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Nhập email..."
                value={formData.email}
                onChange={handleChange}
                className="text-lg w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-2xl font-noto font-semibold mb-2">
              Mật khẩu
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)..."
                value={formData.password}
                onChange={handleChange}
                className=" text-lg w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <img
                src={MatKhau}
                alt="Mat Khau"
                className="absolute right-3 top-2 w-6 h-6 "
              />
            </div>
          </div>

          <div>
            <label className="block text-2xl font-noto font-semibold mb-2">
              Nhập lại mật khẩu
            </label>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu..."
                value={formData.confirmPassword}
                onChange={handleChange}
                className="text-lg w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <img
                src={MatKhau}
                alt="Mat Khau"
                className="absolute right-3 top-2 w-6 h-6 "
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#2054B2] text-white text-xl font-noto font-bold py-2 w-full rounded-xl hover:bg-blue-500 transition-colors"
          >
            Đăng ký
          </button>

          {error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg mt-4 text-center text-lg font-semibold">
              {error}
            </div>
          )}
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
