import { useState, useEffect } from "react";
import logo from "../images/LogoDangKy.png";
import MatKhau from "../images/MatKhau.png";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate for redirection
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // State to store errors
  const navigate = useNavigate(); // For redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format using a regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(formData.email)) {
      setError("Email không hợp lệ");
      return;
    }

    if (formData.password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }

    setError(""); // Clear any previous errors if the form is valid

    // Prepare data for login request
    const requestData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      // Make the POST request to login the user
      const response = await axios.post(
        "http://localhost:8080/v1/auth/login",
        requestData,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      // If the response status is 200, store the tokens in local storage
      if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.tokens.access.token);
        localStorage.setItem(
          "refreshToken",
          response.data.tokens.refresh.token
        );
        localStorage.setItem("userId", response.data.user.id);

        // Redirect to the home page after successful login
        navigate("/"); // Redirect to the home page
      } else {
        setError("Đăng nhập thất bại, vui lòng thử lại.");
      }
    } catch (error) {
      if (error.response) {
        setError(
          `Đăng nhập thất bại: ${
            error.response.data.message || error.response.statusText
          }`
        );
      } else {
        setError("Đăng nhập thất bại, vui lòng thử lại.");
      }
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    document.body.classList.add("login-body");

    // Cleanup when leaving the page
    return () => {
      document.body.classList.remove("login-body");
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center mt-[2%] mb-[3%]">
      <div className="bg-white p-12 rounded-3xl w-full max-w-lg">
        <div className="flex flex-col items-center mb-3">
          <img src={logo} alt="Logo" />
          <h1 className="text-4xl font-extrabold text-[#295F98] font-baloo py-2">
            HiStudy
          </h1>
        </div>

        <h2 className="text-center text-4xl font-semibold mb-12 font-noto">
          Đăng nhập
        </h2>

        <form onSubmit={handleSubmit} className="space-y-12">
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
                className="text-xl w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                placeholder="Nhập mật khẩu..."
                value={formData.password}
                onChange={handleChange}
                className="text-xl w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <img
                src={MatKhau}
                alt="Mat Khau"
                className="absolute right-3 top-3 w-6 h-6"
              />
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
          <Link
            to="/forgot-password"
            className="text-[#2054B2] hover:underline"
          >
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
