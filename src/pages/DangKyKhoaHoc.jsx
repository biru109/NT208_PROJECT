import Header from '../components/Header'; 
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import dk from "../images/DangKyKH.jpg";
import './DangKyKhoaHoc.css';

// Dữ liệu khóa học - có thể lấy từ back-end
const courseInfo = {
    title: 'Toán lớp 1 nâng cao',
    description: 'Phát triển tư duy toán học với các bài tập nâng cao dành cho học sinh giỏi',
    lessons: 25,
    teacher: 'Cô Nguyễn Thị Hồng'
};

export default function DangKy(){
    const [name, setName] = useState('');
    const [gender, setGender] = useState('Nam');
    const [grade, setGrade] = useState('Lớp 1');
    const [error, setError] = useState(''); // thêm state lỗi tên
    const nameInputRef = useRef(null); // ref để focus input
    const navigate = useNavigate(); // dùng để chuyển trang

    // Hàm xử lý khi bấm nút Ghi danh
    const handleSubmit = () => {
        // Giả lập danh sách tên đã đăng ký (sẽ thay bằng call API real trong backend)
        const existingNames = ['Nguyễn Văn A', 'Trần Thị B'];

        if (existingNames.includes(name.trim())) {
            setError('Tên đã tồn tại. Vui lòng chọn tên khác.');
            nameInputRef.current?.focus(); // focus vào input tên
            return;
        }

        setError(''); // clear lỗi nếu không trùng

        // Gửi dữ liệu đăng ký đến backend (chừa chỗ xử lý)
        console.log({ name, gender, grade });
        alert('Đã ghi danh thành công!');

        // Chuyển sang trang chi tiết khóa học sau khi ghi danh
        navigate('/courses/detail');
    };

    return (
        <div>
            <Header/ >
            <div className="bg-[#f5f9ff] min-h-screen px-6 py-[4%] font-noto text-black">
                <h2 className="text-3xl font-bold text-center">GHI DANH VÀO KHÓA HỌC</h2>
                <p className=" text-center text-lg mb-6 mt-4">Hoàn tất thông tin để bắt đầu hành trình học tập!!</p>

                <div className="min-h-screen flex justify-center px-36 font-noto">
                    <div className="max-w w-full bg-white px-8 py-2 rounded-3xl shadow-md">
                        <p className="text-2xl font-bold mb-4 mt-6"> {courseInfo.title } </p>
                        <div className="flex justify-between gap-8">
                            {/* Thông tin khóa học */}
                            <div className="flex-[4] bg-white rounded-3xl shadow-xl font-montserrat h-[450px]">
                                <div className="bg-[#E74C3C] max-w text-white p-16 rounded-t-2xl mb-3">
                                    <h3 className="text-lg font-semibold text-center">{courseInfo.title}</h3>
                                </div>
                                <div className="px-6">
                                    <p className="text-lg font-semibold mb-1 mt-4"> {courseInfo.title } </p>
                                    <p className="text-[#808080] mb-2 text-md">{courseInfo.description}</p>
                                    <div className="flex gap-2 mt-8">
                                        <img src={dk} alt="sobaihoc" />
                                        <span className="mt-1 text-black">{courseInfo.lessons} bài học</span>
                                    </div>
                                    <p className="text-black mt-2 mb-20">{courseInfo.teacher}</p>
                                </div>
                            </div>
                            {/* Form đăng ký */}
                            <div className="flex-[6] bg-white p-6 rounded-3xl border-2 border-[#f0f0f0] shadow-2xl mb-24">
                                <h3 className="text-2xl font-bold mb-3 font-noto">Thông tin đăng ký</h3>
                                <hr className="kengang" />
                                <label className="block mb-4 mt-8 font-bold text-xl">Họ và tên</label>
                                <input
                                    ref={nameInputRef}
                                    type="text"
                                    placeholder="Nhập họ và tên..."
                                    className="w-full h-12 text-lg p-4 mb-1 border-[0.5px] border-black rounded-2xl" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                />
                                {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
                                <label className="block mb-4 mt-12 font-bold text-xl">Giới tính</label>
                                <select 
                                    className="w-full h-12 mb-3 text-xl border-[0.5px] border-black rounded-2xl px-4" 
                                    value={gender} 
                                    onChange={(e) => setGender(e.target.value)}
                                    >
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                                <label className="block mb-4 mt-12 font-bold text-xl">Lớp hiện tại</label>
                                <select className="w-full h-12 mb-3 text-xl border-[0.5px] border-black rounded-2xl px-4" 
                                    value={grade} onChange={(e) => setGrade(e.target.value)}>
                                    <option>Lớp 1</option>
                                    <option>Lớp 2</option>
                                    <option>Lớp 3</option>
                                    <option>Lớp 4</option>
                                    <option>Lớp 5</option>
                                </select>
                                <div className="flex justify-center mb-6">
                                    <button onClick={handleSubmit} className="w-[85%] h-16 bg-[#386DCC] text-white p-2 rounded-2xl mt-12 text-2xl font-bold">
                                        Ghi danh ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}
